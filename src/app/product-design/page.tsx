import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { MotionReveal } from '@/components/motion';
import SectionLanding from '@/components/templates/SectionLanding';
import { DESIGN_ARCHIVE, PRODUCT_WORK } from '@/data/product-content';
import { motionAssets } from '@/data/motion-assets';

export const metadata: Metadata = {
  title: 'Larnelle Chambers — Product Design Portfolio',
  description:
    'Product design portfolio of Larnelle Chambers — case studies, design systems, and interfaces across enterprise banking, editorial, and platform work.',
  alternates: { canonical: 'https://larnelle.me/product-design' },
};

export default function ProductDesignPage() {
  const featured = PRODUCT_WORK.filter((w) => w.featured);
  return (
    <>
      <SectionLanding
        eyebrow="Systema · Product Design"
        title="Designing clear, credible products at scale."
        lede="Case studies, design systems, typography, interfaces, and visual systems. I help teams ship structured, accessible, trustworthy products — most recently across enterprise banking, design systems, and type design."
        actions={[
          { label: 'View case studies', href: '/product-design/case-studies', primary: true },
          { label: 'Portfolio archive', href: '/product-design/archive' },
        ]}
        featuredTitle="Featured work"
        featuredDesc="Selected projects across banking UX, design systems, typography, and platform design."
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
        motionAsset={motionAssets.productSystem}
      />

      <section className="ds-section--tight">
        <div className="ds-container">
          <MotionReveal className="ds-section-intro">
            <h2 className="ds-section-intro__title">Portfolio Archive</h2>
            <p className="ds-section-intro__desc">
              Earlier UI, web, brand, tourism, logistics, rideshare, and print explorations from the
              2024 portfolio PDF.
            </p>
          </MotionReveal>
          <div className="ds-grid ds-grid--3">
            {DESIGN_ARCHIVE.slice(0, 3).map((item, index) => (
              <MotionReveal
                key={item.id}
                as="article"
                className="ds-card"
                delay={index * 80}
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
                  <div className="ds-card__footer">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="ds-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
          <div style={{ marginTop: 'var(--space-lg)' }}>
            <Link className="ds-btn ds-btn--ghost" href="/product-design/archive">
              Browse full design archive
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
