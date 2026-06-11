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
