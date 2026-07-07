import type { Ga4Data } from '@/lib/analyticsData';
import { Card, Kpi, num, pct } from './ui';
import { TrafficTrend } from './charts';

const delta = (m: { value: number; prev: number }) => (m.prev ? ((m.value - m.prev) / m.prev) * 100 : null);

function duration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return m ? `${m}m ${s}s` : `${s}s`;
}

const dayLabel = (date: string) => `${Number(date.slice(5, 7))}/${Number(date.slice(8, 10))}`;

function KeyedTable({ title, keyHead, rows }: { title: string; keyHead: string; rows: { key: string; sessions: number; users: number }[] }) {
  return (
    <Card title={title}>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-[var(--ad-fg-muted)] text-xs border-b border-[var(--ad-border)]">
            <th className="text-left font-medium py-1.5">{keyHead}</th>
            <th className="text-right font-medium">Sessions</th>
            <th className="text-right font-medium w-16">Users</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-[var(--ad-border)] last:border-0">
              <td className="py-1.5 pr-2 text-[var(--ad-fg)] truncate max-w-[300px]">{r.key || '(not set)'}</td>
              <td className="text-right tabular-nums">{num(r.sessions)}</td>
              <td className="text-right tabular-nums text-[var(--ad-fg-muted)] w-16">{num(r.users)}</td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={3} className="py-2 text-sm text-[var(--ad-fg-subtle)]">No data in this window.</td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
}

function ShareBars({ title, rows }: { title: string; rows: { key: string; sessions: number }[] }) {
  const total = Math.max(1, rows.reduce((s, r) => s + r.sessions, 0));
  return (
    <Card title={title}>
      <ul className="space-y-2.5">
        {rows.map((r) => (
          <li key={r.key}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-[var(--ad-fg)] capitalize">{r.key || '(not set)'}</span>
              <span className="tabular-nums text-[var(--ad-fg-muted)]">
                {num(r.sessions)} · {((r.sessions / total) * 100).toFixed(0)}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-[var(--ad-track)] overflow-hidden">
              <div className="h-full rounded-full bg-orange-500" style={{ width: `${(r.sessions / total) * 100}%` }} />
            </div>
          </li>
        ))}
        {rows.length === 0 && <p className="text-sm text-[var(--ad-fg-subtle)]">No data in this window.</p>}
      </ul>
    </Card>
  );
}

export default function TrafficView({ data }: { data: Ga4Data | null }) {
  if (!data) {
    return <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-800">GA4 data couldn&apos;t load. Check the service-account access on the property.</div>;
  }
  const mobileShare = (() => {
    const total = data.devices.reduce((s, d) => s + d.sessions, 0);
    const mobile = data.devices.find((d) => d.key.toLowerCase() === 'mobile')?.sessions ?? 0;
    return total ? mobile / total : null;
  })();

  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Kpi label="Live now" value={data.realtimeUsers === null ? '—' : num(data.realtimeUsers)} sub="active users · last 30 min" />
        <Kpi label="Users" value={num(data.users.value)} delta={delta(data.users)} />
        <Kpi label="Sessions" value={num(data.sessions.value)} delta={delta(data.sessions)} />
        <Kpi label="Page views" value={num(data.pageViews.value)} delta={delta(data.pageViews)} />
        <Kpi label="New users" value={num(data.newUsers.value)} delta={delta(data.newUsers)} />
        <Kpi label="Engagement rate" value={pct(data.engagementRate)} sub="last 28 days" />
        <Kpi label="Avg. session" value={duration(data.avgSessionSeconds)} sub="last 28 days" />
        <Kpi label="Mobile share" value={mobileShare === null ? '—' : pct(mobileShare)} sub="of sessions" />
      </section>
      <Card title="Sessions & users per day">
        <TrafficTrend data={data.daily.map((d) => ({ ...d, label: dayLabel(d.date) }))} />
      </Card>
      <section className="grid lg:grid-cols-2 gap-4">
        <Card title="Top pages (by views)">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[var(--ad-fg-muted)] text-xs border-b border-[var(--ad-border)]">
                <th className="text-left font-medium py-1.5">Page</th>
                <th className="text-right font-medium">Views</th>
                <th className="text-right font-medium w-16">Users</th>
              </tr>
            </thead>
            <tbody>
              {data.topPages.map((r, i) => (
                <tr key={i} className="border-b border-[var(--ad-border)] last:border-0">
                  <td className="py-1.5 pr-2 text-[var(--ad-fg)] truncate max-w-[320px]">{r.path}</td>
                  <td className="text-right tabular-nums">{num(r.views)}</td>
                  <td className="text-right tabular-nums text-[var(--ad-fg-muted)] w-16">{num(r.users)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <KeyedTable title="Landing pages (first page of session)" keyHead="Landing page" rows={data.landingPages} />
        <KeyedTable
          title="Acquisition channels"
          keyHead="Channel"
          rows={data.channels.map((r) => ({ key: r.channel, sessions: r.sessions, users: r.users }))}
        />
        <KeyedTable title="Source / medium" keyHead="Source / medium" rows={data.sourceMedium} />
        <KeyedTable title="Countries" keyHead="Country" rows={data.countries} />
        <KeyedTable title="Cities" keyHead="City" rows={data.cities} />
        <ShareBars title="Devices" rows={data.devices} />
        <KeyedTable title="Languages" keyHead="Language" rows={data.languages} />
      </section>
    </>
  );
}
