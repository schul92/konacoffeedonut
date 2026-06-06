import Link from 'next/link';
import { signOut } from '@/auth';
import { ThemeToggle } from './ThemeProvider';

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
      <header className="border-b border-[var(--ad-border)] bg-[var(--ad-card)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-3 sm:pt-4 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-[var(--ad-fg)] truncate">Kona Coffee Donut · Admin</h1>
            {subtitle && <p className="text-xs text-[var(--ad-fg-muted)] truncate">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="text-right hidden md:block">
              <p className="text-sm font-medium leading-tight text-[var(--ad-fg)]">{user.name}</p>
              <p className="text-xs text-[var(--ad-fg-muted)] leading-tight">{user.email}</p>
            </div>
            <ThemeToggle />
            <form
              action={async () => {
                'use server';
                await signOut({ redirectTo: '/admin/login' });
              }}
            >
              <button className="rounded-lg border border-[var(--ad-border)] px-2.5 sm:px-3 py-1.5 text-sm font-medium text-[var(--ad-fg-muted)] transition-colors hover:bg-[var(--ad-track)]">
                Sign out
              </button>
            </form>
          </div>
        </div>
        {/* Tabs (scroll horizontally on small screens) */}
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex gap-1 mt-3 overflow-x-auto scrollbar-hide">
          {TABS.map((t) => {
            const isActive = t.key === active;
            return (
              <Link
                key={t.key}
                href={t.href}
                className={`shrink-0 px-4 py-2 text-sm font-semibold border-b-2 -mb-px transition-colors ${
                  isActive ? 'border-orange-500 text-[var(--ad-fg)]' : 'border-transparent text-[var(--ad-fg-muted)] hover:text-[var(--ad-fg)]'
                }`}
              >
                {t.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-5 sm:py-7 space-y-6 sm:space-y-8">{children}</main>
    </div>
  );
}
