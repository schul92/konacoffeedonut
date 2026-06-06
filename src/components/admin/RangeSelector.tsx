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
  const [start, setStart] = useState(params.get('start') ?? '');
  const [end, setEnd] = useState(params.get('end') ?? '');
  const [isPending, startTransition] = useTransition();
  const [pendingKey, setPendingKey] = useState<string | null>(null);
  const isCustom = active === 'custom';
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

  return (
    <div className="flex flex-wrap items-center gap-2" aria-busy={isPending}>
      <div className="inline-flex rounded-xl border border-[var(--ad-border)] bg-[var(--ad-card)] p-1 shadow-sm">
        {PRESETS.map((p) => {
          const on = current === p.key;
          return (
            <button
              key={p.key}
              onClick={() => go(p.key, `/admin?range=${p.key}`)}
              className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors ${
                on ? 'bg-orange-500 text-white' : 'text-[var(--ad-fg-muted)] hover:bg-[var(--ad-track)]'
              }`}
            >
              {p.label}
            </button>
          );
        })}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (start && end) go('custom', `/admin?start=${start}&end=${end}`);
        }}
        className="flex items-center gap-1.5"
      >
        <input type="date" value={start} onChange={(e) => setStart(e.target.value)} className="rounded-lg border border-[var(--ad-border)] bg-[var(--ad-card)] px-2 py-1.5 text-sm text-[var(--ad-fg)]" />
        <span className="text-[var(--ad-fg-subtle)] text-sm">→</span>
        <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} className="rounded-lg border border-[var(--ad-border)] bg-[var(--ad-card)] px-2 py-1.5 text-sm text-[var(--ad-fg)]" />
        <button
          type="submit"
          className={`px-3 py-1.5 text-sm font-semibold rounded-lg border transition-colors ${
            isCustom ? 'bg-orange-500 text-white border-orange-500' : 'border-[var(--ad-border)] text-[var(--ad-fg-muted)] hover:bg-[var(--ad-track)]'
          }`}
        >
          Apply
        </button>
      </form>

      {isPending && (
        <span className="inline-flex items-center gap-1.5 text-xs text-[var(--ad-fg-subtle)]">
          <span className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
          Loading…
        </span>
      )}
    </div>
  );
}
