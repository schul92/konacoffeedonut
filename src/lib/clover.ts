import 'server-only';
import { unstable_cache } from 'next/cache';
import { CLOVER_TAG } from './cacheTags';

// Clover POS data layer — aggregates sales analytics directly from the V3 REST
// API (Clover has no reporting endpoint). Money is integer cents and times are
// epoch-ms UTC; we convert to the shop's local timezone before bucketing.
const BASE = process.env.CLOVER_BASE_URL || 'https://api.clover.com';
const MID = process.env.CLOVER_MERCHANT_ID;
const TOKEN = process.env.CLOVER_API_TOKEN;

export const CLOVER_TZ = 'Pacific/Honolulu';
const HST_OFFSET = '-10:00'; // Hawaiʻi has no DST → fixed offset

export function cloverConfigured() {
  return Boolean(MID && TOKEN);
}

// ---- Ranges ----
export type RangeKey = 'today' | '7d' | '30d' | '90d';
export const RANGES: { key: RangeKey; label: string; days: number }[] = [
  { key: 'today', label: 'Today', days: 1 },
  { key: '7d', label: '7 Days', days: 7 },
  { key: '30d', label: '30 Days', days: 30 },
  { key: '90d', label: '90 Days', days: 90 },
];

// ---- Raw Clover shapes (only the fields we use) ----
interface CloverPayment {
  amount?: number;
  tipAmount?: number;
  taxAmount?: number;
  result?: string;
  tender?: { label?: string };
}
interface CloverLineItem {
  name?: string;
  price?: number;
  isRevenue?: boolean;
  refunded?: boolean;
  item?: { id?: string };
}
interface CloverOrder {
  id: string;
  total?: number;
  createdTime?: number;
  lineItems?: { elements?: CloverLineItem[] };
  payments?: { elements?: CloverPayment[] };
}
interface CloverRefund {
  amount?: number;
  createdTime?: number;
}

// ---- Timezone helpers ----
const dayFmt = new Intl.DateTimeFormat('en-CA', { timeZone: CLOVER_TZ }); // YYYY-MM-DD
const hourFmt = new Intl.DateTimeFormat('en-US', { timeZone: CLOVER_TZ, hour: 'numeric', hour12: false });
const wdFmt = new Intl.DateTimeFormat('en-US', { timeZone: CLOVER_TZ, weekday: 'short' });
const monDay = new Intl.DateTimeFormat('en-US', { timeZone: CLOVER_TZ, month: 'numeric', day: 'numeric' });

const hstDay = (ms: number) => dayFmt.format(new Date(ms));
const hstHour = (ms: number) => parseInt(hourFmt.format(new Date(ms)), 10) % 24;
const hstWeekday = (ms: number) => wdFmt.format(new Date(ms));
const cents = (n: number) => Math.round(n) / 100;
const WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// ---- Rate-limit-safe fetch ----
// Clover allows ~16 req/s and only 5 concurrent requests per token. We cap our
// own concurrency well under that and retry with backoff on 429 so bursts
// (multiple cards/ranges/cron all paginating at once) never error out.
// Serialize all Clover requests (one at a time) so we can never approach the
// 5-concurrent / 16-req-per-sec limits, even if multiple ranges/cron/users miss
// the cache at once. Combined with the result cache, Clover load stays tiny.
const MAX_CONCURRENT = 1;
const MIN_INTERVAL_MS = 90; // pace to ~11 req/s, comfortably under Clover's 16/s
let inFlight = 0;
let lastReqAt = 0;
const waiters: (() => void)[] = [];
async function acquire() {
  if (inFlight >= MAX_CONCURRENT) await new Promise<void>((r) => waiters.push(r));
  inFlight++;
  // Pace requests so back-to-back small calls can't burst over the rate limit.
  const wait = lastReqAt + MIN_INTERVAL_MS - Date.now();
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
  lastReqAt = Date.now();
}
function release() {
  inFlight--;
  waiters.shift()?.();
}

