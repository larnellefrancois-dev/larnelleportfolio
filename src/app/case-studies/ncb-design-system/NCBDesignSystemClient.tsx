// This file contains the full client-side NCB Design System case study page.
// It is rendered by the server page.tsx which exports metadata.
'use client';
import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/app/homepage/components/SiteHeader';
import SiteFooter from '@/app/homepage/components/SiteFooter';
import TypingH1 from '@/components/ui/TypingH1';

const oasisScreenshots = [
  {
    src: '/assets/images/Personal-1775589530525.png',
    alt: 'Desktop screen designed using the Oasis NCB design system, showing a full-page layout built with system components',
  },
  {
    src: '/assets/images/branches-abms-1775589851381.png',
    alt: 'Desktop screen showing the Branches ABMS page designed using the Oasis NCB design system',
  },
  {
    src: '/assets/images/Credit_cards-1775590834479.png',
    alt: 'Desktop screen showing the Credit Cards page designed using the Oasis NCB design system',
  },
];

function OasisCarousel() {
  const [current, setCurrent] = React.useState(0);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const total = oasisScreenshots.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <>
      <div style={{ position: 'relative', backgroundColor: '#121425', overflow: 'hidden' }}>
        {/* Slides */}
        <div
          style={{
            display: 'flex',
            transition: 'transform 0.4s ease',
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {oasisScreenshots.map((shot, i) => (
            <div
              key={i}
              style={{
                minWidth: '100%',
                flexShrink: 0,
                cursor: 'zoom-in',
                position: 'relative',
                height: '420px',
              }}
              onClick={() => {
                setCurrent(i);
                setLightboxOpen(true);
              }}
              title="Click to view full size"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* Click-to-expand hint */}
        <div
          style={{
            position: 'absolute',
            bottom: '44px',
            left: '12px',
            background: 'rgba(247,230,183,0.55)',
            color: '#05060f',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px',
            padding: '3px 7px',
            borderRadius: '4px',
            letterSpacing: '0.05em',
            pointerEvents: 'none',
          }}
        >
          click to expand
        </div>

        {/* Prev / Next buttons */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous screenshot"
              style={{
                position: 'absolute',
                top: '50%',
                left: '12px',
                transform: 'translateY(-50%)',
                background: 'rgba(247,230,183,0.55)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#05060f',
                fontSize: '18px',
                lineHeight: 1,
              }}
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next screenshot"
              style={{
                position: 'absolute',
                top: '50%',
                right: '12px',
                transform: 'translateY(-50%)',
                background: 'rgba(247,230,183,0.55)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#05060f',
                fontSize: '18px',
                lineHeight: 1,
              }}
            >
              ›
            </button>
          </>
        )}

        {/* Dot indicators */}
        {total > 1 && (
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '6px',
            }}
          >
            {oasisScreenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  background: i === current ? '#f7e6b7' : 'rgba(247,230,183,0.3)',
                  padding: 0,
                  transition: 'background 0.2s',
                }}
              />
            ))}
          </div>
        )}

        {/* Counter */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'rgba(247,230,183,0.55)',
            color: '#05060f',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            padding: '4px 8px',
            borderRadius: '4px',
            letterSpacing: '0.05em',
          }}
        >
          {current + 1} / {total}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen &&
        typeof window !== 'undefined' &&
        ReactDOM.createPortal(
          <div
            onClick={() => setLightboxOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              backgroundColor: 'rgba(0,0,0,0.92)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            {/* Prev in lightbox */}
            {total > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous screenshot"
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '16px',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.15)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#05060f',
                  fontSize: '24px',
                  lineHeight: 1,
                }}
              >
                ‹
              </button>
            )}

            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '100%',
                maxHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src={oasisScreenshots[current].src}
                alt={oasisScreenshots[current].alt}
                width={1440}
                height={900}
                style={{
                  maxWidth: '100%',
                  maxHeight: '90vh',
                  objectFit: 'contain',
                  borderRadius: '4px',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
                  width: 'auto',
                  height: 'auto',
                }}
                loading="lazy"
              />
            </div>

            {/* Next in lightbox */}
            {total > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next screenshot"
                style={{
                  position: 'fixed',
                  top: '50%',
                  right: '16px',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.15)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#05060f',
                  fontSize: '24px',
                  lineHeight: 1,
                }}
              >
                ›
              </button>
            )}

            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              aria-label="Close lightbox"
              style={{
                position: 'fixed',
                top: '16px',
                right: '16px',
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#05060f',
                fontSize: '20px',
                lineHeight: 1,
              }}
            >
              ✕
            </button>

            {/* Counter in lightbox */}
            {total > 1 && (
              <div
                style={{
                  position: 'fixed',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(255,255,255,0.15)',
                  color: '#05060f',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12px',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  letterSpacing: '0.05em',
                }}
              >
                {current + 1} / {total}
              </div>
            )}
          </div>,
          document.body
        )}
    </>
  );
}

