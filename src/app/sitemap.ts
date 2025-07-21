import type { MetadataRoute } from 'next';

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
      url: 'https://lucati.dev',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0,
    },
    {
      url: 'https://lucati.dev/home',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 1,
    },
    {
      url: 'https://lucati.dev/intro',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.9,
    },
    {
      url: 'https://lucati.dev/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://lucati.dev/portfolio',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://lucati.dev/contacts',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.6,
    },
  ];
}
