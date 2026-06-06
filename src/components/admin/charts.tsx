'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// Dark theme — brighter blue primary so marks pop against the dark surface,
// with a vivid, distinct categorical palette for multi-series charts.
const PRIMARY = '#60A5FA';
const PALETTE = ['#60A5FA', '#F59E0B', '#34D399', '#E879F9', '#22D3EE', '#FB7185'];
const GRID = 'rgba(148,163,184,0.14)';
const AXIS = '#CBD5E1';
const CARD_BG = '#0F172A';

const usd0 = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;
const hourLabel = (h: number) => `${((h + 11) % 12) + 1}${h < 12 ? 'a' : 'p'}`;

const tooltipStyle = {
  borderRadius: 10,
  border: '1px solid #1E293B',
  background: CARD_BG,
  color: '#E2E8F0',
  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
  fontSize: 12,
  fontVariantNumeric: 'tabular-nums',
  padding: '8px 12px',
} as const;

export function RevenueBars({
  data,
  xKey,
  height = 240,
}: {
  data: { revenue: number; [k: string]: string | number }[];
  xKey: string;
  height?: number;
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -12 }}>
        <CartesianGrid vertical={false} stroke={GRID} />
        <XAxis dataKey={xKey} tick={{ fontSize: 11, fill: AXIS }} interval="preserveStartEnd" tickLine={false} axisLine={false} dy={6} />
        <YAxis
          tick={{ fontSize: 11, fill: AXIS }}
          tickFormatter={(v) => (v >= 1000 ? `$${Math.round(v / 1000)}k` : `$${v}`)}
          tickLine={false}
          axisLine={false}
          width={46}
        />
        <Tooltip cursor={{ fill: 'rgba(148,163,184,0.08)' }} formatter={(value) => [usd0(Number(value)), 'Revenue']} contentStyle={tooltipStyle} />
        <Bar dataKey="revenue" fill={PRIMARY} radius={[5, 5, 0, 0]} maxBarSize={44} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function HorizontalItemBars({ data }: { data: { name: string; revenue: number; units?: number }[] }) {
  const max = Math.max(1, ...data.map((d) => d.revenue));
  return (
    <ul className="space-y-2.5">
      {data.map((d) => (
        <li key={d.name}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-200 truncate pr-2">{d.name}</span>
            <span className="tabular-nums text-slate-300 shrink-0">
              {usd0(d.revenue)}
              {d.units ? <span className="text-slate-400"> · {d.units}x</span> : null}
            </span>
          </div>
          <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full rounded-full" style={{ width: `${(d.revenue / max) * 100}%`, background: PRIMARY }} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function TenderDonut({ data }: { data: { tender: string; amount: number }[] }) {
  const total = data.reduce((s, d) => s + d.amount, 0) || 1;
  return (
    <div className="flex items-center gap-4">
      <ResponsiveContainer width="50%" height={180}>
        <PieChart>
          <Pie data={data} dataKey="amount" nameKey="tender" cx="50%" cy="50%" innerRadius={44} outerRadius={72} paddingAngle={2} stroke={CARD_BG} strokeWidth={2}>
            {data.map((_, i) => (
              <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => usd0(Number(value))} contentStyle={tooltipStyle} />
        </PieChart>
      </ResponsiveContainer>
      <ul className="flex-1 space-y-1.5 text-sm">
        {data.map((d, i) => (
          <li key={d.tender} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: PALETTE[i % PALETTE.length] }} />
            <span className="text-slate-200 flex-1 truncate">{d.tender}</span>
            <span className="tabular-nums text-slate-300">{Math.round((d.amount / total) * 100)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Dim → vivid ramp for the heatmap; empty cells get a flat dark neutral so
// "no sales" never looks like a low-but-real value.
const EMPTY_CELL = '#1E293B';
function ramp(intensity: number) {
  // dim navy #1E3A5F → vivid sky #38BDF8
  const a = [30, 58, 95];
  const b = [56, 189, 248];
  const t = Math.max(0, Math.min(1, intensity));
  const c = a.map((x, i) => Math.round(x + (b[i] - x) * t));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}
const FULL_DAY: Record<string, string> = { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday' };
const ampm = (h: number) => (h === 0 ? '12 AM' : h < 12 ? `${h} AM` : h === 12 ? '12 PM' : `${h - 12} PM`);
const usdK = (n: number) => (n >= 1000 ? `$${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : `$${Math.round(n)}`);

export function Heatmap({ data, max }: { data: { weekday: string; hours: number[] }[]; max: number }) {
  const hours = Array.from({ length: 15 }, (_, i) => i + 7); // 7am–9pm

  // Marginal sums + peak so the busiest day and time are unmistakable.
  const dayTotals = data.map((r) => hours.reduce((s, h) => s + r.hours[h], 0));
  const maxDayTotal = Math.max(1, ...dayTotals);
  const hourTotals = hours.map((h) => data.reduce((s, r) => s + r.hours[h], 0));
  let peak = { wd: '', h: 7, v: 0 };
  data.forEach((r) => hours.forEach((h) => { if (r.hours[h] > peak.v) peak = { wd: r.weekday, h, v: r.hours[h] }; }));
  const busiestDay = data[dayTotals.indexOf(Math.max(...dayTotals))]?.weekday ?? '';
  const busiestHour = hours[hourTotals.indexOf(Math.max(...hourTotals))] ?? 9;

  return (
    <div>
      {/* Plain-English callout */}
      {peak.v > 0 && (
        <div className="mb-4 flex flex-wrap gap-x-6 gap-y-1 text-sm">
          <span className="text-slate-400">Busiest day <span className="font-semibold text-sky-300">{FULL_DAY[busiestDay] ?? busiestDay}</span></span>
          <span className="text-slate-400">Busiest hour <span className="font-semibold text-sky-300">{ampm(busiestHour)}</span></span>
          <span className="text-slate-400">Single peak <span className="font-semibold text-sky-300">{FULL_DAY[peak.wd] ?? peak.wd} {ampm(peak.h)}</span> · <span className="tabular-nums text-slate-200">{usd0(peak.v)}</span></span>
        </div>
      )}

      <div className="overflow-x-auto">
        <div className="min-w-[620px]">
          {/* hour header */}
          <div className="flex items-end">
            <div className="w-10 shrink-0" />
            {hours.map((h) => (
              <div key={h} className="flex-1 text-center text-[11px] text-slate-400">{(h - 7) % 2 === 0 ? hourLabel(h) : ''}</div>
            ))}
            <div className="w-24 shrink-0 pl-2 text-[11px] text-slate-400">Day total</div>
          </div>

          {/* rows */}
          {data.map((row, ri) => {
            const isBusiestDay = row.weekday === busiestDay;
            return (
              <div key={row.weekday} className="flex items-center">
                <div className={`w-10 shrink-0 text-xs font-semibold ${isBusiestDay ? 'text-sky-300' : 'text-slate-300'}`}>{row.weekday}</div>
                {hours.map((h) => {
                  const v = row.hours[h];
                  const intensity = max > 0 ? v / max : 0;
                  const isPeak = row.weekday === peak.wd && h === peak.h;
                  const showVal = intensity >= 0.5;
                  return (
                    <div
                      key={h}
                      title={`${FULL_DAY[row.weekday]} ${ampm(h)} · ${usd0(v)}`}
                      className={`relative flex-1 h-9 m-[1.5px] rounded-[4px] flex items-center justify-center ${isPeak ? 'ring-2 ring-sky-200' : ''}`}
                      style={{ background: v <= 0 ? EMPTY_CELL : ramp(0.18 + 0.82 * intensity) }}
                    >
                      {showVal && <span className="text-[10px] font-semibold tabular-nums text-slate-900">{usdK(v)}</span>}
                    </div>
                  );
                })}
                {/* day-total bar */}
                <div className="w-24 shrink-0 pl-2 flex items-center gap-1.5">
                  <div className="h-2 flex-1 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full rounded-full bg-sky-400" style={{ width: `${(dayTotals[ri] / maxDayTotal) * 100}%` }} />
                  </div>
                  <span className="w-10 text-right text-[11px] tabular-nums text-slate-300">{usdK(dayTotals[ri])}</span>
                </div>
              </div>
            );
          })}

          {/* legend */}
          <div className="mt-3 flex items-center gap-2 pl-10 text-[11px] text-slate-400">
            <span>Quieter</span>
            {[0, 0.25, 0.5, 0.75, 1].map((t) => (
              <span key={t} className="h-3 w-6 rounded-sm" style={{ background: t === 0 ? EMPTY_CELL : ramp(0.18 + 0.82 * t) }} />
            ))}
            <span>Busier</span>
          </div>
        </div>
      </div>
    </div>
  );
}