function NCBDesignSystemModal({ onClose }: { onClose: () => void }) {
  const [mounted, setMounted] = React.useState(false);
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );
  useEffect(() => {
    setMounted(true);
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

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
        padding: '8px',
      }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="NCB Design System Preview"
    >
      <div
        className="relative flex flex-col bg-white w-full"
        style={{
          maxWidth: '1400px',
          height: 'min(96vh, 900px)',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 12px',
            borderBottom: '1px solid #1a1d30',
            flexShrink: 0,
            backgroundColor: '#080a16',
            gap: '8px',
            minWidth: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              minWidth: 0,
              flex: 1,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#f7e6b7',
                flexShrink: 0,
              }}
            />
            <div style={{ minWidth: 0, flex: 1, overflow: 'hidden' }}>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#6f87aa',
                  marginBottom: '2px',
                }}
              >
                Interactive System Preview
              </p>
              <p
                style={{
                  fontSize: '12px',
                  color: '#b3c4d9',
                  fontWeight: 300,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Explore the Oasis design system — tokens, typography, spacing, and adoption metrics.
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
              width: '36px',
              height: '36px',
              border: '1px solid #1a1d30',
              borderRadius: '9999px',
              background: '#05060f',
              cursor: 'pointer',
              color: '#9fb3cc',
              flexShrink: 0,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
            </svg>
          </button>
        </div>
        {/* Subtitle bar */}
        <div
          style={{
            padding: '6px 12px',
            borderBottom: '1px solid #0e1020',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#080a16',
            overflow: 'hidden',
            minWidth: 0,
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#f7e6b7',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px',
              color: '#6f87aa',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              flexShrink: 0,
            }}
          >
            Oasis v3.1
          </span>
          <span
            style={{
              fontSize: '10px',
              color: '#44567a',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              minWidth: 0,
            }}
          >
            — Design Tokens · Typography · Spacing · Adoption Metrics
          </span>
        </div>
        {/* iframe */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', minHeight: 0 }}>
          <iframe
            src="/assets/prototypes/ncb-design-system.html"
            title="NCB Design System Prototype"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
    </div>
  );

  return mounted ? ReactDOM.createPortal(modalContent, document.body) : null;
}

export default function NCBDesignSystemClient() {
  const [showModal, setShowModal] = React.useState(false);
  const sectionStyle: React.CSSProperties = {
    fontSize: 'clamp(15px, 2.5vw, 19px)',
    lineHeight: 1.7,
    color: '#f7e6b7',
    fontWeight: 300,
    marginBottom: '24px',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '9px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#6f87aa',
    display: 'block',
    marginBottom: '24px',
  };

  const monoStyle: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '11px',
    color: '#6f87aa',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  return (
    <div
      className="case-study-sheet max-w-[1600px] mx-auto px-5 sm:px-10 py-10"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <SiteHeader activePage="Case Studies" />

      {/* Page Hero */}
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-[120px] lg:pb-[80px] max-w-[1000px]">
        <div className="flex flex-wrap gap-4 sm:gap-8 mb-8 sm:mb-10" style={monoStyle}>
          <span>Design System</span>
          <span>Web &amp; Mobile</span>
          <span>v3.1 Current</span>
        </div>
        <TypingH1
          text="Oasis: The NCB Design System"
          style={{
            fontSize: 'clamp(36px, 7vw, 72px)',
            fontWeight: 200,
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            marginBottom: '32px',
            color: '#f7e6b7',
          }}
        />

        <p style={{ ...sectionStyle, maxWidth: '720px', marginBottom: 0 }}>
          Increasing designer efficiency through a living design system. How a fragmented component
          library evolved into a versioned design system that improved consistency, accelerated
          collaboration, and reshaped how our team worked across web and mobile.
        </p>
      </section>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 mb-1">
        {[
          { value: '2000+', label: 'Components Created' },
          { value: '76%', label: 'Adoption Rate' },
          { value: '70%', label: 'Faster Handoff' },
          { value: '85%', label: 'Product Coverage' },
        ].map((m) => (
          <div key={m.label} style={{ backgroundColor: '#0a0b1c', padding: '24px' }}>
            <span
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 200,
                display: 'block',
                color: '#f7e6b7',
              }}
            >
              {m.value}
            </span>
            <span
              style={{
                fontSize: '9px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#6f87aa',
                marginTop: '8px',
                display: 'block',
              }}
            >
              {m.label}
            </span>
          </div>
        ))}
      </div>

      {/* Overview + Role */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mb-1">
        <div
          className="md:col-span-3"
          style={{ backgroundColor: '#0a0b1c', padding: 'clamp(20px, 4vw, 32px)' }}
        >
          <span style={labelStyle}>Overview</span>
          <p style={sectionStyle}>
            When I joined NCB in 2018, there was no true design system in place. The organisation
            was in the middle of shifting from waterfall to agile delivery, and much of the bank's
            digital product design had historically been handled by external agencies. As a result,
            the internal team inherited a fragmented set of files, inconsistent interface patterns,
            and very little shared structure across products.
          </p>
          <p style={sectionStyle}>
            What existed were fragments: a few repeated UI elements, some recurring visual
            decisions, and isolated attempts at consistency. But there was no unified system, no
            shared logic, and no strong foundation that could help designers move quickly and
            confidently across products.
          </p>
          <p style={{ ...sectionStyle, marginBottom: 0 }}>
            What followed was not a single launch moment, but a gradual evolution. Over time, that
            fragmented starting point became a shared library, then a broader component framework,
            and eventually a versioned, living design system that supported web and mobile work
            across the team. The system improved more than visual consistency. It changed how we
            collaborated, how designers approached problem-solving, and how quickly new work could
            move from concept to stakeholder-ready design.
          </p>
        </div>
        <div
          className="md:col-span-1"
          style={{
            backgroundColor: '#f7e6b7',
            padding: 'clamp(20px, 4vw, 32px)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span style={{ ...labelStyle }}>My Role</span>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              'Design System Development',
              'Component Design',
              'System Migration Support',
              'Documentation & Team Enablement',
            ].map((r) => (
              <li
                key={r}
                style={{
                  fontSize: '13px',
                  color: '#05060f',
                  padding: '12px 0',
                  borderBottom: '1px solid #d9c79a',
                  fontWeight: 300,
                }}
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 01 — The Starting Point */}
      <div className="grid grid-cols-1 gap-1 mb-1">
        <div style={{ backgroundColor: '#0a0b1c', padding: 'clamp(20px, 4vw, 32px)' }}>
          <span style={{ ...monoStyle, display: 'block', marginBottom: '16px' }}>01</span>
          <h2
            style={{
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: 200,
              color: '#f7e6b7',
              marginBottom: '16px',
              lineHeight: 1.2,
            }}
          >
            The starting point
          </h2>
          <p style={{ fontSize: '15px', color: '#9fb3cc', marginBottom: '32px', fontWeight: 400 }}>
            No system. Just fragments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-[1000px]">
            <div>
              <p style={sectionStyle}>
                The earliest challenge was not refining an existing system. It was creating shared
                structure where very little existed. Because design work had been spread across
                products, teams, and external partners, there was no dependable source of truth.
                Common UI patterns appeared in different forms. Similar problems were solved
                multiple ways.
              </p>
              <p style={{ ...sectionStyle, marginBottom: 0 }}>
                Design quality varied depending on who created the work, when it was created, and
                which product area it belonged to. This created friction in a few important ways.
              </p>
            </div>
            <div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Designers spent time recreating patterns that should already have existed',
                  'Product experiences lacked consistency across journeys',
                  'Collaboration was harder without a shared visual language',
                  'Newer designers had less support and fewer proven patterns to build from',
                  'Design review focused on avoidable inconsistencies rather than higher-level UX decisions',
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: '14px',
                      color: '#c9d6e6',
                      padding: '12px 0',
                      borderBottom: '1px solid #1a1d30',
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section 02 — Adobe XD Era */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-1">
        <div style={{ backgroundColor: '#0a0b1c', padding: 'clamp(20px, 4vw, 32px)' }}>
          <span style={{ ...monoStyle, display: 'block', marginBottom: '16px' }}>02</span>
          <h2
            style={{
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: 200,
              color: '#f7e6b7',
              marginBottom: '16px',
              lineHeight: 1.2,
            }}
          >
            Adobe XD era
          </h2>
          <p style={{ fontSize: '15px', color: '#9fb3cc', marginBottom: '32px' }}>
            A shared library, not yet a system.
          </p>
          <p style={sectionStyle}>
            The first meaningful step toward consistency happened in Adobe XD. What we built there
            was not yet a mature design system — it was closer to a shared component library:
            colours, buttons, cards, headers, footers, and the beginnings of reusable layout pieces.
            Still, it mattered. It gave the team a common base to work from and started introducing
            the habit of reuse.
          </p>
          <p style={{ ...sectionStyle, marginBottom: 0 }}>
            Adobe XD did not support the kind of design logic, scalable variables, or token
            architecture that later became central to the system. That meant the library could
            improve consistency, but it could not yet become the flexible, intelligent foundation we
            needed long term. Even so, this phase shifted the team's mindset toward patterns that
            should be reused, improved, and shared.
          </p>
        </div>
        <div
          style={{
            backgroundColor: '#121425',
            padding: 'clamp(20px, 4vw, 32px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <span style={labelStyle}>What this phase established</span>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
            {[
              'Shared UI elements across projects',
              'More consistent visual decisions',
              'Faster mockup creation',
              'Less duplication of simple components',
              'A common design vocabulary within the team',
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: '14px',
                  color: '#c9d6e6',
                  padding: '14px 0',
                  borderBottom: '1px solid #232c40',
                  lineHeight: 1.6,
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 04 — Version History */}
      <div className="grid grid-cols-1 gap-1 mb-1">
        <div style={{ backgroundColor: '#0a0b1c', padding: '32px' }}>
          <span style={{ ...monoStyle, display: 'block', marginBottom: '16px' }}>04</span>
          <h2
            style={{
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: 200,
              color: '#f7e6b7',
              marginBottom: '8px',
              lineHeight: 1.2,
            }}
          >
            How it evolved
          </h2>
          <p style={{ fontSize: '15px', color: '#9fb3cc', marginBottom: '40px' }}>
            Four versions. One living system.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              {
                version: 'v1.0',
                tool: 'Adobe XD',
                title: 'Raw components',
                desc: 'Focused on the basics: a shared library of foundational UI elements — colours, buttons, and cards. Introduced consistency, but structure was still limited and the system was not yet deeply documented.',
              },
              {
                version: 'v2.0',
                tool: 'Adobe XD',
                title: 'Research and guidelines',
                desc: 'The library expanded and became more intentional. Clearer design thinking, stronger visual logic, and early documentation. A more serious attempt at building repeatable standards rather than just collecting reusable assets.',
              },
              {
                version: 'v3.0',
                tool: 'Figma',
                title: 'Move to Figma',
                desc: 'Rebuilt with broader ambition. A more scalable structure, expanded scope beyond atomic components, and shaped around real product needs across web and mobile. Figma made it easier to support collaboration, reuse, and pattern maturity.',
              },
              {
                version: 'v3.1',
                tool: 'Figma',
                title: 'Variables and maturity',
                desc: 'Variables, stronger component relationships, better theming support, and fuller pattern coverage. No longer just a reusable library — a real operational foundation for the team.',
                current: true,
              },
            ].map((v) => (
              <div
                key={v.version}
                style={{
                  backgroundColor: v.current ? '#f7e6b7' : '#121425',
                  padding: '28px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '24px',
                      fontWeight: 200,
                      color: v.current ? '#05060f' : '#f7e6b7',
                    }}
                  >
                    {v.version}
                  </span>
                  {v.current && (
                    <span
                      style={{
                        fontSize: '9px',
                        backgroundColor: '#d9c79a',
                        color: '#6f87aa',
                        padding: '4px 8px',
                        borderRadius: '2px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Current
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: '11px',
                    color: v.current ? '#9fb3cc' : '#6f87aa',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '12px',
                  }}
                >
                  {v.tool}
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 400,
                    color: v.current ? '#05060f' : '#f7e6b7',
                    marginBottom: '12px',
                  }}
                >
                  {v.title}
                </p>
                <p
                  style={{
                    fontSize: '13px',
                    color: v.current ? '#8198b8' : '#9fb3cc',
                    lineHeight: 1.6,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Block — Design System in Context (moved here: after How it Evolved, before Team Impact) */}
      <div className="grid grid-cols-1 gap-1 mb-1">
        <div style={{ backgroundColor: '#0a0b1c', padding: 'clamp(20px, 4vw, 32px)' }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: '#6f87aa',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'block',
              marginBottom: '24px',
            }}
          >
            The system in action
          </span>
          <h2
            style={{
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: 200,
              color: '#f7e6b7',
              marginBottom: '8px',
              lineHeight: 1.2,
            }}
          >
            Built with Oasis
          </h2>
          <p style={{ fontSize: '15px', color: '#9fb3cc', marginBottom: '32px' }}>
            Desktop screens designed using the system.
          </p>

          {/* Carousel */}
          <OasisCarousel />
        </div>
      </div>

      {/* Section 05 — Team Impact */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mb-1">
        <div className="md:col-span-3" style={{ backgroundColor: '#0a0b1c', padding: '32px' }}>
          <span style={{ ...monoStyle, display: 'block', marginBottom: '16px' }}>05</span>
          <h2
            style={{
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: 200,
              color: '#f7e6b7',
              marginBottom: '8px',
              lineHeight: 1.2,
            }}
          >
            Team impact
          </h2>
          <p style={{ fontSize: '15px', color: '#9fb3cc', marginBottom: '32px' }}>
            What changed for the team.
          </p>
          <p style={sectionStyle}>
            The biggest outcome was not just cleaner files or more components. It was a change in
            how the team worked. As the system matured, designers were able to move faster because
            they no longer had to solve the same foundational problems repeatedly. They could start
            from proven patterns, spend less time rebuilding common UI, and focus more of their
            energy on experience design, content structure, and solving the specific problem in
            front of them.
          </p>
          <p style={{ ...sectionStyle, marginBottom: '40px' }}>
            One of the less obvious but most important impacts was confidence. When a designer is
            working from a system that has already been used, reviewed, and improved by the team,
            they are not starting from zero. They are starting from a foundation. The system did not
            replace design thinking. It made design thinking more efficient.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              'Designers could create mockups more quickly',
              'Common flows became easier to structure',
              'Repeated interface decisions were already resolved',
              'Teams could collaborate with a stronger shared language',
              'Less experienced designers had more support and clearer starting points',
              'Design reviews became more strategic — fewer cycles spent fixing basic inconsistency',
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: '14px',
                  color: '#c9d6e6',
                  padding: '12px 0',
                  borderBottom: '1px solid #1a1d30',
                  lineHeight: 1.6,
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-1">
          {[
            { value: '2000+', label: 'Components Created' },
            { value: '76%', label: 'Adoption Rate' },
            { value: '70%', label: 'Faster Handoff' },
            { value: '85%', label: 'Product Coverage' },
          ].map((m) => (
            <div key={m.label} style={{ backgroundColor: '#f7e6b7', padding: '28px' }}>
              <span
                style={{
                  fontSize: 'clamp(24px, 4vw, 36px)',
                  fontWeight: 200,
                  display: 'block',
                  color: '#05060f',
                }}
              >
                {m.value}
              </span>
              <span
                style={{
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#9fb3cc',
                  marginTop: '8px',
                  display: 'block',
                }}
              >
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 06 — Reflection */}
      <div className="grid grid-cols-1 gap-1 mb-1">
        <div style={{ backgroundColor: '#0a0b1c', padding: '32px' }}>
          <span style={{ ...monoStyle, display: 'block', marginBottom: '16px' }}>06</span>
          <h2
            style={{
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: 200,
              color: '#f7e6b7',
              marginBottom: '8px',
              lineHeight: 1.2,
            }}
          >
            Reflection
          </h2>
          <p style={{ fontSize: '15px', color: '#9fb3cc', marginBottom: '40px' }}>
            What I learned from building it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
            {[
              {
                num: '1',
                title: 'Living examples matter',
                desc: 'Documentation is important, but examples are often what unlock adoption. Designers work more effectively when they can see how a real problem has already been solved. Even an imperfect starting point can dramatically reduce friction.',
              },
              {
                num: '2',
                title: 'Systems reduce friction, not creativity',
                desc: 'A good design system does not limit exploration. It removes unnecessary effort so designers can spend more time on the parts of the work that actually need fresh thinking. The system handled the repeatable parts, which made it easier to explore the non-repeatable parts.',
              },
              {
                num: '3',
                title: 'Maturity is adoption',
                desc: 'A design system is not mature because it looks polished. It is mature when people understand it, trust it, and use it in real work. Adoption, flexibility, and relevance matter more than visual neatness alone.',
              },
            ].map((item) => (
              <div key={item.num} style={{ backgroundColor: '#121425', padding: '32px' }}>
                <span
                  style={{
                    fontSize: '32px',
                    fontWeight: 200,
                    color: '#2b3450',
                    display: 'block',
                    marginBottom: '16px',
                  }}
                >
                  {item.num}
                </span>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 300,
                    color: '#f7e6b7',
                    marginBottom: '16px',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#9fb3cc', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing Takeaway */}
      <div className="grid grid-cols-1 gap-1 mb-1">
        <div style={{ backgroundColor: '#f7e6b7', padding: '48px 32px' }}>
          <span style={labelStyle}>Closing takeaway</span>
          <p
            style={{
              fontSize: 'clamp(18px, 3vw, 28px)',
              fontWeight: 200,
              color: '#05060f',
              lineHeight: 1.4,
              maxWidth: '800px',
              marginBottom: '32px',
            }}
          >
            This project taught me that design systems are not really about components alone. They
            are about creating shared confidence.
          </p>
          <p style={{ fontSize: '16px', color: '#8198b8', lineHeight: 1.7, maxWidth: '720px' }}>
            What started as a fragmented collection of assets gradually became a living, versioned
            system that improved consistency, accelerated collaboration, and gave the team a
            stronger foundation for product design across web and mobile. Its real value was not
            just in what it contained, but in how it changed the way people worked. It did not
            simply standardise design. It increased designer efficiency by making good decisions
            easier to repeat.
          </p>
        </div>
      </div>

      {/* Interactive Prototype Trigger — Explore Oasis Design System */}
      <div className="grid grid-cols-1 gap-1 mb-1" style={{ marginTop: '4px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #f9ecc4 0%, #efddb0 60%, #f7e6b7 100%)',
            padding: 'clamp(40px, 6vw, 72px) clamp(24px, 5vw, 56px)',
            position: 'relative',
            overflow: 'hidden',
            borderLeft: '3px solid #05060f',
          }}
        >
          {/* Background accent */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-40px',
              left: '30%',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10"
            style={{ position: 'relative', zIndex: 1 }}
          >
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '640px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    width: '28px',
                    height: '1px',
                    backgroundColor: '#05060f',
                    display: 'inline-block',
                  }}
                />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px',
                    color: '#8198b8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                  }}
                >
                  Interactive · Live Documentation
                </span>
              </div>
              <p
                style={{
                  fontSize: 'clamp(22px, 4vw, 36px)',
                  fontWeight: 200,
                  color: '#05060f',
                  lineHeight: 1.2,
                  letterSpacing: '-0.03em',
                  margin: 0,
                }}
              >
                Explore the Oasis
                <br />
                design system
              </p>
              <p
                style={{
                  fontSize: '14px',
                  color: '#8ba2c0',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Browse design tokens, typography scale, spacing system, and adoption metrics — the
                full living documentation for the NCB design system.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Design Tokens', 'Typography', 'Spacing', 'Adoption Metrics'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '9px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#b3c4d9',
                      border: '1px solid #e0cfa3',
                      padding: '5px 10px',
                      borderRadius: '2px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="case-study-cta-btn"
              style={{
                padding: '16px 40px',
                border: '1px solid #05060f',
                background: '#05060f',
                color: '#f7e6b7',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                flexShrink: 0,
                minHeight: '52px',
                transition: 'background 0.2s, color 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#05060f';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#05060f';
                e.currentTarget.style.color = '#f7e6b7';
              }}
            >
              View Design System →
            </button>
          </div>
        </div>
      </div>

      {showModal && <NCBDesignSystemModal onClose={() => setShowModal(false)} />}

      <div style={{ marginTop: '48px' }}>
        <Link
          href="/case-studies"
          className="case-study-back-link"
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
        <span style={{ visibility: 'hidden' }} />
        <Link
          href="/case-studies/mobile-banking"
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
            Improving a Large-Scale Mobile Banking App
          </span>
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}
