import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { getGa4Data, analyticsWindow } from '@/lib/analyticsData';
import AdminShell from '@/components/admin/AdminShell';
import TrafficView from '@/components/admin/TrafficView';

export default async function AdminTrafficPage() {
  const session = await auth();
  if (!session?.user) redirect('/admin/login');

  const [data, w] = [await getGa4Data(), analyticsWindow()];
  return (
    <AdminShell active="traffic" user={session.user} subtitle={`Google Analytics 4 · ${w.start} → ${w.end}`}>
      <TrafficView data={data} />
    </AdminShell>
  );
}
