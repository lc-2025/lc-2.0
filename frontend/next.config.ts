import bundleAnalyzer from '@next/bundle-analyzer';
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
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      new URL(
        `https://cdn.sanity.io/images/${NEXT_PUBLIC_PROJECT_ID}/${NEXT_PUBLIC_DATASET}/**`,
      ),
    ],
  },
};
// Build Analyzer
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
