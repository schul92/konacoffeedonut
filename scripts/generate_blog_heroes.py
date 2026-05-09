#!/usr/bin/env python3
"""Generate hero images for new revenue-focused blog posts using Gemini 3.1 image preview.

Output: /public/images/blog/<slug>.png — these are referenced from the blog index page.tsx.
Aspect ratio: 16:9 landscape (matches existing blog hero pattern).
"""

import os
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from google import genai
from google.genai import types

ROOT = Path(__file__).resolve().parent.parent
ENV_PATH = ROOT / ".env.local"
OUT_DIR = ROOT / "public" / "images" / "blog"
MODEL = "gemini-3.1-flash-image-preview"

SHARED_RULES = """\
This is a HERO BLOG IMAGE for a Hawaiian-themed coffee shop's website (Kona Coffee Donut, Waikiki).

Strict rules:
- ABSOLUTELY NO TEXT, words, letters, numbers, brand names, or logos anywhere
- Photorealistic, magazine-quality food/lifestyle photography
- Bright, warm, vibrant Hawaiian aesthetic — invite the viewer to want to come visit
- 16:9 horizontal landscape aspect ratio
- Wide framing with breathing room (the image will have headline text overlaid in the design system)
- Tropical Hawaiian context but not cliché — focus on the food/drink as hero, with subtle Waikiki/island vibes
"""

POSTS = {
    "best-bingsu-waikiki": """\
A stunning overhead shot of a Korean bingsu dessert (mountain of finely shaved snow-like milk ice topped generously with fresh mango cubes, ripe strawberries, mochi pieces, sweet red bean, and a drizzle of condensed milk) in a wide ceramic bowl. The bingsu sits on a sun-bleached wooden Waikiki cafe counter with monstera leaves, hibiscus blossoms, and a glimpse of turquoise ocean blurred in the background. Bright tropical afternoon light, vibrant saturated colors, vacation paradise vibe.
""",
    "mochi-donut-flavors-waikiki": """\
A vibrant flat-lay arrangement of 8 colorful Hawaiian-style mochi donuts in their signature pon-de-ring shape (8 connected balls), each in a different glaze: ube purple, matcha green, strawberry pink, mango yellow, chocolate brown, taro lavender, classic glazed white, and black sesame. They are arranged on a warm wooden Waikiki cafe table with hibiscus flowers, plumeria, and a steaming cup of Kona coffee at the edge. Bright mid-morning light, magazine-quality food photography.
""",
    "best-smoothies-waikiki": """\
A vibrant lineup of 5 Hawaiian-style smoothies in tall clear glass cups, each a different color: tropical mango orange, strawberry pink, ube purple with tapioca pearls, brown sugar boba caramel, and pina colada cream. They sit on a sun-bleached Waikiki beach-style wooden bar with monstera leaves, fresh tropical fruit slices (mango, strawberry, pineapple) scattered around, and the soft blur of a tropical garden in the background. Beach-day vibe, warm sunlight, photorealistic.
""",
    "where-to-try-kona-coffee-waikiki": """\
A beautifully styled close-up of a steaming pour-over Kona coffee being brewed on a wooden Waikiki cafe counter. A glass server holds the dark amber coffee, with a small cup beside it filled with the brewed coffee. A burlap bag of whole Kona coffee beans sits in the background, with a few beans scattered on the wood. A monstera leaf and a single hibiscus flower add Hawaiian context. Warm golden morning light, shallow depth of field, premium specialty coffee aesthetic.
""",
    "malasada-vs-mochi-donut-waikiki": """\
A side-by-side hero shot: on the left, three golden-brown Portuguese-style malasadas dusted heavily in granulated sugar piled on a small woven basket; on the right, three vibrant pon-de-ring mochi donuts (matcha green, ube purple, strawberry pink) on a small wooden board. Both rest on a warm wooden Waikiki cafe surface with a Kona coffee cup between them, hibiscus flowers, and monstera leaves around the edges. Crisp food photography lighting, both items photographed at the same scale to invite comparison.
""",
    "kona-affogato-waikiki": """\
A close-up beautifully composed shot of a Kona affogato: a clear short glass containing two pristine scoops of vanilla bean ice cream with rich dark espresso visibly cascading over them, the espresso pooling and beginning to melt the cream. A small ceramic espresso pitcher mid-pour at the top of the frame. Whole Kona coffee beans scattered on the warm wooden Waikiki cafe counter, a single plumeria flower in the corner, monstera leaf edge in the background. Soft golden afternoon light, drool-worthy dessert photography.
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
    return f"{SHARED_RULES}\n\nScene:\n{body}"


def generate(client, slug: str, body: str) -> Path | None:
    print(f"[{slug}] calling {MODEL}...", flush=True)
    response = client.models.generate_content(
        model=MODEL,
        contents=build_prompt(body),
        config=types.GenerateContentConfig(response_modalities=["IMAGE"]),
    )
    for part in response.candidates[0].content.parts:
        if part.inline_data and part.inline_data.data:
            mime = part.inline_data.mime_type or "image/png"
            ext = "png" if "png" in mime else mime.split("/")[-1]
            path = OUT_DIR / f"{slug}.{ext}"
            path.write_bytes(part.inline_data.data)
            print(f"[{slug}] saved {path} ({len(part.inline_data.data):,} bytes)", flush=True)
            return path
    print(f"[{slug}] no image returned", flush=True)
    return None


def main():
    load_env()
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        sys.exit("GEMINI_API_KEY not set in .env.local")

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    client = genai.Client(api_key=api_key)

    with ThreadPoolExecutor(max_workers=6) as pool:
        futures = {pool.submit(generate, client, s, b): s for s, b in POSTS.items()}
        for f in as_completed(futures):
            try:
                f.result()
            except Exception as e:
                print(f"[{futures[f]}] error: {e}", flush=True)


if __name__ == "__main__":
    main()
