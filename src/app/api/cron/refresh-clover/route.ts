import type { NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';
import { getSalesData } from '@/lib/clover';
import { CLOVER_TAG } from '@/lib/cacheTags';

// Runs on a Vercel Cron (see vercel.json) every 10 min to keep the Clover cache
// warm so the first admin load after an idle period is instant.
export const maxDuration = 60;

export async function GET(request: NextRequest) {
  // Vercel injects `Authorization: Bearer ${CRON_SECRET}` on scheduled calls.
  const authHeader = request.headers.get('authorization');
  if (!process.env.CRON_SECRET || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  // Mark stale, then re-run the data layer SEQUENTIALLY (not in parallel) to
  // repopulate the cache without bursting past Clover's rate limit.
  revalidateTag(CLOVER_TAG, 'max');
  try {
    await getSalesData({ range: '30d' }); // the default dashboard view
    await getSalesData({ range: 'today' });
  } catch (e) {
    return Response.json({ ok: false, error: e instanceof Error ? e.message : String(e) }, { status: 500 });
  }
  return Response.json({ ok: true, warmedAt: Date.now() });
}
