import React from 'react';
import Link from 'next/link';

type Realm = 'art' | 'product' | 'literature';

interface RealmFooterProps {
  realm: Realm;
}

const realmFooterConfig = {
  art: {
    bg: '#0d0804',
    borderColor: 'rgba(212, 178, 113, 0.1)',
    textColor: 'rgba(212, 178, 113, 0.4)',
    linkColor: 'rgba(212, 178, 113, 0.6)',
    linkHover: 'var(--gold-bright)',
    brand: 'L.F. Chambers',
  },
  product: {
    bg: '#f8f8f6',
    borderColor: 'rgba(0,0,0,0.08)',
    textColor: 'rgba(0,0,0,0.35)',
    linkColor: 'rgba(0,0,0,0.5)',
    linkHover: '#111111',
    brand: 'Larnelle Chambers',
  },
  literature: {
    bg: '#080508',
    borderColor: 'rgba(138, 28, 42, 0.15)',
    textColor: 'rgba(212, 197, 181, 0.35)',
    linkColor: 'rgba(212, 197, 181, 0.5)',
    linkHover: 'var(--gold-bright)',
    brand: 'L.F. Chambers',
  },
};

export default function RealmFooter({ realm }: RealmFooterProps) {
  const config = realmFooterConfig[realm];

  return (
    <footer
      style={{
        backgroundColor: config.bg,
        borderTop: `1px solid ${config.borderColor}`,
        padding: '48px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '32px',
        }}
      >
        {/* Brand */}
        <div>
          <Link
            href="/portal"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.9rem',
              letterSpacing: '0.3em',
              color: config.linkColor,
              textDecoration: 'none',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            {config.brand}
          </Link>
          <p
            style={{
              fontFamily: 'var(--font-mono-portal)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: config.textColor,
              textTransform: 'uppercase',
            }}
          >
            Image · Interface · Story
          </p>
        </div>

        {/* Nav */}
        <nav aria-label="Footer navigation" style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {[
            { label: 'Art', href: '/art' },
            { label: 'Product Design', href: '/product-design' },
            { label: 'Literature', href: '/literature' },
            { label: 'Contact', href: 'mailto:chambersuiux@gmail.com' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'var(--font-mono-portal)',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: config.linkColor,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p
          style={{
            fontFamily: 'var(--font-mono-portal)',
            fontSize: '0.55rem',
            letterSpacing: '0.15em',
            color: config.textColor,
            textTransform: 'uppercase',
          }}
        >
          © 2026 {config.brand}
        </p>
      </div>
    </footer>
  );
}
