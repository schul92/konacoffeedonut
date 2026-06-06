import type { NextRequest } from 'next/server';
import { getSalesData } from '@/lib/clover';

// Runs on a Vercel Cron (see vercel.json) to keep the Clover cache warm.
// IMPORTANT: we deliberately do NOT call revalidateTag here. Hard-purging the
// tag deletes the cached value, so the next admin load would block on a live
// Clover fetch and could surface a 429. Instead we just READ each range: the
// data layer's stale-while-revalidate refreshes anything older than its TTL in
// the background, so a fresh value is always present and users never block.
export const maxDuration = 60;

export async function GET(request: NextRequest) {
  // Vercel injects `Authorization: Bearer ${CRON_SECRET}` on scheduled calls.
  const authHeader = request.headers.get('authorization');
  if (!process.env.CRON_SECRET || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  // Warm the commonly-viewed ranges SEQUENTIALLY (never in parallel) so we never
  // burst past Clover's rate limit. Each read triggers a background refresh if
  // its cache entry is stale. getSalesData never throws (it falls back to the
  // last snapshot), so the cron always reports ok.
  await getSalesData({ range: '30d' });
  await getSalesData({ range: '7d' });
  await getSalesData({ range: 'today' });
  await getSalesData({ range: 'yesterday' });
  return Response.json({ ok: true, warmedAt: Date.now() });
}
