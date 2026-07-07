import 'server-only';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { google, type analyticsdata_v1beta } from 'googleapis';

// googleapis/gaxios emits a harmless `zlib.bytesRead` deprecation (DEP0108)
// while decompressing responses, which Next's dev error overlay surfaces as a
// "Server Console Error" and makes the Search/Traffic tabs look broken. Filter
// just that one warning (once).
const g = globalThis as unknown as { __zlibWarnPatched?: boolean };
if (!g.__zlibWarnPatched) {
  g.__zlibWarnPatched = true;
  const original = process.emitWarning.bind(process);
  process.emitWarning = ((warning: string | Error, ...rest: unknown[]) => {
    const msg = typeof warning === 'string' ? warning : warning?.message ?? '';
    if (msg.includes('zlib.bytesRead')) return;
    return (original as (...a: unknown[]) => void)(warning, ...rest);
  }) as typeof process.emitWarning;
}

// ---- Config ----
const GSC_PROPERTY = 'sc-domain:konacoffeedonut.com';
const GA4_PROPERTY_ID = process.env.GA4_PROPERTY_ID || '508368220';
const DAYS = 28;

// ---- Credentials ----
// In production (Vercel) the service-account JSON lives in the env var
// GOOGLE_SERVICE_ACCOUNT_JSON (raw JSON or base64). Locally we fall back to the
// gitignored google-service-account.json file at the repo root.
function loadServiceAccount(): { client_email: string; private_key: string } {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (raw && raw.trim()) {
    const text = raw.trim().startsWith('{')
      ? raw
      : Buffer.from(raw, 'base64').toString('utf8');
    return JSON.parse(text);
  }
  const file = path.join(process.cwd(), 'google-service-account.json');
  return JSON.parse(readFileSync(file, 'utf8'));
}

function jwtClient(scopes: string[]) {
  const creds = loadServiceAccount();
  return new google.auth.JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes,
  });
}

// ---- Date helpers ----
function ymd(d: Date): string {
  return d.toISOString().slice(0, 10);
}
function windows() {
  const end = new Date();
  const curStart = new Date(end);
  curStart.setDate(end.getDate() - DAYS);
  const prevEnd = new Date(curStart);
  prevEnd.setDate(curStart.getDate() - 1);
  const prevStart = new Date(prevEnd);
  prevStart.setDate(prevEnd.getDate() - (DAYS - 1));
  return {
    cur: { start: ymd(curStart), end: ymd(end) },
    prev: { start: ymd(prevStart), end: ymd(prevEnd) },
  };
}

// ---- Types ----
export interface MetricDelta {
  value: number;
  prev: number;
}
export interface GscRow {
  key: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}
export interface DashboardData {
  window: { start: string; end: string; prevStart: string; prevEnd: string };
  gsc: {
    clicks: MetricDelta;
    impressions: MetricDelta;
    ctr: number;
    position: number;
    topQueries: GscRow[];
    topPages: GscRow[];
    opportunities: GscRow[];
  } | null;
  ga4: {
    users: MetricDelta;
    sessions: MetricDelta;
    pageViews: MetricDelta;
    engagementRate: number;
    topPages: { path: string; views: number; users: number }[];
    channels: { channel: string; sessions: number; users: number }[];
  } | null;
  errors: string[];
}

// ---- GSC ----
async function gscQuery(
  svc: ReturnType<typeof google.searchconsole>,
  dimensions: string[],
  start: string,
  end: string,
  rowLimit = 1000
): Promise<GscRow[]> {
  const res = await svc.searchanalytics.query({
    siteUrl: GSC_PROPERTY,
    requestBody: { startDate: start, endDate: end, dimensions, rowLimit },
  });
  return (res.data.rows ?? []).map((r) => ({
    key: r.keys?.[0] ?? '',
    clicks: r.clicks ?? 0,
    impressions: r.impressions ?? 0,
    ctr: r.ctr ?? 0,
    position: r.position ?? 0,
  }));
}

