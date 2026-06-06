'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useTheme } from './ThemeProvider';

// Per-theme chart colors. Light = Kona Hawaii (ocean teal + sunset + palm),
// dark = cool blues. Tailwind/HTML bits use the --ad-* CSS vars instead.
const THEME = {
  light: {
    primary: '#0E7490', // ocean teal
    palette: ['#0E7490', '#EA580C', '#15803D', '#DB2777', '#0284C7', '#CA8A04'],
    grid: '#ECE0CE',
    axis: '#8A7F70',
    cardBg: '#ffffff',
    tipText: '#1C1917',
    heatEmpty: '#f5ecdd',
    heatA: [255, 240, 222], // bright cream
    heatB: [251, 146, 60], // bright vivid orange (no dark cells)
    cellText: '#7c2d12', // dark warm text reads on the bright orange cells
  },
  dark: {
    primary: '#60A5FA',
    palette: ['#60A5FA', '#F59E0B', '#34D399', '#E879F9', '#22D3EE', '#FB7185'],
    grid: 'rgba(148,163,184,0.16)',
    axis: '#CBD5E1',
    cardBg: '#0F172A',
    tipText: '#E2E8F0',
    heatEmpty: '#1E293B',
    heatA: [30, 58, 95],
    heatB: [56, 189, 248],
    cellText: '#0F172A',
  },
};

const usd0 = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;
const hourLabel = (h: number) => `${((h + 11) % 12) + 1}${h < 12 ? 'a' : 'p'}`;

function useC() {
  const { theme } = useTheme();
  return THEME[theme];
}
function tip(c: ReturnType<typeof useC>) {
  return {
    borderRadius: 10,
    border: '1px solid var(--ad-border)',
    background: c.cardBg,
    color: c.tipText,
    boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
    fontSize: 12,
    fontVariantNumeric: 'tabular-nums',
    padding: '8px 12px',
  } as const;
}

export function RevenueBars({
  data,
  xKey,
  height = 240,
}: {
  data: { revenue: number; [k: string]: string | number }[];
  xKey: string;
  height?: number;
}) {
  const c = useC();
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -12 }}>
        <CartesianGrid vertical={false} stroke={c.grid} />
        <XAxis dataKey={xKey} tick={{ fontSize: 11, fill: c.axis }} interval="preserveStartEnd" tickLine={false} axisLine={false} dy={6} />
        <YAxis tick={{ fontSize: 11, fill: c.axis }} tickFormatter={(v) => (v >= 1000 ? `$${Math.round(v / 1000)}k` : `$${v}`)} tickLine={false} axisLine={false} width={46} />
        <Tooltip cursor={{ fill: 'rgba(148,163,184,0.12)' }} formatter={(value) => [usd0(Number(value)), 'Revenue']} contentStyle={tip(c)} />
        <Bar dataKey="revenue" fill={c.primary} radius={[5, 5, 0, 0]} maxBarSize={44} />
      </BarChart>
    </ResponsiveContainer>
  );
}

// By-day revenue: bars + a 7-day moving-average trend line, and (when compare is
// on) a faded dashed line for the matching prior period. The moving average is
// computed client-side so the server payload stays tiny.
type DayRow = { day: string; label: string; revenue: number; orders: number; prior: number };

function RevTooltip({ active, payload, compare }: { active?: boolean; payload?: { payload: DayRow & { trend: number } }[]; compare: boolean }) {
  const c = useC();
  if (!active || !payload?.length) return null;
  const row = payload[0].payload;
  const delta = compare && row.prior > 0 ? ((row.revenue - row.prior) / row.prior) * 100 : null;
  return (
    <div style={tip(c)}>
      <div className="font-semibold mb-1">{row.label}</div>
      <div className="flex items-center justify-between gap-4">
        <span style={{ color: c.axis }}>Revenue</span>
        <span className="font-semibold tabular-nums">{usd0(row.revenue)}</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <span style={{ color: c.axis }}>{row.orders} orders · 7-day avg</span>
        <span className="tabular-nums">{usd0(row.trend)}</span>
      </div>
      {compare && (
        <div className="flex items-center justify-between gap-4 mt-0.5 pt-0.5" style={{ borderTop: `1px solid ${c.grid}` }}>
          <span style={{ color: c.axis }}>Prior period</span>
          <span className="tabular-nums">
            {usd0(row.prior)}
            {delta !== null && <span style={{ color: delta >= 0 ? 'var(--ad-pos)' : 'var(--ad-neg)' }}> {delta >= 0 ? '+' : ''}{delta.toFixed(0)}%</span>}
          </span>
        </div>
      )}
    </div>
  );
}

