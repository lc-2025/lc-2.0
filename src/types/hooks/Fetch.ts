import type { SanityDocument } from '@sanity/types';

// Fetch
type TUseFetch = {
  data: SanityDocument[];
  error: React.ReactNode | null;
};

export type { TUseFetch };
