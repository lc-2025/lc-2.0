import { METADATA } from '@/data/content';
import type { MetadataRoute } from 'next';

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
        disallow: '*',
      },
    ],
    sitemap: `${METADATA.BASEURL}/sitemap.xml`,
  };
}
