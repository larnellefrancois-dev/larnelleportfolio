'use client';

import React from 'react';
import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────────────────────

export type DetailRealm = 'art' | 'product' | 'literature';

export interface DetailBreadcrumb {
  label: string;
  href: string;
}

export interface DetailMetaItem {
  label: string;
  value: string;
}

export interface DetailContentBlock {
  /** 'text' = prose paragraph, 'list' = bullet list, 'grid' = 2-col grid of items, 'image' = full-width image */
  type: 'text' | 'list' | 'grid' | 'image' | 'custom';
  /** Section heading (optional) */
  heading?: string;
  /** For type='text' */
  body?: string;
  /** For type='list' */
  items?: string[];
  /** For type='grid' — array of { label, value } */
  gridItems?: { label: string; value: string }[];
  /** For type='image' */
  src?: string;
  alt?: string;
  /** For type='custom' — render arbitrary JSX */
  render?: () => React.ReactNode;
}

export interface DetailNavLink {
  label: string;
  href: string;
  direction: 'prev' | 'next';
}

export interface DetailPageTemplateProps {
  /** Determines colour palette and accent variables */
  realm: DetailRealm;
  /** Breadcrumb trail rendered above the title */
  breadcrumbs: DetailBreadcrumb[];
  /** Small arcane index label, e.g. "M·I // VISIO" */
  arcaneIndex?: string;
  /** Page title */
  title: string;
  /** Italic subtitle / description */
  subtitle?: string;
  /** Key–value metadata chips rendered in a row */
  meta?: DetailMetaItem[];
  /** Main content blocks rendered in order */
  content?: DetailContentBlock[];
  /** Previous / next navigation links */
  navLinks?: DetailNavLink[];
  /** Optional footer system label, e.g. "SYS_LOC: REALM_VISIO" */
  sysLabel?: string;
  /** Optional children rendered after content blocks */
  children?: React.ReactNode;
}

// ─── Realm tokens ─────────────────────────────────────────────────────────────

const REALM_TOKENS: Record<
  DetailRealm,
  {
    accent: string;
    accentDim: string;
    accentBorder: string;
    metaColor: string;
    headingColor: string;
    bodyColor: string;
    bg: string;
    cardBg: string;
    tagBg: string;
    tagBorder: string;
  }
