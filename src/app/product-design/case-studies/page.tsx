import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ProductCommandCenter } from '@/components/creative/CreativeExperiences';
import MotionReveal from '@/components/motion/MotionReveal';
import { DESIGN_ARCHIVE, PRODUCT_WORK } from '@/data/product-content';

export const metadata: Metadata = {
  title: 'Case Studies — Larnelle Chambers',
  description:
    'Selected product design case studies spanning enterprise banking, design systems, mobile UX, editorial, and platform design.',
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
      <MotionReveal variant="clip">
        <p className="ds-eyebrow">Systema · Case Studies</p>
        <h1 style={{ fontSize: 'var(--step-3)', margin: 'var(--space-2xs) 0 var(--space-sm)' }}>
          Case Studies
        </h1>
        <p className="ds-lede" style={{ maxWidth: '52ch', marginBottom: 'var(--space-xl)' }}>
          Selected projects across enterprise banking, design systems, mobile UX, editorial, and
          platform design.
        </p>
      </MotionReveal>

      <ProductCommandCenter />

      <div className="ds-grid ds-grid--auto">
        {PRODUCT_WORK.map((w, index) => (
          <MotionReveal
            key={w.id}
            as="article"
            className="ds-card"
            delay={index * 60}
            variant="scale"
          >
            <div className="ds-card__media">
              {w.img ? <img src={w.img} alt={w.alt ?? ''} loading="lazy" /> : <span>{w.type}</span>}
            </div>
            <div className="ds-card__body">
              <p className="ds-card__meta">
                {w.client} · {w.year}
              </p>
              <h2 className="ds-card__title">
                <Link className="ds-stretch" href={w.href}>
                  {w.title}
                </Link>
              </h2>
              <p className="ds-card__excerpt">{w.description}</p>
              <div className="ds-card__footer">
                {w.tags.slice(0, 3).map((t) => (
                  <span key={t} className="ds-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </MotionReveal>
        ))}
      </div>

      <section className="ds-section--tight">
        <div className="ds-section-intro">
          <h2 className="ds-section-intro__title">More Design Range</h2>
          <p className="ds-section-intro__desc">
            UI, web, brand, and print explorations from the 2024 design portfolio.
          </p>
        </div>
        <div className="ds-grid ds-grid--3">
          {DESIGN_ARCHIVE.slice(0, 3).map((item, index) => (
            <MotionReveal
              key={item.id}
              as="article"
              className="ds-card"
              delay={index * 70}
              variant="scale"
            >
              <div className="ds-card__media">
                <img src={item.img} alt={item.alt} loading="lazy" />
              </div>
              <div className="ds-card__body">
                <p className="ds-card__meta">
                  {item.category} · {item.year}
                </p>
                <h3 className="ds-card__title">
                  <Link className="ds-stretch" href={`/product-design/archive#${item.id}`}>
                    {item.title}
                  </Link>
                </h3>
                <p className="ds-card__excerpt">{item.description}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
        <div style={{ marginTop: 'var(--space-lg)' }}>
          <Link className="ds-btn ds-btn--ghost" href="/product-design/archive">
            Browse archive
          </Link>
        </div>
      </section>
    </div>
  );
}
