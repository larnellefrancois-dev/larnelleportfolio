import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'
  ),
  title: 'Case Studies — Larnelle Chambers | Design Leadership',
  description:
    'In-depth case studies of design systems, product design, and digital transformation across banking, enterprise, and editorial platforms.',
  openGraph: {
    type: 'website',
    url: 'https://larnellepo4855.builtwithrocket.new/case-studies',
    title: 'Case Studies — Larnelle Chambers',
    description:
      'In-depth case studies of design systems, product design, and digital transformation.',
    images: [
      {
        url: '/assets/images/portfolio_work_tile.png',
        width: 1200,
        height: 630,
        alt: 'Larnelle Chambers case studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies — Larnelle Chambers',
    description:
      'In-depth case studies of design systems, product design, and digital transformation.',
    images: ['/assets/images/portfolio_work_tile.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/case-studies',
  },
};
