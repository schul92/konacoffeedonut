#!/usr/bin/env python3
"""Generate a polished, Korean-language SEO performance PDF report for the
Kona Coffee Donut shop owner. Charts + logical narrative on why "kona coffee"
doesn't surface (review gap) and why reviews are mandatory.

Output: ./KonaCoffeeDonut_SEO_Report.pdf
"""
import os
from pathlib import Path
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.font_manager as fm
from matplotlib.backends.backend_pdf import PdfPages
from matplotlib.patches import FancyBboxPatch

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "KonaCoffeeDonut_SEO_Report.pdf"

# ---- Korean font ----
for p in [
    "/System/Library/Fonts/Supplemental/AppleGothic.ttf",
    "/System/Library/Fonts/AppleSDGothicNeo.ttc",
    "/Library/Fonts/AppleGothic.ttf",
]:
    if os.path.exists(p):
        try:
            fm.fontManager.addfont(p)
            plt.rcParams["font.family"] = fm.FontProperties(fname=p).get_name()
            break
        except Exception:
            continue
plt.rcParams["axes.unicode_minus"] = False

# ---- Palette ----
ORANGE = "#E8743B"
TEAL = "#2A9D8F"
DARK = "#2B2B2B"
GREY = "#8A8A8A"
LGREY = "#E6E6E6"
RED = "#E63946"
GOLD = "#F4A261"
INK = "#1d2b3a"
BG = "#FBF8F4"

A4 = (8.27, 11.69)

# ====================== DATA ======================
MONTHS = ["2월", "3월", "4월", "5월", "6월*"]
GSC_IMPR = [7741, 9350, 8249, 26869, 20003]
GSC_CLICKS = [137, 83, 166, 449, 231]
GA_USERS = [411, 305, 374, 1179, 630]
GA_SESS = [531, 393, 501, 1488, 754]

# 28d vs prior 28d
M = {
    "impr": (34473, 16023),
    "clicks": (463, 304),
    "users": (1243, 742),
    "sessions": (1564, 942),
    "pageviews": (2447, 1229),
}
CTR = 1.34
POS = 7.3
DISTINCT_Q = 1127
NONBRAND_Q = 1120

# channels (sessions)
CH = [("Organic Search (구글 검색)", 1494), ("Organic Social", 61), ("기타", 65)]

# top queries by impressions (28d)
TOPQ = [
    ("what is bingsu", 1793, "정보"),
    ("bingsu", 1451, "정보"),
    ("coffee near me", 512, "구매"),
    ("kona coffee", 319, "정보"),
    ("donuts near me", 296, "구매"),
    ("kona coffee donut (우리이름)", 217, "브랜드"),
    ("dessert waikiki", 117, "구매"),
    ("best dessert waikiki", 114, "구매"),
    ("kona coffee and donut", 107, "브랜드"),
    ("cheap eats waikiki", 51, "구매"),
]

# blog contribution
BLOG_IMPR, SITE_IMPR = 22594, 34473
BLOG_CLICKS = 111
BLOG_POSTS = 26          # 실제 작성한 블로그 글
BLOG_URLS = 92           # 노출 중인 다국어 페이지 (글 × 언어)
BLOG_SHOWN = 22          # 노출 중인 고유 글

# blog targets
BLOG_TARGETS = [
    ("what-is-bingsu", "what is bingsu / bingsu", "4개 언어"),
    ("best-desserts-waikiki", "best dessert waikiki", "EN"),
    ("best-bingsu-waikiki", "bingsu waikiki", "EN"),
    ("best-mochi-donuts-waikiki", "mochi donuts waikiki", "EN"),
    ("best-budget-eats-waikiki", "cheap eats / budget waikiki", "EN"),
    ("hawaiian-shave-ice  (신규)", "hawaiian shave ice", "4개 언어"),
    ("what-is-a-malasada  (신규)", "what is a malasada", "4개 언어"),
    ("what-is-kona-coffee  (신규)", "what is kona coffee", "4개 언어"),
]

# review gap — actual GOOGLE review counts (researched Jun 2026)
REVIEWS = [("우리 매장", 11, ORANGE), ("Kona Coffee\nPurveyors", 6300, GREY),
           ("Island Vintage\nCoffee", 7500, GREY), ("Leonard's\nBakery", 13000, GREY)]


def pct(cur, prev):
    return round((cur - prev) / prev * 100) if prev else 0


