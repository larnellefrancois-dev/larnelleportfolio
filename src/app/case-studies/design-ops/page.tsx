import React from 'react';
import type { Metadata } from 'next';





export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'),
  title: 'Design Operations & Systems — Larnelle Chambers',
  description: 'Establishing design operations and systems thinking to improve team efficiency, collaboration, and design consistency across enterprise products.',
  openGraph: {
    type: 'article',
    url: 'https://larnellepo4855.builtwithrocket.new/case-studies/design-ops',
    title: 'Design Operations & Systems — Larnelle Chambers',
    description: 'Establishing design operations and systems thinking for enterprise products.',
    images: [
      {
        url: '/assets/images/portfolio_work_tile.png',
        width: 1200,
        height: 630,
        alt: 'Design operations case study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design Operations & Systems — Larnelle Chambers',
    description: 'Establishing design operations and systems thinking for enterprise products.',
    images: ['/assets/images/portfolio_work_tile.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/case-studies/design-ops',
  },
};

export default function DesignOpsPage() {
  return null;
}
