import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { getEventsData, analyticsWindow } from '@/lib/analyticsData';
import AdminShell from '@/components/admin/AdminShell';
import EventsView from '@/components/admin/EventsView';

export default async function AdminEventsPage() {
  const session = await auth();
  if (!session?.user) redirect('/admin/login');

  const [data, w] = [await getEventsData(), analyticsWindow()];
  return (
    <AdminShell active="events" user={session.user} subtitle={`GA4 custom events · ${w.start} → ${w.end}`}>
      <EventsView data={data} />
    </AdminShell>
  );
}
