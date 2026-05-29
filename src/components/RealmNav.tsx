'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import RealmSwitcher from './RealmSwitcher';

interface RealmNavProps {
  brandName?: string;
}

export default function RealmNav({ brandName = 'L.F. Chambers' }: RealmNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 40px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: scrolled
          ? 'rgba(5, 6, 15, 0.92)'
          : 'rgba(5, 6, 15, 0.7)',
        borderBottom: scrolled
          ? '1px solid rgba(212, 178, 113, 0.1)'
          : '1px solid transparent',
        backdropFilter: 'blur(12px)',
        transition: 'background-color 0.4s ease, border-color 0.4s ease',
      }}
    >
      {/* Brand */}
      <Link
        href="/"
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '0.75rem',
          letterSpacing: '0.3em',
          color: 'rgba(232, 208, 153, 0.7)',
          textDecoration: 'none',
          textTransform: 'uppercase',
          fontWeight: 400,
          transition: 'color 0.3s ease',
          flexShrink: 0,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(247, 230, 183, 1)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(232, 208, 153, 0.7)')}
      >
        {brandName}
      </Link>

      {/* Realm Switcher */}
      <RealmSwitcher />
    </header>
  );
}
