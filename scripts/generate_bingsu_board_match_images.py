#!/usr/bin/env python3
"""Regenerate the bingsu product shots to match the printed menu board.

The board (public/images/menu/bingsu.webp) shows two distinct product styles:

  MILK SHAVED BINGSU — a dome of ultra-fine white milk-snow served in a shiny
  gold/brass footed pedestal bowl, each flavor with its signature topping.

  HAWAIIAN BINGSU — a tall cone-shaped mound of shaved ice served on a square
  cream compostable paper tray, striped with fruit syrups.

The earlier Gemini set ignored both signatures, so these prompts describe the
board photos closely. Slugs overwrite the existing files in
  gemini/bingsu/  (7 milk flavors — site "Milk Shaved Bingsu" section)
  gemini/acai/    (5 Hawaiian bingsu — site "Hawaiian Bingsu & Açaí" section)
then process_menu_item_cutouts.py rebuilds the cutouts.

Usage:  python3 scripts/generate_bingsu_board_match_images.py
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
OUT_ROOT = ROOT / "public/images/menu/items/gemini"
MODEL = "gemini-3.1-flash-image-preview"
TARGET_SIZE = 1024

SHARED_RULES = """\
You are producing a single high-end PRODUCT PHOTO for a menu gallery card,
closely matching an existing printed menu-board photograph.

