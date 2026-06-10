import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'
  ),
  title: 'Get in Touch — Larnelle Chambers',
  description:
    'Available for design leadership roles, consulting engagements, and speaking opportunities. Contact Larnelle Chambers.',
  openGraph: {
    type: 'website',
    url: 'https://larnellepo4855.builtwithrocket.new/contact',
    title: 'Get in Touch — Larnelle Chambers',
    description:
      'Available for design leadership roles, consulting engagements, and speaking opportunities.',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'Contact Larnelle Chambers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get in Touch — Larnelle Chambers',
    description:
      'Available for design leadership roles, consulting engagements, and speaking opportunities.',
    images: ['/assets/images/app_logo.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/contact',
  },
};
