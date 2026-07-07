import type { Ga4Data } from '@/lib/analyticsData';
import { BarList, Card, Kpi, num, pct, Section } from './ui';
import { ShareDonut, TrafficTrend } from './charts';

const delta = (m: { value: number; prev: number }) => (m.prev ? ((m.value - m.prev) / m.prev) * 100 : null);

function duration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return m ? `${m}m ${s}s` : `${s}s`;
}

const dayLabel = (date: string) => `${Number(date.slice(5, 7))}/${Number(date.slice(8, 10))}`;

const toBars = (rows: { key: string; sessions: number; users: number }[]) =>
  rows.map((r) => ({ name: r.key || '(not set)', value: r.sessions, sub: `${num(r.users)} users` }));

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
        <Kpi label="Users" value={num(data.users.value)} delta={delta(data.users)} spark={data.daily.map((d) => d.users)} />
        <Kpi label="Sessions" value={num(data.sessions.value)} delta={delta(data.sessions)} spark={data.daily.map((d) => d.sessions)} />
        <Kpi label="Page views" value={num(data.pageViews.value)} delta={delta(data.pageViews)} spark={data.daily.map((d) => d.pageViews)} />
        <Kpi label="New users" value={num(data.newUsers.value)} delta={delta(data.newUsers)} />
        <Kpi label="Engagement rate" value={pct(data.engagementRate)} sub="last 28 days" />
        <Kpi label="Avg. session" value={duration(data.avgSessionSeconds)} sub="last 28 days" />
        <Kpi label="Mobile share" value={mobileShare === null ? '—' : pct(mobileShare)} sub="of sessions" />
      </section>

      <Card title="Sessions & users per day" sub="Last 28 days">
        <TrafficTrend data={data.daily.map((d) => ({ ...d, label: dayLabel(d.date) }))} />
      </Card>

      <Section title="Acquisition" sub="Where sessions come from">
        <Card title="Channels">
          <BarList items={toBars(data.channels.map((r) => ({ key: r.channel, sessions: r.sessions, users: r.users })))} />
        </Card>
        <Card title="Source / medium">
          <BarList items={toBars(data.sourceMedium)} />
        </Card>
      </Section>

      <Section title="Audience" sub="Who's visiting — key for the JP/KR/mainland tourist mix">
        <Card title="Countries">
          <BarList items={toBars(data.countries)} />
        </Card>
        <Card title="Cities">
          <BarList items={toBars(data.cities)} />
        </Card>
        <Card title="Devices">
          <ShareDonut data={data.devices.map((d) => ({ name: d.key || '(not set)', value: d.sessions }))} centerLabel="sessions" />
        </Card>
        <Card title="Languages">
          <BarList items={toBars(data.languages)} />
        </Card>
      </Section>

      <Section title="Content" sub="What people read and where they land">
        <Card title="Top pages" sub="By views">
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
                <tr key={i} className="border-b border-[var(--ad-border)] last:border-0 transition-colors hover:bg-[var(--ad-track)]">
                  <td className="py-1.5 pr-2 text-[var(--ad-fg)] truncate max-w-[320px]">{r.path}</td>
                  <td className="text-right tabular-nums">{num(r.views)}</td>
                  <td className="text-right tabular-nums text-[var(--ad-fg-muted)] w-16">{num(r.users)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card title="Landing pages" sub="First page of the session">
          <BarList items={toBars(data.landingPages)} />
        </Card>
      </Section>
    </>
  );
}