// Note: order pages exceed Next's 2 MB fetch-cache limit, so we do NOT cache the
// raw responses (cache: 'no-store'). Instead the small *computed* SalesData is
// cached via unstable_cache below, so Clover is hit at most once per TTL.
async function cloverFetch(url: string): Promise<Response> {
  for (let attempt = 0; ; attempt++) {
    await acquire();
    let res: Response;
    try {
      res = await fetch(url, {
        headers: { Authorization: `Bearer ${TOKEN}`, Accept: 'application/json' },
        cache: 'no-store',
      });
    } finally {
      release();
    }
    if (res.status !== 429 || attempt >= 5) return res;
    // Respect Retry-After if present, otherwise exponential backoff + jitter.
    const retryAfter = Number(res.headers.get('retry-after'));
    const wait = retryAfter > 0 ? retryAfter * 1000 : Math.min(8000, 400 * 2 ** attempt) + Math.floor(Math.random() * 250);
    await new Promise((r) => setTimeout(r, wait));
  }
}

// ---- Paginated fetch helpers ----
async function cloverPaginate<T>(resource: string, query: string): Promise<T[]> {
  const out: T[] = [];
  let offset = 0;
  for (;;) {
    const url = `${BASE}/v3/merchants/${MID}/${resource}?${query}&limit=1000&offset=${offset}`;
    const res = await cloverFetch(url);
    if (!res.ok) throw new Error(`Clover ${resource} → HTTP ${res.status}`);
    const data = (await res.json()) as { elements?: T[] };
    const els = data.elements ?? [];
    out.push(...els);
    if (els.length < 1000) break;
    offset += 1000;
    if (offset > 80000) break; // safety
  }
  return out;
}

const fetchOrders = (sinceMs: number) =>
  cloverPaginate<CloverOrder>('orders', `expand=lineItems,payments.tender&filter=${encodeURIComponent(`createdTime>=${sinceMs}`)}`);
const fetchRefunds = (sinceMs: number) =>
  cloverPaginate<CloverRefund>('refunds', `filter=${encodeURIComponent(`createdTime>=${sinceMs}`)}`);

// item id → category name. Cached separately for an hour (it's range-independent
// and changes rarely) so we don't re-fetch the whole catalog on every range's
// cache miss. Returns a plain object so unstable_cache can serialize it.
async function fetchItemCategories(): Promise<Record<string, string>> {
  const items = await cloverPaginate<{ id: string; categories?: { elements?: { name?: string }[] } }>('items', 'expand=categories');
  const obj: Record<string, string> = {};
  for (const it of items) obj[it.id] = it.categories?.elements?.[0]?.name ?? 'Uncategorized';
  return obj;
}
const getItemCategories = () => unstable_cache(fetchItemCategories, ['clover-item-categories'], { revalidate: 3600, tags: [CLOVER_TAG] })();

// ---- Output types (money already in dollars) ----
export interface SalesData {
  configured: boolean;
  error?: string;
  generatedAt: number;
  range: { key: string; label: string; days: number; start: string; end: string; desc: string };
  kpis: {
    revenue: number;
    net: number;
    orders: number;
    aov: number;
    refunds: number;
    refundCount: number;
    tax: number;
    tips: number;
    deltaRevenue: number | null;
    deltaOrders: number | null;
    deltaNet: number | null;
  };
  revenueByDay: { day: string; label: string; revenue: number; orders: number; prior: number }[];
  revenueByHour: { hour: number; label: string; revenue: number }[];
  heatmap: { weekday: string; hours: number[] }[];
  heatmapMax: number;
  topItems: { name: string; units: number; revenue: number }[];
  categoryMix: { category: string; revenue: number }[];
  tenderMix: { tender: string; amount: number }[];
  insights: { tone: 'good' | 'bad' | 'neutral'; text: string }[];
}

function emptyRange(key: string): SalesData['range'] {
  return { key, label: '', days: 0, start: '', end: '', desc: '' };
}
function emptyData(key: string, configured: boolean, error?: string): SalesData {
  return {
    configured,
    error,
    generatedAt: Date.now(),
    range: emptyRange(key),
    kpis: { revenue: 0, net: 0, orders: 0, aov: 0, refunds: 0, refundCount: 0, tax: 0, tips: 0, deltaRevenue: null, deltaOrders: null, deltaNet: null },
    revenueByDay: [],
    revenueByHour: [],
    heatmap: [],
    heatmapMax: 0,
    topItems: [],
    categoryMix: [],
    tenderMix: [],
    insights: [],
  };
}

