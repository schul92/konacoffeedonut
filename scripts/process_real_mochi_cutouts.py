#!/usr/bin/env python3
"""Cut the background out of the REAL mochi-donut studio photos and emit
transparent, square, consistently-sized cutouts for the /menu gallery.

Input:   ~/Desktop/HAWAII_MENU/FINAL_MENUS/CLOVER/MOCHINUT/mochi_<flavor>.jpg
Output:  public/images/menu/items/mochinut/cutouts/<slug>.webp (+ .png)

The photos are real product shots on a white / light-grey studio sweep with a
soft drop shadow. rembg (u2net) handles segmentation far better than a colour-
distance flood fill here because several donuts carry real toppings (Oreo,
Ferrero Rocher, Lotus biscuit, raspberry, wafer) that a colour key would clip.
After matting we crop to the donut's own bounding box, pad, square it, and
resize so every flavour renders at the same on-page scale.
"""
from __future__ import annotations

import os
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter
from rembg import remove, new_session

# Source defaults to the Desktop studio photos, but can be pointed at the
# Gemini-retouched copies via MOCHI_SRC_DIR (they keep the same mochi_<stem>.jpg
# filenames so the rest of the pipeline is unchanged).
SRC_DIR = Path(os.environ.get("MOCHI_SRC_DIR") or (Path.home() / "Desktop/HAWAII_MENU/FINAL_MENUS/CLOVER/MOCHINUT"))
OUT_DIR = Path("public/images/menu/items/mochinut/cutouts")

# source filename stem (without the mochi_ prefix) -> output slug used by menuItems.ts
FLAVORS = {
    "plain": "donut-plain",
    "cookies_creme": "donut-cookies-and-creme",
    "nutella": "donut-nutella",
    "injeolmi": "donut-injeolmi",
    "ube": "donut-ube",
    "ube_churro": "donut-ube-churro",
    "dark_chocolate": "donut-dark-chocolate",
    "vietnamese_coffee": "donut-vietnamese-coffee",
    "yuzu": "donut-yuzu",
    "black_sesame": "donut-black-sesame",
    "matcha": "donut-matcha",
    "coconut": "donut-coconut",
    "yogurt_pebble": "donut-yogurt-pebble",
    "blueberry": "donut-blueberry",
    "churro": "donut-churro",
    "guava_pineapple": "donut-guava-pineapple",
    "taro": "donut-taro",
    "milk_tea": "donut-milk-tea",
    "peanut_butter": "donut-peanut-butter",
    "strawberry": "donut-strawberry",
    "pistachio": "donut-pistachio",
    "white_choco_raspberry": "donut-white-choco-raspberry",
    "mango": "donut-mango",
    "banana": "donut-banana",
}

OUT_SIZE = 800          # final square canvas, px
PAD_FRAC = 0.06         # transparent margin around the donut, as fraction of side
ALPHA_OPAQUE = 40       # alpha above this counts as "real subject" for the bbox


def cutout(src: Path, session) -> Image.Image:
    src_im = Image.open(src).convert("RGBA")
    # alpha_matting gives a cleaner, less haloed edge on soft studio shadows.
    cut = remove(
        src_im,
        session=session,
        alpha_matting=True,
        alpha_matting_foreground_threshold=240,
        alpha_matting_background_threshold=15,
        alpha_matting_erode_size=8,
    )

    arr = np.array(cut)
    alpha = arr[:, :, 3]

    # Drop the soft drop-shadow: keep only reasonably-opaque subject pixels for
    # the crop bbox so sizing is driven by the donut, not its shadow.
    ys, xs = np.where(alpha > ALPHA_OPAQUE)
    if len(xs) == 0:
        return cut
    x0, x1 = int(xs.min()), int(xs.max())
    y0, y1 = int(ys.min()), int(ys.max())
    subject = cut.crop((x0, y0, x1 + 1, y1 + 1))

    # Square canvas with padding, donut centered.
    w, h = subject.size
    side = int(max(w, h) * (1 + 2 * PAD_FRAC))
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    canvas.paste(subject, ((side - w) // 2, (side - h) // 2), subject)

    # Tiny feather so the matte edge isn't aliased against the warm page bg.
    r, g, b, a = canvas.split()
    a = a.filter(ImageFilter.GaussianBlur(radius=0.6))
    canvas = Image.merge("RGBA", (r, g, b, a))

    return canvas.resize((OUT_SIZE, OUT_SIZE), Image.LANCZOS)


def main() -> int:
    only = sys.argv[1:] or None  # optionally pass stems to process a subset
    if not SRC_DIR.exists():
        print(f"missing source dir: {SRC_DIR}", file=sys.stderr)
        return 1
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    session = new_session("u2net")

    for stem, slug in FLAVORS.items():
        if only and stem not in only:
            continue
        src = SRC_DIR / f"mochi_{stem}.jpg"
        if not src.exists():
            print(f"missing: {src.name}", file=sys.stderr)
            return 1
        out_png = OUT_DIR / f"{slug}.png"
        out_webp = OUT_DIR / f"{slug}.webp"
        im = cutout(src, session)
        im.save(out_png, format="PNG", optimize=True)
        im.save(out_webp, format="WEBP", quality=90, method=6)
        print(f"  {stem:>22} -> {slug}.webp")

    print(f"done -> {OUT_DIR}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
