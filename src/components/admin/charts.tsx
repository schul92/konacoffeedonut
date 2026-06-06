'use client';

import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const ORANGE = '#ea7317';
const PALETTE = ['#ea7317', '#f4a259', '#5b8e7d', '#bc4b51', '#8cb369', '#5874a8', '#c98bb9'];

const usd0 = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;
const hourLabel = (h: number) => `${((h + 11) % 12) + 1}${h < 12 ? 'a' : 'p'}`;

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
      <BarChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -16 }}>
        <XAxis dataKey={xKey} tick={{ fontSize: 11, fill: '#78716c' }} interval="preserveStartEnd" tickLine={false} axisLine={{ stroke: '#e7e5e4' }} />
        <YAxis tick={{ fontSize: 11, fill: '#a8a29e' }} tickFormatter={(v) => (v >= 1000 ? `$${Math.round(v / 1000)}k` : `$${v}`)} tickLine={false} axisLine={false} width={48} />
        <Tooltip
          cursor={{ fill: 'rgba(234,115,23,0.08)' }}
          formatter={(value) => [usd0(Number(value)), 'Revenue']}
          contentStyle={{ borderRadius: 12, border: '1px solid #e7e5e4', fontSize: 12 }}
        />
        <Bar dataKey="revenue" fill={ORANGE} radius={[4, 4, 0, 0]} />
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
          <div className="flex justify-between text-sm mb-0.5">
            <span className="text-stone-800 truncate pr-2">{d.name}</span>
            <span className="tabular-nums text-stone-500 shrink-0">
              {usd0(d.revenue)}
              {d.units ? <span className="text-stone-400"> · {d.units}x</span> : null}
            </span>
          </div>
          <div className="h-2 rounded-full bg-stone-100 overflow-hidden">
            <div className="h-full rounded-full" style={{ width: `${(d.revenue / max) * 100}%`, background: ORANGE }} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Heatmap({ data, max }: { data: { weekday: string; hours: number[] }[]; max: number }) {
  const hours = Array.from({ length: 15 }, (_, i) => i + 7); // 7am–9pm
  const color = (v: number) => (v <= 0 ? '#f5f5f4' : `rgba(234,115,23,${0.14 + 0.86 * (v / (max || 1))})`);
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[540px]">
        <div className="flex">
          <div className="w-9 shrink-0" />
          {hours.map((h) => (
            <div key={h} className="flex-1 text-center text-[10px] text-stone-400">
              {h % 3 === 1 ? hourLabel(h) : ''}
            </div>
          ))}
        </div>
        {data.map((row) => (
          <div key={row.weekday} className="flex items-center">
            <div className="w-9 shrink-0 text-xs text-stone-500">{row.weekday}</div>
            {hours.map((h) => (
              <div
                key={h}
                title={`${row.weekday} ${hourLabel(h)} · ${usd0(row.hours[h])}`}
                className="flex-1 aspect-square m-[1.5px] rounded-[3px]"
                style={{ background: color(row.hours[h]) }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TenderDonut({ data }: { data: { tender: string; amount: number }[] }) {
  const total = data.reduce((s, d) => s + d.amount, 0) || 1;
  return (
    <div className="flex items-center gap-4">
      <ResponsiveContainer width="50%" height={180}>
        <PieChart>
          <Pie data={data} dataKey="amount" nameKey="tender" cx="50%" cy="50%" innerRadius={42} outerRadius={70} paddingAngle={2}>
            {data.map((_, i) => (
              <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => usd0(Number(value))} contentStyle={{ borderRadius: 12, border: '1px solid #e7e5e4', fontSize: 12 }} />
        </PieChart>
      </ResponsiveContainer>
      <ul className="flex-1 space-y-1.5 text-sm">
        {data.map((d, i) => (
          <li key={d.tender} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: PALETTE[i % PALETTE.length] }} />
            <span className="text-stone-700 flex-1 truncate">{d.tender}</span>
            <span className="tabular-nums text-stone-500">{Math.round((d.amount / total) * 100)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
