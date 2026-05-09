#!/usr/bin/env python3
"""Generate Hawaiian-vibe kiosk background images for Kona Coffee Donut using Gemini 3.1 image preview.

These are pure background wallpapers (no kiosk hardware, no text, no logos) that the Clover Kiosk
software will overlay welcome text and payment icons on top of. Portrait 9:16 to match kiosk screens.
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
This is a kiosk SCREEN BACKGROUND for a self-order touchscreen — a wallpaper. Strict rules:
- ABSOLUTELY NO TEXT, words, letters, numbers, or logos anywhere in the image
- NO kiosk hardware, no screens, no devices — only the background scene itself
- Portrait 9:16 vertical orientation (taller than wide), suited for a touchscreen
- Composition has visual interest at top and bottom, with a calmer mid-zone where welcome text and payment icons will overlay
- Bright, warm, inviting Hawaiian beach aesthetic with rich saturated tropical color
- Photorealistic, magazine-quality lighting, shallow depth of field where appropriate
"""

VARIANTS = {
    "tropical-flatlay": """\
Overhead flat-lay style background. A bright tropical scene of vibrant Hawaiian-style mochi donuts (pon de ring shape — 8 connected balls — in pink, yellow, ube purple, and matcha green glazes) arranged loosely on a sun-bleached weathered wooden surface, surrounded by fresh red and pink hibiscus blossoms, plumeria flowers, monstera leaves, and a single steaming ceramic cup of dark Kona coffee. Soft golden-hour light from the side. Saturated tropical colors, slight grain.
""",
    "hibiscus-pattern": """\
A lush, dreamy Hawaiian botanical background. Layered tropical foliage — large green monstera leaves, banana leaves, palm fronds — with vibrant red, pink, yellow, and orange hibiscus flowers and white plumeria scattered through. Soft dappled sunlight filtering through the leaves. Background has gentle bokeh suggesting a Hawaiian garden. Warm, inviting, slightly painterly. Empty negative space in the central zone for text overlay. Rich saturated greens with pops of warm flower color.
""",
    "beach-sunset": """\
A serene Hawaiian beach scene at golden hour. Soft turquoise waves gently lapping a pristine white sand shore in the lower portion. Above, a warm sky transitioning from peach and coral to soft lavender. A few palm tree silhouettes lean in from the upper edges. A scattering of plumeria flowers and a couple of seashells rest on the sand foreground. Dreamy, calm, vacation-paradise mood. Soft glowy light, slight warm color grading.
""",
    "wooden-tropical": """\
Warm wooden plank background — sun-bleached driftwood texture in honey and caramel tones — with hand-cut tropical foliage layered around the edges: monstera leaves, banana leaves, fresh hibiscus flowers in coral and pink, plumeria, and a few coffee cherries with green leaves. The center of the wood is mostly clean and uncluttered — a calm zone perfect for text overlay. Warm afternoon Hawaiian sunlight, slight texture and grain, food-magazine style.
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


def build_prompt(variant_body: str) -> str:
    return f"{SHARED_RULES}\n\nScene description for this variant:\n{variant_body}"


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
            path = OUT_DIR / f"kiosk-bg-{name}.{ext}"
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

    with ThreadPoolExecutor(max_workers=4) as pool:
        futures = {pool.submit(generate, client, n, b): n for n, b in VARIANTS.items()}
        for f in as_completed(futures):
            try:
                f.result()
            except Exception as e:
                print(f"[{futures[f]}] error: {e}", flush=True)


if __name__ == "__main__":
    main()
