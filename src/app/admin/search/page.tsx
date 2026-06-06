import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { getGscData, analyticsWindow } from '@/lib/analyticsData';
import AdminShell from '@/components/admin/AdminShell';
import SearchView from '@/components/admin/SearchView';

export default async function AdminSearchPage() {
  const session = await auth();
  if (!session?.user) redirect('/admin/login');

  const [data, w] = [await getGscData(), analyticsWindow()];
  return (
    <AdminShell active="search" user={session.user} subtitle={`Google Search Console · ${w.start} → ${w.end}`}>
      <SearchView data={data} />
    </AdminShell>
  );
}
