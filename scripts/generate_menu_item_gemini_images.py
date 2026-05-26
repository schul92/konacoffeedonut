#!/usr/bin/env python3
"""Generate photoreal individual product photos for the remaining /menu items.

Categories covered (in priority order, resumable — skips items whose .png
already exists on disk):
    malasada, hotdog, coffee, matcha, smoothies, bingsu, acai

Each item gets one square 1024 PNG + a WEBP. Source images go under
    public/images/menu/items/gemini/<category>/<slug>.{png,webp}

A separate script (process_menu_item_cutouts.py) turns these into transparent
cutouts that float on the menu page background, matching the existing Mochi
Donut treatment.

Usage:
    GEMINI_API_KEY=... python3 scripts/generate_menu_item_gemini_images.py
    # or limit to a subset:
    GEMINI_API_KEY=... python3 scripts/generate_menu_item_gemini_images.py malasada hotdog

Reads GEMINI_API_KEY from the environment. The key is never printed or logged.
"""

from __future__ import annotations

import io
import os
import sys
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Optional

from google import genai
from google.genai import types
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT_ROOT = ROOT / "public/images/menu/items/gemini"
MODEL = "gemini-3.1-flash-image-preview"
TARGET_SIZE = 1024

SHARED_RULES = """\
You are producing a single high-end PRODUCT PHOTO for a menu gallery card.

ABSOLUTE REQUIREMENTS:
- Photorealistic high-end food/beverage photography. NOT illustration, NOT cartoon, NOT 3D render, NOT vector art.
- Exactly ONE subject, centered, fully visible.
- Background: clean warm cream / off-white seamless backdrop (#FBF4E4-ish). No props, no plate text, no patterned surfaces, no other food, no signage.
- Soft, even, bright studio light from upper-left. Gentle natural shadow under the subject. Magazine-quality.
- ZERO text, letters, numbers, words, logos, signage, labels, price tags, brand marks, watermarks anywhere in the image.
- No hands, no people, no utensils visible, no plates with writing, no packaging with text.
- Subject must be intact, appetizing, and not melted or deformed.

Format: square 1:1 framing. The subject should fill roughly 70-80% of the frame.
"""

RETRY_SUFFIX = """\

CRITICAL REPEAT — the prior attempt failed quality control. You MUST:
- Produce a single intact product as described, no extras, no halves.
- No text, no logos, no captions, no watermark, no caption bars.
- Plain warm cream seamless background, nothing else in frame.
- Photorealistic — like a DSLR shot for an upscale cafe menu.
"""


@dataclass(frozen=True)
class Item:
    category: str   # subfolder name under gemini/
    slug: str       # filename slug
    name: str       # display name (for prompt only)
    description: str  # what the subject looks like


