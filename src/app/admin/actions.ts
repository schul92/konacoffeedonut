'use server';

import { revalidateTag } from 'next/cache';
import { CLOVER_TAG } from '@/lib/cacheTags';

// Force-bust the Clover data cache so the next render pulls fresh POS data
// immediately (expire: 0 = the next request waits for fresh data).
export async function refreshClover() {
  revalidateTag(CLOVER_TAG, { expire: 0 });
}
