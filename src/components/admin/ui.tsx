// Shared presentational helpers for the admin dashboard. Colors come from CSS
// variables (--ad-*) so the light/dark toggle flips everything at once.
// BarList/Section follow the Tremor dashboard patterns (tremor.so) adapted to
// this theme system.
import { Sparkline } from './charts';

export function money(n: number) {
  return `$${n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}
export function money2(n: number) {
  return `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
export function num(n: number) {
  return n.toLocaleString('en-US');
}
export function pct(x: number) {
  return `${(x * 100).toFixed(2)}%`;
}

export function DeltaChip({ delta }: { delta: number | null }) {
  if (delta === null || !isFinite(delta)) return <span className="text-xs text-[var(--ad-fg-subtle)]">— no prior data</span>;
  const up = delta >= 0;
  const color = `var(${up ? '--ad-pos' : '--ad-neg'})`;
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold tabular-nums"
      style={{ color, background: `color-mix(in srgb, ${color} 12%, transparent)` }}
    >
      {up ? '▲' : '▼'} {delta >= 0 ? '+' : ''}
      {delta.toFixed(0)}%
    </span>
  );
}

export function Kpi({
  label,
  value,
  delta,
  sub,
  hero = false,
  spark,
}: {
  label: string;
  value: string;
  delta?: number | null;
  sub?: string;
  hero?: boolean;
  spark?: number[];
}) {
  return (
    <div className="rounded-xl border border-[var(--ad-border)] bg-[var(--ad-card)] p-4 sm:p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-[12px] sm:text-[13px] font-medium uppercase tracking-wide text-[var(--ad-fg-muted)]">{label}</p>
      <p className={`mt-1.5 font-semibold tracking-tight tabular-nums text-[var(--ad-fg)] ${hero ? 'text-2xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>{value}</p>
      <div className="mt-2 min-h-[20px] flex items-center gap-1.5">
        {delta !== undefined && <DeltaChip delta={delta} />}
        {delta !== undefined && delta !== null && isFinite(delta) && <span className="text-xs text-[var(--ad-fg-subtle)]">vs prior</span>}
        {delta === undefined && sub && <span className="text-xs text-[var(--ad-fg-subtle)]">{sub}</span>}
      </div>
      {spark && spark.length >= 3 && <Sparkline data={spark} />}
    </div>
  );
}

export function Card({ title, sub, action, children }: { title: string; sub?: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-[var(--ad-border)] bg-[var(--ad-card)] p-4 sm:p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-[var(--ad-fg)]">{title}</h3>
          {sub && <p className="mt-0.5 text-xs text-[var(--ad-fg-subtle)]">{sub}</p>}
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}

// A titled group of cards. Analytics views use it to break the wall of cards
// into scannable bands (Acquisition / Audience / Content …).
export function Section({ title, sub, cols = 2, children }: { title: string; sub?: string; cols?: 1 | 2; children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-3 flex items-baseline gap-2.5">
        <h2 className="text-[13px] font-bold uppercase tracking-wider text-[var(--ad-fg-muted)]">{title}</h2>
        {sub && <p className="text-xs text-[var(--ad-fg-subtle)]">{sub}</p>}
      </div>
      <div className={cols === 2 ? 'grid lg:grid-cols-2 gap-4' : 'grid gap-4'}>{children}</div>
    </section>
  );
}

// Tremor-style ranking list: the label sits on a proportional tinted bar, the
// value column stays aligned on the right. Far easier to scan than a table.
export function BarList({
  items,
  format = num,
}: {
  items: { name: string; value: number; sub?: string }[];
  format?: (v: number) => string;
}) {
  const max = Math.max(1, ...items.map((i) => i.value));
  return (
    <ul className="space-y-1.5">
      {items.map((it, i) => (
        <li key={`${it.name}-${i}`} className="flex items-center gap-3">
          <div className="relative h-8 flex-1 overflow-hidden rounded-md">
            <div className="absolute inset-y-0 left-0 rounded-md bg-orange-500/15" style={{ width: `${Math.max(2, (it.value / max) * 100)}%` }} />
            <span className="absolute inset-y-0 left-2.5 flex max-w-[92%] items-center truncate text-sm text-[var(--ad-fg)]">{it.name}</span>
          </div>
          <div className="w-20 shrink-0 text-right">
            <span className="text-sm font-medium tabular-nums text-[var(--ad-fg)]">{format(it.value)}</span>
            {it.sub && <span className="block text-[11px] leading-tight text-[var(--ad-fg-subtle)] tabular-nums">{it.sub}</span>}
          </div>
        </li>
      ))}
      {items.length === 0 && <p className="text-sm text-[var(--ad-fg-subtle)]">No data in this window.</p>}
    </ul>
  );
}