async function getGsc(w: ReturnType<typeof windows>) {
  const svc = google.searchconsole({ version: 'v1', auth: jwtClient(['https://www.googleapis.com/auth/webmasters.readonly']) });

  const [curTotal, prevTotal, queries, pages, daily, devices, countries] = await Promise.all([
    gscQuery(svc, [], w.cur.start, w.cur.end, 1),
    gscQuery(svc, [], w.prev.start, w.prev.end, 1),
    gscQuery(svc, ['query'], w.cur.start, w.cur.end),
    gscQuery(svc, ['page'], w.cur.start, w.cur.end),
    gscQuery(svc, ['date'], w.cur.start, w.cur.end),
    gscQuery(svc, ['device'], w.cur.start, w.cur.end),
    gscQuery(svc, ['country'], w.cur.start, w.cur.end, 10),
  ]);

  const cur = curTotal[0] ?? { clicks: 0, impressions: 0, ctr: 0, position: 0, key: '' };
  const prev = prevTotal[0] ?? { clicks: 0, impressions: 0, ctr: 0, position: 0, key: '' };

  const opportunities = [...queries]
    .filter((r) => r.impressions >= 50 && ((r.position >= 8 && r.position <= 25) || r.ctr < 0.01))
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 12);

  return {
    clicks: { value: cur.clicks, prev: prev.clicks },
    impressions: { value: cur.impressions, prev: prev.impressions },
    ctr: cur.ctr,
    position: cur.position,
    topQueries: [...queries].sort((a, b) => b.clicks - a.clicks).slice(0, 15),
    topPages: [...pages]
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 15)
      .map((r) => ({ ...r, key: r.key.replace('https://www.konacoffeedonut.com', '').replace('https://konacoffeedonut.com', '') || '/' })),
    opportunities,
    daily: [...daily].sort((a, b) => a.key.localeCompare(b.key)),
    devices: [...devices].sort((a, b) => b.clicks - a.clicks),
    countries: [...countries].sort((a, b) => b.clicks - a.clicks),
  };
}

// ---- GA4 ----
// googleapis' runReport has a callback overload that makes ReturnType resolve
// to void, so type against the response schema instead.
type Ga4Report = { data: analyticsdata_v1beta.Schema$RunReportResponse };

