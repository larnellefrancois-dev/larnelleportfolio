import React from 'react';
import Link from 'next/link';

export interface Crumb { label: string; href: string; }
export interface MetaItem { label: string; value: string; }
export interface NavLink { label: string; href: string; direction: 'prev' | 'next'; }

export interface ContentBlock {
  type: 'text' | 'list' | 'grid' | 'image' | 'custom';
  heading?: string;
  body?: string;
  items?: string[];
  gridItems?: { label: string; value: string }[];
  src?: string;
  alt?: string;
  render?: () => React.ReactNode;
}

export interface PageTemplateProps {
  eyebrow?: string;
  breadcrumbs?: Crumb[];
  title: string;
  subtitle?: string;
  meta?: MetaItem[];
  content?: ContentBlock[];
  navLinks?: NavLink[];
  children?: React.ReactNode;
}

function Block({ block }: { block: ContentBlock }) {
  return (
    <section style={{ marginBottom: 'var(--space-xl)' }}>
      {block.heading && <h2 style={{ fontSize: 'var(--step-2)', marginBottom: 'var(--space-sm)' }}>{block.heading}</h2>}

      {block.type === 'text' && block.body && (
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--step-1)', lineHeight: 1.75, color: 'var(--text)' }}>{block.body}</p>
      )}

      {block.type === 'list' && block.items && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {block.items.map((item, i) => (
            <li key={i} style={{ position: 'relative', padding: 'var(--space-2xs) 0 var(--space-2xs) var(--space-md)', borderBottom: '1px solid var(--border)', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>—</span>
              {item}
            </li>
          ))}
        </ul>
      )}

      {block.type === 'grid' && block.gridItems && (
        <div className="ds-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
          {block.gridItems.map((gi, i) => (
            <div key={i} className="ds-card" style={{ padding: 'var(--space-md)' }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'var(--step-2)', color: 'var(--text)', marginBottom: 4 }}>{gi.value}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--step--1)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{gi.label}</span>
            </div>
          ))}
        </div>
      )}

      {block.type === 'image' && block.src && (
        <div className="ds-card" style={{ padding: 0 }}>
          <img src={block.src} alt={block.alt || ''} loading="lazy" style={{ width: '100%', display: 'block' }} />
        </div>
      )}

      {block.type === 'custom' && block.render && block.render()}
    </section>
  );
}

/** Unified detail/content page template. Used by case studies, literature
    detail pages, and any prose page. Inherits the active theme via tokens. */
export default function PageTemplate({
  eyebrow, breadcrumbs, title, subtitle, meta, content, navLinks, children,
}: PageTemplateProps) {
  return (
    <article className="ds-container ds-container--narrow" style={{ paddingBlock: 'var(--space-2xl)' }}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="ds-breadcrumbs" aria-label="Breadcrumb">
          {breadcrumbs.map((c, i) => (
            <React.Fragment key={c.href}>
              {i < breadcrumbs.length - 1 ? (
                <><Link href={c.href}>{c.label}</Link><span aria-hidden="true">/</span></>
              ) : (
                <span style={{ color: 'var(--text-muted)' }}>{c.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      )}

      {eyebrow && <p className="ds-eyebrow">{eyebrow}</p>}
      <h1 style={{ fontSize: 'var(--step-3)', marginTop: 'var(--space-2xs)', marginBottom: subtitle ? 'var(--space-sm)' : 'var(--space-lg)' }}>{title}</h1>
      {subtitle && <p className="ds-lede" style={{ marginBottom: 'var(--space-lg)' }}>{subtitle}</p>}

      {meta && meta.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2xs)', marginBottom: 'var(--space-xl)' }}>
          {meta.map((m) => (
            <span key={m.label} className="ds-tag">
              <span style={{ opacity: 0.6 }}>{m.label}:</span> {m.value}
            </span>
          ))}
        </div>
      )}

      <div style={{ height: 1, background: 'linear-gradient(to right, var(--accent), transparent)', opacity: 0.4, marginBottom: 'var(--space-xl)' }} />

      {content?.map((block, i) => <Block key={i} block={block} />)}
      {children}

      {navLinks && navLinks.length > 0 && (
        <nav aria-label="Page navigation" style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-sm)', flexWrap: 'wrap', marginTop: 'var(--space-2xl)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--border)' }}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="ds-btn ds-btn--ghost" style={{ marginLeft: l.direction === 'next' ? 'auto' : undefined }}>
              {l.direction === 'prev' && <span aria-hidden="true">←</span>}{l.label}{l.direction === 'next' && <span aria-hidden="true">→</span>}
            </Link>
          ))}
        </nav>
      )}
    </article>
  );
}
