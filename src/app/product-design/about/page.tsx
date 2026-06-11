import type { Metadata } from 'next';
import React from 'react';
import { InteractiveTimeline, MythologyIndex } from '@/components/creative/CreativeExperiences';
import { SceneFrame, SceneScroller } from '@/components/cinematic/CinematicPrimitives';
import { CONTACT_EMAIL } from '@/lib/site-nav';

export const metadata: Metadata = {
  title: 'About — Larnelle Chambers',
  description:
    'Larnelle Chambers is a product and systems designer with 7+ years of experience across enterprise products, banking systems, and design infrastructure.',
  alternates: { canonical: 'https://larnelle.me/product-design/about' },
};

const EXPERTISE = [
  'UX Research & Strategy',
  'Product Design',
  'Design Systems Architecture',
  'Interaction Design',
  'Accessibility & Inclusive Design',
  'Design Leadership',
  'Enterprise & Banking UX',
  'Prototyping & Validation',
];

const RESUME_URL =
  'https://drive.google.com/file/d/1H_-6YX6X2yfuDNX_TOukg5FmKpg9DFI5/view?usp=drive_open';

export default function ProductAboutPage() {
  return (
    <SceneScroller>
      <SceneFrame
        tone="product"
        eyebrow="Systema // Operator Dossier"
        title="Larnelle Chambers"
        lede="Product and systems designer with 7+ years across enterprise products, banking systems, and design infrastructure — working at the intersection of user experience, systems thinking, and product strategy."
        meta={[
          { label: 'Experience', value: '7+ years' },
          { label: 'Reach', value: 'Millions of users' },
          { label: 'Sector', value: 'Banking / Enterprise' },
        ]}
        visual={
          <div>
            <p className="scene-frame__eyebrow">Capability matrix</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {EXPERTISE.map((skill, index) => (
                <li
                  key={skill}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'baseline',
                    padding: '9px 0',
                    borderBottom: '1px solid rgba(125,167,217,0.14)',
                    color: 'rgba(240,230,211,0.72)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.06em',
                  }}
                >
                  <span style={{ color: 'rgba(125,167,217,0.8)', fontSize: '0.55rem' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <p className="ds-prose" style={{ maxWidth: '58ch', color: 'rgba(240,230,211,.6)' }}>
          Work spans UX research, interface design, design-systems architecture, and design
          leadership — products used by millions across banking, fintech, and enterprise software.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
          <a className="ds-btn ds-btn--primary" href={`mailto:${CONTACT_EMAIL}`}>
            Get in touch
          </a>
          <a
            className="ds-btn ds-btn--ghost"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View résumé →
          </a>
        </div>
      </SceneFrame>

      <section className="scene-frame scene-frame--product" aria-label="Mythology and timeline">
        <div
          style={{ width: 'min(1240px, 100%)', margin: '0 auto', position: 'relative', zIndex: 1 }}
        >
          <p className="scene-frame__eyebrow">Mythology // how the three realms connect</p>
          <MythologyIndex />
          <InteractiveTimeline />
        </div>
      </section>
    </SceneScroller>
  );
}
