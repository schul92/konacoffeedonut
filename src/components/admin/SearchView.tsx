import type { GscData } from '@/lib/analyticsData';
import { Card, Kpi, num, pct } from './ui';

function GscTable({ title, rows, keyHead }: { title: string; rows: GscData['topQueries']; keyHead: string }) {
  return (
    <Card title={title}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-400 text-xs border-b border-slate-100">
              <th className="text-left font-medium py-1.5">{keyHead}</th>
              <th className="text-right font-medium">Clicks</th>
              <th className="text-right font-medium">Impr</th>
              <th className="text-right font-medium">CTR</th>
              <th className="text-right font-medium">Pos</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-slate-100 last:border-0">
                <td className="py-1.5 pr-2 text-slate-700 truncate max-w-[260px]">{r.key}</td>
                <td className="text-right tabular-nums">{num(r.clicks)}</td>
                <td className="text-right tabular-nums text-slate-500">{num(r.impressions)}</td>
                <td className="text-right tabular-nums text-slate-500">{pct(r.ctr)}</td>
                <td className="text-right tabular-nums text-slate-500">{r.position.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default function SearchView({ data }: { data: GscData | null }) {
  if (!data) {
    return <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-800">Search Console data couldn&apos;t load. Check the service-account access.</div>;
  }
  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Kpi label="Clicks" value={num(data.clicks.value)} delta={data.clicks.prev ? ((data.clicks.value - data.clicks.prev) / data.clicks.prev) * 100 : null} />
        <Kpi label="Impressions" value={num(data.impressions.value)} delta={data.impressions.prev ? ((data.impressions.value - data.impressions.prev) / data.impressions.prev) * 100 : null} />
        <Kpi label="Avg. CTR" value={pct(data.ctr)} sub="last 28 days" />
        <Kpi label="Avg. position" value={data.position.toFixed(1)} sub="last 28 days" />
      </section>
      <section className="grid lg:grid-cols-2 gap-4">
        <GscTable title="Top queries" rows={data.topQueries} keyHead="Query" />
        <GscTable title="Top pages" rows={data.topPages} keyHead="Page" />
      </section>
      <GscTable title="Opportunities — high impressions, low CTR or position 8–25" rows={data.opportunities} keyHead="Query" />
    </>
  );
}
