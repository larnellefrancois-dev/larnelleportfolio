'use client';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import SiteHeader from '@/app/homepage/components/SiteHeader';
import SiteFooter from '@/app/homepage/components/SiteFooter';
import TypingH1 from '@/components/ui/TypingH1';

function TypeDesignModal({ onClose }: { onClose: () => void }) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  };
  const [mounted, setMounted] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'prototype' | 'tester'>('prototype');
  const [typedText, setTypedText] = React.useState('The quick brown fox jumps over the lazy dog.');
  const [fontSize, setFontSize] = React.useState(48);

  React.useEffect(() => {
    setMounted(true);
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, []);

  const modalContent = (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.72)',
      }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="Type Design Process Preview"
    >
      <style>{`
        /* Self-hosted Oasis Geometric family (public/assets/fonts/). */
        @font-face {
          font-family: 'OasisGeometric';
          src: url('/assets/fonts/OasisGeometric-Regular.woff') format('woff');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'OasisGeometric';
          src: url('/assets/fonts/OasisGeometric-SemiBold.woff') format('woff');
          font-weight: 600;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'OasisGeometric';
          src: url('/assets/fonts/OasisGeometric-Bold.woff2') format('woff2');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'OasisGeometric';
          src: url('/assets/fonts/OasisGeometric-Oblique.woff') format('woff');
          font-weight: 400;
          font-style: italic;
          font-display: swap;
        }
      `}</style>
      <div
        className="relative flex flex-col bg-white"
        style={{
          width: 'min(96vw, 1400px)',
          height: 'min(92vh, 900px)',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            borderBottom: '1px solid #1a1d30',
            flexShrink: 0,
            backgroundColor: '#080a16',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#f7e6b7',
                flexShrink: 0,
              }}
            />
            <div>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#6f87aa',
                  marginBottom: '3px',
                }}
              >
                Interactive Process Preview
              </p>
              <p style={{ fontSize: '13px', color: '#b3c4d9', fontWeight: 300 }}>
                Explore the typeface design process — discovery, construction, glyph set, weights,
                and specimen.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              border: '1px solid #1a1d30',
              borderRadius: '2px',
              background: '#05060f',
              cursor: 'pointer',
              color: '#9fb3cc',
              flexShrink: 0,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
            </svg>
          </button>
        </div>

        {/* Tab Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #1a1d30',
            flexShrink: 0,
            backgroundColor: '#080a16',
          }}
        >
          <button
            onClick={() => setActiveTab('prototype')}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              padding: '10px 20px',
              border: 'none',
              borderBottom:
                activeTab === 'prototype' ? '2px solid #f7e6b7' : '2px solid transparent',
              background: 'transparent',
              cursor: 'pointer',
              color: activeTab === 'prototype' ? '#f7e6b7' : '#6f87aa',
              transition: 'color 0.15s ease',
            }}
          >
            Process Prototype
          </button>
          <button
            onClick={() => setActiveTab('tester')}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              padding: '10px 20px',
              border: 'none',
              borderBottom: activeTab === 'tester' ? '2px solid #f7e6b7' : '2px solid transparent',
              background: 'transparent',
              cursor: 'pointer',
              color: activeTab === 'tester' ? '#f7e6b7' : '#6f87aa',
              transition: 'color 0.15s ease',
            }}
          >
            Type Tester
          </button>
          {activeTab === 'prototype' && (
            <span
              style={{
                marginLeft: 'auto',
                padding: '0 20px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                color: '#44567a',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Oasis Geometric — Overview · Construction · Glyphs · Weights · Specimen
            </span>
          )}
        </div>

        {/* Prototype Tab */}
        {activeTab === 'prototype' && (
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            <iframe
              src="/assets/prototypes/type-design.html"
              title="Type Design Process Prototype"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '1280px',
                height: '100%',
                border: 'none',
                transformOrigin: 'top left',
              }}
              ref={(el) => {
                if (el) {
                  const updateScale = () => {
                    const containerWidth = el.parentElement?.offsetWidth || 1280;
                    const scale = containerWidth / 1280;
                    el.style.transform = `scale(${scale})`;
                    el.style.height = `${100 / scale}%`;
                  };
                  updateScale();
                  const ro = new ResizeObserver(updateScale);
                  if (el.parentElement) ro.observe(el.parentElement);
                }
              }}
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        )}

        {/* Type Tester Tab */}
        {activeTab === 'tester' && (
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              backgroundColor: '#05060f',
            }}
          >
            {/* Controls Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                padding: '14px 24px',
                borderBottom: '1px solid #0e1020',
                flexShrink: 0,
                backgroundColor: '#080a16',
                flexWrap: 'wrap',
              }}
            >
              {/* Font Size */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#6f87aa',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Size
                </span>
                <input
                  type="range"
                  min={12}
                  max={160}
                  step={2}
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  aria-label="Font size"
                  style={{ width: '140px', accentColor: '#f7e6b7', cursor: 'pointer' }}
                />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    color: '#f7e6b7',
                    minWidth: '36px',
                    textAlign: 'right',
                  }}
                >
                  {fontSize}px
                </span>
              </div>

              {/* Reset */}
              <button
                onClick={() => {
                  setTypedText('The quick brown fox jumps over the lazy dog.');
                  setFontSize(48);
                }}
                style={{
                  marginLeft: 'auto',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#6f87aa',
                  background: 'none',
                  border: '1px solid #1a1d30',
                  borderRadius: '2px',
                  padding: '5px 12px',
                  cursor: 'pointer',
                }}
              >
                Reset
              </button>
            </div>

            {/* Text Preview / Editor Area */}
            <div style={{ flex: 1, overflow: 'auto', padding: '40px 48px', position: 'relative' }}>
              <textarea
                value={typedText}
                onChange={(e) => setTypedText(e.target.value)}
                placeholder="Start typing to preview the typeface…"
                aria-label="Type your text to preview"
                style={{
                  width: '100%',
                  minHeight: '100%',
                  fontSize: `${fontSize}px`,
                  fontWeight: 300,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  color: '#f7e6b7',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  resize: 'none',
                  fontFamily: "'OasisGeometric', sans-serif",
                  caretColor: '#f7e6b7',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                }}
              />
              {typedText === '' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '40px',
                    left: '48px',
                    pointerEvents: 'none',
                    fontSize: `${fontSize}px`,
                    fontWeight: 300,
                    lineHeight: 1.25,
                    letterSpacing: '-0.02em',
                    color: '#2b3450',
                    fontFamily: "'OasisGeometric', sans-serif",
                  }}
                >
                  Start typing to preview the typeface…
                </div>
              )}
            </div>

            {/* Bottom hint */}
            <div
              style={{
                padding: '10px 24px',
                borderTop: '1px solid #0e1020',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#080a16',
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px',
                  color: '#44567a',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Click the text area and start typing
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px',
                  color: '#2b3450',
                }}
              >
                {typedText.length} chars
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return mounted ? ReactDOM.createPortal(modalContent, document.body) : null;
}

