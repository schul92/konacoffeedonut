import 'server-only';
import { CLOVER_TAG, CLOVER_ITEMS_TAG } from './cacheTags';

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

// ---- Paginated fetch helpers (cached) ----
async function cloverPaginate<T>(resource: string, query: string, revalidate: number, tag: string): Promise<T[]> {
  const out: T[] = [];
  let offset = 0;
  for (;;) {
    const url = `${BASE}/v3/merchants/${MID}/${resource}?${query}&limit=1000&offset=${offset}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${TOKEN}`, Accept: 'application/json' },
      next: { revalidate, tags: [tag] },
    });
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

// 2-minute cache on transaction data: fresh enough for a live dashboard while
// staying far under Clover's 16 req/s limit (a single shop is a few pages).
const fetchOrders = (sinceMs: number) =>
  cloverPaginate<CloverOrder>('orders', `expand=lineItems,payments.tender&filter=${encodeURIComponent(`createdTime>=${sinceMs}`)}`, 120, CLOVER_TAG);
const fetchRefunds = (sinceMs: number) =>
  cloverPaginate<CloverRefund>('refunds', `filter=${encodeURIComponent(`createdTime>=${sinceMs}`)}`, 120, CLOVER_TAG);

// item id → category name (changes rarely → daily cache)
async function fetchItemCategories(): Promise<Map<string, string>> {
  const items = await cloverPaginate<{ id: string; categories?: { elements?: { name?: string }[] } }>(
    'items',
    'expand=categories',
    86400,
    CLOVER_ITEMS_TAG
  );
  const map = new Map<string, string>();
  for (const it of items) map.set(it.id, it.categories?.elements?.[0]?.name ?? 'Uncategorized');
  return map;
}

// ---- Output types (money already in dollars) ----
export interface SalesData {
  configured: boolean;
  error?: string;
  generatedAt: number;
  range: { key: string; label: string; days: number; start: string; end: string };
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
  revenueByDay: { day: string; label: string; revenue: number }[];
  heatmap: { weekday: string; hours: number[] }[];
  heatmapMax: number;
  topItems: { name: string; units: number; revenue: number }[];
  categoryMix: { category: string; revenue: number }[];
  tenderMix: { tender: string; amount: number }[];
}

function emptyRange(key: string): SalesData['range'] {
  return { key, label: '', days: 0, start: '', end: '' };
}
function emptyData(key: string, configured: boolean, error?: string): SalesData {
  return {
    configured,
    error,
    generatedAt: Date.now(),
    range: emptyRange(key),
    kpis: { revenue: 0, net: 0, orders: 0, aov: 0, refunds: 0, refundCount: 0, tax: 0, tips: 0, deltaRevenue: null, deltaOrders: null, deltaNet: null },
    revenueByDay: [],
    heatmap: [],
    heatmapMax: 0,
    topItems: [],
    categoryMix: [],
    tenderMix: [],
  };
}

// Resolve a range key (or custom YYYY-MM-DD start/end) into epoch-ms windows.
function resolveWindow(opts: { range?: RangeKey; start?: string; end?: string }) {
  if (opts.start && opts.end) {
    const startMs = new Date(`${opts.start}T00:00:00${HST_OFFSET}`).getTime();
    const endMs = new Date(`${opts.end}T23:59:59${HST_OFFSET}`).getTime();
    const days = Math.max(1, Math.round((endMs - startMs) / 86_400_000));
    return { key: 'custom', label: `${opts.start} → ${opts.end}`, days, startMs, endMs, priorStartMs: startMs - days * 86_400_000 };
  }
  const r = RANGES.find((x) => x.key === opts.range) ?? RANGES[2];
  const endMs = Date.now();
  const startMs = endMs - r.days * 86_400_000;
  return { key: r.key, label: r.label, days: r.days, startMs, endMs, priorStartMs: startMs - r.days * 86_400_000 };
}

export async function getSalesData(opts: { range?: RangeKey; start?: string; end?: string } = {}): Promise<SalesData> {
  if (!cloverConfigured()) return emptyData(opts.range ?? '30d', false);

  const w = resolveWindow(opts);
  let orders: CloverOrder[];
  let refunds: CloverRefund[];
  let catMap: Map<string, string>;
  try {
    [orders, refunds, catMap] = await Promise.all([fetchOrders(w.priorStartMs), fetchRefunds(w.priorStartMs), fetchItemCategories()]);
  } catch (e) {
    return emptyData(w.key, true, e instanceof Error ? e.message : String(e));
  }

  const paid = orders.filter((o) => (o.payments?.elements ?? []).some((p) => p.result === 'SUCCESS'));

  const inCur = (ms: number) => ms >= w.startMs && ms <= w.endMs;
  const inPrior = (ms: number) => ms >= w.priorStartMs && ms < w.startMs;

  // Current-window aggregates
  let revenue = 0;
  let orderCount = 0;
  let tips = 0;
  let tax = 0;
  let priorRevenue = 0;
  let priorOrders = 0;
  let priorTax = 0;

  const dayRev = new Map<string, number>();
  const heat: number[][] = WEEK.map(() => new Array(24).fill(0));
  const itemMap = new Map<string, { units: number; revenue: number }>();
  const catRev = new Map<string, number>();
  const tenderMap = new Map<string, number>();

  for (const o of paid) {
    const ms = o.createdTime ?? 0;
    const total = o.total ?? 0;
    if (inCur(ms)) {
      revenue += total;
      orderCount += 1;
      const day = hstDay(ms);
      dayRev.set(day, (dayRev.get(day) ?? 0) + total);
      const wd = WEEK.indexOf(hstWeekday(ms));
      if (wd >= 0) heat[wd][hstHour(ms)] += total;
      for (const li of o.lineItems?.elements ?? []) {
        if (li.isRevenue === false || li.refunded) continue;
        const name = li.name ?? 'Unknown';
        const cur = itemMap.get(name) ?? { units: 0, revenue: 0 };
        cur.units += 1;
        cur.revenue += li.price ?? 0;
        itemMap.set(name, cur);
        const cat = catMap.get(li.item?.id ?? '') ?? 'Uncategorized';
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

  // Build day series across the window
  const revenueByDay: SalesData['revenueByDay'] = [];
  const dayCount = Math.min(w.days, 92);
  for (let i = dayCount - 1; i >= 0; i--) {
    const ms = w.endMs - i * 86_400_000;
    const day = hstDay(ms);
    revenueByDay.push({ day, label: monDay.format(new Date(ms)), revenue: cents(dayRev.get(day) ?? 0) });
  }

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

  return {
    configured: true,
    generatedAt: Date.now(),
    range: { key: w.key, label: w.label, days: w.days, start: hstDay(w.startMs), end: hstDay(w.endMs) },
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
    heatmap,
    heatmapMax,
    topItems,
    categoryMix,
    tenderMix,
  };
}
