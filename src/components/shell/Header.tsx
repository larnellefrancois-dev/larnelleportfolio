'use client';
import React from 'react';
import CinematicRouteLink from '@/components/motion/CinematicRouteLink';
import { type SectionId, CONTACT_EMAIL, SECTION_NAV } from '@/lib/site-nav';
import SectionSwitcher from './SectionSwitcher';
import useSound from '@/sound/useSound';

const REALM_DESIGNATION: Record<SectionId, string> = {
  home: 'PORTAL',
  product: 'SYSTEMS',
  art: 'VISUAL ARTS',
  literature: 'SCRIPTORIUM',
};

interface Props {
  active: SectionId;
  pathname: string;
  onOpenMenu: () => void;
  menuOpen: boolean;
}

/** Global header styled as the archive's instrument panel: signal bar along
    the top edge, corner ticks, identity lockup with the realm designation,
    persistent section switcher, audio toggle, contact action. */
export default function Header({ active, pathname, onOpenMenu, menuOpen }: Props) {
  const { muted, toggleMute } = useSound();
  const sectionLinks = SECTION_NAV[active] ?? [];

  return (
    <header className="shell-header" data-active-realm={active}>
      <span className="shell-header__signal" aria-hidden="true" />
      <span className="shell-header__tick shell-header__tick--l" aria-hidden="true" />
      <span className="shell-header__tick shell-header__tick--r" aria-hidden="true" />
      <div className="shell-header__inner">
        {sectionLinks.length > 0 && (
          <nav className="shell-primary-nav" aria-label={`${REALM_DESIGNATION[active]} navigation`}>
            {sectionLinks.map((link, index) => {
              const current = pathname === link.href;
              const content = (
                <>
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <b>{link.label}</b>
                </>
              );
              if (active === 'literature' && link.href === '/literature/archive') {
                return (
                  <CinematicRouteLink
                    key={link.href}
                    href={link.href}
                    className="shell-primary-nav__item"
                    aria-current={current ? 'page' : undefined}
                    kind="archive"
                    title="Accessing Archive"
                    subtitle="ICSE / NAIAD recovered record"
                    numeral="I"
                    indexLabel="VY-0031"
                    images={[
                      '/assets/images/veyrath-kaen-bloom.png',
                      '/assets/hyperframes/archive-rupture.svg',
                      '/assets/motion/pale-interval-signal-loop.svg',
                      '/assets/images/art/shine-archive.jpg',
                    ]}
                  >
                    {content}
                  </CinematicRouteLink>
                );
              }
              return (
                <CinematicRouteLink
                  key={link.href}
                  href={link.href}
                  className="shell-primary-nav__item"
                  aria-current={current ? 'page' : undefined}
                  title={`Opening ${link.label}`}
                  subtitle={`${REALM_DESIGNATION[active]} / ${link.label}`}
                  numeral={String(index + 1).padStart(2, '0')}
                >
                  {content}
                </CinematicRouteLink>
              );
            })}
          </nav>
        )}

        <SectionSwitcher active={active} />

        <button
          type="button"
          className="shell-header__audio"
          aria-pressed={!muted}
          aria-label={muted ? 'Enable audio' : 'Disable audio'}
          onClick={() => {
            toggleMute();
          }}
        >
          {muted ? '◌ SND' : '◉ SND'}
        </button>

        <a className="ds-btn ds-btn--ghost shell-header__contact" href={`mailto:${CONTACT_EMAIL}`}>
          Contact
        </a>

        <button
          className="shell-menu-btn"
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
          onClick={onOpenMenu}
        >
          MENU ▤
        </button>
      </div>
    </header>
  );
}