ITEMS: list[Item] = [
    # ---------- Malasada (Portuguese donuts, round, no hole, soft dough) ----------
    Item("malasada", "malasada-original", "Original Malasada",
         ("A single freshly-fried Portuguese malasada: a round golden-brown yeast donut "
          "with a slightly irregular pillow shape, no hole in the middle, generously dusted "
          "with fine white granulated sugar all over. Soft fluffy interior implied. "
          "Top-down or slight 3/4 angle.")),
    Item("malasada", "malasada-cinnamon-sugar", "Cinnamon Sugar Malasada",
         ("A single freshly-fried Portuguese malasada: round golden-brown yeast donut, no hole, "
          "coated all over with cinnamon-sugar (warm tan-brown speckled coating of fine sugar "
          "tinted with ground cinnamon). Slight 3/4 angle, soft glow.")),
    Item("malasada", "malasada-haupia-coconut", "Haupia Coconut Malasada",
         ("A single round golden malasada with the top half cut open and a generous swirl of "
          "white coconut haupia cream filling visible from above, dusted with fine white sugar "
          "and a light sprinkle of toasted coconut flakes on top. No hole through the donut.")),
    Item("malasada", "malasada-chocolate", "Chocolate Malasada",
         ("A single round golden malasada with a glossy dark chocolate ganache glaze covering "
          "the top half, smooth and shiny with a couple of natural drips. The bottom of the "
          "donut shows golden fried dough. No hole through the donut.")),
    Item("malasada", "malasada-custard", "Custard Malasada",
         ("A single round golden malasada with a pale yellow vanilla custard cream visibly "
          "piped into the top, with a soft swirl peak of custard rising above. The donut is "
          "dusted with fine white sugar around the custard. No hole through the donut.")),
    Item("malasada", "malasada-li-hing-mui", "Li Hing Mui Malasada",
         ("A single round golden malasada coated with li hing mui powder: a fine reddish-pink "
          "Hawaiian dried-plum sugar coating, tangy pink-red hue. Slight 3/4 angle, no hole, "
          "appetizing soft glow.")),

    # ---------- Korean Corn Dogs (battered hot dog on a stick) ----------
    Item("hotdog", "corn-dog-classic-sausage", "Classic Sausage Corn Dog",
         ("A single Korean corn dog on a wooden stick, held vertically and centered: a thick "
          "puffy panko-crusted golden-brown batter coating around a beef sausage, with a single "
          "zig-zag drizzle of red ketchup and yellow mustard on top. Crispy panko texture visible. "
          "The wooden stick points down into a clean cream background.")),
    Item("hotdog", "corn-dog-mozzarella-cheese", "Mozzarella Cheese Corn Dog",
         ("A single Korean corn dog on a wooden stick, centered, vertical: a thick puffy "
          "panko-crusted golden batter around a mozzarella cheese core. One bite has been pulled "
          "away revealing a long stretchy strand of melted mozzarella between the bite and the "
          "main corn dog. Light powdered-sugar dusting on the batter is OK.")),
    Item("hotdog", "corn-dog-half-and-half", "Half & Half Corn Dog",
         ("A single Korean corn dog on a wooden stick, vertical, centered: golden panko-crusted "
          "batter showing two halves through a clean cross-section — upper half is sausage, "
          "lower half is mozzarella cheese. A zig-zag of ketchup on top. No text.")),
    Item("hotdog", "corn-dog-potato", "Potato Corn Dog",
         ("A single Korean potato corn dog on a wooden stick, vertical, centered: thick golden "
          "batter completely covered with small crispy diced fried potato cubes stuck to the "
          "outside, very textural. A zig-zag of ketchup drizzle on top.")),
    Item("hotdog", "corn-dog-crispy-ramen", "Crispy Ramen Corn Dog",
         ("A single Korean corn dog on a wooden stick, vertical, centered: thick golden batter "
          "coated all over with crushed crispy fried ramen noodle pieces (irregular pale-yellow "
          "fragments) stuck to the outside, giving a spiky textural shell. A zig-zag of ketchup "
          "and mustard on top.")),
    Item("hotdog", "corn-dog-sugar-dog", "Sugar Corn Dog",
         ("A single Korean corn dog on a wooden stick, vertical, centered: golden panko-crusted "
          "batter generously rolled in a heavy coat of fine white granulated sugar, with a few "
          "loose sugar crystals scattered around. No ketchup. No text.")),

    # ---------- Espresso Bar (drinks in glassware) ----------
    Item("coffee", "coffee-kona-coffee", "Kona Coffee",
         ("A single clear glass mug of steaming hot black Kona coffee on a saucer, deep amber "
          "color, with a thin crema on top and a wisp of steam rising. Centered, gentle "
          "highlight on the glass rim.")),
    Item("coffee", "coffee-espresso", "Espresso",
         ("A single small white porcelain espresso cup on a matching saucer, filled with a "
          "perfect double espresso showing a thick golden-brown crema with tiger striping on "
          "top. Centered, slight 3/4 angle, no spoon, no text on cup.")),
    Item("coffee", "coffee-americano", "Americano",
         ("A single tall clear glass of hot Americano coffee, deep brown with a thin tan "
          "crema layer on top, centered on a clean cream background. No saucer, no spoon.")),
    Item("coffee", "coffee-latte", "Latte",
         ("A single tall clear glass latte: a creamy espresso latte with distinct layers "
          "(darker espresso bottom, lighter milky middle, white microfoam top). A simple "
          "rosetta latte-art leaf in the foam on top. Centered, gentle highlights on glass.")),
    Item("coffee", "coffee-cappuccino", "Cappuccino",
         ("A single white porcelain cappuccino cup on a saucer, filled with espresso topped "
          "by a generous dome of velvety white milk microfoam with a simple heart latte-art "
          "in the foam. Centered, no spoon, no text on cup.")),
    Item("coffee", "coffee-kona-cold-brew", "Kona Cold Brew",
         ("A single tall clear glass of iced Kona cold-brew coffee: ice cubes filling the "
          "glass, dark coffee around them, very faint condensation beads on the outside of "
          "the glass. Centered, no straw, no garnish.")),
    Item("coffee", "coffee-kona-affogato", "Kona Affogato",
         ("A single clear short tumbler glass with two scoops of pale vanilla bean ice cream, "
          "and a hot espresso shot just poured over the top so it streams down the ice cream "
          "in caramel-brown rivulets. Centered, soft glow.")),
    Item("coffee", "coffee-mocha", "Mocha",
         ("A single tall clear glass of hot mocha latte: a chocolate-coffee drink topped with "
          "a dome of white whipped cream and a delicate chocolate sauce drizzle in a "
          "criss-cross pattern over the cream. Centered, no spoon.")),
    Item("coffee", "coffee-ube-latte", "Ube Latte",
         ("A single tall clear glass of ube latte: a vivid purple-violet ube milk drink with "
          "a soft white milk foam top, possibly with a thin violet swirl through the white "
          "foam. Centered, natural ube purple (not blue), clean cream background.")),
    Item("coffee", "coffee-hot-chocolate", "Hot Chocolate",
         ("A single white porcelain mug on a saucer, filled with rich dark hot chocolate "
          "topped with a generous dome of white whipped cream and a light dusting of cocoa "
          "powder. Centered, no spoon, no text on mug.")),
    Item("coffee", "coffee-loose-leaf-tea", "Loose Leaf Tea",
         ("A single clear glass teacup on a small saucer, filled with hot amber-gold brewed "
          "loose-leaf black tea, a wisp of steam, a few visible tea leaves settled near the "
          "bottom of the cup. Centered, calm warm glow.")),

    # ---------- Matcha / Hojicha Lattes ----------
    Item("matcha", "matcha-azuki-latte", "Azuki Matcha Latte",
         ("A single tall clear glass matcha azuki latte: vibrant jade-green matcha on top with "
          "a white milk layer below, and a generous spoonful of dark red-brown sweet azuki "
          "bean paste mounded on top of the matcha foam. Centered, no spoon.")),
    Item("matcha", "matcha-strawberry-latte", "Strawberry Matcha Latte",
         ("A single tall clear glass with three distinct layers: bright pink fresh strawberry "
          "puree at the bottom, white milk in the middle, vivid jade-green matcha latte on top. "
          "Centered, clean cream background, no straw.")),
    Item("matcha", "matcha-latte", "Matcha Latte",
         ("A single tall clear glass matcha latte with two clear layers: white milk on the "
          "bottom, vibrant ceremonial-grade jade-green matcha poured on top forming a smooth "
          "soft-edged transition. Light frothy matcha bubbles on top. Centered.")),
    Item("matcha", "matcha-hojicha-latte", "Hojicha Latte",
         ("A single tall clear glass hojicha (roasted green tea) latte: warm caramel-brown "
          "roasted tea on top, creamy white milk on the bottom, with a soft tan foam crown on "
          "top. Centered, no spoon.")),
    Item("matcha", "matcha-guava", "Guava Matcha",
         ("A single tall clear glass iced matcha drink with layered fruit: vibrant pink-coral "
          "guava puree at the bottom, white milk and ice in the middle, jade-green matcha on "
          "top. Ice cubes visible. Centered.")),
    Item("matcha", "matcha-lilikoi", "Lilikoi Matcha",
         ("A single tall clear glass iced matcha drink with layered fruit: bright golden "
          "passionfruit (lilikoi) puree with a few tiny dark seeds at the bottom, milk and "
          "ice in the middle, jade-green matcha on top. Ice cubes visible. Centered.")),
    Item("matcha", "matcha-mango", "Mango Matcha",
         ("A single tall clear glass iced matcha drink with layered fruit: vibrant orange "
          "mango puree at the bottom, white milk and ice in the middle, jade-green matcha on "
          "top. Ice cubes visible. Centered.")),
    Item("matcha", "matcha-coconut", "Coconut Matcha",
         ("A single tall clear glass iced matcha drink: creamy white coconut milk on the "
          "bottom with ice, vibrant jade-green matcha gently poured on top creating a clean "
          "two-tone look. A light dusting of toasted coconut flakes on top. Centered.")),
    Item("matcha", "matcha-banana", "Banana Matcha",
         ("A single tall clear glass iced matcha drink: pale yellow creamy banana milk on the "
          "bottom with ice, vibrant jade-green matcha on top. A thin banana slice as a garnish "
          "is OK on the rim. Centered.")),

    # ---------- Smoothies ----------
    Item("smoothies", "smoothie-acai-berry", "Açaí Berry Smoothie",
         ("A single tall clear glass filled with a thick deep-purple acai berry smoothie, "
          "garnished on top with a few fresh blueberries and a single ripe strawberry. "
          "Centered, no straw, soft condensation on the glass.")),
    Item("smoothies", "smoothie-strawberry-banana", "Strawberry Banana Smoothie",
         ("A single tall clear glass filled with a thick pink strawberry-banana smoothie, "
          "topped with a fresh sliced strawberry and a thin banana slice as a garnish. "
          "Centered, light condensation.")),
    Item("smoothies", "smoothie-coconut-pineapple", "Coconut Pineapple Smoothie",
         ("A single tall clear glass filled with a thick creamy pale yellow coconut-pineapple "
          "smoothie, topped with a small pineapple wedge and a sprinkle of toasted coconut "
          "flakes. Centered, light condensation.")),
    Item("smoothies", "smoothie-mango-coconut-lilikoi", "Mango Coconut Lilikoi Smoothie",
         ("A single tall clear glass filled with a thick vibrant orange-yellow mango "
          "smoothie blended with coconut and a swirl of golden lilikoi (passionfruit) puree "
          "on top with a few visible seeds, and a thin mango cube garnish. Centered.")),

    # ---------- Milk Shaved Bingsu (mountain of shaved milk-ice in a white bowl) ----------
    Item("bingsu", "bingsu-azuki-bean", "Azuki Bean Bingsu",
         ("A single round white ceramic bowl filled with a tall fluffy mountain of fine "
          "Korean shaved milk ice, topped generously with sweet red azuki bean paste, a small "
          "scoop of pale yellow injeolmi rice cake cubes, and a tiny drizzle of condensed "
          "milk. Centered, no spoon.")),
    Item("bingsu", "bingsu-strawberry", "Strawberry Bingsu",
         ("A single round white ceramic bowl with a tall mountain of fluffy white shaved "
          "milk ice, topped with fresh strawberry slices, a drizzle of bright strawberry "
          "sauce, and a small scoop of vanilla ice cream on top. Centered, no spoon.")),
    Item("bingsu", "bingsu-pineapple", "Pineapple Bingsu",
         ("A single round white ceramic bowl with a tall mountain of fluffy white shaved "
          "milk ice, topped with fresh yellow pineapple cubes, a drizzle of pineapple syrup, "
          "and a small scoop of vanilla ice cream. Centered, no spoon.")),
    Item("bingsu", "bingsu-mango", "Mango Bingsu",
         ("A single round white ceramic bowl with a tall mountain of fluffy white shaved "
          "milk ice, topped with fresh vibrant orange mango cubes, a drizzle of mango sauce, "
          "and a small scoop of vanilla ice cream on top. Centered, no spoon.")),
    Item("bingsu", "bingsu-ube", "Ube Bingsu",
         ("A single round white ceramic bowl with a tall mountain of pale lavender ube-tinted "
          "shaved milk ice, topped with a swirl of rich vivid purple ube cream, a small scoop "
          "of ube ice cream, and a sprinkle of toasted coconut flakes. Centered.")),
    Item("bingsu", "bingsu-injeolmi", "Injeolmi Bingsu",
         ("A single round white ceramic bowl with a tall mountain of fluffy white shaved milk "
          "ice, dusted heavily with tan-brown roasted soybean powder (kinako), topped with "
          "pale yellow chewy injeolmi rice cake cubes and a drizzle of condensed milk. Centered.")),
    Item("bingsu", "bingsu-greentea", "Green Tea Bingsu",
         ("A single round white ceramic bowl with a tall mountain of fluffy white shaved milk "
          "ice, dusted with vibrant jade-green matcha powder, topped with a small scoop of "
          "matcha ice cream, a few sweet red azuki beans, and chewy pale yellow injeolmi rice "
          "cake cubes. Centered, no spoon.")),
    Item("bingsu", "bingsu-black-sesame", "Black Sesame Bingsu",
         ("A single round white ceramic bowl with a tall mountain of fluffy white shaved milk "
          "ice, drizzled generously with glossy dark black sesame paste, dusted with toasted "
          "black sesame seeds, and topped with a small scoop of vanilla ice cream. Centered.")),
    Item("bingsu", "bingsu-kona-coffee", "Kona Coffee Bingsu",
         ("A single round white ceramic bowl with a tall mountain of fluffy white shaved milk "
          "ice, drenched with rich espresso so the top is cafe-brown, topped with a small "
          "scoop of vanilla ice cream and a light dusting of cocoa powder. Centered, no spoon.")),

    # ---------- Hawaiian Bingsu & Açaí Bowl ----------
    Item("acai", "bingsu-waikiki-rainbow", "Waikiki Rainbow Bingsu",
         ("A single round white ceramic bowl with a tall mountain of fluffy white shaved milk "
          "ice topped with a vibrant rainbow of tropical fruit: bright strawberry slices, "
          "yellow mango cubes, green kiwi slices, fresh blueberries, and pineapple cubes, "
          "with a light drizzle of condensed milk. Centered, no spoon.")),
    Item("acai", "bingsu-paradise-lilikoi", "Paradise Lilikoi Bingsu",
         ("A single round white ceramic bowl with a tall mountain of fluffy white shaved milk "
          "ice, drizzled with golden lilikoi (passionfruit) puree showing tiny dark seeds, "
          "topped with mango cubes and a couple of fresh raspberries. Centered.")),
    Item("acai", "bingsu-volcano-island", "Volcano Island Bingsu",
         ("A single round white ceramic bowl with a tall mountain of fluffy white shaved milk "
          "ice, drenched on top with a vibrant red strawberry sauce that streams dramatically "
          "down the sides like volcanic lava, topped with fresh strawberry chunks. Centered.")),
    Item("acai", "bingsu-coco-head", "Coco Head Bingsu",
         ("A single round white ceramic bowl with a tall mountain of fluffy white shaved milk "
          "ice topped with a generous sprinkle of toasted coconut flakes, a few chunks of "
          "young coconut meat, and a drizzle of creamy condensed coconut milk. Centered.")),
    Item("acai", "bingsu-tropical-jungle", "Tropical Jungle Bingsu",
         ("A single round white ceramic bowl with a tall mountain of fluffy white shaved milk "
          "ice topped with a colourful jumble of tropical fruit: mango cubes, pineapple cubes, "
          "kiwi slices, papaya cubes, and a drizzle of mango sauce. Centered, no spoon.")),
    Item("acai", "acai-oahu", "Açaí Oahu Bowl",
         ("A single dark wooden coconut-shell bowl filled with thick deep-purple acai smoothie, "
          "topped with a neat row of fresh banana slices, fresh strawberry slices, fresh "
          "blueberries, a generous handful of golden granola, a drizzle of honey, and a few "
          "shaved coconut flakes. Centered, top-down 3/4 angle, no spoon.")),
    Item("acai", "acai-paradise", "Açaí Paradise Bowl",
         ("A single dark wooden coconut-shell bowl filled with thick deep-purple acai smoothie, "
          "topped with tropical fruit: mango cubes, pineapple chunks, kiwi slices, fresh "
          "raspberries, golden granola, toasted coconut flakes, and a drizzle of honey. "
          "Centered, top-down 3/4 angle, no spoon.")),
    Item("acai", "acai-colada", "Açaí Colada Bowl",
         ("A single dark wooden coconut-shell bowl filled with thick deep-purple acai smoothie "
          "topped with a creamy white coconut yogurt swirl, pineapple chunks, toasted coconut "
          "flakes, golden granola, and a drizzle of honey. Centered, top-down 3/4 angle.")),
    Item("acai", "acai-papaya", "Papaya Bowl",
         ("A single half of a fresh ripe papaya used as a bowl, the bright orange flesh "
          "scooped slightly and refilled with vibrant papaya cubes, fresh blueberries, "
          "strawberry slices, banana slices, golden granola, and a drizzle of honey. The "
          "papaya skin is yellow-green. Centered, top-down 3/4 angle.")),
]


