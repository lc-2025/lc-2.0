import {
  NEXT_PUBLIC_PROJECT_ID,
  NEXT_PUBLIC_DATASET,
  NEXT_PUBLIC_API_VERSION,
} from '@/utilities/environment';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_PROJECT_ID,
    NEXT_PUBLIC_DATASET,
    NEXT_PUBLIC_API_VERSION,
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
