import React from 'react';
import type { Metadata } from 'next';





export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'),
  title: 'Accessibility Programme — Larnelle Chambers',
  description: 'Implementing comprehensive accessibility improvements across digital products to ensure inclusive design for all users.',
  openGraph: {
    type: 'article',
    url: 'https://larnellepo4855.builtwithrocket.new/case-studies/accessibility-programme',
    title: 'Accessibility Programme — Larnelle Chambers',
    description: 'Implementing comprehensive accessibility improvements across digital products.',
    images: [
      {
        url: '/assets/images/portfolio_work_tile.png',
        width: 1200,
        height: 630,
        alt: 'Accessibility programme case study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accessibility Programme — Larnelle Chambers',
    description: 'Implementing comprehensive accessibility improvements across digital products.',
    images: ['/assets/images/portfolio_work_tile.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/case-studies/accessibility-programme',
  },
};

export default function AccessibilityProgrammePage() {
  return null;
}
