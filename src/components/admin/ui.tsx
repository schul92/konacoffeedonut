// Shared presentational helpers for the admin dashboard (server components).

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
  if (delta === null || !isFinite(delta)) return <span className="text-xs text-stone-400">— no prior data</span>;
  const up = delta >= 0;
  return (
    <span className={`text-xs font-semibold ${up ? 'text-green-600' : 'text-red-500'}`}>
      {up ? '▲' : '▼'} {delta >= 0 ? '+' : ''}
      {delta.toFixed(0)}% <span className="font-normal text-stone-400">vs prior</span>
    </span>
  );
}

export function Kpi({ label, value, delta, sub }: { label: string; value: string; delta?: number | null; sub?: string }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">{label}</p>
      <p className="mt-1 text-3xl font-extrabold tabular-nums text-stone-900">{value}</p>
      <div className="mt-1 min-h-[16px]">
        {delta !== undefined ? <DeltaChip delta={delta} /> : sub ? <span className="text-xs text-stone-400">{sub}</span> : null}
      </div>
    </div>
  );
}

export function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-bold text-stone-800 mb-3">{title}</h3>
      {children}
    </div>
  );
}
