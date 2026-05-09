#!/usr/bin/env python3
"""Analyze blog performance from GSC + GA4 to find impression-growth opportunities.

Outputs a focused report:
- GSC: blog pages by impressions/clicks/CTR/position over last 28 days
- GSC: queries hitting blog pages, especially "opportunity zone" (positions 10-30)
- GSC: high-impression / low-CTR pages (title or meta description fix candidates)
- GA4: blog session quality (engagement, bounce, time on page)
- Action list: which posts to refresh first to grow impressions
"""

import json
import sys
from collections import defaultdict
from datetime import date, timedelta
from pathlib import Path

from google.oauth2 import service_account
from googleapiclient.discovery import build

ROOT = Path(__file__).resolve().parent.parent
KEY_FILE = ROOT / "google-service-account.json"
GSC_PROPERTY = "sc-domain:konacoffeedonut.com"
GA4_PROPERTY_ID = None  # filled in below if available

GSC_SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]
GA4_SCOPES = ["https://www.googleapis.com/auth/analytics.readonly"]

DAYS = 28
END = date.today()
START = END - timedelta(days=DAYS)


def gsc_client():
    creds = service_account.Credentials.from_service_account_file(
        str(KEY_FILE), scopes=GSC_SCOPES
    )
    return build("searchconsole", "v1", credentials=creds, cache_discovery=False)


def gsc_query(svc, dimensions, row_limit=1000, filters=None):
    body = {
        "startDate": START.isoformat(),
        "endDate": END.isoformat(),
        "dimensions": dimensions,
        "rowLimit": row_limit,
    }
    if filters:
        body["dimensionFilterGroups"] = [{"filters": filters}]
    return svc.searchanalytics().query(siteUrl=GSC_PROPERTY, body=body).execute().get("rows", [])


def section(title):
    print("\n" + "=" * 72)
    print(title)
    print("=" * 72)


def is_blog(url: str) -> bool:
    return "/blog/" in url


def fmt_pct(x): return f"{x*100:.2f}%"


