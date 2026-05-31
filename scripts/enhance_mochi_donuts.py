#!/usr/bin/env python3
"""Retouch the real mochi-donut studio photos with Gemini (Nano Banana) so they
look more appetizing — WITHOUT changing the donut itself.

Input:   ~/Desktop/HAWAII_MENU/FINAL_MENUS/CLOVER/MOCHINUT/mochi_<stem>.jpg
Output:  scripts/.mochi_enhanced/mochi_<stem>.jpg   (same filenames, so
         process_real_mochi_cutouts.py can re-cut them with MOCHI_SRC_DIR)

The prompt is a tight retouch instruction: improve lighting, gloss, color
richness and freshness only. Shape, segment count, every topping, garnish and
its position must stay identical, and the background stays plain white. Pass
stems as args to process a subset (good for eyeballing before the full run).
"""
from __future__ import annotations

import io
import os
import sys
import time
from pathlib import Path

from PIL import Image
from google import genai
from google.genai import types

ROOT = Path(__file__).resolve().parents[1]
SRC_DIR = Path.home() / "Desktop/HAWAII_MENU/FINAL_MENUS/CLOVER/MOCHINUT"
OUT_DIR = ROOT / "scripts/.mochi_enhanced"
MODEL = "gemini-3.1-flash-image-preview"

STEMS = [
    "plain", "cookies_creme", "nutella", "injeolmi", "ube", "ube_churro",
    "dark_chocolate", "vietnamese_coffee", "yuzu", "black_sesame", "matcha",
    "coconut", "yogurt_pebble", "blueberry", "churro", "guava_pineapple",
    "taro", "milk_tea", "peanut_butter", "strawberry", "pistachio",
    "white_choco_raspberry", "mango", "banana",
]

PROMPT = (
    "This is a real studio product photo of a single mochi pon-de-ring donut "
    "(a ring of connected dough balls) on a plain pure-white background. "
    "Retouch it into a mouth-watering, premium menu food photo. "
    "Make it look fresh and delicious: richer and more vibrant glaze color, "
    "appetizing glossy sheen on the glaze, soft natural studio lighting with "
    "gentle highlights and a clean soft shadow, crisp sharp focus, subtle "
    "moist freshness. "
    "ABSOLUTELY CRITICAL — keep the EXACT SAME donut, do not redesign it: "
    "identical shape and silhouette, identical number of dough balls, "
    "identical flavor and glaze color identity, and every topping/garnish "
    "(sprinkles, cookies, nuts, drizzle, dusting, fruit, chocolate pieces) "
    "must stay the SAME type, SAME amount and SAME position. "
    "Do NOT add, remove, move, recolor or restyle any topping or the donut. "
    "Do NOT add text, logos or props. Keep the background plain pure white. "
    "Keep the same camera angle (top-down) and the same framing. "
    "Output only the retouched photograph."
)


def extract_image_bytes(response):
    if not response.candidates:
        return None
    for part in response.candidates[0].content.parts:
        if part.inline_data and part.inline_data.data:
            return part.inline_data.data
    return None


def enhance_one(client, stem: str, attempts: int = 3) -> bool:
    src = SRC_DIR / f"mochi_{stem}.jpg"
    if not src.exists():
        print(f"[{stem}] missing source {src.name}", file=sys.stderr)
        return False
    img = Image.open(src).convert("RGB")
    for i in range(1, attempts + 1):
        try:
            print(f"[{stem}] attempt {i}/{attempts}", flush=True)
            response = client.models.generate_content(
                model=MODEL,
                contents=[PROMPT, img],
                config=types.GenerateContentConfig(response_modalities=["IMAGE"]),
            )
            raw = extract_image_bytes(response)
            if not raw:
                print(f"[{stem}] no image returned", flush=True)
                time.sleep(2)
                continue
            out = Image.open(io.BytesIO(raw)).convert("RGB")
            OUT_DIR.mkdir(parents=True, exist_ok=True)
            dst = OUT_DIR / f"mochi_{stem}.jpg"
            out.save(dst, "JPEG", quality=95)
            print(f"[{stem}] saved {dst.relative_to(ROOT)} ({out.size})", flush=True)
            return True
        except Exception as e:  # noqa: BLE001
            print(f"[{stem}] error: {type(e).__name__}: {e}", flush=True)
            time.sleep(3)
    return False


def main() -> int:
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("GEMINI_API_KEY is not set", file=sys.stderr)
        return 2
    only = sys.argv[1:] or None
    client = genai.Client(api_key=api_key)
    failures = []
    for stem in STEMS:
        if only and stem not in only:
            continue
        if not enhance_one(client, stem):
            failures.append(stem)
    print()
    print(f"done -> {OUT_DIR.relative_to(ROOT)}")
    if failures:
        print(f"FAILED: {failures}")
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