export default function TypeDesignCaseStudyClient() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className="case-study-sheet max-w-[1600px] mx-auto px-5 sm:px-10 py-10"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <SiteHeader activePage="Case Studies" />
      <section
        style={{
          marginBottom: '4px',
          backgroundColor: '#0a0b1c',
          padding: '60px 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: '9px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#6f87aa',
            marginBottom: '24px',
            display: 'block',
          }}
        >
          Case Study / 004
        </span>
        <TypingH1
          text="BUILDING THE BANK: A SYSTEMIC TYPEFACE JOURNEY"
          style={{
            fontSize: 'clamp(28px, 5vw, 64px)',
            fontWeight: 200,
            letterSpacing: '-0.03em',
            maxWidth: '800px',
            lineHeight: 1.1,
            color: '#f7e6b7',
          }}
        />
      </section>
      {showModal && <TypeDesignModal onClose={() => setShowModal(false)} />}

      {/* Bento Grid — Phase Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        style={{ marginTop: '4px', gridAutoRows: 'minmax(350px, auto)', gap: '4px', width: '100%' }}
      >
        {/* Phase 01 */}
        <article
          className="col-span-1"
          style={{
            backgroundColor: '#0a0b1c',
            padding: 'clamp(24px, 4vw, 40px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#6f87aa',
              marginBottom: '16px',
              display: 'block',
            }}
          >
            Phase 01: Requirements
          </span>
          <h3
            style={{
              fontSize: '24px',
              fontWeight: 300,
              lineHeight: 1.3,
              marginBottom: '20px',
              color: '#f7e6b7',
            }}
          >
            Usage Mapping
          </h3>
          <p style={{ fontSize: '13px', color: '#9fb3cc', lineHeight: 1.6 }}>
            Defined where the typeface needed to work across customer-facing platforms, internal
            systems, dashboards, presentations, and brand communications. Early alignment focused on
            balancing recognizability, readability, and operational fit.
          </p>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '48px',
              fontWeight: 300,
              opacity: 0.15,
              position: 'absolute',
              bottom: '20px',
              right: '30px',
            }}
          >
            01
          </span>
        </article>

        {/* Phase 02 — span 2 */}
        <article
          className="col-span-1 sm:col-span-2"
          style={{
            backgroundColor: '#0a0b1c',
            padding: 'clamp(24px, 4vw, 40px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#6f87aa',
              marginBottom: '16px',
              display: 'block',
            }}
          >
            Phase 02: Typographic System
          </span>
          <h3
            style={{
              fontSize: '24px',
              fontWeight: 300,
              lineHeight: 1.3,
              marginBottom: '20px',
              color: '#f7e6b7',
            }}
          >
            Scale &amp; Token Structure
          </h3>
          <p style={{ fontSize: '13px', color: '#9fb3cc', lineHeight: 1.6 }}>
            Built a type system that could support product design more consistently, including text
            and display scales, line-height logic, and approved weight usage that could later map
            cleanly into design system tokens.
          </p>
          <div
            style={{
              marginTop: 'auto',
              paddingTop: '40px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '40px',
                letterSpacing: '15px',
                color: '#6f87aa',
              }}
            >
              8B30OQ
            </div>
          </div>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '48px',
              fontWeight: 300,
              opacity: 0.15,
              position: 'absolute',
              bottom: '20px',
              right: '30px',
            }}
          >
            02
          </span>
        </article>

        {/* Phase 03 — dark */}
        <article
          className="col-span-1"
          style={{
            backgroundColor: '#f7e6b7',
            color: '#05060f',
            padding: 'clamp(24px, 4vw, 40px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#6f87aa',
              marginBottom: '16px',
              display: 'block',
            }}
          >
            Phase 03: Character Set
          </span>
          <h3
            style={{
              fontSize: '24px',
              fontWeight: 300,
              lineHeight: 1.3,
              marginBottom: '20px',
              color: '#05060f',
            }}
          >
            Coverage for Real Interfaces
          </h3>
          <p style={{ fontSize: '13px', color: '#8198b8', lineHeight: 1.6 }}>
            Planned the glyph set around actual product and banking needs, including extended Latin,
            punctuation, currency symbols, arrows, enclosed numerals, spacing characters, and other
            UI-oriented forms.
          </p>
          <div
            style={{
              marginTop: 'auto',
              paddingTop: '40px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '150px',
                backgroundImage:
                  'linear-gradient(to right, #d9c79a 1px, transparent 1px), linear-gradient(to bottom, #d9c79a 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                position: 'relative',
                border: '1px solid #d9c79a',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  border: '1px solid #9fb3cc',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  border: '1px solid #c9d6e6',
                  width: '80px',
                  height: '80px',
                }}
              />
            </div>
          </div>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '48px',
              fontWeight: 300,
              opacity: 0.15,
              position: 'absolute',
              bottom: '20px',
              right: '30px',
              color: '#05060f',
            }}
          >
            03
          </span>
        </article>

        {/* Phase 04 — span 2, dark */}
        <article
          className="col-span-1 sm:col-span-2"
          style={{
            backgroundColor: '#f7e6b7',
            color: '#05060f',
            padding: 'clamp(24px, 4vw, 40px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#6f87aa',
              marginBottom: '16px',
              display: 'block',
            }}
          >
            Phase 04: Drawing
          </span>
          <h3
            style={{
              fontSize: '24px',
              fontWeight: 300,
              lineHeight: 1.3,
              marginBottom: '20px',
              color: '#05060f',
            }}
          >
            Form, Spacing &amp; Kerning
          </h3>
          <p style={{ fontSize: '13px', color: '#8198b8', lineHeight: 1.6 }}>
            Developed and refined the letterforms, then iterated on spacing and kerning to improve
            rhythm, consistency, and readability across product interfaces, dashboards, and
            longer-form use cases.
          </p>
          <div
            style={{
              marginTop: 'auto',
              paddingTop: '40px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontSize: '120px',
                fontWeight: 200,
                lineHeight: 1,
                letterSpacing: '-0.05em',
                color: '#05060f',
              }}
            >
              Aa
            </div>
          </div>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '48px',
              fontWeight: 300,
              opacity: 0.15,
              position: 'absolute',
              bottom: '20px',
              right: '30px',
              color: '#05060f',
            }}
          >
            04
          </span>
        </article>

        {/* Phase 05 */}
        <article
          className="col-span-1"
          style={{
            backgroundColor: '#0a0b1c',
            padding: 'clamp(24px, 4vw, 40px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#6f87aa',
              marginBottom: '16px',
              display: 'block',
            }}
          >
            Phase 05: Engineering
          </span>
          <h3
            style={{
              fontSize: '24px',
              fontWeight: 300,
              lineHeight: 1.3,
              marginBottom: '20px',
              color: '#f7e6b7',
            }}
          >
            Formats &amp; Rendering
          </h3>
          <p style={{ fontSize: '13px', color: '#9fb3cc', lineHeight: 1.6 }}>
            Prepared the typeface for implementation across teams, with guidance for internal TTF
            distribution, WOFF2 for production web use, controlled weight loading, and rendering
            considerations across macOS, Windows, and lower-DPI environments.
          </p>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '48px',
              fontWeight: 300,
              opacity: 0.15,
              position: 'absolute',
              bottom: '20px',
              right: '30px',
            }}
          >
            05
          </span>
        </article>

        {/* Phase 06 */}
        <article
          className="col-span-1"
          style={{
            backgroundColor: '#0a0b1c',
            padding: 'clamp(24px, 4vw, 40px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#6f87aa',
              marginBottom: '16px',
              display: 'block',
            }}
          >
            Phase 06: Deployment
          </span>
          <h3
            style={{
              fontSize: '24px',
              fontWeight: 300,
              lineHeight: 1.3,
              marginBottom: '20px',
              color: '#f7e6b7',
            }}
          >
            Rollout &amp; Governance
          </h3>
          <p style={{ fontSize: '13px', color: '#9fb3cc', lineHeight: 1.6 }}>
            Documented installation, usage rules, licensing boundaries, vendor access, and version
            management so the typeface could be deployed more reliably across internal teams,
            digital products, and approved partners.
          </p>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '48px',
              fontWeight: 300,
              opacity: 0.15,
              position: 'absolute',
              bottom: '20px',
              right: '30px',
            }}
          >
            06
          </span>
        </article>

        {/* System Metric — span 4 */}
        <div
          className="col-span-1 sm:col-span-2 lg:col-span-4"
          style={{
            backgroundColor: '#ffffff',
            color: '#05060f',
            minHeight: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            padding: 'clamp(24px, 4vw, 40px)',
          }}
        >
          <span
            style={{
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#6f87aa',
              position: 'absolute',
              top: '24px',
              left: '24px',
            }}
          >
            System Readiness
          </span>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: 'clamp(16px, 4vw, 72px)',
                fontWeight: 200,
                marginBottom: '10px',
                wordBreak: 'break-word',
              }}
            >
              TTF · OTF · WOFF2 · VARIABLE
            </div>
            <div style={{ fontSize: '13px', color: '#9fb3cc', lineHeight: 1.6 }}>
              Documented for internal distribution, web delivery, and long-term evolution across
              product, brand, and engineering use cases.
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Prototype Block */}
      <div
        style={{
          marginTop: '4px',
          backgroundColor: '#0a0b1c',
          padding: '48px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <span
          style={{
            fontSize: '9px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#6f87aa',
            marginBottom: '16px',
            display: 'block',
          }}
        >
          Interactive Process Preview
        </span>
        <p
          style={{
            fontSize: '14px',
            fontWeight: 300,
            color: '#b3c4d9',
            marginBottom: '28px',
            maxWidth: '480px',
            lineHeight: 1.6,
          }}
        >
          Explore the typeface system through usage context, structure, character coverage,
          engineering notes, and rollout thinking.
        </p>
        <button
          onClick={() => setShowModal(true)}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: '#05060f',
            backgroundColor: '#f7e6b7',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '2px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            minHeight: '44px',
            minWidth: '44px',
            transition: 'background-color 0.2s ease',
          }}
          onMouseDown={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#d9c79a';
          }}
          onMouseUp={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#f7e6b7';
          }}
          onTouchStart={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#d9c79a';
          }}
          onTouchEnd={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#f7e6b7';
          }}
        >
          View Interactive Preview
        </button>
      </div>

      <div style={{ marginTop: '48px' }}>
        <Link
          href="/case-studies"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: '#f7e6b7',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            minHeight: '44px',
            minWidth: '44px',
            padding: '8px 16px',
          }}
        >
          ← Back to Case Studies
        </Link>
      </div>
      {/* Prev / Next Case Study Navigation */}
      <div
        className="flex justify-between items-center mt-8 pt-8"
        style={{ borderTop: '1px solid #1a1d30' }}
      >
        <Link
          href="/case-studies/mobile-banking"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            textDecoration: 'none',
            padding: '8px 0',
            minHeight: '44px',
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#6f87aa',
            }}
          >
            ← Previous
          </span>
          <span style={{ fontSize: '13px', color: '#f7e6b7', fontWeight: 300 }}>
            Improving a Large-Scale Mobile Banking App
          </span>
        </Link>
        <Link
          href="/case-studies/mortgage"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            textDecoration: 'none',
            padding: '8px 0',
            minHeight: '44px',
            textAlign: 'right',
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#6f87aa',
            }}
          >
            Next →
          </span>
          <span style={{ fontSize: '13px', color: '#f7e6b7', fontWeight: 300 }}>
            Redesigning Mortgage Journeys for Clearer Next Steps
          </span>
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}
