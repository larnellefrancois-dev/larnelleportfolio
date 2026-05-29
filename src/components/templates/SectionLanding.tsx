import React from 'react';
import Link from 'next/link';

export interface LandingFeature {
  title: string;
  meta?: string;
  excerpt: string;
  href: string;
  img?: string;
  alt?: string;
  tags?: string[];
}

export interface SectionLandingProps {
  eyebrow: string;
  title: string;
  lede: string;
  /** Primary + secondary hero actions. */
  actions?: { label: string; href: string; primary?: boolean }[];
  /** Optional intro for the featured grid. */
  featuredTitle?: string;
  featuredDesc?: string;
  features: LandingFeature[];
  /** Optional closing CTA. */
  cta?: { title: string; desc?: string; actions: { label: string; href: string; primary?: boolean }[] };
  /** Decorative hero motif (themed per realm by caller). */
  motif?: React.ReactNode;
}

/** Shared landing template for every vertical's overview page. Same
    architecture (hero → featured grid → CTA), themed via tokens. */
export default function SectionLanding({
  eyebrow, title, lede, actions, featuredTitle, featuredDesc, features, cta, motif,
}: SectionLandingProps) {
  return (
    <>
      <section className="ds-hero">
        {motif && <div className="ds-hero__motif" aria-hidden="true">{motif}</div>}
        <div className="ds-container">
          <p className="ds-eyebrow">{eyebrow}</p>
          <h1 className="ds-hero__title">{title}</h1>
          <p className="ds-lede ds-hero__lede">{lede}</p>
          {actions && actions.length > 0 && (
            <div className="ds-hero__actions">
              {actions.map((a) => (
                <Link key={a.href} href={a.href} className={`ds-btn ${a.primary ? 'ds-btn--primary' : 'ds-btn--ghost'}`}>
                  {a.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="ds-section--tight">
        <div className="ds-container">
          {(featuredTitle || featuredDesc) && (
            <div className="ds-section-intro">
              {featuredTitle && <h2 className="ds-section-intro__title">{featuredTitle}</h2>}
              {featuredDesc && <p className="ds-section-intro__desc">{featuredDesc}</p>}
            </div>
          )}
          <div className="ds-grid ds-grid--auto">
            {features.map((f) => (
              <article key={f.href} className="ds-card">
                <div className="ds-card__media">
                  {f.img ? <img src={f.img} alt={f.alt ?? ''} loading="lazy" /> : <span>{f.meta ?? title}</span>}
                </div>
                <div className="ds-card__body">
                  {f.meta && <p className="ds-card__meta">{f.meta}</p>}
                  <h3 className="ds-card__title">
                    <Link className="ds-stretch" href={f.href}>{f.title}</Link>
                  </h3>
                  <p className="ds-card__excerpt">{f.excerpt}</p>
                  {f.tags && f.tags.length > 0 && (
                    <div className="ds-card__footer">
                      {f.tags.slice(0, 4).map((t) => <span key={t} className="ds-tag">{t}</span>)}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {cta && (
        <section className="ds-section--tight">
          <div className="ds-cta__inner">
            <h2 className="ds-cta__title">{cta.title}</h2>
            {cta.desc && <p className="ds-cta__desc">{cta.desc}</p>}
            <div className="ds-cta__actions">
              {cta.actions.map((a) => (
                <Link key={a.href} href={a.href} className={`ds-btn ${a.primary ? 'ds-btn--primary' : 'ds-btn--ghost'}`}>
                  {a.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
