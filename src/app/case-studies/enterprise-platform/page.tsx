import React from 'react';
import type { Metadata } from 'next';
import PageTemplate from '@/components/templates/PageTemplate';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'
  ),
  title: 'Enterprise Banking Platform Design — Larnelle Chambers',
  description:
    'Improving the usability of a complex internal loan-operations platform through refined task flow, information structure, and interface clarity.',
  openGraph: {
    type: 'article',
    url: 'https://larnellepo4855.builtwithrocket.new/case-studies/enterprise-platform',
    title: 'Enterprise Banking Platform Design — Larnelle Chambers',
    description: 'Improving the usability of a complex internal loan-operations platform.',
    images: [
      {
        url: '/assets/images/portfolio_work_tile.png',
        width: 1200,
        height: 630,
        alt: 'Enterprise banking platform case study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Banking Platform Design — Larnelle Chambers',
    description: 'Improving the usability of a complex internal loan-operations platform.',
    images: ['/assets/images/portfolio_work_tile.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/case-studies/enterprise-platform',
  },
};

export default function EnterprisePlatformPage() {
  return (
    <PageTemplate
      eyebrow="M·II // STRUCTURA"
      breadcrumbs={[
        { label: 'Product Design', href: '/product-design' },
        { label: 'Case Studies', href: '/product-design/case-studies' },
        { label: 'Enterprise Platform', href: '/case-studies/enterprise-platform' },
      ]}
      title="Enterprise Banking Platform"
      subtitle="Improving the usability of a complex internal loan-operations platform through refined task flow, information structure, and interface clarity."
      meta={[
        { label: 'Domain', value: 'Enterprise Banking' },
        { label: 'Role', value: 'Product Design' },
        { label: 'Status', value: 'Write-up in progress' },
      ]}
      content={[
        {
          type: 'text',
          heading: 'Overview',
          body: 'A detailed write-up of this enterprise platform engagement is in progress. Related banking work is available across the case-study archive.',
        },
      ]}
      navLinks={[
        { label: 'All case studies', href: '/product-design/case-studies', direction: 'next' },
      ]}
    />
  );
}
