#!/usr/bin/env python3
"""Submit URLs to Google Indexing API for fast (24-48h) indexing.

Uses the kona-indexing service account which has Owner access to the GSC property.
Indexing API officially supports JobPosting and BroadcastEvent only, but in practice
also indexes other pages submitted via URL_UPDATED. We send URL_UPDATED notifications
for our newly published blog posts.
"""

import json
import sys
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

from google.oauth2 import service_account
from googleapiclient.discovery import build

ROOT = Path(__file__).resolve().parent.parent
KEY_FILE = ROOT / "google-service-account.json"
SCOPES = ["https://www.googleapis.com/auth/indexing"]
SITE = "https://www.konacoffeedonut.com"
LOCALES = ["en", "ja", "ko", "zh", "es"]

# New blog slugs (revenue-focused posts deployed May 2026)
NEW_SLUGS = [
    "best-bingsu-waikiki",
    "mochi-donut-flavors-waikiki",
    "best-smoothies-waikiki",
    "where-to-try-kona-coffee-waikiki",
    "malasada-vs-mochi-donut-waikiki",
    "kona-affogato-waikiki",
]

# Existing pages that received SEO updates (re-submit so Google re-crawls)
UPDATED_PAGES = [
    "/blog/what-is-bingsu",  # title + meta description rewrite
    "/menu/bingsu",          # added related-reading internal links
    "/menu/mochi-donuts",
    "/menu/kona-coffee",
]


def build_url_list():
    urls = []
    for slug in NEW_SLUGS:
        for loc in LOCALES:
            urls.append(f"{SITE}/{loc}/blog/{slug}")
    for path in UPDATED_PAGES:
        for loc in LOCALES:
            urls.append(f"{SITE}/{loc}{path}")
    return urls


def submit(svc, url: str) -> tuple[str, str]:
    try:
        resp = svc.urlNotifications().publish(
            body={"url": url, "type": "URL_UPDATED"}
        ).execute()
        ts = resp.get("urlNotificationMetadata", {}).get("latestUpdate", {}).get("notifyTime", "ok")
        return (url, f"OK {ts}")
    except Exception as e:
        return (url, f"ERR {type(e).__name__}: {e}")


def main():
    if not KEY_FILE.exists():
        sys.exit(f"missing service account key: {KEY_FILE}")

    creds = service_account.Credentials.from_service_account_file(str(KEY_FILE), scopes=SCOPES)
    svc = build("indexing", "v3", credentials=creds, cache_discovery=False)

    urls = build_url_list()
    print(f"submitting {len(urls)} URLs to Google Indexing API")
    print(f"({len(NEW_SLUGS)} new blogs × {len(LOCALES)} locales + {len(UPDATED_PAGES)} updated pages × {len(LOCALES)} locales)")
    print()

    success = fail = 0
    with ThreadPoolExecutor(max_workers=10) as pool:
        futures = [pool.submit(submit, svc, u) for u in urls]
        for f in as_completed(futures):
            url, status = f.result()
            short = url.replace(SITE, "")
            if status.startswith("OK"):
                success += 1
                print(f"  ✓ {short}")
            else:
                fail += 1
                print(f"  ✗ {short}  →  {status}")

    print()
    print(f"summary: {success} succeeded, {fail} failed")
    if fail:
        sys.exit(1)


if __name__ == "__main__":
    main()
