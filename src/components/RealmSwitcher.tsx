'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface RealmSwitcherProps {
  className?: string;
}

const realms = [
  { id: 'art', label: 'Art', href: '/art', arcane: 'M·I' },
  { id: 'product', label: 'Product Design', href: '/product-design', arcane: 'M·II' },
  { id: 'literature', label: 'Literature', href: '/literature', arcane: 'M·III' },
];

export default function RealmSwitcher({ className = '' }: RealmSwitcherProps) {
  const pathname = usePathname();

  const getActiveRealm = () => {
    if (pathname.startsWith('/art')) return 'art';
    if (pathname.startsWith('/product-design') || pathname.startsWith('/case-studies') || pathname.startsWith('/writing') || pathname.startsWith('/about') || pathname.startsWith('/work')) return 'product';
    if (pathname.startsWith('/literature')) return 'literature';
    return null;
  };

  const activeRealm = getActiveRealm();

  return (
    <nav
      aria-label="Realm navigation"
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0',
        fontFamily: "'Space Mono', monospace",
      }}
    >
      {/* Back to portal */}
      <Link
        href="/"
        aria-label="Return to portal"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.55rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(232, 208, 153, 0.4)',
          textDecoration: 'none',
          marginRight: '24px',
          transition: 'color 0.3s ease',
          paddingRight: '24px',
          borderRight: '1px solid rgba(212, 178, 113, 0.15)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(232, 208, 153, 0.8)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(232, 208, 153, 0.4)')}
      >
        <span style={{ fontSize: '0.8rem', lineHeight: 1 }}>←</span>
        <span>Portal</span>
      </Link>

      {/* Realm tabs */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          backgroundColor: 'rgba(5, 6, 15, 0.6)',
          border: '1px solid rgba(212, 178, 113, 0.12)',
          borderRadius: '3px',
          padding: '3px',
          backdropFilter: 'blur(10px)',
        }}
      >
        {realms.map((realm) => {
          const isActive = activeRealm === realm.id;
          return (
            <Link
              key={realm.id}
              href={realm.href}
              aria-current={isActive ? 'page' : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '2px',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backgroundColor: isActive ? 'rgba(212, 178, 113, 0.12)' : 'transparent',
                color: isActive ? 'rgba(247, 230, 183, 0.95)' : 'rgba(212, 178, 113, 0.45)',
                borderBottom: isActive ? '1px solid rgba(212, 178, 113, 0.4)' : '1px solid transparent',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = 'rgba(232, 208, 153, 0.8)';
                  e.currentTarget.style.backgroundColor = 'rgba(212, 178, 113, 0.06)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = 'rgba(212, 178, 113, 0.45)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span
                style={{
                  fontSize: '0.45rem',
                  opacity: 0.6,
                  display: 'none',
                }}
                aria-hidden="true"
              >
                {realm.arcane}
              </span>
              {realm.label}
            </Link>
          );
        })}
      </div>

      {/* Contact link */}
      <Link
        href="/contact"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.55rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(212, 178, 113, 0.35)',
          textDecoration: 'none',
          marginLeft: '20px',
          paddingLeft: '20px',
          borderLeft: '1px solid rgba(212, 178, 113, 0.12)',
          transition: 'color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(212, 178, 113, 0.7)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(212, 178, 113, 0.35)')}
      >
        Contact
      </Link>
    </nav>
  );
}
