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

// Primary data color — calm, high-contrast blue (orange is demoted to an accent
// for interactive states only). Categorical palette is the colorblind-safe
// Okabe-Ito set so series stay distinguishable.
const PRIMARY = '#0072B2';
const PALETTE = ['#0072B2', '#D55E00', '#009E73', '#CC79A7', '#56B4E9', '#E69F00'];
const GRID = '#E5E9F0';
const AXIS = '#64748B';

const usd0 = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;
const hourLabel = (h: number) => `${((h + 11) % 12) + 1}${h < 12 ? 'a' : 'p'}`;

const tooltipStyle = {
  borderRadius: 10,
  border: `1px solid ${GRID}`,
  boxShadow: '0 4px 12px rgba(15,23,42,0.08)',
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
        <Tooltip cursor={{ fill: 'rgba(15,23,42,0.04)' }} formatter={(value) => [usd0(Number(value)), 'Revenue']} contentStyle={tooltipStyle} />
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
            <span className="text-slate-700 truncate pr-2">{d.name}</span>
            <span className="tabular-nums text-slate-500 shrink-0">
              {usd0(d.revenue)}
              {d.units ? <span className="text-slate-400"> · {d.units}x</span> : null}
            </span>
          </div>
          <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
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
          <Pie data={data} dataKey="amount" nameKey="tender" cx="50%" cy="50%" innerRadius={44} outerRadius={72} paddingAngle={2} stroke="#fff" strokeWidth={2}>
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
            <span className="text-slate-700 flex-1 truncate">{d.tender}</span>
            <span className="tabular-nums text-slate-500">{Math.round((d.amount / total) * 100)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Carbon-style single-hue blue ramp for the heatmap; empty cells get a distinct
// neutral so "no sales" never looks like a low-but-real value.
const EMPTY_CELL = '#F1F5F9';
function blue(intensity: number) {
  // light #DBEAFE → dark #0B3A8A
  const a = [219, 234, 254];
  const b = [11, 58, 138];
  const t = Math.max(0, Math.min(1, intensity));
  const c = a.map((x, i) => Math.round(x + (b[i] - x) * t));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}

export function Heatmap({ data, max }: { data: { weekday: string; hours: number[] }[]; max: number }) {
  const hours = Array.from({ length: 15 }, (_, i) => i + 7); // 7am–9pm
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[540px]">
        <div className="flex">
          <div className="w-9 shrink-0" />
          {hours.map((h) => (
            <div key={h} className="flex-1 text-center text-[10px] text-slate-400">
              {h % 3 === 1 ? hourLabel(h) : ''}
            </div>
          ))}
        </div>
        {data.map((row) => (
          <div key={row.weekday} className="flex items-center">
            <div className="w-9 shrink-0 text-xs font-medium text-slate-500">{row.weekday}</div>
            {hours.map((h) => {
              const v = row.hours[h];
              const intensity = max > 0 ? v / max : 0;
              return (
                <div
                  key={h}
                  title={`${row.weekday} ${hourLabel(h)} · ${usd0(v)}`}
                  className="flex-1 aspect-square m-[1.5px] rounded-[3px]"
                  style={{ background: v <= 0 ? EMPTY_CELL : blue(0.15 + 0.85 * intensity) }}
                />
              );
            })}
          </div>
        ))}
        {/* legend */}
        <div className="mt-2 flex items-center gap-2 pl-9 text-[10px] text-slate-400">
          <span>Less</span>
          {[0, 0.25, 0.5, 0.75, 1].map((t) => (
            <span key={t} className="h-2.5 w-5 rounded-sm" style={{ background: t === 0 ? EMPTY_CELL : blue(0.15 + 0.85 * t) }} />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
