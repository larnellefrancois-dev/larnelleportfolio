'use client';

import React from 'react';
import CinematicRouteLink from '@/components/motion/CinematicRouteLink';

const realms = [
  {
    type: 'lit',
    href: '/literature',
    numeral: 'I',
    title: 'Literature',
    subtitle: 'Fiction & Worldbuilding',
    image: '/assets/images/veyrath-kaen-bloom.png',
    alt: 'Pale Interval Veyrath bloom artwork with blue mineral light.',
    metaLeft: ['Vol. 01 — Narrative', 'The Pale Interval'],
    metaRight: ['Index: LT-892', 'Enter Chapter'],
    transitionTitle: 'Opening Literature',
    transitionSubtitle: 'Scriptorium / fiction and worldbuilding',
    flashImages: [
      '/assets/images/veyrath-kaen-bloom.png',
      '/assets/motion/pale-interval-signal-loop.svg',
      '/assets/hyperframes/veyrath-signal.svg',
      '/assets/images/art/shine-archive.jpg',
    ],
  },
  {
    type: 'art',
    href: '/art',
    numeral: 'II',
    title: 'Visual Arts',
    subtitle: 'Canvas & Charcoal',
    image: '/assets/images/art/nocturne-bloom.jpg',
    alt: 'Black, white, and gold mixed-media portrait surrounded by flowers and wings.',
    metaLeft: ['Exhibition — 02', 'Gallery Space'],
    metaRight: ['Index: VA-414', 'View Canvas'],
    transitionTitle: 'Opening Visual Arts',
    transitionSubtitle: 'Visio / canvas and charcoal',
    flashImages: [
      '/assets/images/art/nocturne-bloom.jpg',
      '/assets/images/art/green-butterfly-collar.jpg',
      '/assets/images/art/shine-archive.jpg',
      '/assets/images/art/crown-in-coral.jpg',
    ],
  },
  {
    type: 'design',
    href: '/product-design',
    numeral: 'III',
    title: 'Systems',
    subtitle: 'Product & Interface',
    image: '/assets/images/portfolio-shipme-ui.jpg',
    alt: 'ShipMe mobile interface screens from the product design portfolio.',
    metaLeft: ['Structure — 03', 'Logic & Form'],
    metaRight: ['Index: PD-771', 'Analyze Logic'],
    transitionTitle: 'Opening Systems',
    transitionSubtitle: 'Systema / product and interface',
    flashImages: [
      '/assets/images/portfolio-shipme-ui.jpg',
      '/assets/images/Personal-1775589530525.png',
      '/assets/images/portfolio-web-design.jpg',
      '/assets/motion/product-system-loop.svg',
    ],
  },
];

export default function PortalHomepage() {
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
    <div className="home-triptych">
      <header className="home-triptych__header">
        <div className="home-triptych__identity">
          <span>Archive</span>
          <b aria-hidden="true">{'//'}</b>
          <span>Portfolio</span>
          <b aria-hidden="true">{'//'}</b>
          <span>2026</span>
        </div>
        <div className="home-triptych__status">Accepting Commissions</div>
      </header>

      <main className="home-triptych__main" aria-label="Portfolio realms">
        <div className="home-triptych__grid">
          {realms.map((realm) => (
            <CinematicRouteLink
              key={realm.type}
              href={realm.href}
              kind="realm"
              className="home-triptych-card"
              data-type={realm.type}
              aria-label={`Explore ${realm.title}`}
              title={realm.transitionTitle}
              subtitle={realm.transitionSubtitle}
              numeral={realm.numeral}
              indexLabel={realm.metaRight[0].replace('Index: ', '')}
              images={realm.flashImages}
            >
              <img className="home-triptych-card__img" src={realm.image} alt={realm.alt} />
              <div className="home-triptych-card__tint" aria-hidden="true" />
              <div className="home-triptych-card__frame" aria-hidden="true">
                <span className="home-triptych-card__corner home-triptych-card__corner--tl" />
                <span className="home-triptych-card__corner home-triptych-card__corner--tr" />
                <span className="home-triptych-card__corner home-triptych-card__corner--bl" />
                <span className="home-triptych-card__corner home-triptych-card__corner--br" />
              </div>
              <div className="home-triptych-card__header">
                <span className="home-triptych-card__numeral">{realm.numeral}</span>
                <span className="home-triptych-card__sigil" aria-hidden="true" />
              </div>
              <div className="home-triptych-card__body">
                <h2 className="home-triptych-card__title">{realm.title}</h2>
                <span className="home-triptych-card__subtitle">{realm.subtitle}</span>
              </div>
              <div className="home-triptych-card__footer">
                <span>
                  {realm.metaLeft.map((line) => (
                    <b key={line}>{line}</b>
                  ))}
                </span>
                <span>
                  {realm.metaRight.map((line) => (
                    <b key={line}>{line}</b>
                  ))}
                </span>
              </div>
            </CinematicRouteLink>
          ))}
        </div>
      </main>

      <footer className="home-triptych__footer">© MMXXVI — Multidisciplinary Studio</footer>
    </div>
  );
}
