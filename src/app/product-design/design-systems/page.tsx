import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { SceneFrame, SceneScroller } from '@/components/cinematic/CinematicPrimitives';

export const metadata: Metadata = {
  title: 'Design Systems — Larnelle Chambers',
  description:
    'Design systems work by Larnelle Chambers — token architecture, component libraries, typography systems, and governance for enterprise products.',
  alternates: { canonical: 'https://larnelle.me/product-design/design-systems' },
};

const systems = [
  {
    id: 'oasis',
    title: 'Oasis Design System',
    org: 'NCB Financial Group',
    year: '2024',
    description:
      "A full-scale design system for NCB's digital banking products — component library, token architecture, documentation, and governance model.",
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
    description:
      'A custom geometric sans-serif typeface and typographic system — scale, rhythm, hierarchy, and cross-platform consistency.',
    href: '/case-studies/type-design',
    img: '/assets/images/image-1775321950897.png',
    alt: 'Type design system showing typographic scale and specimens',
    tags: ['Typography', 'Scale', 'Tokens', 'Brand'],
  },
];

export default function DesignSystemsPage() {
  return (
    <SceneScroller>
      <SceneFrame
        tone="product"
        eyebrow="Systema // Infrastructure"
        title="Systems That Keep Products Honest"
        lede="Token architecture, component libraries, typography, and the governance that keeps systems alive across many teams."
        meta={[
          { label: 'Systems', value: String(systems.length) },
          { label: 'Scope', value: 'Enterprise' },
          { label: 'Wing', value: 'M·II' },
        ]}
      />

      {systems.map((s, index) => (
        <SceneFrame
          key={s.id}
          tone="product"
          eyebrow={`SYS ${String(index + 1).padStart(2, '0')} // ${s.org} · ${s.year}`}
          title={s.title}
          lede={s.description}
          meta={s.tags.map((t) => ({ label: '◉', value: t }))}
          visual={
            <div className="dossier-viewer__portrait" style={{ minHeight: 360 }}>
              <img src={s.img} alt={s.alt} loading="lazy" />
              <div className="dossier-viewer__overlay" aria-hidden="true">
                <span>SYSTEMA</span>
                <span>{s.year}</span>
                <span>SPEC</span>
              </div>
            </div>
          }
        >
          <div style={{ marginTop: 28 }}>
            <Link href={s.href} className="ds-btn ds-btn--primary">
              Open the case file
            </Link>
          </div>
        </SceneFrame>
      ))}
    </SceneScroller>
  );
}
