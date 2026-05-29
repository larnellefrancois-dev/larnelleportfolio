'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

interface SiteHeaderProps {
  activePage?: string;
}

const navItems = [
  { label: 'Home', href: '/homepage' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Writing', href: '/writing' },
];

export default function SiteHeader({ activePage }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTap, setActiveTap] = useState<string | null>(null);

  return (
    <>
      <header
        className="flex justify-between items-center pb-10 uppercase"
        style={{ letterSpacing: '0.05em' }}
      >
        {/* Brand */}
        <Link href="/homepage" className="flex items-center gap-2 no-underline" style={{ minHeight: '44px', padding: '4px 0' }}>
          <AppLogo size={28} onClick={() => {}} />
          <div className="flex flex-col">
            <span className="font-medium text-[14px] text-ink-black tracking-brand">
              LARNELLE CHAMBERS
            </span>
            <span className="text-[10px] text-ink-light mt-1">
              PRODUCT &amp; SYSTEMS DESIGN
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 list-none">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`menu-link no-underline text-ink-black text-[11px] px-4 py-2 rounded-full ${activePage === item.label ? 'bg-ink-black text-white border-ink-black' : ''}`}
                style={{
                  ...(activePage === item.label ? { backgroundColor: '#111111', color: '#ffffff', borderColor: '#111111' } : {}),
                  minHeight: '44px',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:chambersuiux@gmail.com"
            className="nav-pill-hover bg-ink-black text-white px-6 rounded-full text-[11px] font-medium no-underline hidden sm:inline-flex items-center"
            style={{ minHeight: '44px' }}
          >
            CONTACT
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex items-center justify-center"
            aria-label="Toggle menu"
            style={{ minHeight: '44px', minWidth: '44px', flexDirection: 'column', gap: '5px', padding: '12px', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <line x1="3" y1="3" x2="17" y2="17" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="17" y1="3" x2="3" y2="17" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <div className="flex flex-col gap-[5px]">
                <span className="block w-5 h-[1.5px] bg-ink-black" />
                <span className="block w-5 h-[1.5px] bg-ink-black" />
                <span className="block w-5 h-[1.5px] bg-ink-black" />
              </div>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Overlay — outside header so fixed positioning covers full viewport */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-8"
          style={{ top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh' }}
          onClick={() => setMobileOpen(false)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 flex items-center justify-center"
            style={{ minHeight: '44px', minWidth: '44px', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="3" y1="3" x2="17" y2="17" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="17" y1="3" x2="3" y2="17" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-ink-black text-xl font-medium uppercase tracking-widest no-underline"
              style={{
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '16px',
                paddingRight: '16px',
                borderRadius: '4px',
                backgroundColor: activeTap === item.label ? 'rgba(0,0,0,0.06)' : 'transparent',
                transition: 'background-color 0.15s ease',
              }}
              onTouchStart={() => setActiveTap(item.label)}
              onTouchEnd={() => setActiveTap(null)}
              onTouchCancel={() => setActiveTap(null)}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/about"
            className="text-ink-black text-xl font-medium uppercase tracking-widest no-underline"
            style={{
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '16px',
              paddingRight: '16px',
              borderRadius: '4px',
              backgroundColor: activeTap === 'about' ? 'rgba(0,0,0,0.06)' : 'transparent',
              transition: 'background-color 0.15s ease',
            }}
            onTouchStart={() => setActiveTap('about')}
            onTouchEnd={() => setActiveTap(null)}
            onTouchCancel={() => setActiveTap(null)}
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <a
            href="mailto:chambersuiux@gmail.com"
            className="bg-ink-black text-white px-8 rounded-full text-sm font-medium no-underline mt-4"
            style={{
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: activeTap === 'contact' ? '#333333' : '#111111',
              transition: 'background-color 0.15s ease',
            }}
            onTouchStart={() => setActiveTap('contact')}
            onTouchEnd={() => setActiveTap(null)}
            onTouchCancel={() => setActiveTap(null)}
            onClick={() => setMobileOpen(false)}
          >
            CONTACT
          </a>
        </div>
      )}
    </>
  );
}