import React from 'react';
import Link from 'next/link';
import { SECTIONS } from '@/lib/site-nav';

export default function NotFound() {
  return (
    <div className="ds-container ds-section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <p className="ds-eyebrow">404</p>
      <h1 style={{ fontSize: 'var(--step-4)', margin: 'var(--space-sm) 0' }}>This page slipped the signal.</h1>
      <p className="ds-lede" style={{ maxWidth: '46ch', marginBottom: 'var(--space-lg)' }}>
        The page you’re looking for doesn’t exist — or has moved to one of the three realms.
      </p>
      <div className="ds-cta__actions">
        <Link href="/" className="ds-btn ds-btn--primary">Back to the portal</Link>
        {SECTIONS.map((s) => (
          <Link key={s.id} href={s.href} className="ds-btn ds-btn--ghost">{s.label}</Link>
        ))}
      </div>
    </div>
  );
}
