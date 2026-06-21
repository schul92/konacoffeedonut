#!/usr/bin/env python3
"""Free keyword miner — expands seed terms via Google's public Suggest/autocomplete
API (no API key, no login). Closest free analog to Ahrefs keyword discovery: it
returns the real queries people type. Cross-reference output with GSC to find gaps.

Usage:
  python3 scripts/keyword_mine.py            # mines the built-in Waikiki/Kona seeds
  python3 scripts/keyword_mine.py "kona coffee" "mochi donut waikiki"
Output: prints + writes keyword_ideas.txt
"""
import json
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "keyword_ideas.txt"

SEEDS = sys.argv[1:] or [
    "kona coffee", "kona coffee waikiki", "kona coffee near me", "100% kona coffee",
    "coffee waikiki", "best coffee waikiki", "coffee near waikiki beach",
    "where to drink kona coffee", "kona coffee oahu", "iced coffee waikiki",
    "donuts waikiki", "mochi donut", "mochi donut waikiki", "best donuts waikiki",
    "malasada waikiki", "bingsu waikiki", "coffee and donut waikiki",
    "kona coffee and donut", "breakfast waikiki", "dessert waikiki",
    "cafe waikiki", "acai bowl waikiki",
]

# "Alphabet soup" + intent modifiers — same trick paid tools use.
ALPHA = list("abcdefghijklmnopqrstuvwxyz")
PREFIX = ["best", "where", "how", "why", "cheap", "good", "top", "is", "what", "near"]
SUFFIX = ["near me", "waikiki", "honolulu", "oahu", "hawaii", "open now", "vs", "price", "menu", "reviews", "for"]

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"


def suggest(q: str):
    url = ("https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q="
           + urllib.parse.quote(q))
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=10) as r:
            data = json.loads(r.read().decode("utf-8", "ignore"))
        return data[1] if isinstance(data, list) and len(data) > 1 else []
    except Exception:
        return []


def main():
    ideas = set()
    queries = []
    for seed in SEEDS:
        queries.append(seed)
        for a in ALPHA:
            queries.append(f"{seed} {a}")
        for p in PREFIX:
            queries.append(f"{p} {seed}")
        for s in SUFFIX:
            queries.append(f"{seed} {s}")
    seen = set()
    queries = [q for q in queries if not (q in seen or seen.add(q))]
    print(f"mining {len(queries)} probe queries across {len(SEEDS)} seeds (free Google Suggest)...")
    for i, q in enumerate(queries):
        for s in suggest(q):
            ideas.add(s.lower().strip())
        if i % 50 == 0:
            print(f"  {i}/{len(queries)} probes · {len(ideas)} unique ideas so far", flush=True)
        time.sleep(0.12)  # be polite
    out = sorted(ideas)
    OUT.write_text("\n".join(out) + "\n")
    print(f"\n{len(out)} unique real keyword ideas → {OUT}")
    # show the kona/coffee/donut-relevant ones grouped
    def show(label, kw):
        hits = [k for k in out if any(t in k for t in kw)]
        print(f"\n=== {label} ({len(hits)}) ===")
        for k in hits[:40]:
            print(f"  {k}")
    show("KONA COFFEE", ["kona"])
    show("DONUT / MOCHI / MALASADA", ["donut", "mochi", "malasada"])
    show("WAIKIKI LOCAL", ["waikiki", "near me", "oahu", "honolulu"])


if __name__ == "__main__":
    main()
