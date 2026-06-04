#!/usr/bin/env python3
"""Quick site-wide health snapshot from Google Search Console + GA4.

Uses the shared service account (google-service-account.json) which is an Owner
on sc-domain:konacoffeedonut.com and (if granted) a Viewer on the GA4 property.

Reports, for the last 28 days vs the prior 28 days:
  GSC  — clicks, impressions, CTR, avg position (+ trend), top queries/pages,
         devices, countries, and high-impression/low-CTR opportunities.
  GA4  — users, sessions, views, engagement rate, avg engagement time (+ trend),
         top pages, and top acquisition channels.
"""
import sys
from datetime import date, timedelta
from pathlib import Path

from google.oauth2 import service_account
from googleapiclient.discovery import build

ROOT = Path(__file__).resolve().parent.parent
KEY_FILE = ROOT / "google-service-account.json"
GSC_PROPERTY = "sc-domain:konacoffeedonut.com"
GSC_SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]
GA4_SCOPES = ["https://www.googleapis.com/auth/analytics.readonly"]

DAYS = 28
END = date.today()
CUR_START = END - timedelta(days=DAYS)
PREV_END = CUR_START - timedelta(days=1)
PREV_START = PREV_END - timedelta(days=DAYS - 1)


def section(t):
    print("\n" + "=" * 74 + f"\n{t}\n" + "=" * 74)


def pct(x):
    return f"{x * 100:.2f}%"


def delta(cur, prev):
    if not prev:
        return "  (no prior data)"
    d = (cur - prev) / prev * 100
    arrow = "▲" if d >= 0 else "▼"
    return f"  {arrow} {d:+.0f}% vs prior 28d ({prev:,.0f})"


# ---------------- GSC ----------------
def gsc_client():
    creds = service_account.Credentials.from_service_account_file(str(KEY_FILE), scopes=GSC_SCOPES)
    return build("searchconsole", "v1", credentials=creds, cache_discovery=False)


def gsc_query(svc, dims, start, end, row_limit=1000):
    body = {"startDate": start.isoformat(), "endDate": end.isoformat(),
            "dimensions": dims, "rowLimit": row_limit}
    return svc.searchanalytics().query(siteUrl=GSC_PROPERTY, body=body).execute().get("rows", [])


def run_gsc():
    svc = gsc_client()
    section(f"GSC — SITE TOTALS  ({CUR_START} → {END})")
    cur = gsc_query(svc, [], CUR_START, END, 1)
    prev = gsc_query(svc, [], PREV_START, PREV_END, 1)
    c = cur[0] if cur else {"clicks": 0, "impressions": 0, "ctr": 0, "position": 0}
    p = prev[0] if prev else {"clicks": 0, "impressions": 0, "ctr": 0, "position": 0}
    print(f"  clicks:        {int(c['clicks']):>7,}{delta(c['clicks'], p['clicks'])}")
    print(f"  impressions:   {int(c['impressions']):>7,}{delta(c['impressions'], p['impressions'])}")
    print(f"  CTR:           {pct(c['ctr']):>7}")
    print(f"  avg position:  {c['position']:>7.1f}   (prior {p['position']:.1f})")

    section("GSC — TOP QUERIES (28d, by clicks)")
    rows = sorted(gsc_query(svc, ["query"], CUR_START, END), key=lambda r: -r["clicks"])
    print(f"  {'CLICKS':>6} {'IMPR':>7} {'CTR':>7} {'POS':>5}  QUERY")
    for r in rows[:20]:
        print(f"  {int(r['clicks']):>6,} {int(r['impressions']):>7,} {pct(r['ctr']):>7} {r['position']:>5.1f}  {r['keys'][0]}")

    section("GSC — TOP PAGES (28d, by clicks)")
    rows = sorted(gsc_query(svc, ["page"], CUR_START, END), key=lambda r: -r["clicks"])
    print(f"  {'CLICKS':>6} {'IMPR':>7} {'CTR':>7} {'POS':>5}  PAGE")
    for r in rows[:20]:
        path = r["keys"][0].replace("https://konacoffeedonut.com", "") or "/"
        print(f"  {int(r['clicks']):>6,} {int(r['impressions']):>7,} {pct(r['ctr']):>7} {r['position']:>5.1f}  {path}")

    section("GSC — OPPORTUNITIES (high impressions, low CTR or pos 8-25)")
    rows = gsc_query(svc, ["query"], CUR_START, END)
    opps = [r for r in rows if r["impressions"] >= 50 and (8 <= r["position"] <= 25 or r["ctr"] < 0.01)]
    opps.sort(key=lambda r: -r["impressions"])
    print(f"  {'IMPR':>7} {'CLICKS':>6} {'CTR':>7} {'POS':>5}  QUERY")
    for r in opps[:15]:
        print(f"  {int(r['impressions']):>7,} {int(r['clicks']):>6,} {pct(r['ctr']):>7} {r['position']:>5.1f}  {r['keys'][0]}")

    section("GSC — DEVICES & TOP COUNTRIES (28d)")
    for r in sorted(gsc_query(svc, ["device"], CUR_START, END), key=lambda r: -r["clicks"]):
        print(f"  {r['keys'][0]:<8} clicks {int(r['clicks']):>5,}  impr {int(r['impressions']):>7,}  CTR {pct(r['ctr'])}")
    print()
    for r in sorted(gsc_query(svc, ["country"], CUR_START, END), key=lambda r: -r["clicks"])[:6]:
        print(f"  {r['keys'][0]:<6} clicks {int(r['clicks']):>5,}  impr {int(r['impressions']):>7,}")


