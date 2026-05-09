#!/usr/bin/env python3
"""Generate temp menu item photos for the Kona Coffee Donut kiosk using Gemini 3.1 image preview.

Constraints from the Clover kiosk image upload screen:
- Min dimensions: 1024 x 768 (4:3 landscape)
- Max size: 10 MB
- Formats: .jpg, .jpeg, .png

These are TEMP images — replace with real product photos once available.
NO text or logos in any image (AI text rendering is unreliable).
"""

import os
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from google import genai
from google.genai import types

ROOT = Path(__file__).resolve().parent.parent
ENV_PATH = ROOT / ".env.local"
OUT_DIR = ROOT / "generated"
MODEL = "gemini-3.1-flash-image-preview"

SHARED_RULES = """\
This is a MENU ITEM PRODUCT PHOTO for a Hawaiian-themed coffee shop's self-order touchscreen.

Strict rules:
- ABSOLUTELY NO TEXT, words, letters, numbers, brands, or logos anywhere
- Single hero product clearly centered, photographed at a 3/4 angle or slight overhead
- Clean light tropical background — sun-bleached wood plank or warm neutral cream surface, with maybe one or two soft hibiscus/plumeria petals or a monstera leaf edge for vibe (but NOT cluttered)
- Bright, warm, appetizing food-photography lighting; soft shadows; magazine-quality
- Aspect ratio: 4:3 landscape (matches kiosk requirement of 1024x768 minimum)
- Photorealistic, NOT illustrated or cartoony
- Background MUST be subtle so the product reads clearly; the product is the hero, the Hawaiian context is just light flavor
"""

ITEMS = {
    "banana-matcha-latte": """\
A tall clear glass tumbler filled with a layered iced banana matcha latte: vibrant green matcha layer at the bottom transitioning into creamy pale yellow banana milk on top, with ice cubes visible. A thin slice of fresh banana floats at the top as garnish. A black paper straw rests in the glass. Condensation droplets on the glass. Warm wooden surface with one small monstera leaf edge visible.
""",
    "coffee-bag": """\
A premium kraft-paper coffee bag standing upright on a sun-bleached wooden surface, with a few whole coffee beans scattered around the base of the bag. The bag has a clean blank front (no text, no labels, no logos — it's an unmarked bag for product styling). Soft natural light from the side. A small fresh hibiscus flower rests beside the bag. Warm and inviting Hawaiian café atmosphere.
""",
    "hot-chocolate": """\
A warm ceramic café mug filled to the brim with rich dark hot chocolate, topped with a generous swirl of fluffy whipped cream and a light dusting of cocoa powder. Steam gently rising. A few mini marshmallows on top. Mug rests on a saucer on a warm cream-colored surface, with a small monstera leaf edge in the background and a single sprig of fresh mint beside it for color.
""",
    "kona-affogato": """\
A clear short glass cup containing two scoops of pristine vanilla bean ice cream with a freshly poured shot of dark espresso cascading over the ice cream — espresso visibly meeting the cream and beginning to melt. A small espresso pitcher sits beside the glass, mid-pour. A few whole coffee beans scattered on the warm wooden surface, with a single plumeria flower in the background corner.
""",
    "kona-coffee": """\
A clean white ceramic café mug filled with rich, glossy black Kona coffee, photographed at a slight 3/4 angle with subtle steam rising from the surface. The mug rests on a saucer on a warm wooden surface. A few whole roasted Kona coffee beans scattered around the base of the mug, and a single fresh hibiscus blossom resting beside it. Soft warm morning light, inviting Hawaiian café atmosphere.
""",
}


def load_env():
    if not ENV_PATH.exists():
        sys.exit(f"missing {ENV_PATH}")
    for line in ENV_PATH.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip())


def build_prompt(body: str) -> str:
    return f"{SHARED_RULES}\n\nProduct description:\n{body}"


def generate(client, name: str, body: str) -> Path | None:
    print(f"[{name}] calling {MODEL}...", flush=True)
    response = client.models.generate_content(
        model=MODEL,
        contents=build_prompt(body),
        config=types.GenerateContentConfig(response_modalities=["IMAGE"]),
    )
    for part in response.candidates[0].content.parts:
        if part.inline_data and part.inline_data.data:
            mime = part.inline_data.mime_type or "image/png"
            ext = "png" if "png" in mime else mime.split("/")[-1]
            path = OUT_DIR / f"item-{name}.{ext}"
            path.write_bytes(part.inline_data.data)
            print(f"[{name}] saved {path} ({len(part.inline_data.data):,} bytes)", flush=True)
            return path
    print(f"[{name}] no image returned", flush=True)
    return None


def main():
    load_env()
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        sys.exit("GEMINI_API_KEY not set in .env.local")

    OUT_DIR.mkdir(exist_ok=True)
    client = genai.Client(api_key=api_key)

    with ThreadPoolExecutor(max_workers=5) as pool:
        futures = {pool.submit(generate, client, n, b): n for n, b in ITEMS.items()}
        for f in as_completed(futures):
            try:
                f.result()
            except Exception as e:
                print(f"[{futures[f]}] error: {e}", flush=True)


if __name__ == "__main__":
    main()
