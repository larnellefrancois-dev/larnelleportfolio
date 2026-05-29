'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Realm = 'art' | 'product' | 'literature';

interface GlobalHeaderProps {
  realm: Realm;
}

const realmConfig = {
  art: {
    brand: 'L.F. Chambers',
    headerClass: 'realm-header-art',
    brandColor: 'var(--gold-bright)',
    subtitleColor: 'rgba(212, 178, 113, 0.5)',
    subtitle: 'Art',
    textColor: 'rgba(232, 208, 153, 0.7)',
    activeTextColor: 'var(--gold-bright)',
    hamburgerColor: 'var(--gold-bright)',
  },
  product: {
    brand: 'Larnelle Chambers',
    headerClass: 'realm-header-product',
    brandColor: '#e8e8e8',
    subtitleColor: 'rgba(125, 167, 217, 0.5)',
    subtitle: 'Product Design',
    textColor: 'rgba(200, 215, 230, 0.7)',
    activeTextColor: 'var(--cyan-bright)',
    hamburgerColor: '#e8e8e8',
  },
  literature: {
    brand: 'L.F. Chambers',
    headerClass: 'realm-header-literature',
    brandColor: 'var(--gold-bright)',
    subtitleColor: 'rgba(179, 36, 53, 0.6)',
    subtitle: 'Literature',
    textColor: 'rgba(212, 197, 181, 0.7)',
    activeTextColor: '#e05a6a',
    hamburgerColor: 'var(--gold-bright)',
  },
};

const realmLinks = {
  art: [
    { label: 'Gallery', href: '/art/gallery' },
    { label: 'Projects', href: '/art/projects' },
    { label: 'Commissions', href: '/art/commissions' },
  ],
  product: [
    { label: 'Case Studies', href: '/product-design/case-studies' },
    { label: 'Design Systems', href: '/product-design/design-systems' },
    { label: 'Writing', href: '/product-design/writing' },
    { label: 'About', href: '/product-design/about' },
  ],
  literature: [
    { label: 'The Pale Interval', href: '/literature/the-pale-interval' },
    { label: 'Excerpts', href: '/literature/excerpts' },
    { label: 'Worldbuilding', href: '/literature/worldbuilding' },
    { label: 'Author', href: '/literature/author' },
  ],
};

export default function GlobalHeader({ realm }: GlobalHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const config = realmConfig[realm];
  const links = realmLinks[realm];

  return (
    <>
      <header
        data-realm={realm}
        className={`realm-header ${config.headerClass}`}
        style={{ padding: '0 24px' }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
            gap: '24px',
          }}
        >
          {/* Brand */}
          <Link
            href="/portal"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.85rem',
              letterSpacing: '0.25em',
              color: config.brandColor,
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontWeight: 400,
              flexShrink: 0,
            }}
          >
            {config.brand}
          </Link>

          {/* Realm Switcher — Desktop */}
          <nav aria-label="Realm switcher" className="hidden md:flex">
            <div className="realm-switcher">
              <Link
                href="/art"
                className={`realm-tab realm-tab-art${realm === 'art' ? ' active' : ''}`}
              >
                Art
              </Link>
              <Link
                href="/product-design"
                className={`realm-tab realm-tab-product${realm === 'product' ? ' active' : ''}`}
              >
                Product Design
              </Link>
              <Link
                href="/literature"
                className={`realm-tab realm-tab-literature${realm === 'literature' ? ' active' : ''}`}
              >
                Literature
              </Link>
            </div>
          </nav>

          {/* Section Nav — Desktop */}
          <nav aria-label="Section navigation" className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-mono-portal)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: pathname === link.href ? config.activeTextColor : config.textColor,
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  borderBottom: pathname === link.href ? `1px solid ${config.activeTextColor}` : '1px solid transparent',
                  paddingBottom: '2px',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <a
              href="mailto:chambersuiux@gmail.com"
              style={{
                fontFamily: 'var(--font-mono-portal)',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: config.textColor,
                textDecoration: 'none',
                padding: '6px 14px',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '100px',
                transition: 'all 0.2s ease',
              }}
              className="hidden sm:inline-flex items-center"
            >
              Contact
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                minWidth: '44px',
                minHeight: '44px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="lg:hidden"
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <line x1="3" y1="3" x2="17" y2="17" stroke={config.hamburgerColor} strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="17" y1="3" x2="3" y2="17" stroke={config.hamburgerColor} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <>
                  <span style={{ display: 'block', width: '20px', height: '1.5px', backgroundColor: config.hamburgerColor }} />
                  <span style={{ display: 'block', width: '20px', height: '1.5px', backgroundColor: config.hamburgerColor }} />
                  <span style={{ display: 'block', width: '20px', height: '1.5px', backgroundColor: config.hamburgerColor }} />
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            backgroundColor: realm === 'product' ? '#0a0f18' : '#080508',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            padding: '40px 24px',
          }}
          onClick={() => setMobileOpen(false)}
        >
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="3" y1="3" x2="17" y2="17" stroke={config.hamburgerColor} strokeWidth="1.5" strokeLinecap="round" />
              <line x1="17" y1="3" x2="3" y2="17" stroke={config.hamburgerColor} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Realm Switcher Mobile */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
            {(['art', 'product', 'literature'] as Realm[]).map((r) => (
              <Link
                key={r}
                href={r === 'product' ? '/product-design' : `/${r}`}
                style={{
                  fontFamily: 'var(--font-mono-portal)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: realm === r ? config.activeTextColor : 'rgba(255,255,255,0.4)',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  border: `1px solid ${realm === r ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: '100px',
                }}
                onClick={() => setMobileOpen(false)}
              >
                {r === 'product' ? 'Product' : r.charAt(0).toUpperCase() + r.slice(1)}
              </Link>
            ))}
          </div>

          {/* Section Links */}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: config.brandColor,
                textDecoration: 'none',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="mailto:chambersuiux@gmail.com"
            style={{
              fontFamily: 'var(--font-mono-portal)',
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: config.textColor,
              textDecoration: 'none',
              marginTop: '16px',
            }}
          >
            chambersuiux@gmail.com
          </a>
        </div>
      )}
    </>
  );
}