# ---------------- GA4 ----------------
def run_ga4():
    try:
        from google.analytics.data_v1beta import BetaAnalyticsDataClient
        from google.analytics.admin_v1beta import AnalyticsAdminServiceClient
        from google.analytics.data_v1beta.types import DateRange, Dimension, Metric, RunReportRequest
    except Exception as e:  # noqa: BLE001
        section("GA4")
        print(f"  GA4 client libs unavailable: {e}")
        return

    creds = service_account.Credentials.from_service_account_file(str(KEY_FILE), scopes=GA4_SCOPES)
    try:
        admin = AnalyticsAdminServiceClient(credentials=creds)
        prop_id = None
        for acc in admin.list_account_summaries():
            for ps in acc.property_summaries:
                if "kona" in (ps.display_name or "").lower():
                    prop_id = ps.property.split("/")[-1]
                    name = ps.display_name
                    break
            if prop_id:
                break
        if not prop_id:
            section("GA4")
            print("  No GA4 property accessible to this service account.")
            print("  → GA4 Admin → Property Access Management → add as Viewer:")
            print("    kona-indexing@konacoffeedonut.iam.gserviceaccount.com")
            return
    except Exception as e:  # noqa: BLE001
        section("GA4")
        print(f"  Could not list GA4 properties: {e}")
        return

    client = BetaAnalyticsDataClient(credentials=creds)
    prop = f"properties/{prop_id}"
    section(f"GA4 — TOTALS  ({name}, id {prop_id})")
    metrics = ["totalUsers", "newUsers", "sessions", "screenPageViews", "engagementRate", "averageSessionDuration"]
    req = RunReportRequest(
        property=prop,
        date_ranges=[DateRange(start_date=CUR_START.isoformat(), end_date=END.isoformat()),
                     DateRange(start_date=PREV_START.isoformat(), end_date=PREV_END.isoformat())],
        metrics=[Metric(name=m) for m in metrics],
    )
    resp = client.run_report(req)
    cur = {m: 0.0 for m in metrics}
    prev = {m: 0.0 for m in metrics}
    for row in resp.rows:
        bucket = cur if row.dimension_values[0].value == "date_range_0" else prev
        for i, m in enumerate(metrics):
            bucket[m] = float(row.metric_values[i].value)
    print(f"  users:            {int(cur['totalUsers']):>6,}{delta(cur['totalUsers'], prev['totalUsers'])}")
    print(f"  new users:        {int(cur['newUsers']):>6,}{delta(cur['newUsers'], prev['newUsers'])}")
    print(f"  sessions:         {int(cur['sessions']):>6,}{delta(cur['sessions'], prev['sessions'])}")
    print(f"  page views:       {int(cur['screenPageViews']):>6,}{delta(cur['screenPageViews'], prev['screenPageViews'])}")
    print(f"  engagement rate:  {pct(cur['engagementRate']):>6}   (prior {pct(prev['engagementRate'])})")
    print(f"  avg session:      {cur['averageSessionDuration']:>6.0f}s  (prior {prev['averageSessionDuration']:.0f}s)")

    section("GA4 — TOP PAGES (28d, by views)")
    req = RunReportRequest(
        property=prop,
        date_ranges=[DateRange(start_date=CUR_START.isoformat(), end_date=END.isoformat())],
        dimensions=[Dimension(name="pagePath")],
        metrics=[Metric(name="screenPageViews"), Metric(name="totalUsers")],
        limit=20,
    )
    resp = client.run_report(req)
    rows = sorted(resp.rows, key=lambda r: -int(r.metric_values[0].value))
    print(f"  {'VIEWS':>6} {'USERS':>6}  PAGE")
    for r in rows[:20]:
        print(f"  {int(r.metric_values[0].value):>6,} {int(r.metric_values[1].value):>6,}  {r.dimension_values[0].value}")

    section("GA4 — ACQUISITION CHANNELS (28d)")
    req = RunReportRequest(
        property=prop,
        date_ranges=[DateRange(start_date=CUR_START.isoformat(), end_date=END.isoformat())],
        dimensions=[Dimension(name="sessionDefaultChannelGroup")],
        metrics=[Metric(name="sessions"), Metric(name="totalUsers")],
        limit=15,
    )
    resp = client.run_report(req)
    rows = sorted(resp.rows, key=lambda r: -int(r.metric_values[0].value))
    print(f"  {'SESS':>6} {'USERS':>6}  CHANNEL")
    for r in rows:
        print(f"  {int(r.metric_values[0].value):>6,} {int(r.metric_values[1].value):>6,}  {r.dimension_values[0].value}")


def main():
    if not KEY_FILE.exists():
        sys.exit(f"missing service account key: {KEY_FILE}")
    print(f"Site: konacoffeedonut.com")
    print(f"Current window: {CUR_START} → {END}   |   Prior: {PREV_START} → {PREV_END}")
    print("(GSC has a 2-3 day data lag, so the most recent days may be partial.)")
    try:
        run_gsc()
    except Exception as e:  # noqa: BLE001
        section("GSC")
        print(f"  GSC query failed: {type(e).__name__}: {e}")
    run_ga4()


if __name__ == "__main__":
    main()
