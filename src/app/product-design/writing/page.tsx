import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { PRODUCT_WRITING, articleHref } from '@/data/product-content';

export const metadata: Metadata = {
  title: 'Writing — Larnelle Chambers',
  description:
    'Essays on design systems, semantic tokens, governance, and product design practice by Larnelle Chambers.',
  alternates: { canonical: 'https://larnelle.me/product-design/writing' },
};

export default function ProductWritingPage() {
  return (
    <div className="ds-container ds-container--narrow ds-section">
      <div className="ds-breadcrumbs">
        <Link href="/product-design">Product Design</Link>
        <span aria-hidden="true">/</span>
        <span style={{ color: 'var(--text-muted)' }}>Writing</span>
      </div>
      <p className="ds-eyebrow">Systema · Writing</p>
      <h1 style={{ fontSize: 'var(--step-3)', margin: 'var(--space-2xs) 0 var(--space-sm)' }}>
        Writing
      </h1>
      <p className="ds-lede" style={{ marginBottom: 'var(--space-xl)' }}>
        Notes on design systems, tokens, governance, and the craft of product design.
      </p>

      <div className="ds-grid">
        {PRODUCT_WRITING.map((a) => (
          <article key={a.slug} className="ds-card">
            <div className="ds-card__body">
              <p className="ds-card__meta">
                {a.tag} · {a.date}
              </p>
              <h2 className="ds-card__title">
                <Link className="ds-stretch" href={articleHref(a.slug)}>
                  {a.title}
                </Link>
              </h2>
              <p className="ds-card__excerpt">{a.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
