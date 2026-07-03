#!/usr/bin/env python3
"""Create the DELIVERY-ONLY donut menu in Clover for the DoorDash/Uber Eats sync.

CREATE-ONLY: never modifies or deletes any existing item/category/modifier group.
Safe to re-run — skips anything (by name) that already exists.

What it builds:
  Category  "ONLINE - DONUTS"
  Items     "Mochi Donuts - 3 Pack"  $11.25  + modifier group "Choose Your 3 Flavors" (pick exactly 3)
            "Mochi Donuts - 6 Pack"  $22.50  + "Choose Your 6 Flavors"  (pick exactly 6)
            "Mochi Donuts - 12 Pack" $45.00  + "Choose Your 12 Flavors" (pick exactly 12)
  Each flavor group carries the same 24 flavors (all +$0), cleaned-up customer-facing names.

Requires a token WITH INVENTORY WRITE — set CLOVER_API_TOKEN_RW in .env.local
(the regular CLOVER_API_TOKEN is read-only and stays untouched for the website).

Run:  python3 scripts/clover_doordash_menu.py          # dry-run (prints plan)
      python3 scripts/clover_doordash_menu.py --apply  # actually creates
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

# customer-facing flavor names (cleaned from the POS group "* TYPE (Mochi Donut)")
FLAVORS = [
    "Plain", "Cookies & Cream", "Nutella", "Injeolmi", "Ube", "Ube Churro",
    "Dark Chocolate", "Vietnamese Coffee", "Yuzu", "Black Sesame", "Matcha",
    "Coconut", "Yogurt Pebble", "Blueberry", "Churro", "Guava Pineapple",
    "Taro", "Milk Tea", "Peanut Butter", "Strawberry", "Pistachio",
    "White Choco Raspberry", "Mango", "Banana",
]

CATEGORY_NAME = "ONLINE - DONUTS"
PACKS = [
    # (item name, price cents, group name, pick count)
    ("Mochi Donuts - 3 Pack", 1125, "Choose Your 3 Flavors", 3),
    ("Mochi Donuts - 6 Pack", 2250, "Choose Your 6 Flavors", 6),
    ("Mochi Donuts - 12 Pack", 4500, "Choose Your 12 Flavors", 12),
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
                wait = 2 ** i  # 1,2,4,8,16s
                print(f"    ({e.code} rate-limited — retrying in {wait}s)")
                time.sleep(wait)
                continue
            raise


def get_all(path, q=""):
    return api("GET", f"{path}?limit=1000{q}").get("elements", [])


def main():
    mode = "APPLY" if APPLY else "DRY-RUN"
    print(f"[{mode}] building delivery donut menu on merchant {MID}\n")

    # ---- write-permission preflight (create + immediately delete a probe group)
    if APPLY:
        try:
            probe = api("POST", "modifier_groups", {"name": "ZZ WRITE PROBE - DELETE"})
            api("DELETE", f"modifier_groups/{probe['id']}")
            print("write permission: OK\n")
        except Exception as e:
            sys.exit(f"NO WRITE PERMISSION with current token ({e}).\n"
                     "-> Clover Dashboard > Account & Setup > API Tokens > create token "
                     "with Inventory READ+WRITE, put it in .env.local as CLOVER_API_TOKEN_RW")

    existing_items = {i["name"]: i["id"] for i in get_all("items")}
    existing_groups = {g["name"]: g["id"] for g in get_all("modifier_groups")}
    existing_cats = {c["name"]: c["id"] for c in get_all("categories")}

    # ---- category
    cat_id = existing_cats.get(CATEGORY_NAME)
    if cat_id:
        print(f"category exists: {CATEGORY_NAME} ({cat_id})")
    else:
        print(f"create category: {CATEGORY_NAME}")
        if APPLY:
            cat_id = api("POST", "categories", {"name": CATEGORY_NAME})["id"]

    for item_name, price, group_name, pick in PACKS:
        # ---- modifier group (minRequired = maxAllowed = pick count)
        gid = existing_groups.get(group_name)
        if gid:
            print(f"group exists: {group_name} ({gid})")
        else:
            print(f"create group: {group_name}  (pick exactly {pick}) + {len(FLAVORS)} flavors")
            if APPLY:
                gid = api("POST", "modifier_groups", {
                    "name": group_name, "minRequired": pick, "maxAllowed": pick,
                    "showByDefault": True,
                })["id"]
                for fl in FLAVORS:
                    api("POST", f"modifier_groups/{gid}/modifiers", {"name": fl, "price": 0})
                    time.sleep(0.35)  # stay under rate limit

        # ---- item
        iid = existing_items.get(item_name)
        if iid:
            print(f"item exists: {item_name} ({iid})")
        else:
            print(f"create item: {item_name}  ${price/100:.2f}")
            if APPLY:
                iid = api("POST", "items", {
                    "name": item_name, "price": price, "priceType": "FIXED",
                    "defaultTaxRates": True, "isRevenue": True,
                })["id"]

        # ---- associations
        if APPLY and iid and gid:
            api("POST", "item_modifier_groups", {
                "elements": [{"modifierGroup": {"id": gid}, "item": {"id": iid}}]})
            if cat_id:
                api("POST", "category_items", {
                    "elements": [{"category": {"id": cat_id}, "item": {"id": iid}}]})
            print(f"  linked: {item_name} <- {group_name} & {CATEGORY_NAME}")
        time.sleep(0.5)

    print(f"\n[{mode}] done. Existing menu untouched (create-only).")
    if not APPLY:
        print("run again with --apply once CLOVER_API_TOKEN_RW is set.")


if __name__ == "__main__":
    main()