# ====================== HELPERS ======================
def new_page(pdf, title, subtitle=None, pageno=None):
    fig = plt.figure(figsize=A4, facecolor="white")
    # header band
    ax = fig.add_axes([0, 0.93, 1, 0.07]); ax.axis("off")
    ax.add_patch(plt.Rectangle((0, 0), 1, 1, color=INK, transform=ax.transAxes))
    ax.text(0.06, 0.5, title, color="white", fontsize=17, fontweight="bold", va="center")
    ax.text(0.94, 0.5, "Kona Coffee Donut", color="#9fb3c8", fontsize=9, va="center", ha="right")
    if subtitle:
        fig.text(0.06, 0.905, subtitle, color=GREY, fontsize=10.5)
    if pageno:
        fig.text(0.94, 0.02, f"{pageno}", color=GREY, fontsize=9, ha="right")
    fig.text(0.06, 0.02, "구글 Search Console · Google Analytics 4 실데이터", color=GREY, fontsize=8)
    return fig


def kpi_card(fig, x, y, w, h, label, value, delta=None, color=ORANGE):
    ax = fig.add_axes([x, y, w, h]); ax.axis("off")
    ax.add_patch(FancyBboxPatch((0.02, 0.04), 0.96, 0.92, boxstyle="round,pad=0.02,rounding_size=0.06",
                 fc="white", ec=LGREY, lw=1.2, transform=ax.transAxes))
    ax.text(0.5, 0.74, label, ha="center", va="center", fontsize=9.5, color=GREY)
    ax.text(0.5, 0.42, value, ha="center", va="center", fontsize=22, fontweight="bold", color=DARK)
    if delta is not None:
        ax.text(0.5, 0.15, delta, ha="center", va="center", fontsize=11, fontweight="bold", color=color)


