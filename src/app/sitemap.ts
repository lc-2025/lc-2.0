import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

/**
 * @description Sitemap generator
 * @author Luca Cattide
 * @date 16/07/2025
 * @export
 * @returns {*}  {MetadataRoute.Sitemap}
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lucati.de',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0,
    },
    {
      url: 'https://lucati.de/home',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 1,
    },
    {
      url: 'https://lucati.de/intro',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.9,
    },
    {
      url: 'https://lucati.de/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://lucati.de/portfolio',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://lucati.de/contacts',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.6,
    },
  ];
}
