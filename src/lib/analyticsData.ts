import 'server-only';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { google } from 'googleapis';

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

  const [curTotal, prevTotal, queries, pages] = await Promise.all([
    gscQuery(svc, [], w.cur.start, w.cur.end, 1),
    gscQuery(svc, [], w.prev.start, w.prev.end, 1),
    gscQuery(svc, ['query'], w.cur.start, w.cur.end),
    gscQuery(svc, ['page'], w.cur.start, w.cur.end),
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
  };
}

// ---- GA4 ----
async function getGa4(w: ReturnType<typeof windows>) {
  const ga = google.analyticsdata({ version: 'v1beta', auth: jwtClient(['https://www.googleapis.com/auth/analytics.readonly']) });
  const property = `properties/${GA4_PROPERTY_ID}`;

  const totals = await ga.properties.runReport({
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
      ],
    },
  });
  const tRows = totals.data.rows ?? [];
  const pick = (rangeIdx: number) =>
    tRows.find((r) => r.dimensionValues?.[0]?.value === `date_range_${rangeIdx}`)?.metricValues?.map((m) => Number(m.value) || 0) ?? [0, 0, 0, 0];
  const c = pick(0);
  const p = pick(1);

  const pagesRes = await ga.properties.runReport({
    property,
    requestBody: {
      dateRanges: [{ startDate: w.cur.start, endDate: w.cur.end }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }, { name: 'totalUsers' }],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: '15',
    },
  });
  const topPages = (pagesRes.data.rows ?? []).map((r) => ({
    path: r.dimensionValues?.[0]?.value ?? '',
    views: Number(r.metricValues?.[0]?.value) || 0,
    users: Number(r.metricValues?.[1]?.value) || 0,
  }));

  const chRes = await ga.properties.runReport({
    property,
    requestBody: {
      dateRanges: [{ startDate: w.cur.start, endDate: w.cur.end }],
      dimensions: [{ name: 'sessionDefaultChannelGroup' }],
      metrics: [{ name: 'sessions' }, { name: 'totalUsers' }],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      limit: '10',
    },
  });
  const channels = (chRes.data.rows ?? []).map((r) => ({
    channel: r.dimensionValues?.[0]?.value ?? '',
    sessions: Number(r.metricValues?.[0]?.value) || 0,
    users: Number(r.metricValues?.[1]?.value) || 0,
  }));

  return {
    users: { value: c[0], prev: p[0] },
    sessions: { value: c[1], prev: p[1] },
    pageViews: { value: c[2], prev: p[2] },
    engagementRate: c[3],
    topPages,
    channels,
  };
}

// ---- Per-tab entries (Search and Traffic tabs query independently) ----
export type GscData = Awaited<ReturnType<typeof getGsc>>;
export type Ga4Data = Awaited<ReturnType<typeof getGa4>>;

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
