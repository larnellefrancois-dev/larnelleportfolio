'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { sectionFromPath, realmFromSection } from '@/lib/site-nav';
import Header from './Header';
import MobileMenu from './MobileMenu';
import RealmMotionBackdrop from '@/components/motion/RealmMotionBackdrop';
import SoundProvider from '@/sound/SoundProvider';
import HUDLayer from '@/components/hud/HUDLayer';
import BootSequence from '@/components/hud/BootSequence';
import useQualityTier from '@/engine/useQualityTier';
import { useGameStore } from '@/state/gameStore';
import { useEngineStore } from '@/state/engineStore';

const Canvas3DRoot = dynamic(() => import('@/engine/Canvas3DRoot'), { ssr: false });

/**
 * The single global layout shell. Mounted once in the root layout so EVERY
 * route inherits the same header, persistent section switcher, sub-nav,
 * mobile menu, and footer — no page can opt into a different shell.
 *
 * Theme variant is applied by writing data-realm onto <html> from the
 * current route. The portal home ('/') renders bare (full-bleed gateway).
 *
 * The Archive Engine (persistent WebGL canvas + HUD + sound) mounts here
 * too: the canvas only on capable devices (tier >= 1) and only after the
 * main thread is idle, so first paint is unaffected. At tier 0 the original
 * CSS star/motion backdrops carry the experience unchanged.
 */
export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';
  const active = sectionFromPath(pathname);
  const realm = realmFromSection(active);
  const isPortal =
    pathname === '/' || pathname.startsWith('/portal') || pathname.startsWith('/homepage');
  const [menuOpen, setMenuOpen] = useState(false);

  const tier = useQualityTier();
  const [engineReady, setEngineReady] = useState(false);
  const recordRealmVisit = useGameStore((s) => s.recordRealmVisit);

  useEffect(() => {
    document.documentElement.setAttribute('data-realm', realm);
  }, [realm]);

  // Progression: entering a realm counts toward the Triune Key, and opening
  // a case study counts toward Systems Analyst.
  useEffect(() => {
    recordRealmVisit(realm);
  }, [realm, recordRealmVisit]);

  useEffect(() => {
    const match = pathname.match(/^\/case-studies\/([^/]+)/);
    if (match) useGameStore.getState().recordCaseStudyOpened(match[1]);
  }, [pathname]);

  // Defer the WebGL canvas until the browser is idle.
  useEffect(() => {
    if (!tier) return;
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(() => setEngineReady(true), { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = window.setTimeout(() => setEngineReady(true), 900);
    return () => window.clearTimeout(timer);
  }, [tier]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      document.documentElement.style.setProperty('--mouse-x', x.toFixed(4));
      document.documentElement.style.setProperty('--mouse-y', y.toFixed(4));
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  // Feed normalized scroll position to the 3D scenes (rAF-throttled).
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        useEngineStore.getState().setScrollOffset(max > 0 ? window.scrollY / max : 0);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const show3D = engineReady && (tier ?? 0) > 0;

  return (
    <div
      className="shell"
      data-realm={realm}
      data-chrome={isPortal ? 'bare' : 'full'}
      data-engine={show3D ? '3d' : 'css'}
    >
      <a className="ds-skip-link" href="#main">
        Skip to content
      </a>

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

      {!isPortal && <RealmMotionBackdrop realm={realm} density="max" />}

      {show3D && tier !== null && <Canvas3DRoot realm={realm} isPortal={isPortal} tier={tier} />}

      <SoundProvider realm={realm} />

      {!isPortal && (
        <>
          <Header
            active={active}
            pathname={pathname}
            menuOpen={menuOpen}
            onOpenMenu={() => setMenuOpen(true)}
          />
          <MobileMenu
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            pathname={pathname}
            active={active}
          />
        </>
      )}

      <main id="main" className="shell__main">
        {children}
      </main>

      <HUDLayer realm={realm} bare={isPortal} />
      {isPortal && <BootSequence />}
    </div>
  );
}
