#!/usr/bin/env python3
"""Generate photorealistic individual mochi donut product photos via Gemini.

Scope: the 7 Mochi Donut items shown in the /menu gallery only. One image per
item, sequential calls (no concurrency — past concurrent runs hit SSL errors),
with a stricter retry prompt on failure.

PIL is used ONLY for resize + WEBP encoding of the bytes Gemini returns.
We never draw fake food locally.

Output: public/images/menu/items/gemini-mochi/<slug>.{png,webp}
Reads: GEMINI_API_KEY from the environment (do not print it).
"""

from __future__ import annotations

import io
import os
import sys
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Optional

from google import genai
from google.genai import types
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public/images/menu/items/gemini-mochi"
MODEL = "gemini-3.1-flash-image-preview"
TARGET_SIZE = 1024  # square output before WEBP encode

SHARED_RULES = """\
You are producing a single high-end PRODUCT PHOTO for a menu gallery card.

ABSOLUTE REQUIREMENTS:
- Photorealistic high-end food photography. NOT illustration, NOT cartoon, NOT 3D render, NOT vector art.
- Exactly ONE mochi donut (pon-de-ring style: 8 connected dough balls forming a ring with a center hole). No extra donuts, no halves, no duplicates, no bites taken out.
- The donut is centered in frame, fully visible, top-down or very slight 3/4 angle from above.
- Realistic chewy mochi dough texture with a glossy, freshly-applied glaze that looks edible and appetizing.
- Background: clean warm cream / off-white seamless backdrop (#FBF4E4-ish). No props, no plate text, no surfaces with patterns, no shadows of hands.
- Soft, even, bright studio light from upper-left. Gentle natural shadow under the donut. Magazine-quality.
- ZERO text, letters, numbers, words, logos, signage, labels, price tags, brand marks, watermarks anywhere in the image.
- No hands, no people, no utensils, no plates with writing, no packaging.
- The donut shape must be intact, symmetric, and not melted or deformed. Each of the 8 balls is similar in size. Exactly one center hole.

Format: square 1:1 framing. The donut should fill roughly 75% of the frame.
"""

RETRY_SUFFIX = """\

CRITICAL REPEAT — the prior attempt failed quality control. You MUST:
- Produce a single intact pon-de-ring mochi donut, 8 balls, one hole.
- No text, no logos, no captions, no watermark, no caption bars.
- Plain warm cream seamless background, nothing else in frame.
- Photorealistic — like a DSLR shot for a Mochinut menu.
"""

@dataclass(frozen=True)
class Donut:
    slug: str
    name: str
    flavor: str


DONUTS: list[Donut] = [
    Donut(
        "donut-original-glaze",
        "Original Glaze",
        ("A glossy pale vanilla sugar glaze coating the entire ring. The glaze is "
         "translucent ivory-cream, smooth, slightly drippy at the bottom edge of "
         "each ball, with a subtle sheen catching the light. The dough beneath "
         "shows a hint of warm golden color through the glaze."),
    ),
    Donut(
        "donut-chocolate",
        "Chocolate",
        ("A rich dark chocolate ganache glaze, deep cocoa brown, coating the "
         "entire ring with a smooth glossy finish and a few natural drips down "
         "the sides. Very slight gloss reflection along the top of each ball."),
    ),
    Donut(
        "donut-strawberry",
        "Strawberry",
        ("A soft pink strawberry glaze, slightly opaque, coating the entire ring "
         "with a glossy fresh-poured look. Sprinkled with a few tiny freeze-dried "
         "strawberry crumbs and a couple of subtle white sugar specks. The pink "
         "is natural strawberry pink, not neon."),
    ),
    Donut(
        "donut-matcha-green-tea",
        "Matcha Green Tea",
        ("A vibrant matcha green tea glaze in natural ceremonial-grade green "
         "color (warm jade, not neon), glossy and smooth, with a light dusting "
         "of fine matcha powder across the top of the ring."),
    ),
    Donut(
        "donut-ube-purple-yam",
        "Ube Purple Yam",
        ("A vivid ube purple yam glaze in natural Filipino-ube violet-purple "
         "(rich lavender-purple, not blue), glossy and smooth across the ring, "
         "with a small drizzle of white coconut cream stripes on top."),
    ),
    Donut(
        "donut-brown-sugar",
        "Brown Sugar",
        ("A warm caramel brown sugar glaze, glossy amber-brown like molten "
         "Okinawan kuromitsu, coating the ring with natural drips. A subtle "
         "sprinkle of fine brown sugar crystals on top. Warm caramel sheen, no "
         "boba pearls, no text, no cup."),
    ),
    Donut(
        "donut-seasonal-special",
        "Seasonal Special",
        ("A tropical limited-edition glaze: a soft golden mango-passionfruit "
         "glaze covering the ring, with a tasteful scattering of multicolored "
         "pastel sprinkles (pink, yellow, white) and a tiny edible tropical "
         "flower petal on one ball. Cheerful but tasteful, not cluttered."),
    ),
]


