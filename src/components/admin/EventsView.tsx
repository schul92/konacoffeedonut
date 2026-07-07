import type { EventsData } from '@/lib/analyticsData';
import { BarList, Card, Kpi, num, Section } from './ui';

const delta = (cur: number, prev: number) => (prev ? ((cur - prev) / prev) * 100 : null);

// KPI row: the conversion events that matter most for the shop.
const KPI_EVENTS = [
  { name: 'job_apply_click', label: 'Job applications' },
  { name: 'get_directions', label: 'Directions clicks' },
  { name: 'contact', label: 'Contact clicks' },
  { name: 'social_click', label: 'Social clicks' },
] as const;

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
            className="flex-1 rounded-t bg-orange-500 min-h-[2px] transition-all hover:opacity-80"
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
  const conversions = data.events.filter((e) => e.isConversion);
  const custom = data.events.filter((e) => !e.isAuto && !e.isConversion);
  const auto = data.events.filter((e) => e.isAuto);
  const asBars = (rows: typeof data.events) => rows.map((e) => ({ name: e.name, value: e.count, sub: `${num(e.users)} users` }));

  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {KPI_EVENTS.map((k) => {
          const e = byName.get(k.name);
          return <Kpi key={k.name} label={k.label} value={num(e?.count ?? 0)} delta={delta(e?.count ?? 0, e?.prev ?? 0)} />;
        })}
      </section>

      <Card title="Conversion events per day" sub="Last 28 days — directions, contact, social, job applications">
        <DailyBars data={data.dailyConversions} />
      </Card>

      <Section title="Custom events" sub="Fired by the site's own tracking (src/lib/analytics.ts)">
        <Card title="Conversions" sub="By count">
          <BarList items={asBars(conversions)} />
        </Card>
        <Card title="Engagement" sub="By count">
          <BarList items={asBars(custom)} />
        </Card>
      </Section>

      <Section title="Auto-collected" sub="GA4 built-in events, for reference" cols={1}>
        <Card title="Auto events">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[var(--ad-fg-muted)] text-xs border-b border-[var(--ad-border)]">
                <th className="text-left font-medium py-1.5">Event</th>
                <th className="text-right font-medium">Count</th>
                <th className="text-right font-medium w-20">Users</th>
              </tr>
            </thead>
            <tbody>
              {auto.map((r) => (
                <tr key={r.name} className="border-b border-[var(--ad-border)] last:border-0 transition-colors hover:bg-[var(--ad-track)]">
                  <td className="py-1.5 pr-2 text-[var(--ad-fg-muted)] font-mono text-[13px]">{r.name}</td>
                  <td className="text-right tabular-nums">{num(r.count)}</td>
                  <td className="text-right tabular-nums text-[var(--ad-fg-muted)] w-20">{num(r.users)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </Section>
    </>
  );
}
