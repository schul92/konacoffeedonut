#!/usr/bin/env python3
"""Generate a 1200x675 blog hero image via Gemini.

Usage: python3 scripts/generate_blog_hero.py <slug> "<prompt>"
Saves public/images/blog/<slug>.jpeg
"""
from __future__ import annotations

import io
import os
import sys
import time
from pathlib import Path

from google import genai
from google.genai import types
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent

GUARD = (
    " Photorealistic, magazine-quality food/beverage photography. "
    "NO text, NO letters, NO logos, NO watermarks, NO people, NO hands."
)


def main() -> int:
    if len(sys.argv) < 3:
        print("usage: generate_blog_hero.py <slug> \"<prompt>\"", file=sys.stderr)
        return 2
    slug, prompt = sys.argv[1], sys.argv[2] + GUARD

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        for line in (ROOT / ".env.local").read_text().splitlines():
            if line.startswith("GEMINI_API_KEY="):
                api_key = line.split("=", 1)[1].strip().strip('"').strip("'")
    if not api_key:
        print("GEMINI_API_KEY not found", file=sys.stderr)
        return 2

    client = genai.Client(api_key=api_key)
    out = ROOT / f"public/images/blog/{slug}.jpeg"
    for attempt in range(1, 4):
        try:
            r = client.models.generate_content(
                model="gemini-3.1-flash-image-preview",
                contents=prompt,
                config=types.GenerateContentConfig(response_modalities=["IMAGE"]),
            )
            raw = None
            for c in getattr(r, "candidates", None) or []:
                for p in getattr(getattr(c, "content", None), "parts", None) or []:
                    d = getattr(getattr(p, "inline_data", None), "data", None)
                    if d:
                        raw = d
            if not raw:
                time.sleep(2)
                continue
            img = Image.open(io.BytesIO(raw)).convert("RGB")
            w, h = img.size
            th = w * 9 // 16
            if h > th:
                img = img.crop((0, (h - th) // 2, w, (h + th) // 2))
            else:
                tw = h * 16 // 9
                img = img.crop(((w - tw) // 2, 0, (w + tw) // 2, h))
            img = img.resize((1200, 675), Image.LANCZOS)
            img.save(out, "JPEG", quality=88)
            print(f"saved {out} ({out.stat().st_size:,} bytes)")
            return 0
        except Exception as e:  # noqa: BLE001
            print(f"attempt {attempt}: {type(e).__name__}: {e}", file=sys.stderr)
            time.sleep(3)
    print("FAILED to generate image", file=sys.stderr)
    return 1


if __name__ == "__main__":
    sys.exit(main())
