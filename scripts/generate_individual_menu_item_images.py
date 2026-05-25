#!/usr/bin/env python3
"""Generate distinct stylized product illustrations for every individual menu item.

This is a deterministic, offline-only generator (no external APIs). It produces
600x600 webp + png cutouts on a cream background so the gallery cards look
consistent. Every item gets its own unique image based on its flavor.

Categories handled:
  - Mochi donuts (rings)
  - Malasadas (round pastries with filling drizzle / dust)
  - Coffee & matcha lattes (cups with foam art)
  - Smoothies (tall glasses with straws)
  - Korean corn dogs (sticks with coatings)

Bingsu and Açaí bowl item images already exist via crop_menu_items.py — those
slugs are intentionally NOT regenerated here.

Run:
  python3 scripts/generate_individual_menu_item_images.py
"""

from __future__ import annotations

import math
import random
from pathlib import Path
from typing import Iterable

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public/images/menu/items"
OUT_DIR.mkdir(parents=True, exist_ok=True)

CANVAS = 600
BG = (251, 244, 228, 255)  # cream — matches the page bg #FBF4E4


# ---------- helpers ----------------------------------------------------------

def new_canvas() -> Image.Image:
    return Image.new("RGBA", (CANVAS, CANVAS), BG)


def soft_shadow(img: Image.Image, mask: Image.Image, offset=(8, 14), blur=18, opacity=110) -> None:
    """Composite a soft drop shadow under a shape mask."""
    shadow = Image.new("RGBA", img.size, (0, 0, 0, 0))
    sd = Image.new("L", img.size, 0)
    sd.paste(mask, offset)
    sd = sd.filter(ImageFilter.GaussianBlur(blur))
    black = Image.new("RGBA", img.size, (40, 25, 15, opacity))
    img.alpha_composite(Image.composite(black, shadow, sd))


def draw_ellipse_shaded(draw: ImageDraw.ImageDraw, bbox, base, top_highlight=(255, 255, 255, 70)):
    draw.ellipse(bbox, fill=base)


