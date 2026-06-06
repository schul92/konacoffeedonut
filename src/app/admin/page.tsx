import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { getSalesData, type RangeKey } from '@/lib/clover';
import AdminShell from '@/components/admin/AdminShell';
import SalesView from '@/components/admin/SalesView';

const VALID: RangeKey[] = ['today', '7d', '30d', '90d'];

export default async function AdminSalesPage({
  searchParams,
}: {
  searchParams: Promise<{ range?: string; start?: string; end?: string; compare?: string }>;
}) {
  const session = await auth();
  if (!session?.user) redirect('/admin/login');

  const sp = await searchParams;
  const range = VALID.includes(sp.range as RangeKey) ? (sp.range as RangeKey) : undefined;
  const compare = sp.compare === '1';
  const data = await getSalesData(sp.start && sp.end ? { start: sp.start, end: sp.end } : { range: range ?? '30d' });

  return (
    <AdminShell active="sales" user={session.user} subtitle="Sales · live from Clover POS">
      <SalesView data={data} compare={compare} />
    </AdminShell>
  );
}
