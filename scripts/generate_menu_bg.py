#!/usr/bin/env python3
"""Generate subtle Hawaiian-vibe MENU background images for the Kona Coffee Donut kiosk.

These are wallpapers BEHIND the menu grid — so menu cards/buttons will overlay on top.
Must be soft, low-contrast, with plenty of negative space everywhere on the canvas
(not just in one zone). Hawaiian vibe via palette + minimal accents, not busy imagery.
Portrait 9:16 to match kiosk screens.
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
This is a SUBTLE BACKGROUND WALLPAPER for a touchscreen menu page. Strict rules:
- ABSOLUTELY NO TEXT, words, letters, numbers, or logos anywhere
- NO kiosk hardware, no devices, no UI elements
- Portrait 9:16 vertical orientation (taller than wide)
- LOW CONTRAST and softly desaturated — menu item cards will be overlaid on top, so the background must NEVER compete or distract
- Plenty of NEGATIVE SPACE distributed evenly across the entire image — not concentrated only in the center; every region of the image should be calm enough to overlay UI cards on
- NO heavy detailed imagery; subtle, minimal, atmospheric
- Hawaiian vibe expressed through PALETTE (warm peach, coral, soft aqua, sandy cream, gentle green) and at most ONE small subtle accent element — not a busy composition
- Avoid hard edges and bold patterns; favor soft gradients, gentle textures, and airy compositions
"""

VARIANTS = {
    "soft-gradient": """\
A very minimal soft gradient wash that evokes a Hawaiian sunset: gentle peach and coral fading into soft aqua and cream, with subtle film grain. No imagery at all — pure atmospheric color. Whisper-soft, like watercolor paper. The whole canvas is calm, dreamy, and low contrast.
""",
    "watercolor-leaves": """\
Soft watercolor-style background in cream and warm sand tones with very faint, low-opacity tropical leaf silhouettes (monstera, palm) bleeding in from the corners only. The center 70% of the image is almost completely empty cream-color paper texture. Extremely airy and minimal — like a high-end stationery design. Hawaiian vibe through palette only.
""",
    "linen-texture": """\
A clean off-white linen / natural canvas texture across the entire canvas with a very subtle warm cream tint. Faint blush of soft coral in the upper area and a hint of seafoam green in the lower area, like watercolor washes that have mostly faded. No imagery, no objects, no flowers. Just gentle texture and color. Calm, neutral, premium.
""",
    "tropical-wash": """\
A soft, hazy tropical sky-and-sea wash: the upper third is a gentle peach-to-cream sky gradient, the lower third is a soft pale aqua suggesting calm ocean, the middle is hazy and almost blank. Very out-of-focus, dreamlike, like looking at the horizon through frosted glass. No defined shapes, no palm trees, no objects — pure atmospheric color and softness. The whole image is light and uniform enough that menu cards will read clearly anywhere on it.
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
            path = OUT_DIR / f"menu-bg-{name}.{ext}"
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
