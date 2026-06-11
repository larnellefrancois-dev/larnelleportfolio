'use client';
import React from 'react';
import Link from 'next/link';
import { SECTIONS, SECTION_NAV, CONTACT_EMAIL, type SectionId } from '@/lib/site-nav';
import { DISCOVERY_TOTAL } from '@/data/discovery-map';
import { useDiscoveryCount } from '@/state/gameStore';

const REALM_SIGIL: Record<SectionId, string> = {
  home: '◈',
  product: 'M·II',
  art: 'M·I',
  literature: 'M·III',
};

/** Transmission footer: a corner-bracketed instrument panel closing every
    page — identity block, realm/section/connect indexes in mono, and a live
    status strip carrying the archive readout. */
export default function Footer({ active }: { active: SectionId }) {
  const year = new Date().getFullYear();
  const { found } = useDiscoveryCount();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const contextual =
    active === 'home'
      ? SECTIONS.map((s) => ({ label: s.label, href: s.href }))
      : SECTION_NAV[active];

  return (
    <footer className="shell-footer">
      <div className="shell-footer__frame">
        <span className="shell-footer__corner shell-footer__corner--tl" aria-hidden="true" />
        <span className="shell-footer__corner shell-footer__corner--tr" aria-hidden="true" />
        <span className="shell-footer__corner shell-footer__corner--bl" aria-hidden="true" />
        <span className="shell-footer__corner shell-footer__corner--br" aria-hidden="true" />

        <div className="shell-footer__grid">
          <div className="shell-footer__identity">
            <p className="shell-footer__sigil" aria-hidden="true">
              {REALM_SIGIL[active]}
            </p>
            <p className="shell-footer__brand">
              L.F. Chambers<span style={{ color: 'var(--accent)' }}>.</span>
            </p>
            <p className="shell-footer__tag">
              A multidisciplinary archive across image, interface, and story.
            </p>
            <p className="shell-footer__coords" aria-hidden="true">
              18.0179° N — 76.8099° W // KINGSTON RELAY
            </p>
          </div>

          <nav aria-label="Sections">
            <h3>◉ Realms</h3>
            <ul>
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="This section">
            <h3>◉ {active === 'home' ? 'Explore' : 'This realm'}</h3>
            <ul>
              {contextual.slice(0, 6).map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Connect">
            <h3>◉ Uplink</h3>
            <ul>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/making-of">Making Of</Link>
              </li>
              <li>
                <Link href="/product-design/about">Mythology</Link>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`}>Email</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/larnelle-chambers-143b3b329/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="shell-footer__status" aria-label="Archive status">
        <span>
          SIGNAL <b>ACTIVE</b>
        </span>
        <span className="shell-footer__status-divider" aria-hidden="true" />
        <span>
          ARCHIVE{' '}
          <b>
            {mounted ? String(found).padStart(2, '0') : '00'}/{DISCOVERY_TOTAL}
          </b>
        </span>
        <span className="shell-footer__status-divider" aria-hidden="true" />
        <span>
          INDEX <b>LF-{year}</b>
        </span>
        <span className="shell-footer__status-spacer" />
        <span className="shell-footer__legal-line">
          © {year} Larnelle Chambers / L.F. Chambers — image, interface, story
        </span>
      </div>
    </footer>
  );
}
