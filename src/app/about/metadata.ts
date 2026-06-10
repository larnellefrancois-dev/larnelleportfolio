import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'
  ),
  title: 'About Larnelle Chambers — Product & Systems Designer',
  description:
    'UX/UI and product designer with 7+ years of experience designing digital experiences across web, mobile, and enterprise banking systems.',
  openGraph: {
    type: 'profile',
    url: 'https://larnellepo4855.builtwithrocket.new/about',
    title: 'About Larnelle Chambers',
    description: 'Product and systems designer focused on clarity, structure, and scalability.',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'Larnelle Chambers — about',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Larnelle Chambers',
    description: 'Product and systems designer focused on clarity, structure, and scalability.',
    images: ['/assets/images/app_logo.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/about',
  },
};
