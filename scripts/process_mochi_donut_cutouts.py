#!/usr/bin/env python3
"""Produce transparent-background cutouts of the Gemini-generated mochi donuts.

Input:   public/images/menu/items/gemini-mochi/<name>.png
Output:  public/images/menu/items/gemini-mochi/cutouts/<name>.png (and .webp)

The source images all share the same cream studio background and a centered
donut. We sample the border to estimate the background color, build a soft
alpha mask from color distance, then BFS-flood-fill from the image border to
guarantee that only the background-connected region (including the cream
showing through the donut's center hole) becomes transparent. A small
gaussian blur on the alpha softens the rim so the cutout doesn't show jagged
halos against the page's warm background.
"""
from __future__ import annotations

import sys
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter


SRC_DIR = Path("public/images/menu/items/gemini-mochi")
OUT_DIR = SRC_DIR / "cutouts"

try:
    from generate_mochi_donut_gemini_images import DONUTS as GENERATED_DONUTS

    DONUTS = [d.slug for d in GENERATED_DONUTS]
except Exception:  # noqa: BLE001
    # Keep the processor usable even if the generator dependencies are missing.
    DONUTS = [
        "donut-plain",
        "donut-cookies-and-creme",
        "donut-nutella",
        "donut-injeolmi",
        "donut-ube",
        "donut-ube-churro",
        "donut-dark-chocolate",
        "donut-vietnamese-coffee",
        "donut-yuzu",
        "donut-black-sesame",
        "donut-matcha",
        "donut-coconut",
        "donut-yogurt-pebble",
        "donut-blueberry",
        "donut-churro",
        "donut-guava-pineapple",
        "donut-taro",
        "donut-milk-tea",
        "donut-peanut-butter",
        "donut-strawberry",
        "donut-pistachio",
        "donut-white-choco-raspberry",
        "donut-mango",
        "donut-banana",
    ]

# Distance from the estimated cream background, in 0..~441 (sqrt(3*255^2)) units.
BG_THRESHOLD = 18.0   # closer than this → definitely background
FG_THRESHOLD = 48.0   # farther than this → definitely donut; in-between = soft rim
# Second-pass cleanup: any pixel whose initial alpha is below this fraction AND is
# 4-connected to the image edge is treated as part of the studio backdrop, not the
# donut. This catches faint variations in the cream backdrop (paper fold, light
# falloff) that would otherwise show as a soft rectangular tint around the cutout.
HALO_ALPHA_CUTOFF = 0.55
FEATHER_RADIUS = 0.8  # tiny blur on alpha so edges aren't aliased


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
    """Return only the True pixels of `mask` that are 4-connected to an image edge."""
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

    # Linear ramp from BG_THRESHOLD..FG_THRESHOLD, then force the
    # border-connected background to fully transparent so we never punch a
    # hole inside the donut just because its glaze briefly matches the cream.
    alpha = np.clip((dist - BG_THRESHOLD) / (FG_THRESHOLD - BG_THRESHOLD), 0.0, 1.0)
    alpha[connected_bg] = 0.0

    # Halo-removal pass: anything still mostly-transparent (alpha < HALO_ALPHA_CUTOFF)
    # and 4-connected to a border pixel is studio backdrop, not the donut's soft rim.
    soft_bg = alpha < HALO_ALPHA_CUTOFF
    soft_connected_bg = flood_fill_from_border(soft_bg)
    alpha[soft_connected_bg] = 0.0

    alpha_u8 = (alpha * 255.0).astype(np.uint8)

    alpha_im = Image.fromarray(alpha_u8, mode="L").filter(
        ImageFilter.GaussianBlur(radius=FEATHER_RADIUS)
    )

    rgba = Image.fromarray(arr, mode="RGB").convert("RGBA")
    rgba.putalpha(alpha_im)

    # Square-crop centered on the donut, sized to a fixed multiple of the donut
    # diameter so all seven cutouts have a consistent on-page size. We use the
    # alpha mask's "mostly opaque" bbox (not getbbox(), which would expand to
    # include the natural drop shadow) so size is driven by the donut itself.
    opaque_mask = alpha_u8 > 200
    ys, xs = np.where(opaque_mask)
    if len(xs) > 0:
        x0, x1 = int(xs.min()), int(xs.max())
        y0, y1 = int(ys.min()), int(ys.max())
        donut_size = max(x1 - x0, y1 - y0)
        # 1.30× the donut diameter → leaves room for the natural drop shadow
        # below/right. PIL.Image.crop fills out-of-bounds regions with
        # transparent pixels (in RGBA mode), so even if the donut's natural
        # shadow extends to the source edge we still get a fully transparent
        # rim on the output.
        side = int(donut_size * 1.30)
        cx = (x0 + x1) // 2
        cy = (y0 + y1) // 2
        nx0 = cx - side // 2
        ny0 = cy - side // 2
        nx1 = nx0 + side
        ny1 = ny0 + side
        rgba = rgba.crop((nx0, ny0, nx1, ny1))

    rgba.save(out_png, format="PNG", optimize=True)
    rgba.save(out_webp, format="WEBP", quality=92, method=6)


def main() -> int:
    if not SRC_DIR.exists():
        print(f"missing source dir: {SRC_DIR}", file=sys.stderr)
        return 1
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for name in DONUTS:
        src = SRC_DIR / f"{name}.png"
        if not src.exists():
            print(f"missing source image: {src}", file=sys.stderr)
            return 1
        out_png = OUT_DIR / f"{name}.png"
        out_webp = OUT_DIR / f"{name}.webp"
        make_cutout(src, out_png, out_webp)
        print(f"  {name}: wrote {out_png.name} + {out_webp.name}")
    print(f"done → {OUT_DIR}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