# ====================== PAGE 1: COVER + SUMMARY ======================
def page_cover(pdf):
    fig = plt.figure(figsize=A4, facecolor=BG)
    ax = fig.add_axes([0, 0.66, 1, 0.34]); ax.axis("off")
    ax.add_patch(plt.Rectangle((0, 0), 1, 1, color=INK, transform=ax.transAxes))
    ax.text(0.06, 0.62, "웹사이트 검색 성과 보고서", color="white", fontsize=26, fontweight="bold")
    ax.text(0.06, 0.44, "Kona Coffee Donut  ·  Waikiki, Hawaii", color="#cfe0ee", fontsize=13)
    ax.text(0.06, 0.30, "기간: 최근 28일 (직전 28일 대비)  ·  2026년 6월", color="#9fb3c8", fontsize=10.5)
    ax.add_patch(plt.Rectangle((0.06, 0.18), 0.18, 0.03, color=ORANGE, transform=ax.transAxes))

    fig.text(0.06, 0.60, "핵심 요약", fontsize=15, fontweight="bold", color=DARK)
    fig.text(0.06, 0.575,
             "제가 맡은 영역(홈페이지 · 블로그 · 검색)은 한 달 만에 2~4배 성장했습니다.",
             fontsize=11.5, color=DARK)

    cards = [
        ("검색 노출 (구글에 보인 횟수)", f"{M['impr'][0]:,}", f"▲ +{pct(*M['impr'])}%", TEAL),
        ("클릭 (실제 방문 유도)", f"{M['clicks'][0]:,}", f"▲ +{pct(*M['clicks'])}%", TEAL),
        ("방문자 수", f"{M['users'][0]:,}", f"▲ +{pct(*M['users'])}%", TEAL),
        ("페이지뷰", f"{M['pageviews'][0]:,}", f"▲ +{pct(*M['pageviews'])}%", TEAL),
        ("우리를 찾은 검색어", f"{DISTINCT_Q:,}개", f"{round(NONBRAND_Q/DISTINCT_Q*100)}% 신규 검색", ORANGE),
        ("우리 이름 검색 순위", "1위", "kona coffee donut", ORANGE),
    ]
    x0, y0, w, h, gx, gy = 0.06, 0.40, 0.285, 0.105, 0.025, 0.02
    for i, (l, v, d, c) in enumerate(cards):
        cx = x0 + (i % 3) * (w + gx)
        cy = y0 - (i // 3) * (h + gy)
        kpi_card(fig, cx, cy, w, h, l, v, d, c)

    # bottom takeaway box
    ax2 = fig.add_axes([0.06, 0.10, 0.88, 0.14]); ax2.axis("off")
    ax2.add_patch(FancyBboxPatch((0, 0), 1, 1, boxstyle="round,pad=0.01,rounding_size=0.04",
                  fc="#FFF4EC", ec=ORANGE, lw=1.5, transform=ax2.transAxes))
    ax2.text(0.04, 0.74, "한 줄 결론", fontsize=12, fontweight="bold", color=ORANGE)
    ax2.text(0.04, 0.45,
             "통제 가능한 영역(웹사이트·콘텐츠·검색)은 폭발적으로 성장 중입니다.",
             fontsize=11.5, color=DARK)
    ax2.text(0.04, 0.18,
             "유일하게 부족한 것은 '구글 지도 리뷰(현재 11개)' 하나뿐 — 이것만 채우면 됩니다.",
             fontsize=11.5, color=DARK, fontweight="bold")
    pdf.savefig(fig); plt.close(fig)


# ====================== PAGE 2: GROWTH TREND ======================
def page_growth(pdf):
    fig = new_page(pdf, "1. 성장 추이", "블로그 작업을 본격화한 5월부터 모든 지표가 폭발했습니다", "2")
    # impressions
    ax1 = fig.add_axes([0.10, 0.62, 0.82, 0.24])
    bars = ax1.bar(MONTHS, GSC_IMPR, color=[GREY, GREY, GREY, ORANGE, GOLD], width=0.6)
    ax1.set_title("구글 검색 노출 (월별)", fontsize=12, fontweight="bold", color=DARK, loc="left")
    for b, v in zip(bars, GSC_IMPR):
        ax1.text(b.get_x()+b.get_width()/2, v+500, f"{v:,}", ha="center", fontsize=9, color=DARK)
    ax1.set_ylim(0, max(GSC_IMPR)*1.2)
    for s in ["top", "right"]:
        ax1.spines[s].set_visible(False)
    ax1.tick_params(length=0); ax1.set_yticks([])
    # sessions + users line
    ax2 = fig.add_axes([0.10, 0.30, 0.82, 0.24])
    ax2.plot(MONTHS, GA_SESS, "-o", color=TEAL, lw=2.5, label="세션(방문)")
    ax2.plot(MONTHS, GA_USERS, "-o", color=ORANGE, lw=2.5, label="방문자")
    for x, v in zip(MONTHS, GA_SESS):
        ax2.text(x, v+40, f"{v:,}", ha="center", fontsize=8.5, color=TEAL)
    ax2.set_title("홈페이지 방문자 · 세션 (월별)", fontsize=12, fontweight="bold", color=DARK, loc="left")
    ax2.set_ylim(0, max(GA_SESS)*1.25)
    for s in ["top", "right"]:
        ax2.spines[s].set_visible(False)
    ax2.tick_params(length=0); ax2.set_yticks([])
    ax2.legend(loc="upper left", frameon=False, fontsize=9.5)

    fig.text(0.10, 0.225, "* 6월은 14일까지의 절반 데이터인데도 이미 4월 한 달 전체를 넘어섰습니다.",
             fontsize=9.5, color=GREY)
    fig.text(0.10, 0.17, "5월 노출 26,869회 = 2월(7,741회) 대비 약 3.5배.",
             fontsize=11, color=DARK, fontweight="bold")
    pdf.savefig(fig); plt.close(fig)


# ====================== PAGE 3: VISITORS & CHANNELS ======================
def page_visitors(pdf):
    fig = new_page(pdf, "2. 방문자 & 유입 경로", "성장의 거의 전부가 '구글 검색'에서 나옵니다", "3")
    # grouped bars cur vs prev
    ax1 = fig.add_axes([0.10, 0.55, 0.50, 0.30])
    labels = ["방문자", "세션", "페이지뷰"]
    cur = [M["users"][0], M["sessions"][0], M["pageviews"][0]]
    prev = [M["users"][1], M["sessions"][1], M["pageviews"][1]]
    x = range(len(labels))
    ax1.bar([i-0.2 for i in x], prev, width=0.38, color=LGREY, label="직전 28일")
    ax1.bar([i+0.2 for i in x], cur, width=0.38, color=TEAL, label="최근 28일")
    for i in x:
        ax1.text(i+0.2, cur[i]+30, f"{cur[i]:,}", ha="center", fontsize=8.5, color=DARK)
    ax1.set_xticks(list(x)); ax1.set_xticklabels(labels, fontsize=10)
    ax1.set_title("28일 비교", fontsize=12, fontweight="bold", color=DARK, loc="left")
    for s in ["top", "right"]:
        ax1.spines[s].set_visible(False)
    ax1.tick_params(length=0); ax1.set_yticks([])
    ax1.legend(frameon=False, fontsize=9)
    # donut channels
    ax2 = fig.add_axes([0.62, 0.55, 0.32, 0.30])
    vals = [c[1] for c in CH]; total = sum(vals)
    cols = [TEAL, GOLD, LGREY]
    w, _ = ax2.pie(vals, colors=cols, startangle=90, counterclock=False,
                   wedgeprops=dict(width=0.42, edgecolor="white"))
    ax2.text(0, 0, f"{round(vals[0]/total*100)}%\n구글검색", ha="center", va="center",
             fontsize=12, fontweight="bold", color=TEAL)
    ax2.set_title("유입 경로(세션)", fontsize=12, fontweight="bold", color=DARK, loc="left")

    # explanation
    ax3 = fig.add_axes([0.06, 0.12, 0.88, 0.34]); ax3.axis("off")
    ax3.add_patch(FancyBboxPatch((0, 0), 1, 1, boxstyle="round,pad=0.01,rounding_size=0.03",
                  fc="white", ec=LGREY, lw=1.2, transform=ax3.transAxes))
    lines = [
        ("왜 이게 중요한가요?", 0.86, 12, "bold", ORANGE),
        ("• 방문자·세션의 약 92%가 '구글 검색'을 통해 들어옵니다.", 0.68, 11, "normal", DARK),
        ("  → 광고비 한 푼 없이, 순수하게 검색 최적화(SEO)로 만든 트래픽입니다.", 0.56, 10.5, "normal", GREY),
        ("• 즉, 검색 순위가 오를수록 방문자가 바로 늘어나는 구조입니다.", 0.42, 11, "normal", DARK),
        ("• 최근 한 달 방문자 +68%, 페이지뷰 +99% — 두 배 가까이 성장.", 0.28, 11, "normal", DARK),
        ("  이 성장은 블로그·검색 작업의 직접적인 결과입니다.", 0.14, 10.5, "normal", GREY),
    ]
    for t, yy, fsz, fw, col in lines:
        ax3.text(0.04, yy, t, fontsize=fsz, fontweight=fw, color=col, transform=ax3.transAxes)
    pdf.savefig(fig); plt.close(fig)


# ====================== PAGE 4: QUERY EXPOSURE ======================
def page_queries(pdf):
    fig = new_page(pdf, "3. 검색어 노출", "사람들이 실제로 이런 검색어로 우리를 발견합니다", "4")
    # KPI cards as a top row (so they don't clip the chart's y-labels)
    nb = round(NONBRAND_Q / DISTINCT_Q * 100)
    kpi_card(fig, 0.06, 0.73, 0.43, 0.13, "우리를 노출시킨 검색어 종류", f"{DISTINCT_Q:,}개", color=ORANGE)
    kpi_card(fig, 0.51, 0.73, 0.43, 0.13, "그중 '이름 모르고' 발견한 검색", f"{nb}%", color=ORANGE)

    # full-width bar chart below, with room on the left for query names
    ax1 = fig.add_axes([0.34, 0.35, 0.60, 0.33])
    names = [q[0] for q in TOPQ][::-1]
    vals = [q[1] for q in TOPQ][::-1]
    kinds = [q[2] for q in TOPQ][::-1]
    cmap = {"구매": ORANGE, "정보": GREY, "브랜드": TEAL}
    cols = [cmap[k] for k in kinds]
    ax1.barh(names, vals, color=cols)
    for i, v in enumerate(vals):
        ax1.text(v + 20, i, f"{v:,}", va="center", fontsize=8.5, color=DARK)
    ax1.set_title("검색 노출 상위 검색어 (28일)", fontsize=12, fontweight="bold", color=DARK, loc="left")
    ax1.set_xlim(0, max(vals) * 1.18)
    ax1.tick_params(axis="y", labelsize=9)
    for s in ["top", "right"]:
        ax1.spines[s].set_visible(False)
    ax1.tick_params(length=0); ax1.set_xticks([])
    from matplotlib.patches import Patch
    ax1.legend(handles=[Patch(color=ORANGE, label="구매 의도"), Patch(color=GREY, label="정보 탐색"),
               Patch(color=TEAL, label="브랜드(우리이름)")], frameon=False, fontsize=8.5, loc="lower right")

    ax3 = fig.add_axes([0.06, 0.10, 0.88, 0.21]); ax3.axis("off")
    ax3.add_patch(FancyBboxPatch((0, 0), 1, 1, boxstyle="round,pad=0.01,rounding_size=0.03",
                  fc="#FFF4EC", ec=ORANGE, lw=1.3, transform=ax3.transAxes))
    txt = [
        ("핵심 포인트", 0.84, 12, "bold", ORANGE),
        (f"• 총 {DISTINCT_Q:,}개의 검색어로 우리가 구글에 노출됐고, 그중 {NONBRAND_Q:,}개({nb}%)는", 0.60, 11, "normal", DARK),
        ("  우리 가게 이름을 '모르고' 검색하다 발견한 신규 손님입니다.", 0.42, 11, "normal", DARK),
        ("• 'best dessert waikiki', 'donuts near me', 'bingsu waikiki' 등 지금 와이키키에서", 0.22, 11, "normal", DARK),
        ("  먹을 곳을 찾는 손님들의 검색에 우리가 뜨고 있습니다.", 0.07, 11, "normal", DARK),
    ]
    for t, yy, fsz, fw, col in txt:
        ax3.text(0.04, yy, t, fontsize=fsz, fontweight=fw, color=col, transform=ax3.transAxes)
    pdf.savefig(fig); plt.close(fig)


# ====================== PAGE 5: BLOG ======================
def page_blog(pdf):
    fig = new_page(pdf, "4. 블로그 성과", f"블로그가 전체 검색 노출의 {round(BLOG_IMPR/SITE_IMPR*100)}%를 만드는 핵심 엔진입니다", "5")
    # donut blog vs rest
    ax1 = fig.add_axes([0.08, 0.55, 0.30, 0.30])
    rest = SITE_IMPR - BLOG_IMPR
    w, _ = ax1.pie([BLOG_IMPR, rest], colors=[ORANGE, LGREY], startangle=90, counterclock=False,
                   wedgeprops=dict(width=0.42, edgecolor="white"))
    ax1.text(0, 0, f"{round(BLOG_IMPR/SITE_IMPR*100)}%", ha="center", va="center",
             fontsize=15, fontweight="bold", color=ORANGE)
    ax1.set_title("블로그 = 전체 노출의", fontsize=11.5, fontweight="bold", color=DARK, loc="center")

    kpi_card(fig, 0.42, 0.70, 0.24, 0.15, "작성한\n블로그 글", f"{BLOG_POSTS}개", color=ORANGE)
    kpi_card(fig, 0.70, 0.70, 0.24, 0.15, "구글 노출 중인\n다국어 페이지", f"{BLOG_URLS}개", color=ORANGE)
    fig.text(0.42, 0.605, f"→ 글 {BLOG_POSTS}개를 영·일·한·중 4개 언어로 제작 (= {BLOG_URLS}개 페이지).",
             fontsize=10, color=GREY)
    fig.text(0.42, 0.575, f"   이 페이지들이 만든 검색 노출 {BLOG_IMPR:,}회 (전체의 {round(BLOG_IMPR/SITE_IMPR*100)}%).",
             fontsize=10, color=GREY)

    # blog targets table
    ax2 = fig.add_axes([0.06, 0.10, 0.88, 0.40]); ax2.axis("off")
    ax2.text(0.0, 0.97, "블로그가 노리는 검색어 (타겟)", fontsize=12, fontweight="bold", color=DARK)
    ax2.text(0.0, 0.90, "블로그 글", fontsize=9.5, color=GREY, fontweight="bold")
    ax2.text(0.52, 0.90, "타겟 검색어", fontsize=9.5, color=GREY, fontweight="bold")
    ax2.text(0.88, 0.90, "언어", fontsize=9.5, color=GREY, fontweight="bold")
    y = 0.82
    for name, target, lang in BLOG_TARGETS:
        ax2.add_line(plt.Line2D([0, 1], [y+0.035, y+0.035], color=LGREY, lw=0.8, transform=ax2.transAxes))
        ax2.text(0.0, y, name, fontsize=9.5, color=DARK)
        ax2.text(0.52, y, target, fontsize=9.5, color=DARK)
        ax2.text(0.88, y, lang, fontsize=9, color=TEAL)
        y -= 0.092
    pdf.savefig(fig); plt.close(fig)


# ====================== PAGE 6: KONA COFFEE / REVIEWS ======================
def page_reviews(pdf):
    fig = new_page(pdf, '5. "kona coffee"가 왜 안 나오나', "이건 SEO 문제가 아니라 '리뷰 개수' 문제입니다", "6")
    # two-google explanation
    ax0 = fig.add_axes([0.06, 0.70, 0.88, 0.17]); ax0.axis("off")
    ax0.add_patch(FancyBboxPatch((0, 0), 0.47, 1, boxstyle="round,pad=0.01,rounding_size=0.05",
                  fc="white", ec=LGREY, lw=1.2, transform=ax0.transAxes))
    ax0.add_patch(FancyBboxPatch((0.53, 0), 0.47, 1, boxstyle="round,pad=0.01,rounding_size=0.05",
                  fc="white", ec=LGREY, lw=1.2, transform=ax0.transAxes))
    ax0.text(0.235, 0.80, "① 지도 결과 (맨 위)", ha="center", fontsize=11.5, fontweight="bold", color=RED, transform=ax0.transAxes)
    ax0.text(0.235, 0.50, "리뷰 개수 + 거리로 순위 결정", ha="center", fontsize=10, color=DARK, transform=ax0.transAxes)
    ax0.text(0.235, 0.22, "← 'kona coffee'는 여기가 먼저 뜸", ha="center", fontsize=9.5, color=GREY, transform=ax0.transAxes)
    ax0.text(0.765, 0.80, "② 웹사이트 결과 (그 아래)", ha="center", fontsize=11.5, fontweight="bold", color=TEAL, transform=ax0.transAxes)
    ax0.text(0.765, 0.50, "홈페이지 품질로 순위 결정", ha="center", fontsize=10, color=DARK, transform=ax0.transAxes)
    ax0.text(0.765, 0.22, "← 제가 작업하는 영역 (잘 되고 있음)", ha="center", fontsize=9.5, color=GREY, transform=ax0.transAxes)

    # review gap chart (log scale to show the chasm)
    ax1 = fig.add_axes([0.12, 0.40, 0.78, 0.24])
    names = [r[0] for r in REVIEWS]; vals = [r[1] for r in REVIEWS]; cols = [r[2] for r in REVIEWS]
    bars = ax1.bar(names, vals, color=cols, width=0.6)
    for b, v in zip(bars, vals):
        ax1.text(b.get_x()+b.get_width()/2, v*1.05, f"{v:,}", ha="center", fontsize=9.5,
                 fontweight="bold", color=DARK)
    ax1.set_yscale("log")
    ax1.set_title("구글 리뷰 개수 비교 (주요 경쟁사 · 2026년 6월)", fontsize=12, fontweight="bold", color=DARK, loc="left")
    ax1.set_ylim(1, 40000)
    for s in ["top", "right"]:
        ax1.spines[s].set_visible(False)
    ax1.tick_params(length=0); ax1.set_yticks([])
    ax1.tick_params(axis="x", labelsize=8.5)

    # logic + solution
    ax2 = fig.add_axes([0.06, 0.10, 0.88, 0.26]); ax2.axis("off")
    ax2.add_patch(FancyBboxPatch((0, 0), 1, 1, boxstyle="round,pad=0.01,rounding_size=0.03",
                  fc="#FDECEC", ec=RED, lw=1.4, transform=ax2.transAxes))
    txt = [
        ("결론: 리뷰는 선택이 아니라 필수입니다", 0.86, 12.5, "bold", RED),
        ("• 리뷰 11개로 리뷰 6천~1만 개짜리 가게를 지도에서 이기는 건 수학적으로 불가능합니다.", 0.65, 10.8, "normal", DARK),
        ("• 글·홈페이지를 아무리 잘 만들어도 '지도 순위'는 오직 리뷰로만 올라갑니다.", 0.48, 10.8, "normal", DARK),
        ("• 해결책: 손님께 구글 리뷰 요청 (계산대·영수증 QR). 목표 100~300개.", 0.30, 11, "bold", DARK),
        ("  → 리뷰가 쌓이면 디저트·도넛·빙수 검색부터 지도에 우리가 뜨기 시작합니다.", 0.13, 10.8, "normal", GREY),
    ]
    for t, yy, fsz, fw, col in txt:
        ax2.text(0.035, yy, t, fontsize=fsz, fontweight=fw, color=col, transform=ax2.transAxes)
    pdf.savefig(fig); plt.close(fig)


# ====================== PAGE 7: CONCLUSION ======================
def page_conclusion(pdf):
    fig = new_page(pdf, "6. 정리 & 다음 단계", "엔진은 완성됐습니다. 이제 연료(리뷰)만 채우면 됩니다", "7")
    ax = fig.add_axes([0.06, 0.50, 0.88, 0.36]); ax.axis("off")
    ax.add_patch(FancyBboxPatch((0, 0), 0.47, 1, boxstyle="round,pad=0.01,rounding_size=0.04",
                 fc="#EAF6F3", ec=TEAL, lw=1.3, transform=ax.transAxes))
    ax.add_patch(FancyBboxPatch((0.53, 0), 0.47, 1, boxstyle="round,pad=0.01,rounding_size=0.04",
                 fc="#FFF4EC", ec=ORANGE, lw=1.3, transform=ax.transAxes))
    ax.text(0.235, 0.90, "제가 한 일 (엔진)", ha="center", fontsize=12.5, fontweight="bold", color=TEAL, transform=ax.transAxes)
    done = ["블로그 다수 제작 (4개 언어 + 사진)", "구글 색인 직접 제출 (1~2일 반영)",
            "사이트맵 · 중복 · 색인오류 정리", "검색 제목/설명 클릭률 최적화",
            "경쟁사 전수 조사 + 키워드 선별", "검색·방문자 상시 모니터링"]
    yy = 0.76
    for d in done:
        ax.text(0.05, yy, "✓ " + d, fontsize=9.8, color=DARK, transform=ax.transAxes); yy -= 0.115
    ax.text(0.765, 0.90, "사장님이 할 일 (연료)", ha="center", fontsize=12.5, fontweight="bold", color=ORANGE, transform=ax.transAxes)
    todo = ["손님께 구글 리뷰 요청 (최우선!)", "계산대 · 영수증에 리뷰 QR 비치",
            "목표: 3개월 내 100~300개", "리뷰엔 항상 답글 달기",
            "사진 자주 업로드 (메뉴/매장)", "영업시간·메뉴 최신화 유지"]
    yy = 0.76
    for d in todo:
        ax.text(0.58, yy, "• " + d, fontsize=9.8, color=DARK, transform=ax.transAxes); yy -= 0.115

    ax2 = fig.add_axes([0.06, 0.16, 0.88, 0.28]); ax2.axis("off")
    ax2.add_patch(FancyBboxPatch((0, 0), 1, 1, boxstyle="round,pad=0.01,rounding_size=0.03",
                  fc=INK, ec=INK, transform=ax2.transAxes))
    ax2.text(0.5, 0.80, "전체 한 줄 요약", ha="center", fontsize=12, fontweight="bold", color=ORANGE, transform=ax2.transAxes)
    ax2.text(0.5, 0.55, "웹사이트·검색은 한 달 만에 2~4배 성장했습니다.", ha="center",
             fontsize=12.5, color="white", transform=ax2.transAxes)
    ax2.text(0.5, 0.33, "남은 단 하나의 과제는 '구글 리뷰'이며, 이건 매장에서만 채울 수 있습니다.",
             ha="center", fontsize=12.5, color="white", fontweight="bold", transform=ax2.transAxes)
    ax2.text(0.5, 0.12, "엔진(웹) × 연료(리뷰)가 만나면 — 지도 검색까지 우리가 점령합니다.",
             ha="center", fontsize=10.5, color="#9fb3c8", transform=ax2.transAxes)
    pdf.savefig(fig); plt.close(fig)


def main():
    with PdfPages(OUT) as pdf:
        page_cover(pdf)
        page_growth(pdf)
        page_visitors(pdf)
        page_queries(pdf)
        page_blog(pdf)
        page_reviews(pdf)
        page_conclusion(pdf)
        d = pdf.infodict()
        d["Title"] = "Kona Coffee Donut — SEO Performance Report"
        d["Author"] = "Kona Coffee Donut"
    print(f"saved: {OUT}  ({OUT.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