CATEGORY_ORDER = ["malasada", "hotdog", "coffee", "matcha", "smoothies", "bingsu", "acai"]


def build_prompt(it: Item, retry: bool = False) -> str:
    body = (
        f"{SHARED_RULES}\n\n"
        f"Subject: {it.name}\n"
        f"Description: {it.description}\n"
    )
    if retry:
        body += RETRY_SUFFIX
    return body


def extract_image_bytes(response) -> Optional[bytes]:
    if not response.candidates:
        return None
    for part in response.candidates[0].content.parts:
        if part.inline_data and part.inline_data.data:
            return part.inline_data.data
    return None


def save_outputs(raw: bytes, out_dir: Path, slug: str) -> tuple[Path, Path]:
    out_dir.mkdir(parents=True, exist_ok=True)
    src = Image.open(io.BytesIO(raw)).convert("RGB")
    w, h = src.size
    if w != h:
        side = min(w, h)
        left = (w - side) // 2
        top = (h - side) // 2
        src = src.crop((left, top, left + side, top + side))
    src = src.resize((TARGET_SIZE, TARGET_SIZE), Image.LANCZOS)

    png_path = out_dir / f"{slug}.png"
    webp_path = out_dir / f"{slug}.webp"
    src.save(png_path, "PNG", optimize=True)
    src.save(webp_path, "WEBP", quality=88, method=6)
    return png_path, webp_path