def build_prompt(d: Donut, retry: bool = False) -> str:
    body = (
        f"{SHARED_RULES}\n\n"
        f"Flavor: {d.name}\n"
        f"Glaze description: {d.flavor}\n"
    )
    if retry:
        body += RETRY_SUFFIX
    return body


def extract_image_bytes(response) -> Optional[bytes]:
    if not response.candidates:
        return None
    for part in response.candidates[0].content.parts:
        if part.inline_data and part.inline_data.data:
            return part.inline_data.data
    return None


def save_outputs(raw: bytes, slug: str) -> tuple[Path, Path]:
    """Save the raw PNG/JPEG from Gemini and a square 1024 WEBP next to it."""
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    src = Image.open(io.BytesIO(raw)).convert("RGB")
    # Center-crop to square if Gemini returned non-square (it usually does 1:1).
    w, h = src.size
    if w != h:
        side = min(w, h)
        left = (w - side) // 2
        top = (h - side) // 2
        src = src.crop((left, top, left + side, top + side))
    src = src.resize((TARGET_SIZE, TARGET_SIZE), Image.LANCZOS)

    png_path = OUT_DIR / f"{slug}.png"
    webp_path = OUT_DIR / f"{slug}.webp"
    src.save(png_path, "PNG", optimize=True)
    src.save(webp_path, "WEBP", quality=88, method=6)
    return png_path, webp_path


def generate_one(client, d: Donut, attempts: int = 3) -> bool:
    for i in range(1, attempts + 1):
        retry = i > 1
        try:
            print(f"[{d.slug}] attempt {i}/{attempts}{' (retry)' if retry else ''}", flush=True)
            response = client.models.generate_content(
                model=MODEL,
                contents=build_prompt(d, retry=retry),
                config=types.GenerateContentConfig(response_modalities=["IMAGE"]),
            )
            raw = extract_image_bytes(response)
            if not raw:
                print(f"[{d.slug}] no image returned on attempt {i}", flush=True)
                time.sleep(2)
                continue
            png_path, webp_path = save_outputs(raw, d.slug)
            print(
                f"[{d.slug}] saved {webp_path.relative_to(ROOT)} "
                f"({webp_path.stat().st_size:,} bytes)",
                flush=True,
            )
            return True
        except Exception as e:  # noqa: BLE001
            print(f"[{d.slug}] error on attempt {i}: {type(e).__name__}: {e}", flush=True)
            time.sleep(3)
    return False


def main() -> int:
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("GEMINI_API_KEY is not set in the environment.", file=sys.stderr)
        return 2

    client = genai.Client(api_key=api_key)
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    failures: list[str] = []
    for d in DONUTS:
        ok = generate_one(client, d)
        if not ok:
            failures.append(d.slug)

    print()
    print(f"Done. Output dir: {OUT_DIR.relative_to(ROOT)}")
    if failures:
        print(f"FAILED: {failures}")
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
