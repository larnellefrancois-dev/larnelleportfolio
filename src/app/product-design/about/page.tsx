'use client';
import React from 'react';

import RealmNav from '@/components/RealmNav';

export default function ProductAboutPage() {
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
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '80px',
                alignItems: 'start',
              }}
            >
              {/* Bio */}
              <div>
                <h1
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 400,
                    letterSpacing: '0.08em',
                    color: '#f7e6b7',
                    marginBottom: '32px',
                    lineHeight: 1.1,
                    textTransform: 'uppercase',
                    textShadow: '0 4px 20px rgba(0,0,0,0.8)',
                  }}
                >
                  Larnelle Chambers
                </h1>

                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.1rem',
                    color: 'rgba(232,208,153,0.7)',
                    lineHeight: 1.8,
                    marginBottom: '24px',
                  }}
                >
                  Product and systems designer with 7+ years of experience designing enterprise products, banking systems, and design infrastructure. Working at the intersection of user experience, systems thinking, and product strategy.
                </p>

                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.1rem',
                    color: 'rgba(232,208,153,0.7)',
                    lineHeight: 1.8,
                    marginBottom: '40px',
                  }}
                >
                  Work spans UX research, interface design, design systems architecture, and design leadership — products used by millions across banking, fintech, and enterprise software.
                </p>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a
                    href="mailto:chambersuiux@gmail.com"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#05060f',
                      textDecoration: 'none',
                      padding: '12px 24px',
                      backgroundColor: 'rgba(212,178,113,0.8)',
                      display: 'inline-block',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(247,230,183,1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(212,178,113,0.8)')}
                  >
                    Get in Touch
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1H_-6YX6X2yfuDNX_TOukg5FmKpg9DFI5/view?usp=drive_open"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(212,178,113,0.7)',
                      textDecoration: 'none',
                      padding: '12px 24px',
                      border: '1px solid rgba(212,178,113,0.3)',
                      display: 'inline-block',
                      transition: 'border-color 0.3s ease, color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(212,178,113,0.7)';
                      e.currentTarget.style.color = 'rgba(247,230,183,1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(212,178,113,0.3)';
                      e.currentTarget.style.color = 'rgba(212,178,113,0.7)';
                    }}
                  >
                    View Résumé →
                  </a>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.6rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'rgba(125,167,217,0.6)',
                    marginBottom: '24px',
                  }}
                >
                  Expertise
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                  {[
                    'UX Research & Strategy',
                    'Product Design',
                    'Design Systems Architecture',
                    'Interaction Design',
                    'Accessibility & Inclusive Design',
                    'Design Leadership',
                    'Enterprise & Banking UX',
                    'Prototyping & Validation',
                  ]?.map((skill) => (
                    <div
                      key={skill}
                      style={{
                        padding: '14px 0',
                        borderBottom: '1px solid rgba(212,178,113,0.08)',
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1rem',
                        color: 'rgba(232,208,153,0.65)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '40px' }}>
                  <h2
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.6rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: 'rgba(125,167,217,0.6)',
                      marginBottom: '16px',
                    }}
                  >
                    Connect
                  </h2>
                  <a
                    href="https://www.linkedin.com/in/larnelle-chambers-143b3b329/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.6rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'rgba(125,167,217,0.7)',
                      textDecoration: 'none',
                      borderBottom: '1px solid rgba(125,167,217,0.3)',
                      paddingBottom: '2px',
                    }}
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
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
          <div>SYS_LOC: STRUCTURA_PROFILE</div>
          <div>VER. 9.4.2 // OBSIDIAN</div>
        </footer>
      </div>
    </>
  );
}