export function RevenueChart({ data, compare = false, height = 300 }: { data: DayRow[]; compare?: boolean; height?: number }) {
  const c = useC();
  // 7-day trailing moving average (uses up to 7 prior points; fewer near the start).
  const rows = data.map((d, i) => {
    const from = Math.max(0, i - 6);
    const slice = data.slice(from, i + 1);
    const trend = slice.reduce((s, x) => s + x.revenue, 0) / slice.length;
    return { ...d, trend };
  });
  return (
    <div>
      <div className="-mt-1 mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--ad-fg-muted)]">
        <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm" style={{ background: c.primary }} />Revenue</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-[3px] w-4 rounded-full" style={{ background: c.palette[1] }} />7-day average</span>
        {compare && (
          <span className="inline-flex items-center gap-1.5"><span className="h-0 w-4 border-t-2 border-dashed" style={{ borderColor: c.axis }} />Prior period</span>
        )}
      </div>
      <ResponsiveContainer width="100%" height={height}>
        <ComposedChart data={rows} margin={{ top: 8, right: 8, bottom: 0, left: -12 }}>
          <CartesianGrid vertical={false} stroke={c.grid} />
          <XAxis dataKey="label" tick={{ fontSize: 11, fill: c.axis }} interval="preserveStartEnd" tickLine={false} axisLine={false} dy={6} />
          <YAxis tick={{ fontSize: 11, fill: c.axis }} tickFormatter={usdK} tickLine={false} axisLine={false} width={46} />
          <Tooltip cursor={{ fill: 'rgba(148,163,184,0.12)' }} content={<RevTooltip compare={compare} />} />
          <Bar dataKey="revenue" fill={c.primary} radius={[5, 5, 0, 0]} maxBarSize={44} />
          {compare && <Line type="monotone" dataKey="prior" stroke={c.axis} strokeWidth={1.5} strokeDasharray="4 4" dot={false} opacity={0.7} />}
          <Line type="monotone" dataKey="trend" stroke={c.palette[1]} strokeWidth={2.5} dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export function Sparkline({ data, height = 28 }: { data: number[]; height?: number }) {
  const c = useC();
  if (data.length < 2) return null;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const W = 100;
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * W},${height - ((v - min) / range) * (height - 3) - 1.5}`).join(' ');
  return (
    <svg viewBox={`0 0 ${W} ${height}`} width="100%" height={height} preserveAspectRatio="none" className="mt-2 block">
      <polyline points={pts} fill="none" stroke={c.primary} strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function HorizontalItemBars({ data }: { data: { name: string; revenue: number; units?: number }[] }) {
  const c = useC();
  const max = Math.max(1, ...data.map((d) => d.revenue));
  return (
    <ul className="space-y-2.5">
      {data.map((d) => (
        <li key={d.name}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-[var(--ad-fg)] truncate pr-2">{d.name}</span>
            <span className="tabular-nums text-[var(--ad-fg-muted)] shrink-0">
              {usd0(d.revenue)}
              {d.units ? <span className="text-[var(--ad-fg-subtle)]"> · {d.units}x</span> : null}
            </span>
          </div>
          <div className="h-2 rounded-full bg-[var(--ad-track)] overflow-hidden">
            <div className="h-full rounded-full" style={{ width: `${(d.revenue / max) * 100}%`, background: c.primary }} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function TenderDonut({ data }: { data: { tender: string; amount: number }[] }) {
  const c = useC();
  const total = data.reduce((s, d) => s + d.amount, 0) || 1;
  return (
    <div className="flex items-center gap-4">
      <div className="relative" style={{ width: '50%' }}>
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie data={data} dataKey="amount" nameKey="tender" cx="50%" cy="50%" innerRadius={48} outerRadius={74} paddingAngle={2} stroke={c.cardBg} strokeWidth={2}>
              {data.map((_, i) => (
                <Cell key={i} fill={c.palette[i % c.palette.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => usd0(Number(value))} contentStyle={tip(c)} />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-[10px] uppercase tracking-wide text-[var(--ad-fg-subtle)]">Total</span>
          <span className="text-base font-bold tabular-nums text-[var(--ad-fg)]">{usd0(total)}</span>
        </div>
      </div>
      <ul className="flex-1 space-y-1.5 text-sm">
        {data.map((d, i) => (
          <li key={d.tender} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: c.palette[i % c.palette.length] }} />
            <span className="text-[var(--ad-fg)] flex-1 truncate">{d.tender}</span>
            <span className="tabular-nums text-[var(--ad-fg-muted)]">{Math.round((d.amount / total) * 100)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const FULL_DAY: Record<string, string> = { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday' };
const ampm = (h: number) => (h === 0 ? '12 AM' : h < 12 ? `${h} AM` : h === 12 ? '12 PM' : `${h - 12} PM`);
const usdK = (n: number) => (n >= 1000 ? `$${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : `$${Math.round(n)}`);

export function Heatmap({ data, max }: { data: { weekday: string; hours: number[] }[]; max: number }) {
  const c = useC();
  const hours = Array.from({ length: 15 }, (_, i) => i + 7); // 7am–9pm
  const ramp = (t: number) => {
    const tt = Math.max(0, Math.min(1, t));
    const rgb = c.heatA.map((x, i) => Math.round(x + (c.heatB[i] - x) * tt));
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
  };

  const dayTotals = data.map((r) => hours.reduce((s, h) => s + r.hours[h], 0));
  const maxDayTotal = Math.max(1, ...dayTotals);
  const hourTotals = hours.map((h) => data.reduce((s, r) => s + r.hours[h], 0));
  let peak = { wd: '', h: 7, v: 0 };
  data.forEach((r) => hours.forEach((h) => { if (r.hours[h] > peak.v) peak = { wd: r.weekday, h, v: r.hours[h] }; }));
  const busiestDay = data[dayTotals.indexOf(Math.max(...dayTotals))]?.weekday ?? '';
  const busiestHour = hours[hourTotals.indexOf(Math.max(...hourTotals))] ?? 9;

  return (
    <div>
      {peak.v > 0 && (
        <div className="mb-4 flex flex-wrap gap-x-6 gap-y-1 text-sm">
          <span className="text-[var(--ad-fg-muted)]">Busiest day <span className="font-semibold text-[var(--ad-fg)]">{FULL_DAY[busiestDay] ?? busiestDay}</span></span>
          <span className="text-[var(--ad-fg-muted)]">Busiest hour <span className="font-semibold text-[var(--ad-fg)]">{ampm(busiestHour)}</span></span>
          <span className="text-[var(--ad-fg-muted)]">Single peak <span className="font-semibold text-[var(--ad-fg)]">{FULL_DAY[peak.wd] ?? peak.wd} {ampm(peak.h)}</span> · <span className="tabular-nums text-[var(--ad-fg)]">{usd0(peak.v)}</span></span>
        </div>
      )}

      <div className="overflow-x-auto">
        <div className="min-w-[620px]">
          <div className="flex items-end">
            <div className="w-10 shrink-0" />
            {hours.map((h) => (
              <div key={h} className="flex-1 text-center text-[11px] text-[var(--ad-fg-muted)]">{(h - 7) % 2 === 0 ? hourLabel(h) : ''}</div>
            ))}
            <div className="w-24 shrink-0 pl-2 text-[11px] text-[var(--ad-fg-muted)]">Day total</div>
          </div>

          {data.map((row, ri) => {
            const isBusiestDay = row.weekday === busiestDay;
            return (
              <div key={row.weekday} className="flex items-center">
                <div className={`w-10 shrink-0 text-xs font-semibold ${isBusiestDay ? 'text-[var(--ad-fg)]' : 'text-[var(--ad-fg-muted)]'}`}>{row.weekday}</div>
                {hours.map((h) => {
                  const v = row.hours[h];
                  const intensity = max > 0 ? v / max : 0;
                  const isPeak = row.weekday === peak.wd && h === peak.h;
                  const showVal = intensity >= 0.5;
                  return (
                    <div
                      key={h}
                      title={`${FULL_DAY[row.weekday]} ${ampm(h)} · ${usd0(v)}`}
                      className={`relative flex-1 h-9 m-[1.5px] rounded-[4px] flex items-center justify-center ${isPeak ? 'ring-2 ring-orange-400' : ''}`}
                      style={{ background: v <= 0 ? c.heatEmpty : ramp(0.18 + 0.82 * intensity) }}
                    >
                      {showVal && <span className="text-[10px] font-semibold tabular-nums" style={{ color: c.cellText }}>{usdK(v)}</span>}
                    </div>
                  );
                })}
                <div className="w-24 shrink-0 pl-2 flex items-center gap-1.5">
                  <div className="h-2 flex-1 rounded-full bg-[var(--ad-track)] overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${(dayTotals[ri] / maxDayTotal) * 100}%`, background: c.primary }} />
                  </div>
                  <span className="w-10 text-right text-[11px] tabular-nums text-[var(--ad-fg-muted)]">{usdK(dayTotals[ri])}</span>
                </div>
              </div>
            );
          })}

          <div className="mt-3 flex items-center gap-2 pl-10 text-[11px] text-[var(--ad-fg-muted)]">
            <span>Quieter</span>
            {[0, 0.25, 0.5, 0.75, 1].map((t) => (
              <span key={t} className="h-3 w-6 rounded-sm" style={{ background: t === 0 ? c.heatEmpty : ramp(0.18 + 0.82 * t) }} />
            ))}
            <span>Busier</span>
          </div>
        </div>
      </div>
    </div>
  );
}
