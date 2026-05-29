import React from 'react';
import type { Metadata } from 'next';
import PageTemplate from '@/components/templates/PageTemplate';


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
  return (
    <PageTemplate
      eyebrow="M·II // STRUCTURA"
      breadcrumbs={[
        { label: 'Product Design', href: '/product-design' },
        { label: 'Case Studies', href: '/product-design/case-studies' },
        { label: 'Design Operations', href: '/case-studies/design-ops' },
      ]}
      title="Design Operations & Systems"
      subtitle="Establishing design operations and systems thinking to improve team efficiency, collaboration, and design consistency across enterprise products."
      meta={[{ label: 'Discipline', value: 'Design Ops' }, { label: 'Role', value: 'Systems' }, { label: 'Status', value: 'Write-up in progress' }]}
      content={[{ type: 'text', heading: 'Overview', body: 'A detailed write-up of this design-operations work is in progress. Related systems work is available in the Design Systems section.' }]}
      navLinks={[{ label: 'All case studies', href: '/product-design/case-studies', direction: 'next' }]}
    />
  );
}
