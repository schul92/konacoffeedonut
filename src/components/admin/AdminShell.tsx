import Link from 'next/link';
import { signOut } from '@/auth';

const TABS = [
  { href: '/admin', label: 'Sales', key: 'sales' },
  { href: '/admin/search', label: 'Search', key: 'search' },
  { href: '/admin/traffic', label: 'Traffic', key: 'traffic' },
] as const;

export default function AdminShell({
  active,
  user,
  subtitle,
  children,
}: {
  active: 'sales' | 'search' | 'traffic';
  user: { name?: string | null; email?: string | null };
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-lg font-extrabold tracking-tight">Kona Coffee Donut · Admin</h1>
            {subtitle && <p className="text-xs text-stone-500">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium leading-tight">{user.name}</p>
              <p className="text-xs text-stone-500 leading-tight">{user.email}</p>
            </div>
            <form
              action={async () => {
                'use server';
                await signOut({ redirectTo: '/admin/login' });
              }}
            >
              <button className="rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-medium hover:bg-stone-50">
                Sign out
              </button>
            </form>
          </div>
        </div>
        {/* Tabs */}
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex gap-1 mt-3">
          {TABS.map((t) => {
            const isActive = t.key === active;
            return (
              <Link
                key={t.key}
                href={t.href}
                className={`px-4 py-2 text-sm font-semibold border-b-2 -mb-px transition-colors ${
                  isActive ? 'border-orange-500 text-stone-900' : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                {t.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8">{children}</main>
    </div>
  );
}
