import type { SanityDocument } from 'next-sanity';

// Fetch
type TUseFetch = {
  data: SanityDocument[];
  error: React.ReactNode | null;
};

export type { TUseFetch };
