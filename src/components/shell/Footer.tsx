import React from 'react';
import Link from 'next/link';
import { SECTIONS, SECTION_NAV, CONTACT_EMAIL, type SectionId } from '@/lib/site-nav';

/** Unified footer, identical structure across all pages. Shows section
    links contextual to the current vertical plus global links. */
export default function Footer({ active }: { active: SectionId }) {
  const year = new Date().getFullYear();
  const contextual = active === 'home' ? SECTIONS.map((s) => ({ label: s.label, href: s.href })) : SECTION_NAV[active];

  return (
    <footer className="shell-footer">
      <div className="ds-container shell-footer__grid">
        <div>
          <p className="shell-footer__brand">L.F. Chambers<span style={{ color: 'var(--accent)' }}>.</span></p>
          <p className="shell-footer__tag">A multidisciplinary portfolio across image, interface, and story.</p>
        </div>

        <nav aria-label="Sections">
          <h3>Realms</h3>
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.id}><Link href={s.href}>{s.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="This section">
          <h3>{active === 'home' ? 'Explore' : 'In this realm'}</h3>
          <ul>
            {contextual.slice(0, 6).map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Connect">
          <h3>Connect</h3>
          <ul>
            <li><Link href="/contact">Contact</Link></li>
            <li><a href={`mailto:${CONTACT_EMAIL}`}>Email</a></li>
            <li><a href="https://www.linkedin.com/in/larnelle-chambers-143b3b329/" target="_blank" rel="noreferrer noopener">LinkedIn</a></li>
          </ul>
        </nav>
      </div>
      <div className="shell-footer__legal">
        © {year} Larnelle Chambers / L.F. Chambers. Works across image, interface, and story.
      </div>
    </footer>
  );
}
