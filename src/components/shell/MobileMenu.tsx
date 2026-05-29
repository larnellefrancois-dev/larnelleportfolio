'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { SECTIONS, SECTION_NAV, type SectionId } from '@/lib/site-nav';

interface Props {
  open: boolean;
  onClose: () => void;
  pathname: string;
  active: SectionId;
}

/** Full-screen mobile menu: sections + their secondary links. Closes on
    Escape; locks body scroll; focuses the close button on open. */
export default function MobileMenu({ open, onClose, pathname, active }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="shell-mobile" role="dialog" aria-modal="true" aria-label="Site menu">
      <div className="shell-mobile__top">
        <span className="shell-brand__name">Menu</span>
        <button ref={closeRef} className="shell-menu-btn" onClick={onClose}>Close ✕</button>
      </div>
      <div className="shell-mobile__scroll">
        <Link
          href="/"
          className="shell-mobile__section"
          aria-current={pathname === '/' ? 'page' : undefined}
          onClick={onClose}
        >
          <span>Home</span>
          <span className="shell-mobile__arcane">Portal</span>
        </Link>

        {SECTIONS.map((section) => (
          <div className="shell-mobile__group" key={section.id}>
            <Link
              href={section.href}
              className="shell-mobile__section"
              aria-current={section.id === active && pathname === section.href ? 'page' : undefined}
              onClick={onClose}
            >
              <span>{section.label}</span>
              <span className="shell-mobile__arcane">{section.arcane}</span>
            </Link>
            <ul className="shell-mobile__links">
              {SECTION_NAV[section.id].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <Link
          href="/contact"
          className="shell-mobile__section"
          aria-current={pathname.startsWith('/contact') ? 'page' : undefined}
          onClick={onClose}
        >
          <span>Contact</span>
          <span className="shell-mobile__arcane">Inquiries</span>
        </Link>
      </div>
    </div>
  );
}
