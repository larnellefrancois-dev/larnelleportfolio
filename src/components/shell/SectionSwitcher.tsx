'use client';
import React from 'react';
import Link from 'next/link';
import { SECTIONS, type SectionId } from '@/lib/site-nav';

/** Persistent product/section switcher. Real links; active section marked
    with aria-current. Appears in the header on every page. */
export default function SectionSwitcher({ active }: { active: SectionId }) {
  return (
    <nav className="switcher" aria-label="Switch section">
      {SECTIONS.map((section) => (
        <Link
          key={section.id}
          href={section.href}
          className="switcher__item"
          aria-current={section.id === active ? 'true' : undefined}
        >
          {section.label}
        </Link>
      ))}
    </nav>
  );
}
