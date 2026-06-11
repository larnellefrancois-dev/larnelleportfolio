import React from 'react';
import { MotionReveal } from '@/components/motion';
import CinematicRouteLink from '@/components/motion/CinematicRouteLink';

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
  cta?: {
    title: string;
    desc?: string;
    actions: { label: string; href: string; primary?: boolean }[];
  };
  /** Decorative hero motif (themed per realm by caller). */
  motif?: React.ReactNode;
}

/** Shared landing template for every vertical's overview page. Same
    architecture (hero → featured grid → CTA), themed via tokens. */
export default function SectionLanding({
  eyebrow,
  title,
  lede,
  actions,
  featuredTitle,
  featuredDesc,
  features,
  cta,
  motif,
}: SectionLandingProps) {
  const LinkComponent = ({
    href,
    className,
    children,
  }: {
    href: string;
    className?: string;
    children: React.ReactNode;
  }) =>
    href === '/literature/archive' ? (
      <CinematicRouteLink
        href={href}
        className={className}
        kind="archive"
        title="Accessing Archive"
        subtitle="ICSE / NAIAD recovered record"
        numeral="I"
        indexLabel="VY-0031"
        images={[
          '/assets/images/veyrath-kaen-bloom.png',
          '/assets/hyperframes/archive-rupture.svg',
          '/assets/motion/pale-interval-signal-loop.svg',
          '/assets/images/art/shine-archive.jpg',
        ]}
      >
        {children}
      </CinematicRouteLink>
    ) : (
      <CinematicRouteLink
        href={href}
        className={className}
        kind="tile"
        title={`Opening ${typeof children === 'string' ? children : 'Record'}`}
        subtitle="Portfolio route / transition gate"
      >
        {children}
      </CinematicRouteLink>
    );

  return (
    <>
      <section className="ds-hero ds-hero--stage">
        {motif && (
          <div className="ds-hero__motif" aria-hidden="true">
            {motif}
          </div>
        )}
        <div className="ds-hero__frame" aria-hidden="true">
          <span className="ds-hero__corner ds-hero__corner--tl" />
          <span className="ds-hero__corner ds-hero__corner--tr" />
          <span className="ds-hero__corner ds-hero__corner--bl" />
          <span className="ds-hero__corner ds-hero__corner--br" />
        </div>
        <MotionReveal className="ds-container ds-hero__stage-copy" variant="clip">
          <p className="ds-eyebrow">{eyebrow}</p>
          <h1 className="ds-hero__title">{title}</h1>
          <p className="ds-lede ds-hero__lede">{lede}</p>
          {actions && actions.length > 0 && (
            <div className="ds-hero__actions">
              {actions.map((a) => (
                <LinkComponent
                  key={`${a.href}-${a.label}`}
                  href={a.href}
                  className={`ds-btn ${a.primary ? 'ds-btn--primary' : 'ds-btn--ghost'}`}
                >
                  {a.label}
                </LinkComponent>
              ))}
            </div>
          )}
        </MotionReveal>
        <div className="ds-hero__scrollcue" aria-hidden="true">
          <span>SCROLL</span>
          <i />
        </div>
      </section>

      <section className="ds-section--tight">
        <div className="ds-container">
          {(featuredTitle || featuredDesc) && (
            <MotionReveal className="ds-section-intro">
              {featuredTitle && <h2 className="ds-section-intro__title">{featuredTitle}</h2>}
              {featuredDesc && <p className="ds-section-intro__desc">{featuredDesc}</p>}
            </MotionReveal>
          )}
          <div className="ds-grid ds-grid--auto">
            {features.map((f, index) => (
              <MotionReveal
                key={`${f.href}-${f.title}`}
                as="article"
                className="ds-card"
                delay={index * 70}
                variant="scale"
              >
                <div className="ds-card__media">
                  {f.img ? (
                    <img src={f.img} alt={f.alt ?? ''} loading="lazy" />
                  ) : (
                    <span>{f.meta ?? title}</span>
                  )}
                </div>
                <div className="ds-card__body">
                  {f.meta && <p className="ds-card__meta">{f.meta}</p>}
                  <h3 className="ds-card__title">
                    <LinkComponent className="ds-stretch" href={f.href}>
                      {f.title}
                    </LinkComponent>
                  </h3>
                  <p className="ds-card__excerpt">{f.excerpt}</p>
                  {f.tags && f.tags.length > 0 && (
                    <div className="ds-card__footer">
                      {f.tags.slice(0, 4).map((t) => (
                        <span key={t} className="ds-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {cta && (
        <section className="ds-section--tight">
          <MotionReveal className="ds-cta__inner" variant="clip">
            <h2 className="ds-cta__title">{cta.title}</h2>
            {cta.desc && <p className="ds-cta__desc">{cta.desc}</p>}
            <div className="ds-cta__actions">
              {cta.actions.map((a) => (
                <LinkComponent
                  key={`${a.href}-${a.label}`}
                  href={a.href}
                  className={`ds-btn ${a.primary ? 'ds-btn--primary' : 'ds-btn--ghost'}`}
                >
                  {a.label}
                </LinkComponent>
              ))}
            </div>
          </MotionReveal>
        </section>
      )}
    </>
  );
}
