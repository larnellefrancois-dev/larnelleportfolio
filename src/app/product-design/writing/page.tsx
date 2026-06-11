import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { SceneFrame, SceneScroller } from '@/components/cinematic/CinematicPrimitives';
import { PRODUCT_WRITING, articleHref } from '@/data/product-content';

export const metadata: Metadata = {
  title: 'Writing — Larnelle Chambers',
  description:
    'Essays on design systems, semantic tokens, governance, and product design practice by Larnelle Chambers.',
  alternates: { canonical: 'https://larnelle.me/product-design/writing' },
};

export default function ProductWritingPage() {
  return (
    <SceneScroller>
      <SceneFrame
        tone="product"
        eyebrow="Systema // Field Notes"
        title="Notes From Inside the System"
        lede="Essays on design systems, semantic tokens, governance, and the craft of product design."
        meta={[
          { label: 'Entries', value: String(PRODUCT_WRITING.length) },
          { label: 'Format', value: 'Essay' },
          { label: 'Wing', value: 'M·II' },
        ]}
      />

      <section className="scene-frame scene-frame--product" aria-label="Writing index">
        <div
          style={{ width: 'min(960px, 100%)', margin: '0 auto', position: 'relative', zIndex: 1 }}
        >
          <p className="scene-frame__eyebrow">Log entries // chronological</p>
          <div className="ds-grid">
            {PRODUCT_WRITING.map((a, index) => (
              <article key={a.slug} className="ds-card">
                <div className="ds-card__body">
                  <p className="ds-card__meta">
                    ENTRY {String(index + 1).padStart(2, '0')} · {a.tag} · {a.date}
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
      </section>
    </SceneScroller>
  );
}