const timeFmt = new Intl.DateTimeFormat('en-US', { timeZone: CLOVER_TZ, hour: 'numeric', minute: '2-digit' });
const niceDate = new Intl.DateTimeFormat('en-US', { timeZone: CLOVER_TZ, month: 'short', day: 'numeric' });
const hstMidnightMs = (ms: number) => new Date(`${dayFmt.format(new Date(ms))}T00:00:00${HST_OFFSET}`).getTime();

// Resolve a range key (or custom YYYY-MM-DD start/end) into epoch-ms windows.
// `desc` is a human-friendly window label; `priorEndMs` lets us compare against
// the SAME elapsed window in the prior period (important for a partial "Today").
function resolveWindow(opts: { range?: RangeKey; start?: string; end?: string }) {
  if (opts.start && opts.end) {
    const startMs = new Date(`${opts.start}T00:00:00${HST_OFFSET}`).getTime();
    const endMs = new Date(`${opts.end}T23:59:59${HST_OFFSET}`).getTime();
    const days = Math.max(1, Math.round((endMs - startMs) / 86_400_000));
    return { key: 'custom', label: `${opts.start} → ${opts.end}`, days, startMs, endMs, priorStartMs: startMs - days * 86_400_000, priorEndMs: startMs, desc: `${niceDate.format(new Date(startMs))} – ${niceDate.format(new Date(endMs))} (HST)` };
  }
  const now = Date.now();
  if (opts.range === 'today') {
    const startMs = hstMidnightMs(now);
    const elapsed = now - startMs;
    return {
      key: 'today',
      label: 'Today',
      days: 1,
      startMs,
      endMs: now,
      priorStartMs: startMs - 86_400_000,
      priorEndMs: startMs - 86_400_000 + elapsed, // same time yesterday → fair delta
      desc: `Today · ${timeFmt.format(new Date(startMs))} – ${timeFmt.format(new Date(now))} HST`,
    };
  }
  const r = RANGES.find((x) => x.key === opts.range) ?? RANGES[2];
  const endMs = now;
  const startMs = endMs - r.days * 86_400_000;
  return { key: r.key, label: r.label, days: r.days, startMs, endMs, priorStartMs: startMs - r.days * 86_400_000, priorEndMs: startMs, desc: `${niceDate.format(new Date(startMs))} – ${niceDate.format(new Date(endMs))} (HST)` };
}

export async function getSalesData(opts: { range?: RangeKey; start?: string; end?: string } = {}): Promise<SalesData> {
  if (!cloverConfigured()) return emptyData(opts.range ?? '30d', false);
  // Cache the small computed result (raw order pages are too big for the fetch
  // cache), so Clover is only hit on a miss — at most once per TTL per range.
  // computeSalesData throws on a fetch error so a transient 429 is NOT cached;
  // we catch here and return an (uncached) error result so the next load retries.
  const key = opts.start && opts.end ? `c:${opts.start}:${opts.end}` : `r:${opts.range ?? '30d'}`;
  try {
    // Bump the version suffix whenever SalesData's shape changes so a deploy
    // never serves an old-shaped object from the persisted cache.
    return await unstable_cache(() => computeSalesData(opts), ['clover-sales-v3', key], { revalidate: 600, tags: [CLOVER_TAG] })();
  } catch (e) {
    return emptyData(opts.range ?? '30d', true, e instanceof Error ? e.message : String(e));
  }
}