def generate_one(client, it: Item, attempts: int = 3) -> bool:
    out_dir = OUT_ROOT / it.category
    out_dir.mkdir(parents=True, exist_ok=True)
    png_path = out_dir / f"{it.slug}.png"
    if png_path.exists() and png_path.stat().st_size > 5000:
        print(f"[{it.category}/{it.slug}] skip (already exists)", flush=True)
        return True

    for i in range(1, attempts + 1):
        retry = i > 1
        try:
            print(f"[{it.category}/{it.slug}] attempt {i}/{attempts}"
                  f"{' (retry)' if retry else ''}", flush=True)
            response = client.models.generate_content(
                model=MODEL,
                contents=build_prompt(it, retry=retry),
                config=types.GenerateContentConfig(response_modalities=["IMAGE"]),
            )
            raw = extract_image_bytes(response)
            if not raw:
                print(f"[{it.category}/{it.slug}] no image returned on attempt {i}", flush=True)
                time.sleep(2)
                continue
            png, webp = save_outputs(raw, out_dir, it.slug)
            print(f"[{it.category}/{it.slug}] saved {webp.relative_to(ROOT)} "
                  f"({webp.stat().st_size:,} bytes)", flush=True)
            return True
        except Exception as e:  # noqa: BLE001
            print(f"[{it.category}/{it.slug}] error on attempt {i}: "
                  f"{type(e).__name__}: {e}", flush=True)
            time.sleep(3)
    return False


def main() -> int:
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("GEMINI_API_KEY is not set in the environment.", file=sys.stderr)
        return 2

    # Optional category filter from CLI args.
    arg_cats = [a for a in sys.argv[1:] if not a.startswith("-")]
    if arg_cats:
        bad = [c for c in arg_cats if c not in CATEGORY_ORDER]
        if bad:
            print(f"unknown categories: {bad}", file=sys.stderr)
            return 2
        wanted = set(arg_cats)
    else:
        wanted = set(CATEGORY_ORDER)

    items = [
        it for cat in CATEGORY_ORDER for it in ITEMS
        if it.category == cat and cat in wanted
    ]
    print(f"Will process {len(items)} items across categories: "
          f"{sorted(wanted, key=CATEGORY_ORDER.index)}", flush=True)

    client = genai.Client(api_key=api_key)

    failures: list[str] = []
    for it in items:
        ok = generate_one(client, it)
        if not ok:
            failures.append(f"{it.category}/{it.slug}")

    print()
    print(f"Done. Output root: {OUT_ROOT.relative_to(ROOT)}")
    if failures:
        print(f"FAILED ({len(failures)}): {failures}")
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
