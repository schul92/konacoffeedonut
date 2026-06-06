'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

const PRESETS = [
  { key: 'today', label: 'Today' },
  { key: '7d', label: '7 Days' },
  { key: '30d', label: '30 Days' },
  { key: '90d', label: '90 Days' },
];

export default function RangeSelector({ active }: { active: string }) {
  const router = useRouter();
  const params = useSearchParams();
  const isCustom = active === 'custom';
  const [start, setStart] = useState(params.get('start') ?? '');
  const [end, setEnd] = useState(params.get('end') ?? '');
  const [open, setOpen] = useState(isCustom); // show the from/to picker when a custom range is active
  const [isPending, startTransition] = useTransition();
  const [pendingKey, setPendingKey] = useState<string | null>(null);
  const current = pendingKey ?? active; // optimistic highlight while navigating

  // Reset the optimistic key once the server confirms the new range.
  useEffect(() => setPendingKey(null), [active]);
  // Prefetch the range variants so switching to a warm one is instant.
  useEffect(() => {
    PRESETS.forEach((p) => router.prefetch(`/admin?range=${p.key}`));
  }, [router]);

  const go = (key: string, href: string) => {
    setPendingKey(key);
    startTransition(() => router.push(href));
  };

  const applyCustom = () => {
    if (start && end) go('custom', `/admin?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`);
  };

  return (
    <div className="flex flex-col gap-2" aria-busy={isPending}>
      <div className="flex flex-wrap items-center gap-2">
        <div className="inline-flex rounded-xl border border-[var(--ad-border)] bg-[var(--ad-card)] p-1 shadow-sm">
          {PRESETS.map((p) => {
            const on = current === p.key;
            return (
              <button
                key={p.key}
                onClick={() => go(p.key, `/admin?range=${p.key}`)}
                className={`px-2.5 sm:px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors ${
                  on ? 'bg-orange-500 text-white' : 'text-[var(--ad-fg-muted)] hover:bg-[var(--ad-track)]'
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-sm font-semibold shadow-sm transition-colors ${
            isCustom ? 'border-orange-500 bg-orange-500 text-white' : 'border-[var(--ad-border)] bg-[var(--ad-card)] text-[var(--ad-fg-muted)] hover:bg-[var(--ad-track)]'
          }`}
        >
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18M12 14v3M10.5 15.5h3" />
          </svg>
          Custom
        </button>

        {isPending && (
          <span className="inline-flex items-center gap-1.5 text-xs text-[var(--ad-fg-subtle)]">
            <span className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Loading…
          </span>
        )}
      </div>

      {open && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            applyCustom();
          }}
          className="flex flex-col gap-2 rounded-xl border border-[var(--ad-border)] bg-[var(--ad-card)] p-3 shadow-sm sm:flex-row sm:items-end"
        >
          <label className="flex flex-1 flex-col gap-1 text-xs font-medium text-[var(--ad-fg-muted)]">
            From
            <input
              type="datetime-local"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="w-full rounded-lg border border-[var(--ad-border)] bg-[var(--ad-bg)] px-2.5 py-1.5 text-sm text-[var(--ad-fg)]"
            />
          </label>
          <label className="flex flex-1 flex-col gap-1 text-xs font-medium text-[var(--ad-fg-muted)]">
            To
            <input
              type="datetime-local"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="w-full rounded-lg border border-[var(--ad-border)] bg-[var(--ad-bg)] px-2.5 py-1.5 text-sm text-[var(--ad-fg)]"
            />
          </label>
          <button
            type="submit"
            disabled={!start || !end}
            className="rounded-lg bg-orange-500 px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600 disabled:opacity-40"
          >
            Apply
          </button>
        </form>
      )}
    </div>
  );
}
