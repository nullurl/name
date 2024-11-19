import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://namecraft.site';
  const lastModified = new Date();
  
  const routes = [
    '',
    '/en',
    '/zh',
    '/ja',
    '/en/support',
    '/zh/support',
    '/ja/support',
    '/privacy',
    '/terms'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}