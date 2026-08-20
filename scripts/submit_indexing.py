#!/usr/bin/env python3
"""Submit a blog post's locale URLs to the Google Indexing API.

Usage: python3 scripts/submit_indexing.py <slug> [<slug> ...]
"""
from __future__ import annotations

import sys
from pathlib import Path

from google.oauth2 import service_account
from googleapiclient.discovery import build

ROOT = Path(__file__).resolve().parent.parent
LOCALES = ["en", "ja", "ko", "zh", "es"]


def main() -> int:
    if len(sys.argv) < 2:
        print("usage: submit_indexing.py <slug> [...]", file=sys.stderr)
        return 2
    creds = service_account.Credentials.from_service_account_file(
        str(ROOT / "google-service-account.json"),
        scopes=["https://www.googleapis.com/auth/indexing"],
    )
    svc = build("indexing", "v3", credentials=creds)
    n = 0
    for slug in sys.argv[1:]:
        for loc in LOCALES:
            url = f"https://www.konacoffeedonut.com/{loc}/blog/{slug}"
            svc.urlNotifications().publish(body={"url": url, "type": "URL_UPDATED"}).execute()
            print("submitted:", url)
            n += 1
    print(f"total submitted: {n}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