ABSOLUTE REQUIREMENTS:
- Photorealistic high-end dessert photography. NOT illustration, NOT cartoon, NOT 3D render.
- Exactly ONE dessert, centered, fully visible, shot straight-on at eye level with a very slight downward angle.
- Background: clean warm cream / off-white seamless backdrop (#FBF4E4-ish). No props, no spoons, no other food, no signage.
- Soft, even, bright studio light. Gentle natural shadow under the subject. Magazine-quality.
- ZERO text, letters, numbers, logos, labels, watermarks anywhere.
- No hands, no people.

Format: square 1:1 framing. The dessert should fill roughly 70-80% of the frame.
"""

MILK_BASE = (
    "The dessert is Korean milk shaved bingsu served in a SHINY GOLD BRASS BOWL with a "
    "short pedestal foot (a footed metal dessert bowl, warm gold tone, softly reflective). "
    "Inside the bowl sits a neat rounded dome of ultra-finely shaved white milk snow with "
    "a delicate powdery texture. "
)

HAWAIIAN_BASE = (
    "The dessert is Hawaiian shaved ice: a TALL CONE-SHAPED mound of finely shaved ice "
    "standing on a SQUARE CREAM-COLORED compostable paper tray with low sides. The cone "
    "is steep and pointed, like a little mountain. "
)

RETRY_SUFFIX = """\

CRITICAL REPEAT — the prior attempt failed quality control. You MUST follow the
serving-vessel spec exactly (gold pedestal bowl for milk bingsu / square cream
paper tray + cone shape for Hawaiian), one subject only, no text, cream backdrop.
"""


@dataclass(frozen=True)
class Item:
    category: str
    slug: str
    name: str
    look: str


ITEMS: list[Item] = [
    # ---------- Milk shaved bingsu (gold pedestal bowl) ----------
    Item("bingsu", "bingsu-azuki-bean", "Azuki Bean Bingsu",
         MILK_BASE + ("Topping: a generous glossy mound of sweet dark-red azuki red beans "
                      "crowning the snow dome, with 3-4 soft white mochi cubes placed on top.")),
    Item("bingsu", "bingsu-strawberry", "Strawberry Bingsu",
         MILK_BASE + ("Topping: the dome is completely covered with rows of fresh whole ripe "
                      "strawberries stacked into a peak, finished with a soft swirl of whipped "
                      "cream right on top.")),
    Item("bingsu", "bingsu-pineapple", "Pineapple Bingsu",
         MILK_BASE + ("Topping: neat bright-yellow pineapple cubes arranged over the top of the "
                      "snow dome, a few white mochi cubes at the peak and a single small mint leaf.")),
    Item("bingsu", "bingsu-mango", "Mango Bingsu",
         MILK_BASE + ("Topping: the dome covered in neat rows of ripe golden mango cubes, "
                      "a few white mochi cubes at the crown and one small mint leaf.")),
    Item("bingsu", "bingsu-ube", "Ube Bingsu",
         MILK_BASE + ("The dome itself is coated in a smooth pastel-purple ube cream layer, "
                      "topped at the peak with a small mound of dark azuki beans and a couple of "
                      "white mochi cubes.")),
    Item("bingsu", "bingsu-kona-coffee", "Kona Coffee Bingsu",
         MILK_BASE + ("The dome is drenched in rich brown Kona coffee espresso so the shaved snow "
                      "shows fine vertical ridges of coffee-brown color, topped with a tall swirl "
                      "of whipped cream.")),
    Item("bingsu", "bingsu-greentea", "Green Tea Bingsu",
         MILK_BASE + ("The dome is dusted all over with vivid green matcha powder, topped with a "
                      "soft swirl of whipped cream and 3 small round white mochi balls.")),
    # ---------- Hawaiian bingsu (cone on square paper tray) ----------
    Item("acai", "bingsu-waikiki-rainbow", "Waikiki Rainbow Hawaiian Bingsu",
         HAWAIIAN_BASE + ("The cone is striped in bright rainbow syrup bands — red strawberry at the "
                          "top, golden mango in the middle, blue coconut at the base — colors gently "
                          "bleeding into each other. A few white mochi cubes rest on the tray at the base.")),
    Item("acai", "bingsu-paradise-lilikoi", "Paradise Lilikoi Hawaiian Bingsu",
         HAWAIIAN_BASE + ("The cone is drenched in red strawberry syrup on one side and golden "
                          "passion-fruit syrup on the other, with yellow popping boba pearls scattered "
                          "on the tray and half a passion fruit resting against the cone.")),
    Item("acai", "bingsu-volcano-island", "Volcano Island Hawaiian Bingsu",
         HAWAIIAN_BASE + ("The cone is covered in deep purple-red açaí berry syrup flowing down from "
                          "the peak like lava, with white yogurt drizzle streaks, fresh blueberries "
                          "and white mochi cubes on the tray at the base.")),
    Item("acai", "bingsu-coco-head", "Coco Head Hawaiian Bingsu",
         HAWAIIAN_BASE + ("The cone is soaked golden mango-coconut yellow with a bright red strawberry "
                          "syrup cap at the very top, shredded coconut and white mochi cubes on the "
                          "tray at the base.")),
    Item("acai", "bingsu-tropical-jungle", "Tropical Jungle Hawaiian Bingsu",
         HAWAIIAN_BASE + ("The whole cone is saturated golden mango-pineapple yellow, topped with "
                          "small mango cubes, with yellow popping boba pearls scattered on the tray.")),
]


def build_prompt(it: Item, retry: bool) -> str:
    p = f"{SHARED_RULES}\nSUBJECT — {it.name}:\n{it.look}"
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


def save_outputs(raw: bytes, out_dir: Path, slug: str) -> Path:
    src = Image.open(io.BytesIO(raw)).convert("RGB")
    w, h = src.size
    side = min(w, h)
    src = src.crop(((w - side) // 2, (h - side) // 2, (w + side) // 2, (h + side) // 2))
    if side != TARGET_SIZE:
        src = src.resize((TARGET_SIZE, TARGET_SIZE), Image.LANCZOS)
    png_path = out_dir / f"{slug}.png"
    webp_path = out_dir / f"{slug}.webp"
    src.save(png_path, "PNG", optimize=True)
    src.save(webp_path, "WEBP", quality=88, method=6)
    return webp_path


def main() -> int:
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        env = ROOT / ".env.local"
        if env.exists():
            for line in env.read_text().splitlines():
                if line.startswith("GEMINI_API_KEY="):
                    api_key = line.split("=", 1)[1].strip().strip('"').strip("'")
    if not api_key:
        print("GEMINI_API_KEY not set", file=sys.stderr)
        return 2

    client = genai.Client(api_key=api_key)
    failed: list[str] = []
    for it in ITEMS:
        out_dir = OUT_ROOT / it.category
        out_dir.mkdir(parents=True, exist_ok=True)
        ok = False
        for i in range(1, 4):
            try:
                print(f"[{it.category}/{it.slug}] attempt {i}/3", flush=True)
                resp = client.models.generate_content(
                    model=MODEL,
                    contents=build_prompt(it, retry=i > 1),
                    config=types.GenerateContentConfig(response_modalities=["IMAGE"]),
                )
                raw = extract_image_bytes(resp)
                if not raw:
                    time.sleep(2)
                    continue
                out = save_outputs(raw, out_dir, it.slug)
                print(f"[{it.category}/{it.slug}] saved ({out.stat().st_size:,} bytes)")
                ok = True
                break
            except Exception as e:  # noqa: BLE001
                print(f"[{it.category}/{it.slug}] error: {type(e).__name__}: {e}", flush=True)
                time.sleep(3)
        if not ok:
            failed.append(it.slug)
        time.sleep(1)
    if failed:
        print("FAILED:", failed)
        return 1
    print("all bingsu images regenerated.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
