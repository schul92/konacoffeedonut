#!/usr/bin/env python3
"""Photographic grade for the real mochi-donut studio photos — makes them look
fresher and more appetizing WITHOUT altering the donut at all (it only re-grades
the existing pixels: white balance, contrast, saturation, gloss/clarity,
sharpening). No AI, so shape, segment count and every topping stay byte-for-byte
in place.

Input:   ~/Desktop/HAWAII_MENU/FINAL_MENUS/CLOVER/MOCHINUT/mochi_<stem>.jpg
Output:  scripts/.mochi_enhanced/mochi_<stem>.jpg  (same names, so
         process_real_mochi_cutouts.py re-cuts them via MOCHI_SRC_DIR)
"""
from __future__ import annotations

import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
SRC_DIR = Path.home() / "Desktop/HAWAII_MENU/FINAL_MENUS/CLOVER/MOCHINUT"
OUT_DIR = ROOT / "scripts/.mochi_enhanced"

STEMS = [
    "plain", "cookies_creme", "nutella", "injeolmi", "ube", "ube_churro",
    "dark_chocolate", "vietnamese_coffee", "yuzu", "black_sesame", "matcha",
    "coconut", "yogurt_pebble", "blueberry", "churro", "guava_pineapple",
    "taro", "milk_tea", "peanut_butter", "strawberry", "pistachio",
    "white_choco_raspberry", "mango", "banana",
]


def grade(im: Image.Image) -> Image.Image:
    im = im.convert("RGB")
    # 1) gentle warm white balance — pushes glaze toward fresh/golden.
    a = np.asarray(im).astype(np.float32)
    a[..., 0] *= 1.035   # lift reds
    a[..., 2] *= 0.985   # ease blues
    im = Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))
    # 2) contrast S-curve + a touch of brightness so glaze pops off white.
    im = ImageEnhance.Contrast(im).enhance(1.12)
    im = ImageEnhance.Brightness(im).enhance(1.03)
    # 3) vibrance / saturation — richer flavor color.
    im = ImageEnhance.Color(im).enhance(1.20)
    # 4) clarity + gloss via local-contrast unsharp, then a light global sharpen.
    im = im.filter(ImageFilter.UnsharpMask(radius=3, percent=70, threshold=2))
    im = ImageEnhance.Sharpness(im).enhance(1.15)
    return im


def main() -> int:
    only = sys.argv[1:] or None
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for stem in STEMS:
        if only and stem not in only:
            continue
        src = SRC_DIR / f"mochi_{stem}.jpg"
        if not src.exists():
            print(f"missing: {src.name}", file=sys.stderr)
            return 1
        out = grade(Image.open(src))
        dst = OUT_DIR / f"mochi_{stem}.jpg"
        out.save(dst, "JPEG", quality=95)
        print(f"  graded {stem}")
    print(f"done -> {OUT_DIR.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
