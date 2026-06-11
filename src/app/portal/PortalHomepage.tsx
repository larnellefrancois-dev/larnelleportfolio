'use client';

import React from 'react';
import CinematicRouteLink from '@/components/motion/CinematicRouteLink';
import { useEngineStore } from '@/state/engineStore';
import { audioEngine } from '@/sound/AudioEngine';
import type { RealmId } from '@/data/discovery-map';

const REALM_BY_TYPE: Record<string, RealmId> = {
  literature: 'literature',
  art: 'art',
  systems: 'product',
};

const scenes = [
  {
    type: 'prologue',
    numeral: '00',
    title: 'L.F. Chambers',
    subtitle: 'Image, interface, story, and playable archives.',
    href: null,
    cta: 'Scroll to enter',
  },
  {
    type: 'literature',
    numeral: 'I',
    title: 'Literature',
    subtitle: 'The Pale Interval as a living world engine.',
    href: '/literature',
    cta: 'Enter Scriptorium',
  },
  {
    type: 'art',
    numeral: 'II',
    title: 'Visual Arts',
    subtitle: 'Portraits, studies, commissions, and ritual surface.',
    href: '/art',
    cta: 'Open Gallery',
  },
  {
    type: 'systems',
    numeral: 'III',
    title: 'Systems Design',
    subtitle: 'Product interfaces, archives, and operational clarity.',
    href: '/product-design',
    cta: 'Analyze Systems',
  },
];

function ProceduralRealmMedia({ type }: { type: string }) {
  return (
    <div className={`home-journey__media home-journey__media--${type}`} aria-hidden="true">
      <div className="home-journey__field" />
      <div className="home-journey__orb home-journey__orb--a" />
      <div className="home-journey__orb home-journey__orb--b" />
      <div className="home-journey__signal" />
      <div className="home-journey__glyphs">
        {Array.from({ length: 9 }).map((_, index) => (
          <span
            key={index}
            style={
              {
                '--i': index,
                '--x': `${(index % 3) * 22 + 22}vw`,
                '--y': `${Math.floor(index / 3) * 18 + 18}vh`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}

export default function PortalHomepage() {
  const setHubFocus = useEngineStore((s) => s.setHubFocus);

  React.useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      document.documentElement.style.setProperty('--mouse-x', x.toFixed(4));
      document.documentElement.style.setProperty('--mouse-y', y.toFixed(4));
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div className="home-journey">
      <header className="home-journey__header">
        <div className="home-journey__identity">
          <span>Archive</span>
          <b aria-hidden="true">{'//'}</b>
          <span>Portfolio</span>
          <b aria-hidden="true">{'//'}</b>
          <span>2026</span>
        </div>
        <div className="home-journey__nav" aria-label="Realm shortcuts">
          {scenes
            .filter((scene) => scene.href)
            .map((scene) => (
              <a key={scene.type} href={`#${scene.type}`}>
                {scene.title}
              </a>
            ))}
        </div>
      </header>

      <main className="home-journey__scroller" aria-label="Cinematic portfolio journey">
        {scenes.map((scene) => {
          const content = (
            <>
              <ProceduralRealmMedia type={scene.type} />
              <span className="home-journey__line home-journey__line--top" aria-hidden="true" />
              <span className="home-journey__line home-journey__line--bottom" aria-hidden="true" />
              <div className="home-journey__content">
                <span className="home-journey__chapter">{scene.numeral}</span>
                <h1>{scene.title}</h1>
                <p>{scene.subtitle}</p>
                <span className="home-journey__cta">{scene.cta}</span>
              </div>
            </>
          );

          return (
            <section
              key={scene.type}
              id={scene.type}
              className={`home-journey__section home-journey__section--${scene.type}`}
              onPointerEnter={() => {
                if (scene.href) {
                  setHubFocus(REALM_BY_TYPE[scene.type]);
                  audioEngine.play('hover');
                }
              }}
              onPointerLeave={() => setHubFocus(null)}
            >
              {scene.href ? (
                <CinematicRouteLink
                  href={scene.href}
                  kind="realm"
                  className="home-journey__link"
                  title={`Opening ${scene.title}`}
                  subtitle={scene.subtitle}
                  numeral={scene.numeral}
                  indexLabel={scene.type.toUpperCase()}
                >
                  {content}
                </CinematicRouteLink>
              ) : (
                content
              )}
            </section>
          );
        })}
      </main>

      <div className="home-journey__scroll" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </div>
  );
}
