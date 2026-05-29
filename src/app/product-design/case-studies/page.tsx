import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { PRODUCT_WORK } from '@/data/product-content';

export const metadata: Metadata = {
  title: 'Case Studies — Larnelle Chambers',
  description: 'Selected product design case studies spanning enterprise banking, design systems, mobile UX, editorial, and platform design.',
  alternates: { canonical: 'https://larnelle.me/product-design/case-studies' },
};

export default function ProductCaseStudiesPage() {
  return (
    <div className="ds-container ds-section">
      <div className="ds-breadcrumbs">
        <Link href="/product-design">Product Design</Link>
        <span aria-hidden="true">/</span>
        <span style={{ color: 'var(--text-muted)' }}>Case Studies</span>
      </div>
      <p className="ds-eyebrow">Systema · Case Studies</p>
      <h1 style={{ fontSize: 'var(--step-3)', margin: 'var(--space-2xs) 0 var(--space-sm)' }}>Case Studies</h1>
      <p className="ds-lede" style={{ maxWidth: '52ch', marginBottom: 'var(--space-xl)' }}>
        Selected projects across enterprise banking, design systems, mobile UX, editorial, and platform design.
      </p>

      <div className="ds-grid ds-grid--auto">
        {PRODUCT_WORK.map((w) => (
          <article key={w.id} className="ds-card">
            <div className="ds-card__media">
              {w.img ? <img src={w.img} alt={w.alt ?? ''} loading="lazy" /> : <span>{w.type}</span>}
            </div>
            <div className="ds-card__body">
              <p className="ds-card__meta">{w.client} · {w.year}</p>
              <h2 className="ds-card__title"><Link className="ds-stretch" href={w.href}>{w.title}</Link></h2>
              <p className="ds-card__excerpt">{w.description}</p>
              <div className="ds-card__footer">
                {w.tags.slice(0, 3).map((t) => <span key={t} className="ds-tag">{t}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
