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
        "donut-plain",
        "Plain",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "a glossy plain golden honey glaze, simple smooth amber-yellow finish "
         "like the board item labeled Plain, no sprinkles or crumbs."),
    ),
    Donut(
        "donut-cookies-and-creme",
        "Cookies & Creme",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "white vanilla cream glaze covered with fine black cookie crumbs, plus "
         "one small dark sandwich-cookie half as garnish, clearly "
         "cookies-and-cream."),
    ),
    Donut(
        "donut-nutella",
        "Nutella",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "glossy milk-chocolate hazelnut spread glaze, a few pale hazelnut wafer "
         "pieces and thin white drizzle, clearly Nutella/hazelnut chocolate."),
    ),
    Donut(
        "donut-injeolmi",
        "Injeolmi",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "tan roasted soybean powder coating over the entire ring, dusty matte "
         "kinako texture with a few tiny rice-cake crumbs, Korean injeolmi "
         "flavor."),
    ),
    Donut(
        "donut-ube",
        "Ube",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "vivid glossy purple ube glaze, rich violet color with a small white "
         "coconut drizzle accent."),
    ),
    Donut(
        "donut-ube-churro",
        "Ube Churro",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "clearly UBE PURPLE base glaze, deep violet-purple not pink and not "
         "strawberry-colored, dusted generously with tan cinnamon-sugar churro "
         "crystals so it reads as ube plus churro. Must stay visibly purple."),
    ),
    Donut(
        "donut-dark-chocolate",
        "Dark Chocolate",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "deep dark chocolate ganache glaze, nearly black-brown glossy finish "
         "with a few cocoa nibs and one yellow custard-like center accent."),
    ),
    Donut(
        "donut-vietnamese-coffee",
        "Vietnamese Coffee",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "caramel coffee-brown glaze with condensed-milk white dots/drizzle, a "
         "small biscuit wafer garnish, clearly Vietnamese coffee flavor."),
    ),
    Donut(
        "donut-yuzu",
        "Yuzu",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "bright glossy YUZU citrus glaze in pale lemon-yellow, with visible "
         "yellow yuzu peel zest curls and tiny citrus segments. Absolutely no "
         "rainbow sprinkles, no funfetti, no cereal; it must read as Japanese yuzu."),
    ),
    Donut(
        "donut-black-sesame",
        "Black Sesame",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "white glaze heavily speckled with black sesame seeds and charcoal-gray "
         "sesame crumbs, monochrome black sesame appearance."),
    ),
    Donut(
        "donut-matcha",
        "Matcha",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "vibrant jade-green matcha glaze, smooth glossy finish with fine matcha "
         "powder dusting and a small green leaf-like accent."),
    ),
    Donut(
        "donut-coconut",
        "Coconut",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "white coconut cream glaze covered with toasted coconut flakes, "
         "snowy/tropical coconut appearance."),
    ),
    Donut(
        "donut-yogurt-pebble",
        "Yogurt Pebble",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "white yogurt glaze covered with colorful Fruity Pebbles cereal pieces, "
         "bright rainbow cereal topping."),
    ),
    Donut(
        "donut-blueberry",
        "Blueberry",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "glossy deep purple-blue blueberry glaze with a few small whole "
         "blueberries as garnish, no black sesame."),
    ),
    Donut(
        "donut-churro",
        "Churro",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "golden cinnamon-sugar coating, matte sandy texture, no glaze color "
         "except warm cinnamon sugar."),
    ),
    Donut(
        "donut-guava-pineapple",
        "Guava Pineapple",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "pink guava glaze with tiny yellow pineapple bits and pastel sprinkles, "
         "tropical pink-yellow identity."),
    ),
    Donut(
        "donut-taro",
        "Taro",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "pale lavender taro glaze with small purple taro cream accents, softer "
         "lavender than ube."),
    ),
    Donut(
        "donut-milk-tea",
        "Milk Tea",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "cream beige milk-tea glaze with dark brown boba pearls or tapioca-like "
         "dots as garnish and thin chocolate drizzle."),
    ),
    Donut(
        "donut-peanut-butter",
        "Peanut Butter",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "glossy peanut-butter caramel-brown glaze with chopped peanut pieces "
         "and a small peanut-butter cup garnish, nutty look."),
    ),
    Donut(
        "donut-strawberry",
        "Strawberry",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "strong clearly STRAWBERRY pink glaze covering the entire ring, medium "
         "berry-pink/red-pink not white, with freeze-dried strawberry crumbs and "
         "a couple of tiny strawberry pieces. Must read strawberry immediately."),
    ),
    Donut(
        "donut-pistachio",
        "Pistachio",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "pale pistachio-green glaze with chopped pistachio crumbs and a few "
         "tiny red accent dots, nutty green flavor."),
    ),
    Donut(
        "donut-white-choco-raspberry",
        "White Choco Raspberry",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "white chocolate glaze with red raspberry powder speckles and one fresh "
         "raspberry garnish, white-red contrast."),
    ),
    Donut(
        "donut-mango",
        "Mango",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "bright golden mango glaze with tiny red and green tropical fruit "
         "accents, sunny yellow-orange color."),
    ),
    Donut(
        "donut-banana",
        "Banana",
        ("A single intact pon-de-ring mochi donut matching the printed menu board: "
         "pale yellow banana glaze with small banana-chip garnish pieces and "
         "cream drizzle, clearly banana flavor."),
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
