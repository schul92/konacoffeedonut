import type { Ga4Data } from '@/lib/analyticsData';
import { Card, Kpi, num, pct } from './ui';

const delta = (m: { value: number; prev: number }) => (m.prev ? ((m.value - m.prev) / m.prev) * 100 : null);

export default function TrafficView({ data }: { data: Ga4Data | null }) {
  if (!data) {
    return <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-800">GA4 data couldn&apos;t load. Check the service-account access on the property.</div>;
  }
  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Kpi label="Users" value={num(data.users.value)} delta={delta(data.users)} />
        <Kpi label="Sessions" value={num(data.sessions.value)} delta={delta(data.sessions)} />
        <Kpi label="Page views" value={num(data.pageViews.value)} delta={delta(data.pageViews)} />
        <Kpi label="Engagement rate" value={pct(data.engagementRate)} sub="last 28 days" />
      </section>
      <section className="grid lg:grid-cols-2 gap-4">
        <Card title="Top pages (by views)">
          <table className="w-full text-sm">
            <tbody>
              {data.topPages.map((r, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0">
                  <td className="py-1.5 pr-2 text-slate-700 truncate max-w-[320px]">{r.path}</td>
                  <td className="text-right tabular-nums">{num(r.views)}</td>
                  <td className="text-right tabular-nums text-slate-500 w-16">{num(r.users)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card title="Acquisition channels">
          <table className="w-full text-sm">
            <tbody>
              {data.channels.map((r, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0">
                  <td className="py-1.5 pr-2 text-slate-700">{r.channel}</td>
                  <td className="text-right tabular-nums">{num(r.sessions)}</td>
                  <td className="text-right tabular-nums text-slate-500 w-16">{num(r.users)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </section>
    </>
  );
}