async function getGa4(w: ReturnType<typeof windows>) {
  const ga = google.analyticsdata({ version: 'v1beta', auth: jwtClient(['https://www.googleapis.com/auth/analytics.readonly']) });
  const property = `properties/${GA4_PROPERTY_ID}`;
  const cur = [{ startDate: w.cur.start, endDate: w.cur.end }];

  // One breakdown report: dimension × [sessions, totalUsers] over the current window.
  const breakdown = (dimension: string, limit: number) =>
    ga.properties.runReport({
      property,
      requestBody: {
        dateRanges: cur,
        dimensions: [{ name: dimension }],
        metrics: [{ name: 'sessions' }, { name: 'totalUsers' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: String(limit),
      },
    });
  const rows = (res: Ga4Report) => (res.data.rows ?? []);
  const asKeyed = (res: Ga4Report) =>
    rows(res).map((r) => ({
      key: r.dimensionValues?.[0]?.value ?? '',
      sessions: Number(r.metricValues?.[0]?.value) || 0,
      users: Number(r.metricValues?.[1]?.value) || 0,
    }));

  const [totals, dailyRes, pagesRes, chRes, landRes, smRes, coRes, ciRes, devRes, langRes, realtimeRes] = await Promise.all([
    ga.properties.runReport({
      property,
      requestBody: {
        dateRanges: [
          { startDate: w.cur.start, endDate: w.cur.end },
          { startDate: w.prev.start, endDate: w.prev.end },
        ],
        metrics: [
          { name: 'totalUsers' },
          { name: 'sessions' },
          { name: 'screenPageViews' },
          { name: 'engagementRate' },
          { name: 'newUsers' },
          { name: 'averageSessionDuration' },
        ],
      },
    }),
    ga.properties.runReport({
      property,
      requestBody: {
        dateRanges: cur,
        dimensions: [{ name: 'date' }],
        metrics: [{ name: 'sessions' }, { name: 'totalUsers' }, { name: 'screenPageViews' }],
        orderBys: [{ dimension: { dimensionName: 'date' } }],
      },
    }),
    ga.properties.runReport({
      property,
      requestBody: {
        dateRanges: cur,
        dimensions: [{ name: 'pagePath' }],
        metrics: [{ name: 'screenPageViews' }, { name: 'totalUsers' }],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: '15',
      },
    }),
    breakdown('sessionDefaultChannelGroup', 10),
    breakdown('landingPage', 10),
    breakdown('sessionSourceMedium', 10),
    breakdown('country', 8),
    breakdown('city', 8),
    breakdown('deviceCategory', 4),
    breakdown('language', 8),
    // Realtime is a different endpoint with its own quota; never let it sink the tab.
    ga.properties
      .runRealtimeReport({ property, requestBody: { metrics: [{ name: 'activeUsers' }] } })
      .catch(() => null),
  ]);

  const tRows = totals.data.rows ?? [];
  const pick = (rangeIdx: number) =>
    tRows.find((r) => r.dimensionValues?.[0]?.value === `date_range_${rangeIdx}`)?.metricValues?.map((m) => Number(m.value) || 0) ?? [0, 0, 0, 0, 0, 0];
  const c = pick(0);
  const p = pick(1);

  return {
    users: { value: c[0], prev: p[0] },
    sessions: { value: c[1], prev: p[1] },
    pageViews: { value: c[2], prev: p[2] },
    engagementRate: c[3],
    newUsers: { value: c[4], prev: p[4] },
    avgSessionSeconds: c[5],
    realtimeUsers: realtimeRes ? Number(realtimeRes.data.rows?.[0]?.metricValues?.[0]?.value) || 0 : null,
    daily: rows(dailyRes).map((r) => ({
      date: (r.dimensionValues?.[0]?.value ?? '').replace(/^(\d{4})(\d{2})(\d{2})$/, '$1-$2-$3'),
      sessions: Number(r.metricValues?.[0]?.value) || 0,
      users: Number(r.metricValues?.[1]?.value) || 0,
      pageViews: Number(r.metricValues?.[2]?.value) || 0,
    })),
    topPages: rows(pagesRes).map((r) => ({
      path: r.dimensionValues?.[0]?.value ?? '',
      views: Number(r.metricValues?.[0]?.value) || 0,
      users: Number(r.metricValues?.[1]?.value) || 0,
    })),
    channels: asKeyed(chRes).map((r) => ({ channel: r.key, sessions: r.sessions, users: r.users })),
    landingPages: asKeyed(landRes),
    sourceMedium: asKeyed(smRes),
    countries: asKeyed(coRes),
    cities: asKeyed(ciRes),
    devices: asKeyed(devRes),
    languages: asKeyed(langRes),
  };
}

// ---- GA4 custom events (Events tab) ----
// Conversion-ish events fired from src/lib/analytics.ts. Used for the KPI row
// and the daily-trend filter.
const CONVERSION_EVENTS = [
  'job_apply_click',
  'generate_lead',
  'get_directions',
  'contact',
  'social_click',
  'menu_download',
  'initiate_order',
  'newsletter_signup',
];

// GA4 auto-collected events — shown separately so they don't drown out ours.
const AUTO_EVENTS = new Set([
  'page_view',
  'session_start',
  'first_visit',
  'user_engagement',
  'scroll',
  'click',
  'form_start',
  'form_submit',
  'video_start',
  'video_progress',
  'video_complete',
  'file_download',
]);

async function getEvents(w: ReturnType<typeof windows>) {
  const ga = google.analyticsdata({ version: 'v1beta', auth: jwtClient(['https://www.googleapis.com/auth/analytics.readonly']) });
  const property = `properties/${GA4_PROPERTY_ID}`;

  const [byName, daily] = await Promise.all([
    ga.properties.runReport({
      property,
      requestBody: {
        dateRanges: [
          { startDate: w.cur.start, endDate: w.cur.end },
          { startDate: w.prev.start, endDate: w.prev.end },
        ],
        dimensions: [{ name: 'eventName' }],
        metrics: [{ name: 'eventCount' }, { name: 'totalUsers' }],
        limit: '100',
      },
    }),
    ga.properties.runReport({
      property,
      requestBody: {
        dateRanges: [{ startDate: w.cur.start, endDate: w.cur.end }],
        dimensions: [{ name: 'date' }],
        metrics: [{ name: 'eventCount' }],
        dimensionFilter: { filter: { fieldName: 'eventName', inListFilter: { values: CONVERSION_EVENTS } } },
        orderBys: [{ dimension: { dimensionName: 'date' } }],
      },
    }),
  ]);

  // With two dateRanges GA4 appends a `dateRange` dimension value to each row;
  // fold the pair back into one entry per event name.
  const map = new Map<string, { count: number; prev: number; users: number }>();
  for (const r of byName.data.rows ?? []) {
    const name = r.dimensionValues?.[0]?.value ?? '';
    const range = r.dimensionValues?.[1]?.value;
    const count = Number(r.metricValues?.[0]?.value) || 0;
    const users = Number(r.metricValues?.[1]?.value) || 0;
    const e = map.get(name) ?? { count: 0, prev: 0, users: 0 };
    if (range === 'date_range_1') e.prev = count;
    else {
      e.count = count;
      e.users = users;
    }
    map.set(name, e);
  }

  return {
    events: [...map.entries()]
      .map(([name, v]) => ({ name, ...v, isConversion: CONVERSION_EVENTS.includes(name), isAuto: AUTO_EVENTS.has(name) }))
      .sort((a, b) => b.count - a.count),
    dailyConversions: (daily.data.rows ?? []).map((r) => ({
      date: (r.dimensionValues?.[0]?.value ?? '').replace(/^(\d{4})(\d{2})(\d{2})$/, '$1-$2-$3'),
      count: Number(r.metricValues?.[0]?.value) || 0,
    })),
  };
}

// ---- Per-tab entries (Search, Traffic and Events tabs query independently) ----
export type GscData = Awaited<ReturnType<typeof getGsc>>;
export type Ga4Data = Awaited<ReturnType<typeof getGa4>>;
export type EventsData = Awaited<ReturnType<typeof getEvents>>;

export function analyticsWindow() {
  const w = windows();
  return { start: w.cur.start, end: w.cur.end, prevStart: w.prev.start, prevEnd: w.prev.end };
}

export async function getGscData(): Promise<GscData | null> {
  try {
    return await getGsc(windows());
  } catch {
    return null;
  }
}

export async function getGa4Data(): Promise<Ga4Data | null> {
  try {
    return await getGa4(windows());
  } catch {
    return null;
  }
}

export async function getEventsData(): Promise<EventsData | null> {
  try {
    return await getEvents(windows());
  } catch {
    return null;
  }
}

// ---- Public entry ----
export async function getDashboardData(): Promise<DashboardData> {
  const w = windows();
  const errors: string[] = [];
  let gsc: DashboardData['gsc'] = null;
  let ga4: DashboardData['ga4'] = null;

  const [gscRes, ga4Res] = await Promise.allSettled([getGsc(w), getGa4(w)]);
  if (gscRes.status === 'fulfilled') gsc = gscRes.value;
  else errors.push(`GSC: ${gscRes.reason?.message ?? gscRes.reason}`);
  if (ga4Res.status === 'fulfilled') ga4 = ga4Res.value;
  else errors.push(`GA4: ${ga4Res.reason?.message ?? ga4Res.reason}`);

  return {
    window: { start: w.cur.start, end: w.cur.end, prevStart: w.prev.start, prevEnd: w.prev.end },
    gsc,
    ga4,
    errors,
  };
}
