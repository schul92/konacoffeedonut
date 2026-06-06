'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

// Toggles the prior-period comparison overlay via ?compare=1, preserving the
// active range and any custom dates already in the URL.
export default function CompareToggle({ active }: { active: boolean }) {
  const router = useRouter();
  const params = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const toggle = () => {
    const next = new URLSearchParams(params.toString());
    if (active) next.delete('compare');
    else next.set('compare', '1');
    startTransition(() => router.push(`/admin?${next.toString()}`));
  };

  return (
    <button
      onClick={toggle}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-semibold shadow-sm transition-colors ${
        active
          ? 'border-orange-500 bg-orange-500 text-white'
          : 'border-[var(--ad-border)] bg-[var(--ad-card)] text-[var(--ad-fg-muted)] hover:bg-[var(--ad-track)]'
      }`}
    >
      <span className={`h-2 w-3.5 rounded-full ${active ? 'bg-white/80' : 'bg-[var(--ad-fg-subtle)]'}`} style={active ? undefined : { backgroundImage: 'repeating-linear-gradient(90deg, currentColor 0 3px, transparent 3px 6px)' }} />
      Compare to prior
      {isPending && <span className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />}
    </button>
  );
}
