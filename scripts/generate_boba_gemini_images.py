#!/usr/bin/env python3
"""Generate photoreal product photos for the six canned Boba Milk Tea flavors.

Same pipeline and conventions as generate_menu_item_gemini_images.py:
square 1024 PNG + WEBP saved under public/images/menu/items/gemini/boba/,
then process_menu_item_cutouts.py turns them into transparent cutouts.

The visual spec mirrors the printed menu board (BOBA MILK TEA panel): a tall
slim clear can-style cup filled with the drink, black tapioca pearls settled
at the bottom, and a plain round white sticker label (blank — the board's
logo is replaced with an empty label because generated logo text comes out
as gibberish).

Usage:
    GEMINI_API_KEY=... python3 scripts/generate_boba_gemini_images.py
"""

from __future__ import annotations

import io
import os
import sys
import time
from dataclasses import dataclass
from pathlib import Path

from google import genai
from google.genai import types
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public/images/menu/items/gemini/boba"
MODEL = "gemini-3.1-flash-image-preview"
TARGET_SIZE = 1024

CAN_BASE = (
    "A single tall slim transparent can-shaped plastic cup (like a 16oz canned bubble tea) "
    "with a clear flat sealed top rim, completely filled with the drink, standing upright. "
    "A layer of glossy black tapioca boba pearls is settled in the bottom third of the can, "
    "clearly visible through the clear wall. A plain round white circular sticker label with "
    "NO text or logo sits centered on the front of the can. Light condensation on the plastic. "
)

SHARED_RULES = """\
You are producing a single high-end PRODUCT PHOTO for a menu gallery card.

ABSOLUTE REQUIREMENTS:
- Photorealistic high-end beverage photography. NOT illustration, NOT cartoon, NOT 3D render, NOT vector art.
- Exactly ONE subject, centered, fully visible, straight-on eye-level angle.
- Background: clean warm cream / off-white seamless backdrop (#FBF4E4-ish). No props, no other drinks, no straws, no fruit garnish, no signage.
- Soft, even, bright studio light from upper-left. Gentle natural shadow under the subject. Magazine-quality.
- ZERO text, letters, numbers, words, logos, signage, price tags, brand marks, watermarks anywhere in the image. The round white label must be completely BLANK.
- No hands, no people, no utensils.

Format: square 1:1 framing. The can should fill roughly 75-85% of the frame height.
"""

RETRY_SUFFIX = """\

CRITICAL REPEAT — the prior attempt failed quality control. You MUST:
- Produce exactly one intact upright can as described, nothing else in frame.
- The round white label must be blank — no text, no logo, no drawing.
- Plain warm cream seamless background.
- Photorealistic — like a DSLR shot for an upscale cafe menu.
"""


@dataclass(frozen=True)
class Flavor:
    slug: str
    name: str
    look: str


FLAVORS: list[Flavor] = [
    Flavor("boba-brown-sugar", "Brown Sugar Boba Milk Tea",
           ("The drink is creamy white milk dramatically marbled with thick dark caramel "
            "brown-sugar syrup streaks running down the inner walls in tiger stripes, "
            "blending amber-brown near the bottom where the black pearls sit.")),
    Flavor("boba-ube", "Ube Boba Milk Tea",
           ("The drink is a vivid pastel purple ube milk, soft lavender-violet with subtle "
            "lighter milky swirls, evenly colored, with black pearls at the bottom.")),
    Flavor("boba-milk-tea", "Classic Boba Milk Tea",
           ("The drink is classic Hong-Kong-style milk tea: smooth light creamy beige-tan, "
            "evenly colored, with black pearls at the bottom.")),
    Flavor("boba-coffee", "Coffee Boba Milk Tea",
           ("The drink is an iced coffee latte: light coffee-brown with slightly darker "
            "coffee marbling near the top, creamy, with black pearls at the bottom.")),
    Flavor("boba-thai-tea", "Thai Tea Boba Milk Tea",
           ("The drink is Thai iced tea: bright creamy orange, vivid and even, "
            "with black pearls at the bottom.")),
    Flavor("boba-matcha", "Matcha Boba Milk Tea",
           ("The drink is a matcha latte: soft pastel green, slightly deeper green swirls "
            "near the top over creamy milk, with black pearls at the bottom.")),
]


def build_prompt(f: Flavor, retry: bool) -> str:
    p = f"{SHARED_RULES}\nSUBJECT — {f.name}:\n{CAN_BASE}{f.look}"
    if retry:
        p += RETRY_SUFFIX
    return p


def extract_image_bytes(response) -> bytes | None:
    for cand in getattr(response, "candidates", None) or []:
        content = getattr(cand, "content", None)
        for part in getattr(content, "parts", None) or []:
            inline = getattr(part, "inline_data", None)
            if inline is not None and getattr(inline, "data", None):
                return inline.data
    return None


def save_outputs(raw: bytes, slug: str) -> Path:
    src = Image.open(io.BytesIO(raw)).convert("RGB")
    w, h = src.size
    side = min(w, h)
    src = src.crop(((w - side) // 2, (h - side) // 2, (w + side) // 2, (h + side) // 2))
    if side != TARGET_SIZE:
        src = src.resize((TARGET_SIZE, TARGET_SIZE), Image.LANCZOS)
    png_path = OUT_DIR / f"{slug}.png"
    webp_path = OUT_DIR / f"{slug}.webp"
    src.save(png_path, "PNG", optimize=True)
    src.save(webp_path, "WEBP", quality=88, method=6)
    return webp_path


def main() -> int:
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        # fall back to .env.local
        env = ROOT / ".env.local"
        if env.exists():
            for line in env.read_text().splitlines():
                if line.startswith("GEMINI_API_KEY="):
                    api_key = line.split("=", 1)[1].strip().strip('"').strip("'")
    if not api_key:
        print("GEMINI_API_KEY not set", file=sys.stderr)
        return 2

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    client = genai.Client(api_key=api_key)
    failed: list[str] = []
    for f in FLAVORS:
        png = OUT_DIR / f"{f.slug}.png"
        if png.exists() and png.stat().st_size > 5000:
            print(f"[{f.slug}] skip (exists)")
            continue
        ok = False
        for i in range(1, 4):
            try:
                print(f"[{f.slug}] attempt {i}/3", flush=True)
                resp = client.models.generate_content(
                    model=MODEL,
                    contents=build_prompt(f, retry=i > 1),
                    config=types.GenerateContentConfig(response_modalities=["IMAGE"]),
                )
                raw = extract_image_bytes(resp)
                if not raw:
                    time.sleep(2)
                    continue
                out = save_outputs(raw, f.slug)
                print(f"[{f.slug}] saved {out.relative_to(ROOT)} ({out.stat().st_size:,} bytes)")
                ok = True
                break
            except Exception as e:  # noqa: BLE001
                print(f"[{f.slug}] error: {type(e).__name__}: {e}", flush=True)
                time.sleep(3)
        if not ok:
            failed.append(f.slug)
        time.sleep(1)
    if failed:
        print("FAILED:", failed)
        return 1
    print("all boba images generated.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
