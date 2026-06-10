import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'
  ),
  title: 'Work — Larnelle Chambers | Product & Systems Design',
  description:
    'Selected projects across banking, internal tools, editorial systems, and product experiences. Focused on clarity, structure, usability, and systems thinking.',
  openGraph: {
    type: 'website',
    url: 'https://larnellepo4855.builtwithrocket.new/work',
    title: 'Work — Larnelle Chambers',
    description:
      'Selected projects across banking, internal tools, editorial systems, and product experiences.',
    images: [
      {
        url: '/assets/images/portfolio_work_tile.png',
        width: 1200,
        height: 630,
        alt: 'Larnelle Chambers portfolio work projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work — Larnelle Chambers',
    description:
      'Selected projects across banking, internal tools, editorial systems, and product experiences.',
    images: ['/assets/images/portfolio_work_tile.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/work',
  },
};
