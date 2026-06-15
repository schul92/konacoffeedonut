#!/usr/bin/env python3
"""Submit URLs to IndexNow (Bing, Yandex, Seznam) for near-instant re-crawl.

Bing powers ChatGPT web search, so IndexNow helps both Bing ranking AND AI-search
visibility for the kona-coffee pages. Google does NOT use IndexNow — use
submit_to_indexing_api.py for Google.

Run this AFTER deploying (the URLs must be live):
  python3 scripts/submit_to_indexnow.py
"""
import json
import urllib.request

KEY = "88d9f1762ee441189b3d1a9e2788859e"  # matches /public/<KEY>.txt
HOST = "www.konacoffeedonut.com"
SITE = f"https://{HOST}"
KEY_LOCATION = f"{SITE}/{KEY}.txt"
LOCALES = ["en", "ja", "ko", "zh", "es"]

# Pages touched by the kona-coffee SEO pass (re-crawl these first)
PATHS = [
    "",                                  # home
    "/menu/kona-coffee",                 # canonical kona commercial page
    "/about-kona-coffee",
    "/blog/what-is-kona-coffee",
    "/blog/is-kona-coffee-worth-it",
    "/blog/kona-coffee-guide",
    "/blog/where-to-try-kona-coffee-waikiki",
    "/blog/kona-affogato-waikiki",
]


def build_urls():
    urls = []
    for p in PATHS:
        for loc in LOCALES:
            urls.append(f"{SITE}/{loc}{p}")
    return urls


def main():
    urls = build_urls()
    payload = {
        "host": HOST,
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls,
    }
    req = urllib.request.Request(
        "https://api.indexnow.org/indexnow",
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    print(f"submitting {len(urls)} URLs to IndexNow (Bing/Yandex/Seznam)...")
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            print(f"HTTP {resp.status} {resp.reason}")
            # 200/202 = accepted. 403 = key not found at keyLocation (deploy first).
            if resp.status in (200, 202):
                print("accepted — Bing/Yandex will re-crawl shortly.")
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", "ignore")[:200]
        print(f"HTTP {e.code}: {body}")
        if e.code == 403:
            print("403 = key file not reachable. Deploy first so "
                  f"{KEY_LOCATION} returns 200, then re-run.")
    except Exception as e:
        print(f"error: {type(e).__name__}: {e}")


if __name__ == "__main__":
    main()
