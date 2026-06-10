import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'
  ),
  title: 'Writing — Larnelle Chambers | Design Systems & Product',
  description:
    'Thoughts on design systems, engineering culture, and the intersection of architecture and digital products. Exploring scalable foundations for web experiences.',
  openGraph: {
    type: 'website',
    url: 'https://larnellepo4855.builtwithrocket.new/writing',
    title: 'Writing — Larnelle Chambers',
    description:
      'Thoughts on design systems, engineering culture, and the intersection of architecture and digital products.',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'Larnelle Chambers writing on design systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Writing — Larnelle Chambers',
    description:
      'Thoughts on design systems, engineering culture, and the intersection of architecture and digital products.',
    images: ['/assets/images/app_logo.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/writing',
  },
};
