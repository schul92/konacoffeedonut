import type { SalesData } from '@/lib/clover';
import { Card, Kpi, money, money2, num } from './ui';
import { RevenueBars, RevenueChart, HorizontalItemBars, TenderDonut, Heatmap } from './charts';
import RangeSelector from './RangeSelector';
import CompareToggle from './CompareToggle';
import LiveControls from './LiveControls';

export default function SalesView({ data, compare = false }: { data: SalesData; compare?: boolean }) {
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
  if (data.warming) {
    return (
      <div className="rounded-2xl border border-[var(--ad-border)] bg-[var(--ad-card)] p-6 text-center">
        <div className="mx-auto mb-3 h-6 w-6 animate-spin rounded-full border-2 border-[var(--ad-border)] border-t-orange-500" />
        <p className="text-sm font-medium text-[var(--ad-fg)]">Catching up with Clover…</p>
        <p className="mt-1 text-xs text-[var(--ad-fg-muted)]">Live sales are loading. This refreshes on its own in a moment.</p>
      </div>
    );
  }

  const k = data.kpis;
  const rangeLabel = data.range.key === 'custom' ? data.range.label : `last ${data.range.label.toLowerCase()}`;
  const isToday = data.range.key === 'today';
  const insights = data.insights ?? [];
  const revenueByHour = data.revenueByHour ?? [];
  const revSpark = data.revenueByDay.map((d) => d.revenue);
  const ordSpark = data.revenueByDay.map((d) => d.orders ?? 0);
  const zeroToday = isToday && k.orders === 0;

  const toneClass = (t: string) =>
    t === 'good'
      ? 'border-green-300/50 bg-green-500/10 text-[var(--ad-fg)]'
      : t === 'bad'
        ? 'border-red-300/50 bg-red-500/10 text-[var(--ad-fg)]'
        : 'border-[var(--ad-border)] bg-[var(--ad-track)] text-[var(--ad-fg)]';

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <RangeSelector active={data.range.key} />
          {!isToday && <CompareToggle active={compare} />}
        </div>
        <LiveControls generatedAt={data.generatedAt} />
      </div>
      <p className="-mt-3 flex flex-wrap items-center gap-2 text-xs text-[var(--ad-fg-muted)]">
        Showing {data.range.desc}
        {data.stale && (
          <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/60 bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700">
            recent snapshot · live data catching up
          </span>
        )}
      </p>

      {/* Insights strip */}
      {insights.length > 0 && (
        <section className="flex flex-wrap gap-2">
          {insights.map((ins, i) => (
            <span key={i} className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm ${toneClass(ins.tone)}`}>
              <span aria-hidden="true">{ins.tone === 'good' ? '📈' : ins.tone === 'bad' ? '⚠️' : '🔥'}</span>
              {ins.text}
            </span>
          ))}
        </section>
      )}

      <section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <Kpi label="Revenue" value={money2(k.revenue)} delta={k.deltaRevenue} hero spark={isToday ? undefined : revSpark} />
          <Kpi label="Net sales" value={money2(k.net)} delta={k.deltaNet} spark={isToday ? undefined : revSpark} />
          <Kpi label="Orders" value={num(k.orders)} delta={k.deltaOrders} spark={isToday ? undefined : ordSpark} />
          <Kpi label="Avg. order" value={money2(k.aov)} sub={rangeLabel} />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-3 sm:mt-4">
          <Kpi label="Refunds" value={money2(k.refunds)} sub={`${k.refundCount} refund${k.refundCount === 1 ? '' : 's'}`} />
          <Kpi label="Tax collected" value={money2(k.tax)} sub="set aside" />
          <Kpi label="Tips" value={money2(k.tips)} sub="on card payments" />
          <Kpi label="Gross sales" value={money(k.revenue)} sub="incl. tax" />
        </div>
      </section>

      {zeroToday && (
        <div className="rounded-xl border border-[var(--ad-border)] bg-[var(--ad-card)] p-6 text-center text-sm text-[var(--ad-fg-muted)]">
          ☕ No sales yet today — the shop opens at 7 AM HST. Numbers will fill in through the day.
        </div>
      )}

      <section className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <Card title={isToday ? 'Revenue by hour (today, HST)' : `Revenue by day (${rangeLabel})`}>
            {isToday ? (
              <RevenueBars data={revenueByHour} xKey="label" height={260} />
            ) : (
              <RevenueChart data={data.revenueByDay} compare={compare} height={280} />
            )}
          </Card>
        </div>
        <Card title="Payment mix">
          {data.tenderMix.length ? <TenderDonut data={data.tenderMix} /> : <p className="text-sm text-[var(--ad-fg-muted)]">No data.</p>}
        </Card>
      </section>

      <Card title="When you're busiest — revenue by weekday × hour (HST)">
        {data.heatmapMax > 0 ? <Heatmap data={data.heatmap} max={data.heatmapMax} /> : <p className="text-sm text-[var(--ad-fg-muted)]">No data in this range.</p>}
      </Card>

      <section className="grid lg:grid-cols-2 gap-4">
        <Card title="Top items (by revenue)">
          {data.topItems.length ? <HorizontalItemBars data={data.topItems} /> : <p className="text-sm text-[var(--ad-fg-muted)]">No data.</p>}
        </Card>
        <Card title="Revenue by category">
          {data.categoryMix.length ? (
            <HorizontalItemBars data={data.categoryMix.map((c) => ({ name: c.category, revenue: c.revenue }))} />
          ) : (
            <p className="text-sm text-[var(--ad-fg-muted)]">No data.</p>
          )}
        </Card>
      </section>

      <p className="text-xs text-[var(--ad-fg-subtle)]">
        Live from Clover POS · merchant KONA COFFEE DONUT? · times in Hawaiʻi (HST) · net = revenue − tax − refunds.
      </p>
    </>
  );
}
