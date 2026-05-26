#!/usr/bin/env python3
"""Produce transparent-background cutouts of the Gemini-generated menu items.

Walks   public/images/menu/items/gemini/<category>/<slug>.png
Writes  public/images/menu/items/gemini/<category>/cutouts/<slug>.{png,webp}

Same algorithm as scripts/process_mochi_donut_cutouts.py — sample the border
to estimate the cream studio backdrop, build a soft alpha mask from color
distance, then BFS-flood-fill from the image edge so we only remove the
background-connected region. A second halo-cleanup pass kills lingering soft
rectangular tints. Finally a tiny gaussian blur on the alpha removes jaggies.

The output is centered on the subject's opaque bbox and padded to 1.30× the
subject's longest side so all cards share visual proportions on the menu page.
"""
from __future__ import annotations

import sys
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter


SRC_ROOT = Path("public/images/menu/items/gemini")

# Same tunings that worked well for the mochi donut set. The cream backdrop is
# nearly identical across categories so the thresholds carry over cleanly.
BG_THRESHOLD = 18.0
FG_THRESHOLD = 48.0
HALO_ALPHA_CUTOFF = 0.55
FEATHER_RADIUS = 0.8
CROP_PADDING_FACTOR = 1.18  # tighter than donut's 1.30 — drinks/bowls fill the frame more


def estimate_bg_color(arr: np.ndarray) -> np.ndarray:
    h, w, _ = arr.shape
    pad = max(4, min(h, w) // 50)
    top = arr[:pad, :, :3].reshape(-1, 3)
    bottom = arr[-pad:, :, :3].reshape(-1, 3)
    left = arr[pad:-pad, :pad, :3].reshape(-1, 3)
    right = arr[pad:-pad, -pad:, :3].reshape(-1, 3)
    border = np.concatenate([top, bottom, left, right], axis=0)
    return np.median(border, axis=0)


def flood_fill_from_border(mask: np.ndarray) -> np.ndarray:
    h, w = mask.shape
    seen = np.zeros_like(mask, dtype=bool)
    q: deque[tuple[int, int]] = deque()
    for x in range(w):
        if mask[0, x]:
            seen[0, x] = True
            q.append((0, x))
        if mask[h - 1, x]:
            seen[h - 1, x] = True
            q.append((h - 1, x))
    for y in range(h):
        if mask[y, 0]:
            seen[y, 0] = True
            q.append((y, 0))
        if mask[y, w - 1]:
            seen[y, w - 1] = True
            q.append((y, w - 1))
    while q:
        y, x = q.popleft()
        for dy, dx in ((-1, 0), (1, 0), (0, -1), (0, 1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and not seen[ny, nx] and mask[ny, nx]:
                seen[ny, nx] = True
                q.append((ny, nx))
    return seen


def make_cutout(src_path: Path, out_png: Path, out_webp: Path) -> None:
    im = Image.open(src_path).convert("RGB")
    arr = np.array(im, dtype=np.uint8)

    bg = estimate_bg_color(arr)
    diff = arr.astype(np.float32) - bg
    dist = np.sqrt(np.sum(diff * diff, axis=2))

    likely_bg = dist < BG_THRESHOLD
    connected_bg = flood_fill_from_border(likely_bg)

    alpha = np.clip((dist - BG_THRESHOLD) / (FG_THRESHOLD - BG_THRESHOLD), 0.0, 1.0)
    alpha[connected_bg] = 0.0

    soft_bg = alpha < HALO_ALPHA_CUTOFF
    soft_connected_bg = flood_fill_from_border(soft_bg)
    alpha[soft_connected_bg] = 0.0

    alpha_u8 = (alpha * 255.0).astype(np.uint8)

    alpha_im = Image.fromarray(alpha_u8, mode="L").filter(
        ImageFilter.GaussianBlur(radius=FEATHER_RADIUS)
    )

    rgba = Image.fromarray(arr, mode="RGB").convert("RGBA")
    rgba.putalpha(alpha_im)

    opaque_mask = alpha_u8 > 200
    ys, xs = np.where(opaque_mask)
    if len(xs) > 0:
        x0, x1 = int(xs.min()), int(xs.max())
        y0, y1 = int(ys.min()), int(ys.max())
        subj_size = max(x1 - x0, y1 - y0)
        side = int(subj_size * CROP_PADDING_FACTOR)
        cx = (x0 + x1) // 2
        cy = (y0 + y1) // 2
        nx0 = cx - side // 2
        ny0 = cy - side // 2
        nx1 = nx0 + side
        ny1 = ny0 + side
        rgba = rgba.crop((nx0, ny0, nx1, ny1))

    rgba.save(out_png, format="PNG", optimize=True)
    rgba.save(out_webp, format="WEBP", quality=92, method=6)


def process_category(cat_dir: Path) -> tuple[int, int]:
    out_dir = cat_dir / "cutouts"
    out_dir.mkdir(parents=True, exist_ok=True)
    done = 0
    skipped = 0
    for src in sorted(cat_dir.glob("*.png")):
        out_png = out_dir / src.name
        out_webp = out_dir / (src.stem + ".webp")
        if out_png.exists() and out_webp.exists():
            skipped += 1
            continue
        make_cutout(src, out_png, out_webp)
        print(f"  {cat_dir.name}/{src.stem}: wrote cutout")
        done += 1
    return done, skipped


def main() -> int:
    if not SRC_ROOT.exists():
        print(f"missing source root: {SRC_ROOT}", file=sys.stderr)
        return 1
    arg_cats = sys.argv[1:]
    total_done = 0
    total_skip = 0
    for cat_dir in sorted(SRC_ROOT.iterdir()):
        if not cat_dir.is_dir():
            continue
        if cat_dir.name == "cutouts":
            continue
        if arg_cats and cat_dir.name not in arg_cats:
            continue
        done, skipped = process_category(cat_dir)
        total_done += done
        total_skip += skipped
    print(f"done. wrote {total_done} new cutouts (skipped {total_skip} existing).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
