import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import SystemsArchiveClient from './SystemsArchiveClient';
import { DESIGN_ARCHIVE } from '@/data/product-content';

export const metadata: Metadata = {
  title: 'Systems Archive — Product Design — Larnelle Chambers',
  description:
    'Product and interface design archive: mobile UI, product concepts, campaign systems, web design, visual systems, print, and brand applications by Larnelle Chambers.',
  alternates: { canonical: 'https://larnelle.me/product-design/archive' },
};

export default function ProductDesignArchivePage() {
  return (
    <div className="systems-archive">
      <div className="systems-archive__grain" aria-hidden="true" />
      <div className="systems-archive__header">
        <div className="systems-archive__crumb">
          <Link href="/product-design">Systems</Link>
          <span aria-hidden="true">{'//'}</span>
          <span>Archive</span>
          <span aria-hidden="true">{'//'}</span>
          <span>Portfolio 2024</span>
        </div>
        <p className="systems-archive__status">Accepting Commissions</p>
      </div>

      <section className="systems-archive__intro">
        <h1>Systems Archive</h1>
        <p>Product & Interface Design Directory</p>
      </section>

      <SystemsArchiveClient items={DESIGN_ARCHIVE} />

      <section className="systems-archive__closing" aria-label="Product design archive actions">
        <Link href="/product-design/case-studies">View deeper case studies</Link>
        <Link href="/product-design/design-systems">Enter design systems</Link>
      </section>
    </div>
  );
}
