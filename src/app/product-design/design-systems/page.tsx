'use client';
import React from 'react';
import Link from 'next/link';
import RealmNav from '@/components/RealmNav';

const systems = [
  {
    id: 'oasis',
    title: 'Oasis Design System',
    org: 'NCB Financial Group',
    year: '2024',
    description: "A full-scale design system for NCB's digital banking products. Includes component library, token architecture, documentation, and governance model.",
    href: '/case-studies/ncb-design-system',
    img: '/assets/images/Personal-1775589530525.png',
    alt: 'Oasis design system component library showing UI components and tokens',
    tags: ['Components', 'Tokens', 'Documentation', 'Governance'],
  },
  {
    id: 'type',
    title: 'Enterprise Type System',
    org: 'Internal',
    year: '2023',
    description: 'A comprehensive typographic system built for enterprise product design — covering scale, rhythm, hierarchy, and cross-platform consistency.',
    href: '/case-studies/type-design',
    img: '/assets/images/image-1775321950897.png',
    alt: 'Type design system showing typographic scale and specimens',
    tags: ['Typography', 'Scale', 'Tokens', 'Brand'],
  },
];

export default function DesignSystemsPage() {
  return (
    <>
      <RealmNav brandName="Larnelle Chambers" />
      <div
        style={{
          backgroundColor: '#05060f',
          color: '#e8d099',
          minHeight: '100vh',
          fontFamily: "'Cormorant Garamond', serif",
          paddingTop: '56px',
        }}
      >
        <main>
          <section style={{ padding: '64px 40px 100px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{ marginBottom: '64px' }}>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6rem',
                  letterSpacing: '0.4em',
                  color: 'rgba(125,167,217,0.6)',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <span style={{ display: 'block', width: '32px', height: '1px', backgroundColor: 'rgba(125,167,217,0.3)' }} />
                M·II // STRUCTURA
              </div>
              <h1
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  color: '#f7e6b7',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  textShadow: '0 4px 20px rgba(0,0,0,0.8)',
                }}
              >
                Design Systems
              </h1>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  color: 'rgba(232,208,153,0.65)',
                  maxWidth: '560px',
                  lineHeight: 1.6,
                }}
              >
                Design infrastructure work — component libraries, token architectures, typographic systems, and the governance models that make them scale.
              </p>
            </div>

            {/* Systems Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {systems?.map((system, i) => (
                <Link
                  key={system?.id}
                  href={system?.href}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '48px',
                    textDecoration: 'none',
                    color: 'inherit',
                    alignItems: 'center',
                    padding: '48px',
                    backgroundColor: 'rgba(10,11,28,0.6)',
                    border: '1px solid rgba(212,178,113,0.1)',
                    transition: 'border-color 0.4s ease, background-color 0.4s ease',
                    marginBottom: '2px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212,178,113,0.3)';
                    e.currentTarget.style.backgroundColor = 'rgba(10,11,28,0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212,178,113,0.1)';
                    e.currentTarget.style.backgroundColor = 'rgba(10,11,28,0.6)';
                  }}
                >
                  <div
                    style={{
                      aspectRatio: '16/10',
                      overflow: 'hidden',
                      backgroundColor: '#0a0b1c',
                      border: '1px solid rgba(212,178,113,0.1)',
                      order: i % 2 === 0 ? 0 : 1,
                    }}
                  >
                    <img
                      src={system?.img}
                      alt={system?.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.8) contrast(1.1)',
                      }}
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                  </div>

                  <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                    <p
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.55rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(125,167,217,0.6)',
                        marginBottom: '16px',
                      }}
                    >
                      {system?.org} · {system?.year}
                    </p>
                    <h2
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: '1.6rem',
                        fontWeight: 400,
                        color: '#f7e6b7',
                        marginBottom: '16px',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {system?.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1rem',
                        fontStyle: 'italic',
                        color: 'rgba(232,208,153,0.6)',
                        lineHeight: 1.7,
                        marginBottom: '24px',
                      }}
                    >
                      {system?.description}
                    </p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                      {system?.tags?.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: '0.5rem',
                            letterSpacing: '0.1em',
                            color: 'rgba(212,178,113,0.5)',
                            backgroundColor: 'rgba(212,178,113,0.06)',
                            padding: '4px 10px',
                            border: '1px solid rgba(212,178,113,0.12)',
                            textTransform: 'uppercase',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.6rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'rgba(212,178,113,0.5)',
                        borderBottom: '1px solid rgba(212,178,113,0.2)',
                        paddingBottom: '2px',
                      }}
                    >
                      View Case Study →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>

        <footer
          style={{
            padding: '40px',
            borderTop: '1px solid rgba(212,178,113,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.55rem',
            letterSpacing: '0.15em',
            color: 'rgba(232,208,153,0.3)',
            textTransform: 'uppercase',
          }}
        >
          <div>SYS_LOC: STRUCTURA_SYSTEMS</div>
          <div>VER. 9.4.2 // OBSIDIAN</div>
        </footer>
      </div>
    </>
  );
}