def main():
    if not KEY_FILE.exists():
        sys.exit(f"missing service account key: {KEY_FILE}")

    print(f"Window: {START} → {END} ({DAYS} days)")
    print(f"Property: {GSC_PROPERTY}")

    gsc = gsc_client()

    # ----- Site totals (sanity check) -----
    section("SITE TOTALS (all pages)")
    totals = gsc_query(gsc, dimensions=[], row_limit=1)
    if totals:
        r = totals[0]
        print(f"  clicks: {int(r['clicks']):,}")
        print(f"  impressions: {int(r['impressions']):,}")
        print(f"  CTR: {fmt_pct(r['ctr'])}")
        print(f"  avg position: {r['position']:.2f}")
    else:
        print("  no data")

    # ----- Blog pages performance -----
    section("BLOG PAGES — by impressions (last 28d)")
    page_rows = gsc_query(gsc, dimensions=["page"], row_limit=1000)
    blog_pages = [r for r in page_rows if is_blog(r["keys"][0])]
    blog_pages.sort(key=lambda r: -r["impressions"])

    blog_total_impr = sum(r["impressions"] for r in blog_pages)
    blog_total_clicks = sum(r["clicks"] for r in blog_pages)
    print(f"  {len(blog_pages)} blog URLs found")
    print(f"  blog impressions: {int(blog_total_impr):,}  |  blog clicks: {int(blog_total_clicks):,}")
    if blog_total_impr:
        print(f"  blog overall CTR: {fmt_pct(blog_total_clicks/blog_total_impr)}")

    print(f"\n  {'IMPR':>7} {'CLICKS':>7} {'CTR':>7} {'POS':>6}  PAGE")
    for r in blog_pages[:25]:
        page = r["keys"][0].replace("https://www.konacoffeedonut.com", "").replace("https://konacoffeedonut.com", "")
        print(f"  {int(r['impressions']):>7,} {int(r['clicks']):>7,} {fmt_pct(r['ctr']):>7} {r['position']:>6.1f}  {page}")

    # ----- High-impression / low-CTR (title-tune candidates) -----
    section("CTR FIX CANDIDATES — high impressions, low CTR (<2%)")
    print("These pages get seen but not clicked — title and meta description are the levers.\n")
    candidates = [r for r in blog_pages if r["impressions"] >= 50 and r["ctr"] < 0.02]
    candidates.sort(key=lambda r: -r["impressions"])
    if not candidates:
        print("  (none — every blog page with 50+ impressions has CTR ≥ 2%)")
    else:
        print(f"  {'IMPR':>7} {'CTR':>7} {'POS':>6}  PAGE")
        for r in candidates[:15]:
            page = r["keys"][0].replace("https://www.konacoffeedonut.com", "").replace("https://konacoffeedonut.com", "")
            print(f"  {int(r['impressions']):>7,} {fmt_pct(r['ctr']):>7} {r['position']:>6.1f}  {page}")

    # ----- Opportunity zone queries (position 10-30) on blog pages -----
    section("OPPORTUNITY ZONE QUERIES — position 10-30 hitting blog pages")
    print("These queries are 1 page away from page-1 visibility. Refresh content + add internal links.\n")
    page_query_rows = gsc_query(gsc, dimensions=["page", "query"], row_limit=5000)
    opp = [
        r for r in page_query_rows
        if is_blog(r["keys"][0]) and 10 <= r["position"] <= 30 and r["impressions"] >= 5
    ]
    # Group by page
    by_page = defaultdict(list)
    for r in opp:
        by_page[r["keys"][0]].append(r)

    # Show top pages by total opportunity-zone impressions
    page_score = sorted(by_page.items(), key=lambda kv: -sum(x["impressions"] for x in kv[1]))
    for page_url, rows in page_score[:8]:
        page = page_url.replace("https://www.konacoffeedonut.com", "").replace("https://konacoffeedonut.com", "")
        rows.sort(key=lambda r: -r["impressions"])
        total_impr = sum(r["impressions"] for r in rows)
        print(f"\n  ▸ {page}   ({int(total_impr):,} opp impressions, {len(rows)} queries)")
        for r in rows[:6]:
            q = r["keys"][1]
            print(f"      {int(r['impressions']):>5,} impr  pos {r['position']:>5.1f}  ctr {fmt_pct(r['ctr']):>7}  — \"{q}\"")

    # ----- Top blog queries overall -----
    section("TOP BLOG QUERIES — by impressions")
    blog_qs = [r for r in page_query_rows if is_blog(r["keys"][0])]
    by_query = defaultdict(lambda: {"impressions": 0, "clicks": 0, "positions": [], "pages": set()})
    for r in blog_qs:
        q = r["keys"][1]
        by_query[q]["impressions"] += r["impressions"]
        by_query[q]["clicks"] += r["clicks"]
        by_query[q]["positions"].append(r["position"])
        by_query[q]["pages"].add(r["keys"][0])
    ranked = sorted(by_query.items(), key=lambda kv: -kv[1]["impressions"])

    print(f"\n  {'IMPR':>6} {'CLICKS':>7} {'AVG POS':>8} {'CTR':>7}  QUERY")
    for q, m in ranked[:25]:
        avg_pos = sum(m["positions"]) / len(m["positions"])
        ctr = (m["clicks"] / m["impressions"]) if m["impressions"] else 0
        print(f"  {int(m['impressions']):>6,} {int(m['clicks']):>7,} {avg_pos:>8.1f} {fmt_pct(ctr):>7}  {q}")

    # ----- GA4 attempt -----
    section("GA4 — blog engagement (last 28d)")
    try:
        from google.analytics.data_v1beta import BetaAnalyticsDataClient
        from google.analytics.admin_v1beta import AnalyticsAdminServiceClient
        from google.analytics.data_v1beta.types import (
            DateRange, Dimension, Metric, RunReportRequest, FilterExpression, Filter,
        )

        ga4_creds = service_account.Credentials.from_service_account_file(
            str(KEY_FILE), scopes=GA4_SCOPES
        )

        admin = AnalyticsAdminServiceClient(credentials=ga4_creds)
        accounts = list(admin.list_account_summaries())
        prop_id = None
        for acc in accounts:
            for ps in acc.property_summaries:
                if "konacoffeedonut" in (ps.display_name or "").lower() or "kona" in (ps.display_name or "").lower():
                    prop_id = ps.property.split("/")[-1]
                    print(f"  GA4 property found: {ps.display_name} (id {prop_id})")
                    break
            if prop_id:
                break
        if not prop_id and accounts:
            ps = accounts[0].property_summaries[0]
            prop_id = ps.property.split("/")[-1]
            print(f"  Falling back to first GA4 property: {ps.display_name} (id {prop_id})")

        if not prop_id:
            print("  no GA4 properties accessible to this service account")
            print("  → grant 'Viewer' on the GA4 property to: kona-indexing@konacoffeedonut.iam.gserviceaccount.com")
            print("    (GA4 → Admin → Property Access Management → +Add user)")
            return

        client = BetaAnalyticsDataClient(credentials=ga4_creds)
        req = RunReportRequest(
            property=f"properties/{prop_id}",
            date_ranges=[DateRange(start_date=START.isoformat(), end_date=END.isoformat())],
            dimensions=[Dimension(name="pagePath")],
            metrics=[
                Metric(name="screenPageViews"),
                Metric(name="totalUsers"),
                Metric(name="userEngagementDuration"),
                Metric(name="engagedSessions"),
                Metric(name="sessions"),
            ],
            dimension_filter=FilterExpression(
                filter=Filter(
                    field_name="pagePath",
                    string_filter=Filter.StringFilter(
                        match_type=Filter.StringFilter.MatchType.CONTAINS,
                        value="/blog/",
                    ),
                )
            ),
            limit=50,
        )
        resp = client.run_report(req)
        rows = []
        for r in resp.rows:
            path = r.dimension_values[0].value
            views = int(r.metric_values[0].value)
            users = int(r.metric_values[1].value)
            dur = float(r.metric_values[2].value)
            engaged = int(r.metric_values[3].value)
            sess = int(r.metric_values[4].value)
            rows.append({
                "path": path, "views": views, "users": users,
                "avg_eng_s": (dur / users) if users else 0,
                "engagement_rate": (engaged / sess) if sess else 0,
            })
        rows.sort(key=lambda x: -x["views"])
        print(f"\n  {'VIEWS':>7} {'USERS':>6} {'ENG/USR':>9} {'ENG_RATE':>9}  PATH")
        for r in rows[:20]:
            print(f"  {r['views']:>7,} {r['users']:>6,} {r['avg_eng_s']:>8.1f}s {fmt_pct(r['engagement_rate']):>9}  {r['path']}")
    except Exception as e:
        print(f"  GA4 query failed: {type(e).__name__}: {e}")
        print(f"  → if 'PERMISSION_DENIED' or 'AccessDenied': grant 'Viewer' on GA4 property to:")
        print(f"     kona-indexing@konacoffeedonut.iam.gserviceaccount.com")


if __name__ == "__main__":
    main()
