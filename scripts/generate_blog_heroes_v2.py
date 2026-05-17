#!/usr/bin/env python3
"""Generate hero images for second batch of revenue-focused blog posts.

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
    "how-to-eat-bingsu": """\
A close-up overhead shot of two hands holding spoons gently mixing the toppings of a Korean bingsu — mountain of finely shaved milk ice topped with fresh mango cubes, strawberry slices, mochi pieces, red bean, and condensed milk — in a wide ceramic bowl. The mixing motion is captured mid-action. Warm wooden cafe table with monstera leaves and a single hibiscus flower at the edge. Soft bright tropical light, food magazine aesthetic, inviting and instructional.
""",
    "best-budget-eats-waikiki": """\
An overhead flat-lay arrangement of affordable Hawaiian cafe foods on a sun-bleached wooden Waikiki cafe table: a small basket of golden malasadas dusted in sugar, a single colorful mochi donut, a cup of Kona coffee, a Spam musubi wrapped in nori, an acai bowl with banana and granola, and a small plate of taro chips. Coins and a few dollar bills tucked at one edge suggest affordability. Bright morning light, vibrant tropical food photography, monstera leaves at the corners.
""",
    "best-acai-bowls-waikiki": """\
A close-up of a vibrant acai bowl in a wooden bowl on a warm Waikiki cafe table — deep purple acai base topped beautifully with fresh sliced banana, ripe strawberries, blueberries, granola crunch, golden honey drizzle, coconut flakes, and a few mint leaves. Tropical light, dewy fresh fruit. Background blurred with a glimpse of palm fronds and ocean blue. Magazine-quality food photography, generous portion, instagram-worthy.
""",
    "korean-corn-dog-waikiki-guide": """\
A hero shot of two Korean corn dogs (mozzarella-stuffed and potato-coated varieties) standing upright in a small ceramic cup, with melted cheese pulling between one. Drizzled with ketchup, mustard, and sugar dusting. Photographed at a 3/4 angle on a warm wooden Waikiki cafe surface with bamboo chopsticks beside them, a small dipping sauce dish, and a single hibiscus flower for tropical context. Bright midday lighting, mouth-watering Korean street-food aesthetic but with subtle Hawaiian setting.
""",
    "ube-mochi-donut-waikiki": """\
A vibrant close-up of three ube-glazed mochi donuts (pon-de-ring shape, 8 connected balls) with rich deep purple glaze topped with a delicate sprinkle of toasted coconut and a swirl of white drizzle. Arranged on a small wooden serving board with one donut broken open showing its chewy interior. A glass of iced ube latte with a layered purple-cream visual sits beside them. Tropical wood surface with monstera leaf and white plumeria at the edges. Magazine-quality food photography, lush purple and tropical green palette.
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
    with ThreadPoolExecutor(max_workers=5) as pool:
        futures = {pool.submit(generate, client, s, b): s for s, b in POSTS.items()}
        for f in as_completed(futures):
            try:
                f.result()
            except Exception as e:
                print(f"[{futures[f]}] error: {e}", flush=True)


if __name__ == "__main__":
    main()
