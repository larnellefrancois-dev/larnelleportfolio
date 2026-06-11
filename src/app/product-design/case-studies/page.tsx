import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ProductCommandCenter } from '@/components/creative/CreativeExperiences';
import MotionReveal from '@/components/motion/MotionReveal';
import CaseStudyStatusChip from '@/components/product/CaseStudyStatusChip';
import { SceneFrame, SceneScroller } from '@/components/cinematic/CinematicPrimitives';
import { DESIGN_ARCHIVE, PRODUCT_WORK } from '@/data/product-content';

export const metadata: Metadata = {
  title: 'Case Studies — Larnelle Chambers',
  description:
    'Selected product design case studies spanning enterprise banking, design systems, mobile UX, editorial, and platform design.',
  alternates: { canonical: 'https://larnelle.me/product-design/case-studies' },
};

export default function ProductCaseStudiesPage() {
  return (
    <SceneScroller>
      <SceneFrame
        tone="product"
        eyebrow="Systema // Case File Index"
        title="Every Interface Is a Case File"
        lede="Selected projects across enterprise banking, design systems, mobile UX, editorial, and platform design. Open a file to mark it analyzed."
        meta={[
          { label: 'Files', value: String(PRODUCT_WORK.length) },
          { label: 'Sector', value: 'Fintech / Media' },
          { label: 'Wing', value: 'M·II' },
        ]}
        visual={
          <div className="dossier-viewer__portrait" style={{ minHeight: 380 }}>
            <img
              src="/assets/images/portfolio-shipme-ui.jpg"
              alt="ShipMe mobile interface screens from the product design portfolio."
            />
            <div className="dossier-viewer__overlay" aria-hidden="true">
              <span>SYSTEMA</span>
              <span>CASE</span>
              <span>INDEX</span>
            </div>
          </div>
        }
      />

      <section className="scene-frame scene-frame--product" aria-label="Command center">
        <div
          style={{ width: 'min(1240px, 100%)', margin: '0 auto', position: 'relative', zIndex: 1 }}
        >
          <p className="scene-frame__eyebrow">Command center // live telemetry</p>
          <ProductCommandCenter />
        </div>
      </section>

      <section className="scene-frame scene-frame--product" aria-label="Case files">
        <div
          style={{ width: 'min(1240px, 100%)', margin: '0 auto', position: 'relative', zIndex: 1 }}
        >
          <p className="scene-frame__eyebrow">Case files // select to analyze</p>
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
                  {w.img ? (
                    <img src={w.img} alt={w.alt ?? ''} loading="lazy" />
                  ) : (
                    <span>{w.type}</span>
                  )}
                </div>
                <div className="ds-card__body">
                  <p className="ds-card__meta">
                    {w.client} · {w.year} <CaseStudyStatusChip href={w.href} />
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
        </div>
      </section>

      <section className="scene-frame scene-frame--product" aria-label="Design archive range">
        <div
          style={{ width: 'min(1240px, 100%)', margin: '0 auto', position: 'relative', zIndex: 1 }}
        >
          <p className="scene-frame__eyebrow">Auxiliary records // 2024 design archive</p>
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
          <div style={{ marginTop: 'var(--space-md)' }}>
            <Link href="/product-design/archive" className="ds-btn ds-btn--ghost">
              Open the full archive
            </Link>
          </div>
        </div>
      </section>
    </SceneScroller>
  );
}
