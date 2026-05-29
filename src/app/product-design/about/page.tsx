import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/site-nav';

export const metadata: Metadata = {
  title: 'About — Larnelle Chambers',
  description: 'Larnelle Chambers is a product and systems designer with 7+ years of experience across enterprise products, banking systems, and design infrastructure.',
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

const RESUME_URL = 'https://drive.google.com/file/d/1H_-6YX6X2yfuDNX_TOukg5FmKpg9DFI5/view?usp=drive_open';

export default function ProductAboutPage() {
  return (
    <div className="ds-container ds-section">
      <div className="ds-breadcrumbs">
        <Link href="/product-design">Product Design</Link>
        <span aria-hidden="true">/</span>
        <span style={{ color: 'var(--text-muted)' }}>About</span>
      </div>

      <div className="ds-grid ds-grid--2" style={{ alignItems: 'start', gap: 'var(--space-2xl)' }}>
        <div>
          <p className="ds-eyebrow">Systema · About</p>
          <h1 style={{ fontSize: 'var(--step-3)', margin: 'var(--space-2xs) 0 var(--space-md)' }}>Larnelle Chambers</h1>
          <p style={{ fontSize: 'var(--step-1)', color: 'var(--text)', lineHeight: 1.7, marginBottom: 'var(--space-sm)' }}>
            Product and systems designer with 7+ years of experience designing enterprise products, banking systems, and design infrastructure — working at the intersection of user experience, systems thinking, and product strategy.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 'var(--space-lg)' }}>
            Work spans UX research, interface design, design-systems architecture, and design leadership — products used by millions across banking, fintech, and enterprise software.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
            <a className="ds-btn ds-btn--primary" href={`mailto:${CONTACT_EMAIL}`}>Get in touch</a>
            <a className="ds-btn ds-btn--ghost" href={RESUME_URL} target="_blank" rel="noopener noreferrer">View résumé →</a>
          </div>
        </div>

        <div>
          <h2 className="ds-eyebrow" style={{ marginBottom: 'var(--space-sm)' }}>Expertise</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {EXPERTISE.map((skill) => (
              <li key={skill} style={{ padding: 'var(--space-2xs) 0', borderBottom: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
