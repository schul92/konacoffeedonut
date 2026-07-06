import type { EventsData } from '@/lib/analyticsData';
import { Card, Kpi, num } from './ui';

const delta = (cur: number, prev: number) => (prev ? ((cur - prev) / prev) * 100 : null);

// KPI row: the conversion events that matter most for the shop.
const KPI_EVENTS = [
  { name: 'job_apply_click', label: 'Job applications' },
  { name: 'get_directions', label: 'Directions clicks' },
  { name: 'contact', label: 'Contact clicks' },
  { name: 'social_click', label: 'Social clicks' },
] as const;

function EventBars({ rows }: { rows: EventsData['events'] }) {
  const max = Math.max(1, ...rows.map((r) => r.count));
  return (
    <ul className="space-y-2.5">
      {rows.map((r) => (
        <li key={r.name}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-[var(--ad-fg)] truncate pr-2 font-mono text-[13px]">
              {r.name}
              {r.isConversion && <span className="ml-1.5 rounded bg-orange-500/15 px-1.5 py-0.5 text-[10px] font-sans font-semibold text-orange-500 align-middle">conversion</span>}
            </span>
            <span className="tabular-nums text-[var(--ad-fg-muted)] shrink-0">
              {num(r.count)}
              <span className="text-[var(--ad-fg-subtle)]"> · {num(r.users)} users</span>
            </span>
          </div>
          <div className="h-2 rounded-full bg-[var(--ad-track)] overflow-hidden">
            <div className="h-full rounded-full bg-orange-500" style={{ width: `${(r.count / max) * 100}%` }} />
          </div>
        </li>
      ))}
      {rows.length === 0 && <p className="text-sm text-[var(--ad-fg-subtle)]">No custom events recorded in this window yet.</p>}
    </ul>
  );
}

function DailyBars({ data }: { data: EventsData['dailyConversions'] }) {
  if (data.length === 0) return <p className="text-sm text-[var(--ad-fg-subtle)]">No conversion events in this window yet.</p>;
  const max = Math.max(1, ...data.map((d) => d.count));
  return (
    <div>
      <div className="flex items-end gap-1 h-32">
        {data.map((d) => (
          <div
            key={d.date}
            title={`${d.date} · ${num(d.count)}`}
            className="flex-1 rounded-t bg-orange-500 min-h-[2px] transition-all"
            style={{ height: `${(d.count / max) * 100}%` }}
          />
        ))}
      </div>
      <div className="mt-1.5 flex justify-between text-xs text-[var(--ad-fg-subtle)] tabular-nums">
        <span>{data[0].date.slice(5)}</span>
        <span>{data[data.length - 1].date.slice(5)}</span>
      </div>
    </div>
  );
}

export default function EventsView({ data }: { data: EventsData | null }) {
  if (!data) {
    return <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-800">GA4 events couldn&apos;t load. Check the service-account access on the property.</div>;
  }
  const byName = new Map(data.events.map((e) => [e.name, e]));
  const custom = data.events.filter((e) => !e.isAuto);
  const auto = data.events.filter((e) => e.isAuto);

  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {KPI_EVENTS.map((k) => {
          const e = byName.get(k.name);
          return <Kpi key={k.name} label={k.label} value={num(e?.count ?? 0)} delta={delta(e?.count ?? 0, e?.prev ?? 0)} />;
        })}
      </section>
      <Card title="Conversion events per day">
        <DailyBars data={data.dailyConversions} />
      </Card>
      <section className="grid lg:grid-cols-2 gap-4">
        <Card title="Custom events (by count)">
          <EventBars rows={custom} />
        </Card>
        <Card title="Auto-collected events">
          <table className="w-full text-sm">
            <tbody>
              {auto.map((r) => (
                <tr key={r.name} className="border-b border-[var(--ad-border)] last:border-0">
                  <td className="py-1.5 pr-2 text-[var(--ad-fg-muted)] font-mono text-[13px]">{r.name}</td>
                  <td className="text-right tabular-nums">{num(r.count)}</td>
                  <td className="text-right tabular-nums text-[var(--ad-fg-muted)] w-20">{num(r.users)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </section>
    </>
  );
}
