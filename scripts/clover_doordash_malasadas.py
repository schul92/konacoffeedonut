#!/usr/bin/env python3
"""Add DELIVERY-ONLY malasada items to Clover for the DoorDash/Uber Eats sync.

CREATE-ONLY (never modifies existing menu). Safe to re-run (skips by name).

Pattern: per-slot flavor groups so customers CAN repeat flavors —
  "Classic Malasadas - 3 Pack" gets groups "Classic Flavor 1..3", each pick-1.

  Classic (Original/Cinnamon/Ube):        1pc $3.95 / 3pk $11.25 / 6pk $22.50 / 12pk $45.00
  Cream (Custard/Ube Cream/Nutella/
         Macadamia Nut/Coconut/Red Bean): 1pc $4.95 / 3pk $14.25 / 6pk $28.50 / 12pk $57.00

Requires CLOVER_API_TOKEN_RW in .env.local.
Run:  python3 scripts/clover_doordash_malasadas.py          # dry-run
      python3 scripts/clover_doordash_malasadas.py --apply
"""
import json
import os
import sys
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
for line in (ROOT / ".env.local").read_text().splitlines():
    if "=" in line and not line.strip().startswith("#"):
        k, v = line.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))

BASE = os.environ.get("CLOVER_BASE_URL", "https://api.clover.com")
MID = os.environ["CLOVER_MERCHANT_ID"]
TOKEN = os.environ.get("CLOVER_API_TOKEN_RW") or os.environ["CLOVER_API_TOKEN"]
APPLY = "--apply" in sys.argv

CATEGORY_NAME = "ONLINE - DONUTS"  # same delivery category as the mochi packs

CLASSIC_FLAVORS = ["Original", "Cinnamon", "Ube"]
CREAM_FLAVORS = ["Custard", "Ube Cream", "Nutella", "Macadamia Nut", "Coconut", "Red Bean"]

# (item name, price cents, group prefix, flavor list, slot count)
ITEMS = [
    ("Classic Malasada - 1 Piece", 395, "Classic Malasada Flavor", CLASSIC_FLAVORS, 1),
    ("Classic Malasadas - 3 Pack", 1125, "Classic Malasada Flavor", CLASSIC_FLAVORS, 3),
    ("Classic Malasadas - 6 Pack", 2250, "Classic Malasada Flavor", CLASSIC_FLAVORS, 6),
    ("Classic Malasadas - 12 Pack", 4500, "Classic Malasada Flavor", CLASSIC_FLAVORS, 12),
    ("Cream Malasada - 1 Piece", 495, "Cream Malasada Flavor", CREAM_FLAVORS, 1),
    ("Cream Malasadas - 3 Pack", 1425, "Cream Malasada Flavor", CREAM_FLAVORS, 3),
    ("Cream Malasadas - 6 Pack", 2850, "Cream Malasada Flavor", CREAM_FLAVORS, 6),
    ("Cream Malasadas - 12 Pack", 5700, "Cream Malasada Flavor", CREAM_FLAVORS, 12),
]


def api(method, path, body=None, attempts=6):
    for i in range(attempts):
        req = urllib.request.Request(
            f"{BASE}/v3/merchants/{MID}/{path}",
            data=json.dumps(body).encode() if body is not None else None,
            headers={"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"},
            method=method,
        )
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.load(r)
        except urllib.error.HTTPError as e:
            if e.code in (429, 500, 502, 503) and i < attempts - 1:
                time.sleep(2 ** i)
                continue
            raise


def get_all(path, q=""):
    return api("GET", f"{path}?limit=1000{q}").get("elements", [])


def ensure_group(name, flavors, cache):
    """Create pick-exactly-1 group with the given flavors if missing; return id."""
    if name in cache:
        return cache[name]
    print(f"create group: {name}  (pick 1 of {len(flavors)})")
    gid = None
    if APPLY:
        gid = api("POST", "modifier_groups", {
            "name": name, "minRequired": 1, "maxAllowed": 1, "showByDefault": True})["id"]
        for fl in flavors:
            api("POST", f"modifier_groups/{gid}/modifiers", {"name": fl, "price": 0})
            time.sleep(0.3)
    cache[name] = gid
    return gid


def main():
    mode = "APPLY" if APPLY else "DRY-RUN"
    print(f"[{mode}] adding delivery malasadas on merchant {MID}\n")
    existing_items = {i["name"]: i["id"] for i in get_all("items")}
    groups = {g["name"]: g["id"] for g in get_all("modifier_groups")}
    cats = {c["name"]: c["id"] for c in get_all("categories")}
    cat_id = cats.get(CATEGORY_NAME)
    if not cat_id:
        sys.exit(f"category {CATEGORY_NAME} missing — run clover_doordash_menu.py first")

    for item_name, price, prefix, flavors, slots in ITEMS:
        # per-slot groups: "<prefix> 1".."<prefix> N" (shared across pack sizes)
        gids = []
        for s in range(1, slots + 1):
            gname = f"{prefix} {s}" if slots > 1 else f"{prefix} 1"
            gids.append(ensure_group(gname, flavors, groups))

        iid = existing_items.get(item_name)
        if iid:
            print(f"item exists: {item_name}")
        else:
            print(f"create item: {item_name}  ${price/100:.2f}  ({slots} flavor slot{'s' if slots>1 else ''})")
            if APPLY:
                iid = api("POST", "items", {
                    "name": item_name, "price": price, "priceType": "FIXED",
                    "defaultTaxRates": True, "isRevenue": True})["id"]
                existing_items[item_name] = iid

        if APPLY and iid:
            api("POST", "item_modifier_groups", {"elements": [
                {"modifierGroup": {"id": g}, "item": {"id": iid}} for g in gids if g]})
            api("POST", "category_items", {"elements": [
                {"category": {"id": cat_id}, "item": {"id": iid}}]})
            print(f"  linked: {item_name} <- {len(gids)} slot groups & {CATEGORY_NAME}")
        time.sleep(0.4)

    print(f"\n[{mode}] done. Existing menu untouched (create-only).")


if __name__ == "__main__":
    main()
