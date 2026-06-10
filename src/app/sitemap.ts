import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://larnelle.me';
  const now = new Date();

  return [
    // Portal homepage (canonical root)
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },

    // Art section
    { url: `${baseUrl}/art`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/art/gallery`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    {
      url: `${baseUrl}/art/projects`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    { url: `${baseUrl}/art/process`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    {
      url: `${baseUrl}/art/commissions`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // Product Design section
    {
      url: `${baseUrl}/product-design`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/product-design/case-studies`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/product-design/archive`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/product-design/design-systems`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/product-design/writing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/product-design/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Literature section
    { url: `${baseUrl}/literature`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    {
      url: `${baseUrl}/literature/the-pale-interval`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/literature/archive`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/literature/excerpts`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/literature/characters`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/literature/worldbuilding`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/literature/author`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // Contact
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Legacy product design case studies (preserved)
    {
      url: `${baseUrl}/case-studies/ncb-design-system`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies/banking-loans`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies/mobile-banking`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies/auto`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/mortgage`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/welink`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/gleaner`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/type-design`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/design-ops`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/enterprise-platform`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/hsbc-design-system`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/accessibility-programme`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Featured writing detail
    {
      url: `${baseUrl}/product-design/writing/semantic-tokens-architecture`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
