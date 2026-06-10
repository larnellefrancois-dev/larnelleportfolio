import React from 'react';
import type { Metadata } from 'next';
import PageTemplate from '@/components/templates/PageTemplate';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'
  ),
  title: 'Accessibility Programme — Larnelle Chambers',
  description:
    'Implementing comprehensive accessibility improvements across digital products to ensure inclusive design for all users.',
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
  return (
    <PageTemplate
      eyebrow="M·II // STRUCTURA"
      breadcrumbs={[
        { label: 'Product Design', href: '/product-design' },
        { label: 'Case Studies', href: '/product-design/case-studies' },
        { label: 'Accessibility Programme', href: '/case-studies/accessibility-programme' },
      ]}
      title="Accessibility Programme"
      subtitle="Implementing comprehensive accessibility improvements across digital products to ensure inclusive design for all users."
      meta={[
        { label: 'Focus', value: 'Accessibility' },
        { label: 'Standard', value: 'WCAG 2.2 AA' },
        { label: 'Status', value: 'Write-up in progress' },
      ]}
      content={[
        {
          type: 'text',
          heading: 'Overview',
          body: 'A detailed write-up of this accessibility programme is in progress. Accessibility considerations are documented throughout the banking case studies.',
        },
      ]}
      navLinks={[
        { label: 'All case studies', href: '/product-design/case-studies', direction: 'next' },
      ]}
    />
  );
}
