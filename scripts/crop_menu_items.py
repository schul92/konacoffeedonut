#!/usr/bin/env python3
"""Crop individual item photos out of the composite menu boards.

Sources:
  - public/images/menu/bingsu-menu-full.png  (3854 x 2160)
    Three columns: MILK SHAVED BINGSU (9 items), HAWAIIAN BINGSU (5),
    ACAI BOWL (4-5 items). Each item has a small product photo + label.

Outputs are written as WebP (preferred) plus a .png fallback to
  public/images/menu/items/

Coordinates are hand-tuned from the source image at its native 3854 x 2160
resolution; if the source board changes, re-tune these.
"""

from __future__ import annotations

import os
from pathlib import Path

try:
    from PIL import Image
except ImportError as exc:  # pragma: no cover
    raise SystemExit(
        "Pillow is required: install with `pip install Pillow`"
    ) from exc

ROOT = Path(__file__).resolve().parent.parent
SRC_BINGSU = ROOT / "public/images/menu/bingsu-menu-full.png"
OUT_DIR = ROOT / "public/images/menu/items"
OUT_DIR.mkdir(parents=True, exist_ok=True)

# (slug, center_x, center_y, half_size)  — square crops centered on each photo.
# Tuned for the 3854x2160 bingsu board.
BINGSU_CROPS: list[tuple[str, int, int, int]] = [
    # Milk shaved bingsu — 3x3 grid in left column
    ("bingsu-azuki-bean",   280, 680, 180),
    ("bingsu-strawberry",   660, 680, 180),
    ("bingsu-pineapple",   1040, 680, 180),
    ("bingsu-mango",        280, 1160, 180),
    ("bingsu-ube",          660, 1160, 180),
    ("bingsu-injeolmi",    1040, 1160, 180),
    ("bingsu-greentea",     280, 1640, 180),
    ("bingsu-black-sesame", 660, 1640, 180),
    ("bingsu-kona-coffee", 1040, 1640, 180),

    # Hawaiian bingsu — middle column, 2x2 + 1
    ("bingsu-waikiki-rainbow",  1700, 620, 230),
    ("bingsu-paradise-lilikoi", 2220, 620, 230),
    ("bingsu-volcano-island",   1700, 1220, 230),
    ("bingsu-coco-head",        2220, 1220, 230),
    ("bingsu-tropical-jungle",  1700, 1760, 230),

    # Acai bowl — right column
    ("acai-oahu",      2820, 620, 230),
    ("acai-paradise",  3380, 620, 230),
    ("acai-colada",    2820, 1180, 230),
    ("acai-papaya",    2820, 1720, 200),
]


def crop_box(img: Image.Image, cx: int, cy: int, half: int) -> Image.Image:
    w, h = img.size
    left = max(0, cx - half)
    upper = max(0, cy - half)
    right = min(w, cx + half)
    lower = min(h, cy + half)
    return img.crop((left, upper, right, lower))


def main() -> None:
    if not SRC_BINGSU.exists():
        raise SystemExit(f"Source not found: {SRC_BINGSU}")

    src = Image.open(SRC_BINGSU).convert("RGBA")
    print(f"Loaded {SRC_BINGSU.name}: {src.size}")

    written = 0
    for slug, cx, cy, half in BINGSU_CROPS:
        tile = crop_box(src, cx, cy, half).convert("RGB")
        # Resize to a consistent 600x600 target so the gallery renders evenly.
        tile = tile.resize((600, 600), Image.LANCZOS)

        webp = OUT_DIR / f"{slug}.webp"
        png = OUT_DIR / f"{slug}.png"
        tile.save(webp, "WEBP", quality=88, method=6)
        tile.save(png, "PNG", optimize=True)
        written += 1
        print(f"  wrote {webp.relative_to(ROOT)}")

    print(f"\nDone — wrote {written} item crops to {OUT_DIR.relative_to(ROOT)}/")


if __name__ == "__main__":
    main()
