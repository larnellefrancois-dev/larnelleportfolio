import type { Metadata } from 'next';
import React from 'react';
import SectionLanding from '@/components/templates/SectionLanding';
import { PRODUCT_WORK } from '@/data/product-content';

export const metadata: Metadata = {
  title: 'Larnelle Chambers — Product Design Portfolio',
  description: 'Product design portfolio of Larnelle Chambers — case studies, design systems, and interfaces across enterprise banking, editorial, and platform work.',
  alternates: { canonical: 'https://larnelle.me/product-design' },
};

export default function ProductDesignPage() {
  const featured = PRODUCT_WORK.filter((w) => w.featured);
  return (
    <SectionLanding
      eyebrow="Systema · Product Design"
      title="Designing clear, credible products at scale."
      lede="Case studies, design systems, and interfaces. I help teams ship structured, accessible, trustworthy products — most recently across enterprise banking and design-systems work."
      actions={[
        { label: 'View case studies', href: '/product-design/case-studies', primary: true },
        { label: 'About', href: '/product-design/about' },
      ]}
      featuredTitle="Featured work"
      featuredDesc="Selected projects across banking UX, design systems, and platform design."
      features={featured.map((w) => ({
        title: w.title,
        meta: `${w.client} · ${w.year}`,
        excerpt: w.description,
        href: w.href,
        img: w.img,
        alt: w.alt,
        tags: w.tags,
      }))}
      cta={{
        title: 'Have a product problem worth solving?',
        desc: 'I take on a small number of product design and design-systems engagements.',
        actions: [
          { label: 'Start a conversation', href: '/contact', primary: true },
          { label: 'Read the writing', href: '/product-design/writing' },
        ],
      }}
    />
  );
}
