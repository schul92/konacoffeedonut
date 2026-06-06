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
  if (delta === null || !isFinite(delta)) return <span className="text-xs text-slate-500">— no prior data</span>;
  const up = delta >= 0;
  return (
    <span className={`text-[13px] font-semibold tabular-nums ${up ? 'text-emerald-400' : 'text-rose-400'}`}>
      {up ? '▲' : '▼'} {delta >= 0 ? '+' : ''}
      {delta.toFixed(0)}% <span className="font-normal text-slate-500">vs prior</span>
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
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition-colors hover:border-slate-700">
      <p className="text-[13px] font-medium uppercase tracking-wide text-slate-300">{label}</p>
      <p className={`mt-1.5 font-semibold tracking-tight tabular-nums text-slate-50 ${hero ? 'text-4xl' : 'text-3xl'}`}>{value}</p>
      <div className="mt-1.5 min-h-[18px]">
        {delta !== undefined ? <DeltaChip delta={delta} /> : sub ? <span className="text-xs text-slate-400">{sub}</span> : null}
      </div>
    </div>
  );
}

export function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h3 className="mb-4 text-sm font-semibold text-slate-100">{title}</h3>
      {children}
    </div>
  );
}
