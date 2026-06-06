'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { refreshClover } from '@/app/admin/actions';

function ago(ms: number) {
  const s = Math.max(0, Math.round((Date.now() - ms) / 1000));
  if (s < 60) return `${s}s ago`;
  const m = Math.round(s / 60);
  if (m < 60) return `${m}m ago`;
  return `${Math.round(m / 60)}h ago`;
}

/**
 * Keeps the Sales tab "live": a visibility-gated interval re-renders the server
 * component (cheap — it serves the cached Clover fetch until its 2-min TTL),
 * plus a manual button that force-busts the cache for an instant refresh.
 */
export default function LiveControls({ generatedAt, intervalMs = 45_000 }: { generatedAt: number; intervalMs?: number }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [, tick] = useState(0);

  // Re-render every second so the "updated Xs ago" label counts up.
  useEffect(() => {
    const id = setInterval(() => tick((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, []);

  // Auto-refresh on an interval, but only while the tab is visible.
  useEffect(() => {
    let id: ReturnType<typeof setInterval> | null = null;
    const start = () => {
      if (!id) id = setInterval(() => router.refresh(), intervalMs);
    };
    const stop = () => {
      if (id) clearInterval(id);
      id = null;
    };
    const onVis = () => {
      if (document.visibilityState === 'visible') {
        router.refresh();
        start();
      } else stop();
    };
    if (document.visibilityState === 'visible') start();
    document.addEventListener('visibilitychange', onVis);
    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [router, intervalMs]);

  const refreshNow = () =>
    startTransition(async () => {
      await refreshClover();
      router.refresh();
    });

  return (
    <div className="flex items-center gap-2.5 text-xs text-stone-500">
      <span className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        Updated {ago(generatedAt)}
      </span>
      <button
        onClick={refreshNow}
        disabled={isPending}
        className="rounded-lg border border-stone-300 px-2.5 py-1 font-medium text-stone-700 hover:bg-stone-50 disabled:opacity-50"
      >
        {isPending ? 'Refreshing…' : 'Refresh'}
      </button>
    </div>
  );
}
