import { METADATA } from '@/data/content';
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

/**
 * @description Robots generator
 * @author Luca Cattide
 * @date 16/07/2025
 * @export
 * @returns {*}  {MetadataRoute.Robots}
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/out'],
        disallow: ['/node_modules/', '/src/', '/*.*', '/.*'],
      },
    ],
    sitemap: `${METADATA.BASEURL}/sitemap.xml`,
  };
}
