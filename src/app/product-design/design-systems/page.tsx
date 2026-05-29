import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Design Systems — Larnelle Chambers',
  description: 'Design systems work by Larnelle Chambers — token architecture, component libraries, typography systems, and governance for enterprise products.',
  alternates: { canonical: 'https://larnelle.me/product-design/design-systems' },
};

const systems = [
  {
    id: 'oasis',
    title: 'Oasis Design System',
    org: 'NCB Financial Group',
    year: '2024',
    description: "A full-scale design system for NCB's digital banking products — component library, token architecture, documentation, and governance model.",
    href: '/case-studies/ncb-design-system',
    img: '/assets/images/Personal-1775589530525.png',
    alt: 'Oasis design system component library showing UI components and tokens',
    tags: ['Components', 'Tokens', 'Documentation', 'Governance'],
  },
  {
    id: 'type',
    title: 'Oasis Geometric Typeface',
    org: 'NCB Financial Group',
    year: '2022',
    description: 'A custom geometric sans-serif typeface and typographic system — scale, rhythm, hierarchy, and cross-platform consistency.',
    href: '/case-studies/type-design',
    img: '/assets/images/image-1775321950897.png',
    alt: 'Type design system showing typographic scale and specimens',
    tags: ['Typography', 'Scale', 'Tokens', 'Brand'],
  },
];

export default function DesignSystemsPage() {
  return (
    <div className="ds-container ds-section">
      <div className="ds-breadcrumbs">
        <Link href="/product-design">Product Design</Link>
        <span aria-hidden="true">/</span>
        <span style={{ color: 'var(--text-muted)' }}>Design Systems</span>
      </div>
      <p className="ds-eyebrow">Systema · Design Systems</p>
      <h1 style={{ fontSize: 'var(--step-3)', margin: 'var(--space-2xs) 0 var(--space-sm)' }}>Design Systems</h1>
      <p className="ds-lede" style={{ maxWidth: '56ch', marginBottom: 'var(--space-xl)' }}>
        Token architecture, component libraries, typography, and the governance that keeps systems alive across many teams.
      </p>

      <div className="ds-grid ds-grid--auto">
        {systems.map((s) => (
          <article key={s.id} className="ds-card">
            <div className="ds-card__media">
              {s.img ? <img src={s.img} alt={s.alt} loading="lazy" /> : <span>{s.title}</span>}
            </div>
            <div className="ds-card__body">
              <p className="ds-card__meta">{s.org} · {s.year}</p>
              <h2 className="ds-card__title"><Link className="ds-stretch" href={s.href}>{s.title}</Link></h2>
              <p className="ds-card__excerpt">{s.description}</p>
              <div className="ds-card__footer">
                {s.tags.map((t) => <span key={t} className="ds-tag">{t}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
