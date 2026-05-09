#!/usr/bin/env python3
"""Submit URLs to Google Indexing API for fast (24-48h) indexing.

Uses the kona-indexing service account which has Owner access to the GSC property.
Indexing API officially supports JobPosting and BroadcastEvent only, but in practice
also indexes other pages submitted via URL_UPDATED. We send URL_UPDATED notifications
for our newly published blog posts.
"""

import sys
import time
from pathlib import Path

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


def submit_with_retry(svc, url: str, attempts: int = 3) -> str:
    """Submit one URL sequentially with retries. Concurrent submission causes SSL/timeout
    failures against the Indexing API — sequential with light delay is reliable."""
    last_err = None
    for i in range(attempts):
        try:
            svc.urlNotifications().publish(body={"url": url, "type": "URL_UPDATED"}).execute()
            return "OK"
        except Exception as e:
            last_err = f"{type(e).__name__}: {str(e)[:80]}"
            if i < attempts - 1:
                time.sleep(1.5)
    return f"ERR {last_err}"


def main():
    if not KEY_FILE.exists():
        sys.exit(f"missing service account key: {KEY_FILE}")

    creds = service_account.Credentials.from_service_account_file(str(KEY_FILE), scopes=SCOPES)
    svc = build("indexing", "v3", credentials=creds, cache_discovery=False)

    urls = build_url_list()
    print(f"submitting {len(urls)} URLs to Google Indexing API (sequential + retries)")
    print(f"({len(NEW_SLUGS)} new blogs × {len(LOCALES)} locales + {len(UPDATED_PAGES)} updated pages × {len(LOCALES)} locales)")
    print()

    success = fail = 0
    for url in urls:
        short = url.replace(SITE, "")
        status = submit_with_retry(svc, url)
        if status == "OK":
            success += 1
            print(f"  ✓ {short}", flush=True)
        else:
            fail += 1
            print(f"  ✗ {short}  →  {status}", flush=True)
        time.sleep(0.3)  # gentle pacing

    print()
    print(f"summary: {success} succeeded, {fail} failed")
    if fail:
        sys.exit(1)


if __name__ == "__main__":
    main()