> = {
  art: {
    accent: '#d4b271',
    accentDim: 'rgba(212,178,113,0.5)',
    accentBorder: 'rgba(212,178,113,0.2)',
    metaColor: 'rgba(212,178,113,0.45)',
    headingColor: '#f7e6b7',
    bodyColor: 'rgba(240,230,211,0.75)',
    bg: '#0d0804',
    cardBg: 'rgba(26,15,8,0.6)',
    tagBg: 'rgba(212,178,113,0.06)',
    tagBorder: 'rgba(212,178,113,0.15)',
  },
  product: {
    // Systema — cyan accent over the shared Obsidian void.
    accent: '#7da7d9',
    accentDim: 'rgba(125,167,217,0.55)',
    accentBorder: 'rgba(125,167,217,0.22)',
    metaColor: 'rgba(125,167,217,0.55)',
    headingColor: '#f7e6b7',
    bodyColor: 'rgba(232,208,153,0.72)',
    bg: '#05060f',
    cardBg: 'rgba(10,11,28,0.6)',
    tagBg: 'rgba(125,167,217,0.08)',
    tagBorder: 'rgba(125,167,217,0.2)',
  },
  literature: {
    accent: '#b32435',
    accentDim: 'rgba(179,36,53,0.5)',
    accentBorder: 'rgba(138,28,42,0.3)',
    metaColor: 'rgba(179,36,53,0.45)',
    headingColor: '#f7e6b7',
    bodyColor: 'rgba(212,197,181,0.75)',
    bg: '#05060f',
    cardBg: 'rgba(10,11,28,0.5)',
    tagBg: 'rgba(138,28,42,0.06)',
    tagBorder: 'rgba(138,28,42,0.2)',
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function ContentBlock({ block, tokens }: { block: DetailContentBlock; tokens: (typeof REALM_TOKENS)[DetailRealm] }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      {block.heading && (
        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '1rem',
            fontWeight: 400,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: tokens.accent,
            marginBottom: '20px',
            paddingBottom: '10px',
            borderBottom: `1px solid ${tokens.accentBorder}`,
          }}
        >
          {block.heading}
        </h2>
      )}

      {block.type === 'text' && block.body && (
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.15rem',
            lineHeight: 1.85,
            color: tokens.bodyColor,
            fontWeight: 300,
          }}
        >
          {block.body}
        </p>
      )}

      {block.type === 'list' && block.items && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {block.items.map((item, i) => (
            <li
              key={i}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: tokens.bodyColor,
                fontWeight: 300,
                padding: '12px 0 12px 20px',
                borderBottom: `1px solid ${tokens.accentBorder}`,
                position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', left: 0, color: tokens.accentDim }}>—</span>
              {item}
            </li>
          ))}
        </ul>
      )}

      {block.type === 'grid' && block.gridItems && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1px',
          }}
        >
          {block.gridItems.map((gi, i) => (
            <div
              key={i}
              style={{
                backgroundColor: tokens.cardBg,
                padding: '24px',
                border: `1px solid ${tokens.accentBorder}`,
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  fontWeight: 400,
                  color: tokens.headingColor,
                  marginBottom: '6px',
                }}
              >
                {gi.value}
              </span>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.55rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: tokens.metaColor,
                }}
              >
                {gi.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {block.type === 'image' && block.src && (
        <div
          style={{
            border: `1px solid ${tokens.accentBorder}`,
            overflow: 'hidden',
          }}
        >
          <img
            src={block.src}
            alt={block.alt || ''}
            style={{
              width: '100%',
              display: 'block',
              filter: 'brightness(0.9) contrast(1.05)',
            }}
            loading="lazy"
          />
        </div>
      )}

      {block.type === 'custom' && block.render && block.render()}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function DetailPageTemplate({
  realm,
  breadcrumbs,
  arcaneIndex,
  title,
  subtitle,
  meta,
  content,
  navLinks,
  sysLabel,
  children,
}: DetailPageTemplateProps) {
  const tokens = REALM_TOKENS[realm];

  return (
    <div
      data-realm={realm}
      style={{
        backgroundColor: tokens.bg,
        color: tokens.headingColor,
        minHeight: '100vh',
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      <main>
        <section
          style={{
            padding: 'clamp(48px, 8vw, 96px) clamp(20px, 5vw, 60px) 80px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {/* ── Breadcrumb ── */}
          <nav
            aria-label="Breadcrumb"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              color: tokens.metaColor,
              textTransform: 'uppercase',
              marginBottom: '32px',
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={crumb.href}>
                {i < breadcrumbs.length - 1 ? (
                  <>
                    <Link href={crumb.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {crumb.label}
                    </Link>
                    <span style={{ opacity: 0.4 }}>/</span>
                  </>
                ) : (
                  <span style={{ color: tokens.bodyColor }}>{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* ── Arcane index ── */}
          {arcaneIndex && (
            <div
              aria-hidden="true"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.4em',
                color: tokens.metaColor,
                textTransform: 'uppercase',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: '32px',
                  height: '1px',
                  backgroundColor: tokens.accentBorder,
                }}
              />
              {arcaneIndex}
            </div>
          )}

          {/* ── Title ── */}
          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              letterSpacing: '0.1em',
              color: tokens.headingColor,
              textTransform: 'uppercase',
              marginBottom: subtitle ? '16px' : '40px',
              textShadow: '0 4px 20px rgba(0,0,0,0.6)',
              lineHeight: 1.15,
            }}
          >
            {title}
          </h1>

          {/* ── Subtitle ── */}
          {subtitle && (
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.15rem',
                fontStyle: 'italic',
                color: tokens.bodyColor,
                lineHeight: 1.65,
                maxWidth: '640px',
                marginBottom: '40px',
              }}
            >
              {subtitle}
            </p>
          )}

          {/* ── Metadata chips ── */}
          {meta && meta.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '56px',
              }}
            >
              {meta.map((m) => (
                <span
                  key={m.label}
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.5rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: tokens.accentDim,
                    backgroundColor: tokens.tagBg,
                    border: `1px solid ${tokens.tagBorder}`,
                    padding: '5px 12px',
                    borderRadius: '2px',
                  }}
                >
                  <span style={{ opacity: 0.55 }}>{m.label}:</span>{' '}
                  <span style={{ color: tokens.headingColor, opacity: 0.85 }}>{m.value}</span>
                </span>
              ))}
            </div>
          )}

          {/* ── Divider ── */}
          <div
            style={{
              width: '100%',
              height: '1px',
              background: `linear-gradient(to right, ${tokens.accent}, transparent)`,
              marginBottom: '56px',
              opacity: 0.3,
            }}
          />

          {/* ── Content blocks ── */}
          {content?.map((block, i) => (
            <ContentBlock key={i} block={block} tokens={tokens} />
          ))}

          {/* ── Slot for custom children ── */}
          {children}

          {/* ── Prev / Next navigation ── */}
          {navLinks && navLinks.length > 0 && (
            <nav
              aria-label="Page navigation"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '80px',
                paddingTop: '32px',
                borderTop: `1px solid ${tokens.accentBorder}`,
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: tokens.accentDim,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'color 0.3s ease',
                    marginLeft: link.direction === 'next' ? 'auto' : undefined,
                  }}
                >
                  {link.direction === 'prev' && <span>←</span>}
                  {link.label}
                  {link.direction === 'next' && <span>→</span>}
                </Link>
              ))}
            </nav>
          )}
        </section>
      </main>

      {/* ── Footer system label ── */}
      {sysLabel && (
        <footer
          style={{
            padding: '24px clamp(20px, 5vw, 60px)',
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.55rem',
            letterSpacing: '0.15em',
            color: tokens.metaColor,
            textTransform: 'uppercase',
            opacity: 0.5,
            borderTop: `1px solid ${tokens.accentBorder}`,
          }}
        >
          <span>{sysLabel}</span>
          <span>VER. 9.4.2 // OBSIDIAN</span>
        </footer>
      )}
    </div>
  );
}
