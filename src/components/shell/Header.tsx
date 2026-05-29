'use client';
import React from 'react';
import Link from 'next/link';
import { brandFor, type SectionId, CONTACT_EMAIL } from '@/lib/site-nav';
import SectionSwitcher from './SectionSwitcher';

interface Props {
  active: SectionId;
  onOpenMenu: () => void;
  menuOpen: boolean;
}

/** Global header: identity lockup, persistent section switcher, contact
    action, and mobile menu trigger. Rendered on every non-portal page. */
export default function Header({ active, onOpenMenu, menuOpen }: Props) {
  const brand = brandFor(active);
  return (
    <header className="shell-header">
      <div className="shell-header__inner">
        <Link href="/" className="shell-brand" aria-label={`${brand.name} — home`}>
          <span className="shell-brand__name">{brand.name}</span>
          <span className="shell-brand__tag">{brand.tagline}</span>
        </Link>

        <div className="shell-header__spacer" />

        <SectionSwitcher active={active} />

        <a className="ds-btn ds-btn--ghost shell-header__contact" href={`mailto:${CONTACT_EMAIL}`}>
          Contact
        </a>

        <button
          className="shell-menu-btn"
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
          onClick={onOpenMenu}
        >
          Menu ☰
        </button>
      </div>
    </header>
  );
}
