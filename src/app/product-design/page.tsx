import type { Metadata } from 'next';
import React from 'react';
import CinematicRouteLink from '@/components/motion/CinematicRouteLink';
import { MotionReveal } from '@/components/motion';
import { DESIGN_ARCHIVE, PRODUCT_WORK } from '@/data/product-content';

export const metadata: Metadata = {
  title: 'Larnelle Chambers — Product Design Portfolio',
  description:
    'Product design portfolio of Larnelle Chambers — case studies, design systems, and interfaces across enterprise banking, editorial, and platform work.',
  alternates: { canonical: 'https://larnelle.me/product-design' },
};

function ProductSystemMotif() {
  return (
    <div className="product-system-motif">
      <div className="product-system-motif__plane" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            style={
              {
                '--i': index,
                '--x': `${(index % 6) * 16 + 5}%`,
                '--y': `${Math.floor(index / 6) * 24 + 8}%`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
      <div className="product-system-motif__scanner" aria-hidden="true" />
      <div
        className="product-system-motif__node product-system-motif__node--a"
        aria-hidden="true"
      />
      <div
        className="product-system-motif__node product-system-motif__node--b"
        aria-hidden="true"
      />
      <div
        className="product-system-motif__node product-system-motif__node--c"
        aria-hidden="true"
      />
    </div>
  );
}

export default function ProductDesignPage() {
  const featured = PRODUCT_WORK.filter((w) => w.featured);
  return (
    <main className="product-cinema">
      <section
        className="product-cinema__panel product-cinema__hero"
        aria-labelledby="systems-title"
      >
        <ProductSystemMotif />
        <div className="product-cinema__names" aria-hidden="true">
          <span>Product</span>
          <span>Architect</span>
        </div>
        <MotionReveal className="product-cinema__hero-copy" variant="clip">
          <p className="product-cinema__kicker">SYSTEMA // PRODUCT DESIGN</p>
          <h1 id="systems-title">Intent.</h1>
          <p>
            Case studies, design systems, typography, interfaces, and visual systems for teams that
            need clarity under pressure.
          </p>
          <div className="product-cinema__actions">
            <CinematicRouteLink
              className="ds-btn ds-btn--primary"
              href="/product-design/case-studies"
              kind="tile"
              title="Opening Case Studies"
              subtitle="Systems / selected work"
            >
              View case studies
            </CinematicRouteLink>
            <CinematicRouteLink
              className="ds-btn ds-btn--ghost"
              href="/product-design/archive"
              kind="tile"
              title="Opening Systems Archive"
              subtitle="Product and interface directory"
            >
              Portfolio archive
            </CinematicRouteLink>
          </div>
        </MotionReveal>
        <div className="product-cinema__scroll" aria-hidden="true">
          <span>Scroll</span>
          <i />
        </div>
      </section>

      <section
        className="product-cinema__panel product-cinema__slice"
        aria-label="Design discipline"
      >
        <div className="product-cinema__slice-window">
          <ProductSystemMotif />
          <div className="product-cinema__slice-copy">
            <p className="product-cinema__kicker">INITIATIVE 02 // THE DISCIPLINE</p>
            <h2>Surface is a signal.</h2>
            <p>
              The work is product logic first: exact hierarchy, believable interaction states,
              accessibility, and systems that survive real teams.
            </p>
          </div>
        </div>
      </section>

      <section className="product-cinema__panel product-cinema__manifesto">
        <MotionReveal className="product-cinema__manifesto-copy" variant="clip">
          <p className="product-cinema__kicker">INITIATIVE 03 // THE CRAFT</p>
          <h2>
            Uncompromising
            <br />
            systems.
          </h2>
          <p>
            I build interfaces that demand attention without wasting it. Every pixel serves the
            narrative, every state tells the user where they are, and every flow makes the system
            easier to trust.
          </p>
        </MotionReveal>
      </section>

      <section className="product-cinema__panel product-cinema__work" id="work">
        <div className="product-cinema__work-head">
          <p className="product-cinema__kicker">INITIATIVE 04 // THE RESULT</p>
          <h2>Case files 2023-2026</h2>
          <CinematicRouteLink
            className="ds-btn ds-btn--ghost"
            href="/product-design/archive"
            kind="tile"
            title="Opening Systems Archive"
            subtitle="Product and interface directory"
          >
            Browse full archive
          </CinematicRouteLink>
        </div>

        <div className="product-cinema__billing">
          {featured.slice(0, 4).map((work, index) => (
            <MotionReveal
              key={work.href}
              as="article"
              className="product-cinema__case-row"
              delay={index * 80}
              variant="clip"
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>
                <CinematicRouteLink
                  href={work.href}
                  kind="tile"
                  title={`Opening ${work.title}`}
                  subtitle={`${work.client} / ${work.year}`}
                >
                  {work.title}
                </CinematicRouteLink>
              </h3>
              <p>{work.description}</p>
              <em>{work.tags.slice(0, 3).join(' / ')}</em>
            </MotionReveal>
          ))}

          {DESIGN_ARCHIVE.slice(0, 3).map((item, index) => (
            <MotionReveal
              key={item.id}
              as="article"
              className="product-cinema__case-row product-cinema__case-row--archive"
              delay={(index + 4) * 80}
              variant="clip"
            >
              <span>{item.year}</span>
              <h3>
                <CinematicRouteLink
                  href={`/product-design/archive#${item.id}`}
                  kind="tile"
                  title="Indexing System"
                  subtitle={`${item.category} / ${item.year}`}
                >
                  {item.title}
                </CinematicRouteLink>
              </h3>
              <p>{item.description}</p>
              <em>{item.tags.slice(0, 3).join(' / ')}</em>
            </MotionReveal>
          ))}
        </div>

        <div className="product-cinema__closing">
          <span>SYS.OP.00492.X</span>
          <CinematicRouteLink
            className="ds-btn ds-btn--primary"
            href="/contact"
            kind="tile"
            title="Opening Contact"
            subtitle="Transmission channel"
          >
            Start a conversation
          </CinematicRouteLink>
        </div>
      </section>
    </main>
  );
}
