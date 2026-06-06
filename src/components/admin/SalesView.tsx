import type { SalesData } from '@/lib/clover';
import { Card, Kpi, money, money2, num } from './ui';
import { RevenueBars, HorizontalItemBars, TenderDonut, Heatmap } from './charts';
import RangeSelector from './RangeSelector';
import LiveControls from './LiveControls';

export default function SalesView({ data }: { data: SalesData }) {
  if (!data.configured) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-800">
        Clover isn&apos;t configured yet. Set <code>CLOVER_API_TOKEN</code> and <code>CLOVER_MERCHANT_ID</code> to load sales data.
      </div>
    );
  }
  if (data.error) {
    return <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">Could not load Clover data: {data.error}</div>;
  }

  const k = data.kpis;
  const rangeLabel = data.range.key === 'custom' ? data.range.label : `last ${data.range.label.toLowerCase()}`;

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <RangeSelector active={data.range.key} />
        <LiveControls generatedAt={data.generatedAt} />
      </div>

      <section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <Kpi label="Revenue" value={money2(k.revenue)} delta={k.deltaRevenue} />
          <Kpi label="Net sales" value={money2(k.net)} delta={k.deltaNet} />
          <Kpi label="Orders" value={num(k.orders)} delta={k.deltaOrders} />
          <Kpi label="Avg. order" value={money2(k.aov)} sub={rangeLabel} />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-3 sm:mt-4">
          <Kpi label="Refunds" value={money2(k.refunds)} sub={`${k.refundCount} refund${k.refundCount === 1 ? '' : 's'}`} />
          <Kpi label="Tax collected" value={money2(k.tax)} sub="set aside" />
          <Kpi label="Tips" value={money2(k.tips)} sub="on card payments" />
          <Kpi label="Gross sales" value={money(k.revenue)} sub="incl. tax" />
        </div>
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <Card title={`Revenue by day (${rangeLabel})`}>
            <RevenueBars data={data.revenueByDay} xKey="label" height={260} />
          </Card>
        </div>
        <Card title="Payment mix">
          {data.tenderMix.length ? <TenderDonut data={data.tenderMix} /> : <p className="text-sm text-stone-400">No data.</p>}
        </Card>
      </section>

      <Card title="When you're busiest — revenue by weekday × hour (HST)">
        {data.heatmapMax > 0 ? <Heatmap data={data.heatmap} max={data.heatmapMax} /> : <p className="text-sm text-stone-400">No data in this range.</p>}
      </Card>

      <section className="grid lg:grid-cols-2 gap-4">
        <Card title="Top items (by revenue)">
          {data.topItems.length ? <HorizontalItemBars data={data.topItems} /> : <p className="text-sm text-stone-400">No data.</p>}
        </Card>
        <Card title="Revenue by category">
          {data.categoryMix.length ? (
            <HorizontalItemBars data={data.categoryMix.map((c) => ({ name: c.category, revenue: c.revenue }))} />
          ) : (
            <p className="text-sm text-stone-400">No data.</p>
          )}
        </Card>
      </section>

      <p className="text-xs text-stone-400">
        Live from Clover POS · merchant KONA COFFEE DONUT? · times in Hawaiʻi (HST) · net = revenue − tax − refunds · cached ~10 min.
      </p>
    </>
  );
}
