'use client';
import React from 'react';
import Link from 'next/link';
import RealmNav from '@/components/RealmNav';

const caseStudies = [
  {
    id: 'ncb-design-system',
    title: 'Oasis Design System',
    client: 'NCB Financial Group',
    type: 'Design System',
    year: '2024',
    description: "Building and evolving a living design system that improved team efficiency, strengthened collaboration, and created a more reliable foundation for design at scale.",
    href: '/case-studies/ncb-design-system',
    img: '/assets/images/Personal-1775589530525.png',
    alt: 'Oasis design system component library screenshot',
    tags: ['Design System', 'Component Library', 'Tokens'],
  },
  {
    id: 'banking-loans',
    title: 'Banking Loans Platform',
    client: 'NCB Financial Group',
    type: 'UX / Product Design',
    year: '2024',
    description: 'End-to-end redesign of the digital loans application experience for retail and enterprise banking customers.',
    href: '/case-studies/banking-loans',
    img: '/assets/images/iStock-2208901213_1_-1775233406320.jpg',
    alt: 'Banking loans platform interface',
    tags: ['UX Research', 'Product Design', 'Banking'],
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking',
    client: 'NCB Financial Group',
    type: 'Mobile UX',
    year: '2023',
    description: 'Redesigning the mobile banking experience for accessibility, clarity, and conversion.',
    href: '/case-studies/mobile-banking',
    img: '/assets/images/iStock-2177184278-1775233995703.jpg',
    alt: 'Mobile banking app interface on smartphone',
    tags: ['Mobile', 'Accessibility', 'UX Design'],
  },
  {
    id: 'auto',
    title: 'Auto Loans',
    client: 'NCB Financial Group',
    type: 'Product Design',
    year: '2023',
    description: 'Streamlining the auto loan application process for digital-first customers.',
    href: '/case-studies/auto',
    img: '/assets/images/portfolio_work_tile.png',
    alt: 'Auto loans product design interface',
    tags: ['Product Design', 'Banking', 'UX'],
  },
  {
    id: 'welink',
    title: 'WeLink Platform',
    client: 'WeLink',
    type: 'Product Design',
    year: '2022',
    description: 'Designing a community-driven platform for professional networking and collaboration.',
    href: '/case-studies/welink',
    img: '/assets/images/featured_work_designing_for_millions.png',
    alt: 'WeLink platform interface showing community features',
    tags: ['Platform Design', 'Community', 'UX'],
  },
  {
    id: 'type-design',
    title: 'Type Design System',
    client: 'Internal',
    type: 'Typography / Design Systems',
    year: '2023',
    description: 'Building a comprehensive typographic system for enterprise product design.',
    href: '/case-studies/type-design',
    img: '/assets/images/image-1775321950897.png',
    alt: 'Type design system showing typographic scale and specimens',
    tags: ['Typography', 'Design Systems', 'Brand'],
  },
];

export default function ProductCaseStudiesPage() {
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
                Case Studies
              </h1>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  color: 'rgba(232,208,153,0.65)',
                  maxWidth: '480px',
                  lineHeight: 1.6,
                }}
              >
                Selected projects spanning enterprise banking, design systems, mobile UX, and platform design.
              </p>
            </div>

            {/* Case Study List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              {caseStudies?.map((cs, i) => (
                <Link
                  key={cs?.id}
                  href={cs?.href}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '180px 1fr',
                    gap: '32px',
                    padding: '32px 0',
                    borderBottom: '1px solid rgba(212,178,113,0.1)',
                    textDecoration: 'none',
                    color: 'inherit',
                    alignItems: 'start',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(212,178,113,0.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <div
                    style={{
                      aspectRatio: '4/3',
                      overflow: 'hidden',
                      backgroundColor: '#0a0b1c',
                      border: '1px solid rgba(212,178,113,0.12)',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={cs?.img}
                      alt={cs?.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.8) contrast(1.1)',
                      }}
                      loading={i < 2 ? 'eager' : 'lazy'}
                    />
                  </div>

                  <div>
                    <p
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.55rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(125,167,217,0.6)',
                        marginBottom: '10px',
                      }}
                    >
                      {cs?.client} · {cs?.type} · {cs?.year}
                    </p>
                    <h2
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: '1.3rem',
                        fontWeight: 400,
                        color: '#f7e6b7',
                        marginBottom: '12px',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {cs?.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1rem',
                        fontStyle: 'italic',
                        color: 'rgba(232,208,153,0.6)',
                        lineHeight: 1.6,
                        marginBottom: '16px',
                        maxWidth: '480px',
                      }}
                    >
                      {cs?.description}
                    </p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {cs?.tags?.map((tag) => (
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
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>

        {/* Footer meta */}
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
          <div>SYS_LOC: STRUCTURA_ARCHIVE</div>
          <div>VER. 9.4.2 // OBSIDIAN</div>
        </footer>
      </div>
    </>
  );
}
