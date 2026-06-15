#!/usr/bin/env python3
"""Generate a printable "Review us on Google" QR card for the register / receipts.

Reviews are the #1 lever for the Google Maps local pack (where "kona coffee near me"
/ "kona coffee waikiki" clicks go). Competitors have 6,000-13,000 Google reviews;
Kona Coffee Donut has ~11. Putting this card at the register is the fastest way to
close that gap.

USAGE
  # Best: paste the exact "write a review" link from your Google Business Profile
  #   (GBP dashboard -> Ask for reviews -> copy link, looks like
  #    https://g.page/r/XXXXXXXXXXXX/review  or
  #    https://search.google.com/local/writereview?placeid=XXXX)
  python3 scripts/generate_review_qr.py "https://g.page/r/XXXXXXXXXX/review"

  # Fallback (works without the place ID — opens the Maps listing to review):
  python3 scripts/generate_review_qr.py

Output: ./review-qr-card.png  (4x6in @ 300dpi, print-ready)
"""
import sys
from pathlib import Path
import qrcode
from qrcode.constants import ERROR_CORRECT_H
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "review-qr-card.png"

# Functional fallback: a Maps search that resolves to the business listing, where
# the user can tap the stars to leave a review. Replace with the exact GBP review
# link for one-tap reviewing.
FALLBACK_URL = (
    "https://www.google.com/maps/search/?api=1&"
    "query=Kona%20Coffee%20Donut%202142%20Kalakaua%20Ave%20Honolulu"
)
url = sys.argv[1] if len(sys.argv) > 1 else FALLBACK_URL

# ---- palette ----
INK = (29, 43, 58)
ORANGE = (232, 116, 59)
GOLD = (244, 178, 97)
WHITE = (255, 255, 255)

# 4x6 inch @ 300 dpi
W, H = 1200, 1800
card = Image.new("RGB", (W, H), WHITE)
d = ImageDraw.Draw(card)

# top band
d.rectangle([0, 0, W, 250], fill=INK)


def font(size, bold=False):
    paths = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ]
    for p in paths:
        try:
            return ImageFont.truetype(p, size)
        except Exception:
            continue
    return ImageFont.load_default()


def ufont(size):
    """Unicode/CJK + symbol capable font (for Korean/Japanese/Chinese + stars)."""
    paths = [
        "/Library/Fonts/Arial Unicode.ttf",
        "/System/Library/Fonts/Supplemental/Arial Unicode.ttf",
        "/System/Library/Fonts/Supplemental/AppleGothic.ttf",
        "/System/Library/Fonts/AppleSDGothicNeo.ttc",
    ]
    for p in paths:
        try:
            return ImageFont.truetype(p, size)
        except Exception:
            continue
    return font(size)


def center(text, y, f, fill):
    w = d.textlength(text, font=f)
    d.text(((W - w) / 2, y), text, font=f, fill=fill)


center("KONA COFFEE DONUT", 95, font(58, bold=True), WHITE)
center("Waikiki  ·  2142 Kalakaua Ave", 175, font(34), GOLD)

# headline
center("Enjoyed your visit?", 330, font(64, bold=True), INK)
center("Leave us a Google review", 420, font(52), ORANGE)
center("리뷰 남겨주세요  ·  レビューお願いします  ·  请留下评价", 510, ufont(30), INK)

# stars
center("★ ★ ★ ★ ★", 580, ufont(70), GOLD)

# QR
qr = qrcode.QRCode(version=None, error_correction=ERROR_CORRECT_H, box_size=12, border=2)
qr.add_data(url)
qr.make(fit=True)
qr_img = qr.make_image(fill_color=(29, 43, 58), back_color="white").convert("RGB")
qs = 640
qr_img = qr_img.resize((qs, qs))
card.paste(qr_img, ((W - qs) // 2, 720))

# frame around QR
d.rectangle([(W - qs) // 2 - 16, 720 - 16, (W + qs) // 2 + 16, 720 + qs + 16],
            outline=ORANGE, width=6)

center("Scan with your phone camera", 1410, font(36, bold=True), INK)
center("It takes 10 seconds — mahalo!", 1470, font(32), ORANGE)

# bottom band
d.rectangle([0, H - 70, W, H], fill=INK)
center("konacoffeedonut.com", H - 55, font(28), GOLD)

card.save(OUT, dpi=(300, 300))
print(f"saved: {OUT}  (4x6in @ 300dpi, print-ready)")
print(f"QR points to: {url}")
if url == FALLBACK_URL:
    print("\nNOTE: using the Maps-search fallback link. For one-tap reviewing,")
    print("re-run with your exact GBP review link:")
    print('  python3 scripts/generate_review_qr.py "https://g.page/r/XXXX/review"')
