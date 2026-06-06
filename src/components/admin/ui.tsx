// Shared presentational helpers for the admin dashboard. Colors come from CSS
// variables (--ad-*) so the light/dark toggle flips everything at once.

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
  return (
    <span className="text-[13px] font-semibold tabular-nums" style={{ color: `var(${up ? '--ad-pos' : '--ad-neg'})` }}>
      {up ? '▲' : '▼'} {delta >= 0 ? '+' : ''}
      {delta.toFixed(0)}% <span className="font-normal text-[var(--ad-fg-subtle)]">vs prior</span>
    </span>
  );
}

export function Kpi({
  label,
  value,
  delta,
  sub,
  hero = false,
}: {
  label: string;
  value: string;
  delta?: number | null;
  sub?: string;
  hero?: boolean;
}) {
  return (
    <div className="rounded-xl border border-[var(--ad-border)] bg-[var(--ad-card)] p-4 sm:p-5 shadow-sm transition-colors">
      <p className="text-[12px] sm:text-[13px] font-medium uppercase tracking-wide text-[var(--ad-fg-muted)]">{label}</p>
      <p className={`mt-1.5 font-semibold tracking-tight tabular-nums text-[var(--ad-fg)] ${hero ? 'text-2xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>{value}</p>
      <div className="mt-1.5 min-h-[18px]">
        {delta !== undefined ? <DeltaChip delta={delta} /> : sub ? <span className="text-xs text-[var(--ad-fg-subtle)]">{sub}</span> : null}
      </div>
    </div>
  );
}

export function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-[var(--ad-border)] bg-[var(--ad-card)] p-4 sm:p-5 shadow-sm">
      <h3 className="mb-4 text-sm font-semibold text-[var(--ad-fg)]">{title}</h3>
      {children}
    </div>
  );
}
