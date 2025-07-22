import { cache } from 'react';
import { createClient } from 'next-sanity';
import {
  NEXT_PUBLIC_PROJECT_ID,
  NEXT_PUBLIC_DATASET,
  NEXT_PUBLIC_API_VERSION,
} from '@/utilities/environment';
import type { SanityDocument } from 'next-sanity';

// Sanity Client
const client = createClient({
  projectId: NEXT_PUBLIC_PROJECT_ID,
  dataset: NEXT_PUBLIC_DATASET,
  apiVersion: NEXT_PUBLIC_API_VERSION,
  useCdn: false,
});
// Cached client
const clientCached = cache(
  async (query: string): Promise<SanityDocument[]> =>
    await client.fetch<SanityDocument[]>(query),
);

export { clientCached };
export default client;
