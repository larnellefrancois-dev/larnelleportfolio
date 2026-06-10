import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://larnelle.me';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/', '/contact/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
