'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { sectionFromPath, realmFromSection } from '@/lib/site-nav';
import Header from './Header';
import SubNav from './SubNav';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

/**
 * The single global layout shell. Mounted once in the root layout so EVERY
 * route inherits the same header, persistent section switcher, sub-nav,
 * mobile menu, and footer — no page can opt into a different shell.
 *
 * Theme variant is applied by writing data-realm onto <html> from the
 * current route. The portal home ('/') renders bare (full-bleed gateway).
 */
export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';
  const active = sectionFromPath(pathname);
  const realm = realmFromSection(active);
  const isPortal = pathname === '/' || pathname.startsWith('/portal') || pathname.startsWith('/homepage');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-realm', realm);
  }, [realm]);

  // Close the mobile menu whenever the route changes.
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <div className="shell" data-realm={realm} data-chrome={isPortal ? 'bare' : 'full'}>
      <a className="ds-skip-link" href="#main">Skip to content</a>

      {!isPortal && (
        <div className="shell-universe" aria-hidden="true">
          <div className="shell-universe__stars" />
          <div className="shell-universe__astrolabe">
            <div className="shell-universe__ring shell-universe__ring--1" />
            <div className="shell-universe__ring shell-universe__ring--2" />
            <div className="shell-universe__ring shell-universe__ring--3" />
          </div>
        </div>
      )}

      {!isPortal && (
        <>
          <Header active={active} menuOpen={menuOpen} onOpenMenu={() => setMenuOpen(true)} />
          {active !== 'home' && <SubNav active={active} pathname={pathname} />}
          <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} active={active} />
        </>
      )}

      <main id="main" className="shell__main">{children}</main>

      {!isPortal && <Footer active={active} />}
    </div>
  );
}
