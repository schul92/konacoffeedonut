#!/usr/bin/env python3
"""Generate hero images for the menu-explainer blog batch (v3).

Saves to /public/images/blog/<slug>.jpeg
"""
import os, sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from google import genai
from google.genai import types

ROOT = Path(__file__).resolve().parent.parent
ENV_PATH = ROOT / ".env.local"
OUT_DIR = ROOT / "public" / "images" / "blog"
MODEL = "gemini-3.1-flash-image-preview"

SHARED_RULES = """\
HERO BLOG IMAGE for Kona Coffee Donut, Hawaiian-themed Waikiki coffee shop.
Strict rules:
- ABSOLUTELY NO TEXT, words, letters, numbers, brand names, or logos anywhere
- Photorealistic, magazine-quality
- Bright, warm, vibrant Hawaiian aesthetic
- 16:9 horizontal landscape aspect ratio
- Wide composition with breathing room for headline overlay
- Hero focus on the food/drink/scene with subtle Waikiki/island vibes
"""

POSTS = {
    "hawaiian-shave-ice": """\
A classic Hawaiian shave ice served in a clear dome cup — finely shaved snow-like ice in bright rainbow layers of blue, cherry red, lemon yellow, and lime green syrups, topped with a "snow cap" drizzle of sweet condensed milk and a hint of vanilla ice cream peeking at the base. Held up at a 3/4 angle against a sunny Waikiki beach backdrop with palm fronds and turquoise ocean softly blurred behind. Vibrant tropical island colors, dripping with refreshment, summery and iconic.
""",
    "what-is-a-malasada": """\
A close-up hero shot of golden Portuguese-Hawaiian malasadas piled warm on parchment paper, generously dusted with granulated sugar, with one malasada torn open to reveal a fluffy, airy, eggy doughy interior (a faint glimpse of haupia or custard cream). Warm wooden Waikiki cafe table, soft morning light, a single plumeria flower and monstera leaf at the edge. Mouth-watering, fresh-fried, comforting island bakery aesthetic.
""",
    "what-is-a-mochi-donut": """\
A close-up of pon-de-ring style mochi donuts (eight connected dough balls in a ring) in assorted glossy glazes — matcha green, ube purple, strawberry pink, and classic vanilla — arranged on a small wooden serving board, with one donut gently pulled apart to show its signature chewy, stretchy rice-flour interior. Bright tropical light, monstera leaf and white plumeria accents, lush colorful palette, magazine-quality food photography.
""",
    "what-is-kona-coffee": """\
A close-up of a single cup of rich Kona coffee with delicate latte art on a warm wooden table, beside a scattering of bright red fresh Kona coffee cherries and a few glossy roasted beans. Background softly blurred to suggest a green Big Island coffee-farm hillside in golden morning light. Premium single-origin Hawaiian coffee aesthetic, warm and inviting, steam rising gently.
""",
}


def load_env():
    for line in ENV_PATH.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip())


def generate(client, slug, body):
    print(f"[{slug}] calling...", flush=True)
    response = client.models.generate_content(
        model=MODEL,
        contents=f"{SHARED_RULES}\n\nScene:\n{body}",
        config=types.GenerateContentConfig(response_modalities=["IMAGE"]),
    )
    for part in response.candidates[0].content.parts:
        if part.inline_data and part.inline_data.data:
            ext = "png" if "png" in (part.inline_data.mime_type or "") else "jpeg"
            path = OUT_DIR / f"{slug}.{ext}"
            path.write_bytes(part.inline_data.data)
            print(f"[{slug}] saved {path} ({len(part.inline_data.data):,} bytes)", flush=True)
            return
    print(f"[{slug}] no image", flush=True)


def main():
    load_env()
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        sys.exit("GEMINI_API_KEY not set")
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    client = genai.Client(api_key=api_key)
    with ThreadPoolExecutor(max_workers=4) as pool:
        futures = {pool.submit(generate, client, s, b): s for s, b in POSTS.items()}
        for f in as_completed(futures):
            try:
                f.result()
            except Exception as e:
                print(f"[{futures[f]}] error: {e}", flush=True)


if __name__ == "__main__":
    main()
