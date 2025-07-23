import { cache } from 'react';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import {
  NEXT_PUBLIC_PROJECT_ID,
  NEXT_PUBLIC_DATASET,
  NEXT_PUBLIC_API_VERSION,
} from '@/utilities/environment';
import type { SanityDocument } from 'next-sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

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

/**
 * @description Image URL getter
 * @author Luca Cattide
 * @date 22/07/2025
 * @param {SanityImageSource} source
 * @returns {*}  {(ImageUrlBuilder | null)}
 */
const getImageUrl = (source: SanityImageSource): ImageUrlBuilder | null => {
  const { projectId, dataset } = client.config();

  return projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
};

export { clientCached, getImageUrl };
export default client;