def speckle(img: Image.Image, area_mask: Image.Image, color, count, size_range, rng: random.Random) -> None:
    sp = Image.new("RGBA", img.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(sp)
    bx = area_mask.getbbox()
    if not bx:
        return
    x0, y0, x1, y1 = bx
    placed = 0
    tries = 0
    while placed < count and tries < count * 30:
        tries += 1
        x = rng.randint(x0, x1 - 1)
        y = rng.randint(y0, y1 - 1)
        if area_mask.getpixel((x, y)) > 30:
            r = rng.randint(*size_range)
            sd.ellipse([x - r, y - r, x + r, y + r], fill=color)
            placed += 1
    img.alpha_composite(sp)


def save_both(img: Image.Image, slug: str) -> None:
    flat = Image.new("RGB", img.size, (BG[0], BG[1], BG[2]))
    flat.paste(img, mask=img.split()[3])
    webp = OUT_DIR / f"{slug}.webp"
    png = OUT_DIR / f"{slug}.png"
    flat.save(webp, "WEBP", quality=90, method=6)
    flat.save(png, "PNG", optimize=True)
    print(f"  wrote {webp.relative_to(ROOT)}")


def text_label(img: Image.Image, text: str, y: int, color=(60, 40, 25, 200), size=22) -> None:
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", size)
    except OSError:
        font = ImageFont.load_default()
    d = ImageDraw.Draw(img)
    tb = d.textbbox((0, 0), text, font=font)
    tw = tb[2] - tb[0]
    d.text(((CANVAS - tw) // 2, y), text, font=font, fill=color)


# ---------- mochi donuts -----------------------------------------------------
# Mochi donuts look like 8 connected balls in a ring (pon de ring style).
# We draw the ring with a flavor-specific glaze and toppings.

def draw_mochi_donut(slug: str, ring_color, glaze_color, topping=None, label: str | None = None) -> None:
    img = new_canvas()
    rng = random.Random(slug)
    cx, cy = CANVAS // 2, CANVAS // 2 + 10

    # Build the ring as 8 overlapping circles
    n = 8
    outer_r = 200
    ball_r = 70
    mask = Image.new("L", img.size, 0)
    md = ImageDraw.Draw(mask)
    centers = []
    for i in range(n):
        a = (2 * math.pi * i / n) - math.pi / 2
        bx = cx + outer_r * math.cos(a)
        by = cy + outer_r * math.sin(a)
        centers.append((bx, by))
        md.ellipse([bx - ball_r, by - ball_r, bx + ball_r, by + ball_r], fill=255)

    soft_shadow(img, mask)

    # Base ring (dough color)
    ring = Image.new("RGBA", img.size, (0, 0, 0, 0))
    rd = ImageDraw.Draw(ring)
    for bx, by in centers:
        rd.ellipse([bx - ball_r, by - ball_r, bx + ball_r, by + ball_r], fill=ring_color)
    # Subtle dough highlight on the upper side
    hl = Image.new("RGBA", img.size, (0, 0, 0, 0))
    hd = ImageDraw.Draw(hl)
    for bx, by in centers:
        hd.ellipse([bx - ball_r + 10, by - ball_r + 8, bx + ball_r - 30, by + ball_r - 50],
                   fill=(255, 245, 220, 70))
    img.alpha_composite(ring)
    img.alpha_composite(hl)

    # Glaze: smaller circles inside each ball
    glaze = Image.new("RGBA", img.size, (0, 0, 0, 0))
    gd = ImageDraw.Draw(glaze)
    gr = ball_r - 16
    for bx, by in centers:
        gd.ellipse([bx - gr, by - gr, bx + gr, by + gr], fill=glaze_color)
    img.alpha_composite(glaze)

    # Topping speckle in glaze area
    if topping:
        glaze_mask = Image.new("L", img.size, 0)
        gmd = ImageDraw.Draw(glaze_mask)
        for bx, by in centers:
            gmd.ellipse([bx - gr, by - gr, bx + gr, by + gr], fill=255)
        for color, count, size_range in topping:
            speckle(img, glaze_mask, color, count, size_range, rng)

    if label:
        text_label(img, label, CANVAS - 50)

    save_both(img, slug)


# ---------- malasadas --------------------------------------------------------

def draw_malasada(slug: str, dough_color, coating, accent=None, label: str | None = None) -> None:
    """Round pastry with optional sugar dust or glaze drizzle."""
    img = new_canvas()
    rng = random.Random(slug)
    cx, cy = CANVAS // 2, CANVAS // 2 + 10
    r = 200

    # shadow
    mask = Image.new("L", img.size, 0)
    md = ImageDraw.Draw(mask)
    md.ellipse([cx - r, cy - r, cx + r, cy + r], fill=255)
    soft_shadow(img, mask, offset=(10, 16), blur=20)

    # body
    d = ImageDraw.Draw(img)
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=dough_color)
    # bottom shading
    d.ellipse([cx - r + 30, cy - r + 60, cx + r - 30, cy + r], fill=tuple(int(c * 0.85) if i < 3 else c for i, c in enumerate(dough_color)))
    # highlight on top
    d.ellipse([cx - r + 40, cy - r + 30, cx + r - 60, cy - r + 130],
              fill=(255, 245, 220, 110))

    # coating layer (sugar dust)
    if coating == "sugar":
        for _ in range(220):
            x = rng.randint(cx - r, cx + r)
            y = rng.randint(cy - r, cy + r)
            dx, dy = x - cx, y - cy
            if dx * dx + dy * dy < (r - 8) ** 2:
                rr = rng.randint(1, 3)
                d.ellipse([x - rr, y - rr, x + rr, y + rr], fill=(255, 252, 240, 230))
    elif coating == "cinnamon":
        for _ in range(450):
            x = rng.randint(cx - r, cx + r)
            y = rng.randint(cy - r, cy + r)
            dx, dy = x - cx, y - cy
            if dx * dx + dy * dy < (r - 8) ** 2:
                rr = rng.randint(1, 3)
                col = rng.choice([(120, 70, 30, 230), (140, 85, 40, 200), (90, 55, 25, 220)])
                d.ellipse([x - rr, y - rr, x + rr, y + rr], fill=col)
    elif coating == "lihing":
        for _ in range(320):
            x = rng.randint(cx - r, cx + r)
            y = rng.randint(cy - r, cy + r)
            dx, dy = x - cx, y - cy
            if dx * dx + dy * dy < (r - 8) ** 2:
                rr = rng.randint(1, 3)
                col = rng.choice([(170, 30, 50, 220), (200, 60, 60, 200), (140, 25, 40, 230)])
                d.ellipse([x - rr, y - rr, x + rr, y + rr], fill=col)

    # accent: a wedge cut showing filling colour
    if accent:
        wedge = Image.new("RGBA", img.size, (0, 0, 0, 0))
        wd = ImageDraw.Draw(wedge)
        wd.pieslice([cx - r + 20, cy - r + 20, cx + r - 20, cy + r - 20], -110, -40, fill=accent)
        img.alpha_composite(wedge)
        d.arc([cx - r + 18, cy - r + 18, cx + r - 18, cy + r - 18], -110, -40, fill=(80, 50, 30, 200), width=4)

    if label:
        text_label(img, label, CANVAS - 50)

    save_both(img, slug)


# ---------- cups (coffee, matcha) -------------------------------------------

def draw_cup(slug: str, drink_color, foam_color=(245, 235, 215), foam_art="dot",
             style="mug", label: str | None = None, garnish: str | None = None) -> None:
    """Draw a coffee mug or glass with a drink colour and optional foam art."""
    img = new_canvas()
    rng = random.Random(slug)
    cx = CANVAS // 2

    if style == "mug":
        # ceramic mug
        cup_top_y = 170
        cup_bot_y = 510
        cup_left = cx - 170
        cup_right = cx + 170
        mug_color = (245, 240, 235)
        outline = (110, 95, 85)

        # shadow
        sm = Image.new("L", img.size, 0)
        ImageDraw.Draw(sm).rounded_rectangle([cup_left, cup_top_y, cup_right, cup_bot_y], radius=30, fill=255)
        soft_shadow(img, sm)

        d = ImageDraw.Draw(img)
        # body
        d.rounded_rectangle([cup_left, cup_top_y, cup_right, cup_bot_y], radius=30, fill=mug_color, outline=outline, width=4)
        # handle
        d.arc([cup_right - 10, cup_top_y + 70, cup_right + 90, cup_bot_y - 100], -90, 90, fill=outline, width=14)
        # drink surface (ellipse rim)
        rim_h = 40
        rim_box = [cup_left + 10, cup_top_y - rim_h // 2, cup_right - 10, cup_top_y + rim_h // 2]
        d.ellipse(rim_box, fill=drink_color, outline=outline, width=4)
        # foam
        if foam_art == "latte":
            # foam art rosette
            fa = Image.new("RGBA", img.size, (0, 0, 0, 0))
            fd = ImageDraw.Draw(fa)
            inner = [cup_left + 30, cup_top_y - rim_h // 2 + 6, cup_right - 30, cup_top_y + rim_h // 2 - 6]
            fd.ellipse(inner, fill=foam_color + (240,) if len(foam_color) == 3 else foam_color)
            # heart-ish line of dots
            mid_y = (inner[1] + inner[3]) // 2
            for i in range(7):
                x = inner[0] + 15 + i * ((inner[2] - inner[0] - 30) // 6)
                fd.ellipse([x - 5, mid_y - 5, x + 5, mid_y + 5], fill=drink_color)
            img.alpha_composite(fa)
        elif foam_art == "ring":
            d.ellipse([cup_left + 30, cup_top_y - rim_h // 2 + 6, cup_right - 30, cup_top_y + rim_h // 2 - 6],
                      fill=foam_color + (210,) if len(foam_color) == 3 else foam_color)
        elif foam_art == "crema":
            d.ellipse([cup_left + 20, cup_top_y - rim_h // 2 + 4, cup_right - 20, cup_top_y + rim_h // 2 - 4],
                      fill=(190, 130, 70, 230))

        # garnish (e.g. cinnamon dust dots, chocolate drizzle)
        if garnish == "cocoa":
            for _ in range(45):
                x = rng.randint(cup_left + 30, cup_right - 30)
                y = rng.randint(cup_top_y - 6, cup_top_y + 6)
                rr = rng.randint(1, 2)
                d.ellipse([x - rr, y - rr, x + rr, y + rr], fill=(80, 50, 30, 230))
        elif garnish == "matcha-dust":
            for _ in range(50):
                x = rng.randint(cup_left + 30, cup_right - 30)
                y = rng.randint(cup_top_y - 6, cup_top_y + 6)
                rr = rng.randint(1, 2)
                d.ellipse([x - rr, y - rr, x + rr, y + rr], fill=(70, 110, 50, 220))

    else:  # tall glass
        gl_top_y = 130
        gl_bot_y = 540
        gl_left = cx - 130
        gl_right = cx + 130
        glass_outline = (90, 100, 110)
        # shadow
        sm = Image.new("L", img.size, 0)
        ImageDraw.Draw(sm).rounded_rectangle([gl_left, gl_top_y, gl_right, gl_bot_y], radius=20, fill=255)
        soft_shadow(img, sm)
        d = ImageDraw.Draw(img)
        # glass body
        d.rounded_rectangle([gl_left, gl_top_y, gl_right, gl_bot_y], radius=20,
                            fill=(255, 255, 255, 90), outline=glass_outline, width=4)
        # drink (fill from 1/4 down)
        liq_top = gl_top_y + 40
        d.rounded_rectangle([gl_left + 6, liq_top, gl_right - 6, gl_bot_y - 6], radius=14, fill=drink_color)
        # ice / foam on top
        if foam_art == "foam":
            d.rounded_rectangle([gl_left + 6, liq_top - 30, gl_right - 6, liq_top + 20], radius=14,
                                fill=foam_color + (230,) if len(foam_color) == 3 else foam_color)
        elif foam_art == "ice":
            for _ in range(8):
                x = rng.randint(gl_left + 20, gl_right - 50)
                y = rng.randint(liq_top + 10, liq_top + 130)
                s = rng.randint(20, 38)
                d.rounded_rectangle([x, y, x + s, y + s], radius=4,
                                    fill=(255, 255, 255, 130), outline=(220, 230, 235, 200))
        # straw
        d.rounded_rectangle([cx + 30, gl_top_y - 60, cx + 50, gl_top_y + 80], radius=8, fill=(220, 80, 90))
        d.rounded_rectangle([cx + 32, gl_top_y - 60, cx + 48, gl_top_y + 80], radius=8, fill=(240, 110, 120, 180))

    if label:
        text_label(img, label, CANVAS - 50)

    save_both(img, slug)


# ---------- korean corn dog --------------------------------------------------

def draw_corn_dog(slug: str, coating_color, coating_texture="panko", topping=None, label: str | None = None) -> None:
    """Long corn dog on a stick, vertical orientation."""
    img = new_canvas()
    rng = random.Random(slug)
    cx = CANVAS // 2

    # stick at bottom
    stick_top = CANVAS - 110
    stick_bot = CANVAS - 30
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([cx - 10, stick_top, cx + 10, stick_bot], radius=4, fill=(210, 180, 130), outline=(140, 110, 70), width=2)

    # dog body
    body_top = 90
    body_bot = stick_top + 15
    body_left = cx - 90
    body_right = cx + 90
    # shadow
    sm = Image.new("L", img.size, 0)
    ImageDraw.Draw(sm).rounded_rectangle([body_left, body_top, body_right, body_bot], radius=70, fill=255)
    soft_shadow(img, sm)

    d.rounded_rectangle([body_left, body_top, body_right, body_bot], radius=70, fill=coating_color)
    # subtle vertical highlight
    hl = Image.new("RGBA", img.size, (0, 0, 0, 0))
    ImageDraw.Draw(hl).rounded_rectangle([body_left + 16, body_top + 12, body_left + 50, body_bot - 16],
                                         radius=20, fill=(255, 240, 200, 90))
    img.alpha_composite(hl)

    # coating texture
    body_mask = Image.new("L", img.size, 0)
    ImageDraw.Draw(body_mask).rounded_rectangle([body_left, body_top, body_right, body_bot], radius=70, fill=255)

    if coating_texture == "panko":
        speckle(img, body_mask, (220, 175, 110, 200), 320, (3, 6), rng)
        speckle(img, body_mask, (180, 130, 70, 230), 180, (2, 4), rng)
    elif coating_texture == "potato":
        # potato cube chunks
        for _ in range(60):
            x = rng.randint(body_left + 10, body_right - 25)
            y = rng.randint(body_top + 10, body_bot - 25)
            s = rng.randint(14, 22)
            if body_mask.getpixel((x + s // 2, y + s // 2)) > 30:
                d.rounded_rectangle([x, y, x + s, y + s], radius=3,
                                    fill=(245, 215, 140), outline=(180, 140, 80), width=1)
    elif coating_texture == "ramen":
        # crispy noodle stripes
        for _ in range(110):
            x = rng.randint(body_left, body_right - 18)
            y = rng.randint(body_top, body_bot - 4)
            if body_mask.getpixel((min(x + 6, CANVAS - 1), y)) > 30:
                length = rng.randint(8, 18)
                d.line([x, y, x + length, y + rng.randint(-2, 2)], fill=(225, 175, 100), width=2)
    elif coating_texture == "sugar":
        speckle(img, body_mask, (255, 252, 235, 230), 500, (2, 4), rng)
    elif coating_texture == "smooth":
        pass

    # topping (drizzle)
    if topping:
        td = Image.new("RGBA", img.size, (0, 0, 0, 0))
        tdraw = ImageDraw.Draw(td)
        for color, count in topping:
            for _ in range(count):
                y = rng.randint(body_top + 30, body_bot - 30)
                tdraw.line([body_left + 10, y + rng.randint(-2, 2), body_right - 10, y + rng.randint(-2, 2)],
                           fill=color, width=rng.randint(2, 4))
        img.alpha_composite(td)

    if label:
        text_label(img, label, CANVAS - 50)

    save_both(img, slug)


# ---------- catalog ----------------------------------------------------------

def generate_donuts() -> None:
    DOUGH = (240, 200, 145)
    items = [
        # slug,           glaze,                 toppings
        ("donut-original-glaze", (255, 245, 215), None),
        ("donut-chocolate",      (95, 55, 30),    [((255, 250, 240, 230), 14, (3, 5))]),
        ("donut-strawberry",     (235, 130, 145), [((255, 255, 255, 230), 26, (2, 4)),
                                                   ((230, 90, 100, 230), 10, (2, 3))]),
        ("donut-matcha-green-tea", (140, 175, 95), [((255, 255, 255, 200), 16, (2, 3)),
                                                    ((90, 130, 55, 230), 20, (2, 3))]),
        ("donut-ube-purple-yam", (160, 110, 185), [((255, 255, 255, 230), 18, (2, 3)),
                                                   ((130, 80, 160, 220), 14, (2, 3))]),
        ("donut-brown-sugar",    (180, 120, 70),  [((255, 245, 215, 220), 24, (2, 4))]),
        ("donut-seasonal-special", (235, 175, 90), [((220, 60, 70, 230), 12, (2, 4)),
                                                    ((230, 200, 60, 220), 12, (2, 4)),
                                                    ((255, 255, 255, 220), 14, (2, 3))]),
    ]
    for slug, glaze, top in items:
        draw_mochi_donut(slug, DOUGH, glaze, top)


def generate_malasadas() -> None:
    DOUGH = (240, 200, 140)
    items = [
        ("malasada-original",        DOUGH, "sugar",    None),
        ("malasada-cinnamon-sugar",  (235, 195, 135), "cinnamon", None),
        ("malasada-haupia-coconut",  DOUGH, "sugar",    (250, 250, 245)),
        ("malasada-chocolate",       DOUGH, "sugar",    (90, 55, 30)),
        ("malasada-custard",         DOUGH, "sugar",    (250, 220, 130)),
        ("malasada-li-hing-mui",     DOUGH, "lihing",   None),
    ]
    for slug, dough, coat, accent in items:
        draw_malasada(slug, dough, coat, accent)


def generate_coffee() -> None:
    items = [
        # slug, drink_color, foam_color, foam_art, style, garnish
        ("coffee-kona-coffee",  (75, 40, 20),    None, "ring",  "mug", None),
        ("coffee-espresso",     (55, 25, 12),    None, "crema", "mug", None),
        ("coffee-americano",    (85, 45, 22),    None, "ring",  "mug", None),
        ("coffee-latte",        (165, 110, 65),  (250, 240, 220), "latte", "mug", None),
        ("coffee-cappuccino",   (140, 90, 50),   (250, 240, 220), "latte", "mug", "cocoa"),
        ("coffee-kona-cold-brew", (60, 35, 20),  None, "ice", "tall", None),
        ("coffee-kona-affogato", (90, 55, 30),   (245, 240, 220), "latte", "mug", None),
        ("coffee-mocha",        (90, 55, 35),    (245, 220, 200), "latte", "mug", "cocoa"),
        ("coffee-ube-latte",    (175, 130, 195), (240, 225, 245), "latte", "mug", None),
        ("coffee-hot-chocolate", (75, 45, 30),   (250, 240, 230), "latte", "mug", "cocoa"),
        ("coffee-loose-leaf-tea", (170, 110, 60), None, "ring",  "mug", None),
    ]
    for slug, drink, foam, art, style, garnish in items:
        draw_cup(slug, drink, foam or (245, 235, 215), foam_art=art, style=style, garnish=garnish)


def generate_matcha() -> None:
    items = [
        ("matcha-azuki-latte",      (160, 100, 95),  (240, 220, 215), "latte", "mug", None),
        ("matcha-strawberry-latte", (235, 145, 160), (250, 230, 235), "latte", "mug", None),
        ("matcha-latte",            (130, 175, 95),  (235, 245, 215), "latte", "mug", "matcha-dust"),
        ("matcha-hojicha-latte",    (170, 110, 65),  (240, 225, 200), "latte", "mug", None),
        ("matcha-guava",            (235, 140, 150), (250, 235, 230), "ice",   "tall", None),
        ("matcha-lilikoi",          (235, 195, 75),  (250, 240, 215), "ice",   "tall", None),
        ("matcha-mango",            (240, 175, 70),  (250, 235, 200), "ice",   "tall", None),
        ("matcha-coconut",          (235, 235, 215), (250, 245, 230), "ice",   "tall", None),
        ("matcha-banana",           (235, 220, 130), (250, 245, 215), "ice",   "tall", None),
    ]
    for slug, drink, foam, art, style, garnish in items:
        draw_cup(slug, drink, foam, foam_art=art, style=style, garnish=garnish)


def generate_smoothies() -> None:
    items = [
        ("smoothie-acai-berry",        (95, 50, 110),  (245, 230, 250), "foam", "tall"),
        ("smoothie-strawberry-banana", (235, 150, 165), (250, 235, 230), "foam", "tall"),
        ("smoothie-coconut-pineapple", (245, 230, 175), (255, 250, 235), "foam", "tall"),
        ("smoothie-mango-coconut-lilikoi", (240, 185, 80), (255, 240, 215), "foam", "tall"),
    ]
    for slug, drink, foam, art, style in items:
        draw_cup(slug, drink, foam, foam_art=art, style=style)


def generate_corn_dogs() -> None:
    items = [
        # slug, coating, texture, topping
        ("corn-dog-classic-sausage",   (220, 165, 95), "panko", None),
        ("corn-dog-mozzarella-cheese", (235, 200, 130), "panko", [((250, 230, 110, 230), 4)]),
        ("corn-dog-half-and-half",     (225, 175, 105), "panko", [((250, 235, 130, 220), 3),
                                                                   ((220, 90, 70, 220), 3)]),
        ("corn-dog-potato",            (230, 195, 130), "potato", None),
        ("corn-dog-crispy-ramen",      (230, 185, 110), "ramen", None),
        ("corn-dog-sugar-dog",         (225, 180, 120), "sugar", [((220, 80, 70, 230), 3)]),
    ]
    for slug, coat, tex, top in items:
        draw_corn_dog(slug, coat, tex, top)


def main() -> None:
    print("Generating individual menu item images …")
    generate_donuts()
    generate_malasadas()
    generate_coffee()
    generate_matcha()
    generate_smoothies()
    generate_corn_dogs()
    print(f"\nDone — output in {OUT_DIR.relative_to(ROOT)}/")


if __name__ == "__main__":
    main()
