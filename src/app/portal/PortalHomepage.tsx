'use client';
import React from 'react';
import Link from 'next/link';

const realms = [
  {
    id: 'art',
    label: 'Art',
    arcaneTitle: 'Ars Visualis',
    meta: 'M·I // VISIO',
    href: '/art',
    description: 'Expressive forms, painterly manifestations, and the alchemy of pigment.',
    cta: 'Enter Realm',
    cardClass: 'card-art',
    ariaLabel: 'Art — Ars Visualis — Enter Realm',
  },
  {
    id: 'product',
    label: 'Product Design',
    arcaneTitle: 'Systema',
    meta: 'M·II // STRUCTURA',
    href: '/product-design',
    description: 'Digital architecture, refined interfaces, and the logic of human interaction.',
    cta: 'Enter Realm',
    cardClass: 'card-product',
    ariaLabel: 'Product Design — Systema — Enter Realm',
  },
  {
    id: 'literature',
    label: 'Literature',
    arcaneTitle: 'Scriptorium',
    meta: 'M·III // FABULA',
    href: '/literature',
    description: 'Worldbuilding, narrative threads, and echoes from the dark forest.',
    cta: 'Enter Realm',
    cardClass: 'card-literature',
    ariaLabel: 'Literature — Scriptorium — Enter Realm',
  },
];

export default function PortalHomepage() {
  return (
    <div className="portal-body portal-page-root">
      {/* Universe Background */}
      <div className="universe-bg" aria-hidden="true">
        <div className="stars" />
      </div>
      {/* Astrolabe */}
      <div className="astrolabe" aria-hidden="true">
        <div className="ring ring-1" />
        <div className="ring ring-2" />
        <div className="ring ring-3" />
      </div>
      {/* Crimson Ribbon */}
      <div className="ribbon-container" aria-hidden="true">
        <svg className="ribbon-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(138, 28, 42, 0)" />
              <stop offset="50%" stopColor="rgba(179, 36, 53, 0.4)" />
              <stop offset="100%" stopColor="rgba(94, 13, 22, 0)" />
            </linearGradient>
          </defs>
          <path
            d="M -10,110 C 30,80 70,20 110,-10"
            fill="none"
            stroke="url(#ribbonGrad)"
            strokeWidth="8"
            filter="url(#glow)"
          />
          <path
            d="M -10,90 C 40,90 60,10 110,10"
            fill="none"
            stroke="rgba(138, 28, 42, 0.15)"
            strokeWidth="2"
          />
        </svg>
      </div>
      {/* Header Brand */}
      <header className="header-brand">
        <h1 className="brand-name">L.F. Chambers</h1>
        <div className="brand-subtitle">Architect of Realms</div>
      </header>
      {/* Portal Stage */}
      <main className="portal-stage">
        {realms?.map((realm) => (
          <div key={realm?.id} className="card-wrapper">
            <Link
              href={realm?.href}
              className={`tarot-card ${realm?.cardClass}`}
              aria-label={realm?.ariaLabel}
            >
              <div className="card-inner">
                <div className="card-bg" />
                <div className="card-overlay" />
                <div className="card-gradient" />
                <div className="glass-glare" />
                <div className="card-frame" />

                <div className="card-content">
                  <div className="arcane-index">{realm?.meta}</div>

                  <div className="card-typography">
                    <h2 className="card-title">{realm?.arcaneTitle}</h2>
                    <p className="card-desc">{realm?.description}</p>
                    <span className="action-rune">{realm?.cta}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </main>
      {/* Footer Meta */}
      <footer className="footer-meta" aria-hidden="true">
        <div>SYS_LOC: ASTRAL_PLANE</div>
        <div>VER. 9.4.2 // OBSIDIAN</div>
      </footer>
    </div>
  );
}