async function computeSalesData(opts: { range?: RangeKey; start?: string; end?: string }): Promise<SalesData> {
  const w = resolveWindow(opts);
  // Fetch SEQUENTIALLY (not Promise.all) so only one Clover request is ever in
  // flight — bursting all three resources at once is what trips the rate limit.
  // Errors propagate so a transient failure isn't cached (getSalesData catches).
  const orders = await fetchOrders(w.priorStartMs);
  const refunds = await fetchRefunds(w.priorStartMs);
  const catMap = await getItemCategories();

  const paid = orders.filter((o) => (o.payments?.elements ?? []).some((p) => p.result === 'SUCCESS'));

  const inCur = (ms: number) => ms >= w.startMs && ms <= w.endMs;
  const inPrior = (ms: number) => ms >= w.priorStartMs && ms < w.priorEndMs;

  // Current-window aggregates
  let revenue = 0;
  let orderCount = 0;
  let tips = 0;
  let tax = 0;
  let priorRevenue = 0;
  let priorOrders = 0;
  let priorTax = 0;

  const dayRev = new Map<string, number>();
  const dayOrders = new Map<string, number>();
  const allDayRev = new Map<string, number>(); // every paid day (cur + prior) → for comparison overlay
  const curHour = new Array(24).fill(0);
  const heat: number[][] = WEEK.map(() => new Array(24).fill(0));
  const itemMap = new Map<string, { units: number; revenue: number }>();
  const catRev = new Map<string, number>();
  const tenderMap = new Map<string, number>();

  for (const o of paid) {
    const ms = o.createdTime ?? 0;
    const total = o.total ?? 0;
    allDayRev.set(hstDay(ms), (allDayRev.get(hstDay(ms)) ?? 0) + total);
    if (inCur(ms)) {
      revenue += total;
      orderCount += 1;
      const day = hstDay(ms);
      dayRev.set(day, (dayRev.get(day) ?? 0) + total);
      dayOrders.set(day, (dayOrders.get(day) ?? 0) + 1);
      curHour[hstHour(ms)] += total;
      const wd = WEEK.indexOf(hstWeekday(ms));
      if (wd >= 0) heat[wd][hstHour(ms)] += total;
      for (const li of o.lineItems?.elements ?? []) {
        if (li.isRevenue === false || li.refunded) continue;
        const name = li.name ?? 'Unknown';
        const cur = itemMap.get(name) ?? { units: 0, revenue: 0 };
        cur.units += 1;
        cur.revenue += li.price ?? 0;
        itemMap.set(name, cur);
        const cat = catMap[li.item?.id ?? ''] ?? 'Uncategorized';
        catRev.set(cat, (catRev.get(cat) ?? 0) + (li.price ?? 0));
      }
      for (const p of o.payments?.elements ?? []) {
        if (p.result !== 'SUCCESS') continue;
        tips += p.tipAmount ?? 0;
        tax += p.taxAmount ?? 0;
        tenderMap.set(p.tender?.label ?? 'Other', (tenderMap.get(p.tender?.label ?? 'Other') ?? 0) + (p.amount ?? 0));
      }
    } else if (inPrior(ms)) {
      priorRevenue += total;
      priorOrders += 1;
      for (const p of o.payments?.elements ?? []) if (p.result === 'SUCCESS') priorTax += p.taxAmount ?? 0;
    }
  }

  let refundTotal = 0;
  let refundCount = 0;
  let priorRefund = 0;
  for (const r of refunds) {
    const ms = r.createdTime ?? 0;
    if (inCur(ms)) {
      refundTotal += r.amount ?? 0;
      refundCount += 1;
    } else if (inPrior(ms)) priorRefund += r.amount ?? 0;
  }

  const net = revenue - tax - refundTotal;
  const priorNet = priorRevenue - priorTax - priorRefund;
  const delta = (cur: number, prev: number) => (prev > 0 ? ((cur - prev) / prev) * 100 : null);

  // Build day series across the window, with the aligned prior-period day for comparison.
  const revenueByDay: SalesData['revenueByDay'] = [];
  const dayCount = Math.min(w.days, 92);
  const windowMs = w.days * 86_400_000;
  for (let i = dayCount - 1; i >= 0; i--) {
    const ms = w.endMs - i * 86_400_000;
    const day = hstDay(ms);
    const priorDay = hstDay(ms - windowMs);
    revenueByDay.push({
      day,
      label: monDay.format(new Date(ms)),
      revenue: cents(dayRev.get(day) ?? 0),
      orders: dayOrders.get(day) ?? 0,
      prior: cents(allDayRev.get(priorDay) ?? 0),
    });
  }

  // Hourly revenue (6am–10pm) for the current window — used for the "Today" view.
  const hLabel = (h: number) => `${((h + 11) % 12) + 1}${h < 12 ? 'a' : 'p'}`;
  const revenueByHour = Array.from({ length: 17 }, (_, i) => i + 6).map((h) => ({ hour: h, label: hLabel(h), revenue: cents(curHour[h]) }));

  const heatmap = WEEK.map((weekday, i) => ({ weekday, hours: heat[i].map((v) => cents(v)) }));
  const heatmapMax = Math.max(0, ...heat.flat().map((v) => cents(v)));

  const topItems = Array.from(itemMap.entries())
    .map(([name, v]) => ({ name, units: v.units, revenue: cents(v.revenue) }))
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 10);

  const categoryMix = Array.from(catRev.entries())
    .map(([category, amount]) => ({ category, revenue: cents(amount) }))
    .sort((a, b) => b.revenue - a.revenue);

  const tenderMix = Array.from(tenderMap.entries())
    .map(([tender, amount]) => ({ tender, amount: cents(amount) }))
    .sort((a, b) => b.amount - a.amount);

  // Plain-English insights from the aggregates (no extra Clover calls).
  const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;
  const FULL: Record<string, string> = { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday' };
  const ap = (h: number) => (h === 0 ? '12 AM' : h < 12 ? `${h} AM` : h === 12 ? '12 PM' : `${h - 12} PM`);
  const insights: SalesData['insights'] = [];
  const periodWord = w.key === 'today' ? 'same time yesterday' : `previous ${w.label.toLowerCase()}`;
  const dRev = delta(revenue, priorRevenue);
  if (dRev !== null && Math.abs(dRev) >= 1) insights.push({ tone: dRev >= 0 ? 'good' : 'bad', text: `Revenue is ${dRev >= 0 ? 'up' : 'down'} ${Math.abs(Math.round(dRev))}% vs the ${periodWord}.` });
  if (topItems[0]) insights.push({ tone: 'good', text: `${topItems[0].name} is your top earner — ${usd(topItems[0].revenue)} (${topItems[0].units} sold).` });
  if (w.key !== 'today') {
    const wdTot = WEEK.map((_, i) => heat[i].reduce((s, v) => s + v, 0));
    const hrTot = new Array(24).fill(0);
    for (let i = 0; i < 7; i++) for (let h = 0; h < 24; h++) hrTot[h] += heat[i][h];
    const bd = wdTot.indexOf(Math.max(...wdTot));
    const bh = hrTot.indexOf(Math.max(...hrTot));
    if (wdTot[bd] > 0) insights.push({ tone: 'neutral', text: `Busiest around ${FULL[WEEK[bd]]} ${ap(bh)}.` });
  }
  if (refundCount > 0) insights.push({ tone: refundTotal >= revenue * 0.02 ? 'bad' : 'neutral', text: `${refundCount} refund${refundCount === 1 ? '' : 's'} — ${usd(refundTotal)}.` });

  return {
    configured: true,
    generatedAt: Date.now(),
    range: { key: w.key, label: w.label, days: w.days, start: hstDay(w.startMs), end: hstDay(w.endMs), desc: w.desc },
    kpis: {
      revenue: cents(revenue),
      net: cents(net),
      orders: orderCount,
      aov: orderCount > 0 ? cents(revenue / orderCount) : 0,
      refunds: cents(refundTotal),
      refundCount,
      tax: cents(tax),
      tips: cents(tips),
      deltaRevenue: delta(revenue, priorRevenue),
      deltaOrders: delta(orderCount, priorOrders),
      deltaNet: delta(net, priorNet),
    },
    revenueByDay,
    revenueByHour,
    insights,
    heatmap,
    heatmapMax,
    topItems,
    categoryMix,
    tenderMix,
  };
}
