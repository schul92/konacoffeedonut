import type { GscData } from '@/lib/analyticsData';
import { BarList, Card, Kpi, num, pct, Section } from './ui';
import { GscTrend } from './charts';

const dayLabel = (ymd: string) => `${Number(ymd.slice(5, 7))}/${Number(ymd.slice(8, 10))}`;

// GSC returns ISO-3166 alpha-3 lowercase country codes; a few we actually see
// get friendly names, the rest just get uppercased.
const COUNTRY: Record<string, string> = {
  usa: 'United States',
  jpn: 'Japan',
  kor: 'South Korea',
  can: 'Canada',
  aus: 'Australia',
  gbr: 'United Kingdom',
  deu: 'Germany',
  fra: 'France',
  chn: 'China',
  twn: 'Taiwan',
  phl: 'Philippines',
  nzl: 'New Zealand',
};

// Ranking position, color-coded: page 1 (≤10) green, page 2 (≤20) amber.
function PosBadge({ position }: { position: number }) {
  const tone = position <= 10 ? 'var(--ad-pos)' : position <= 20 ? '#d97706' : 'var(--ad-fg-subtle)';
  return (
    <span
      className="inline-block rounded-full px-1.5 py-0.5 text-xs font-semibold tabular-nums"
      style={{ color: tone, background: `color-mix(in srgb, ${tone} 12%, transparent)` }}
    >
      {position.toFixed(1)}
    </span>
  );
}

function GscTable({ title, sub, rows, keyHead }: { title: string; sub?: string; rows: GscData['topQueries']; keyHead: string }) {
  return (
    <Card title={title} sub={sub}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[var(--ad-fg-muted)] text-xs border-b border-[var(--ad-border)]">
              <th className="text-left font-medium py-1.5">{keyHead}</th>
              <th className="text-right font-medium">Clicks</th>
              <th className="text-right font-medium">Impr</th>
              <th className="text-right font-medium">CTR</th>
              <th className="text-right font-medium">Pos</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-[var(--ad-border)] last:border-0 transition-colors hover:bg-[var(--ad-track)]">
                <td className="py-1.5 pr-2 text-[var(--ad-fg)] truncate max-w-[260px]">{r.key}</td>
                <td className="text-right tabular-nums font-medium">{num(r.clicks)}</td>
                <td className="text-right tabular-nums text-[var(--ad-fg-subtle)]">{num(r.impressions)}</td>
                <td className="text-right tabular-nums text-[var(--ad-fg-subtle)]">{pct(r.ctr)}</td>
                <td className="text-right pl-2"><PosBadge position={r.position} /></td>
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
        <Kpi
          label="Clicks"
          value={num(data.clicks.value)}
          delta={data.clicks.prev ? ((data.clicks.value - data.clicks.prev) / data.clicks.prev) * 100 : null}
          spark={data.daily.map((d) => d.clicks)}
        />
        <Kpi
          label="Impressions"
          value={num(data.impressions.value)}
          delta={data.impressions.prev ? ((data.impressions.value - data.impressions.prev) / data.impressions.prev) * 100 : null}
          spark={data.daily.map((d) => d.impressions)}
        />
        <Kpi label="Avg. CTR" value={pct(data.ctr)} sub="last 28 days" />
        <Kpi label="Avg. position" value={data.position.toFixed(1)} sub="last 28 days" />
      </section>

      <Card title="Clicks & impressions per day" sub="Last 28 days">
        <GscTrend data={data.daily.map((d) => ({ label: dayLabel(d.key), clicks: d.clicks, impressions: d.impressions }))} />
      </Card>

      <Section title="Performance" sub="What ranks and what gets clicked">
        <GscTable title="Top queries" rows={data.topQueries} keyHead="Query" />
        <GscTable title="Top pages" rows={data.topPages} keyHead="Page" />
      </Section>

      <Section title="Segments">
        <Card title="Devices" sub="By clicks">
          <BarList
            items={data.devices.map((r) => ({
              name: r.key.charAt(0) + r.key.slice(1).toLowerCase(),
              value: r.clicks,
              sub: `${num(r.impressions)} impr`,
            }))}
          />
        </Card>
        <Card title="Countries" sub="By clicks">
          <BarList
            items={data.countries.map((r) => ({
              name: COUNTRY[r.key] ?? r.key.toUpperCase(),
              value: r.clicks,
              sub: `${num(r.impressions)} impr`,
            }))}
          />
        </Card>
      </Section>

      <GscTable title="Opportunities" sub="High impressions but low CTR or position 8–25 — content worth improving" rows={data.opportunities} keyHead="Query" />
    </>
  );
}
