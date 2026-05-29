import React from 'react';
import type { Metadata } from 'next';





export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'),
  title: 'Unified Design System for Banking — Larnelle Chambers',
  description: 'Building and evolving a reusable design system to support consistent, scalable, and accessible digital product design across a large banking environment.',
  openGraph: {
    type: 'article',
    url: 'https://larnellepo4855.builtwithrocket.new/case-studies/hsbc-design-system',
    title: 'Unified Design System for Banking — Larnelle Chambers',
    description: 'Building and evolving a reusable design system for consistent, scalable digital product design.',
    images: [
      {
        url: '/assets/images/portfolio_work_tile.png',
        width: 1200,
        height: 630,
        alt: 'Unified banking design system case study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unified Design System for Banking — Larnelle Chambers',
    description: 'Building and evolving a reusable design system for consistent, scalable digital product design.',
    images: ['/assets/images/portfolio_work_tile.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/case-studies/hsbc-design-system',
  },
};

export default function HSBCDesignSystemPage() {
  return null;
}