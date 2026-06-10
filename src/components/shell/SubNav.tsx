'use client';
import React from 'react';
import Link from 'next/link';
import CinematicRouteLink from '@/components/motion/CinematicRouteLink';
import { SECTION_NAV, type SectionId } from '@/lib/site-nav';

/** Desktop secondary navigation for the active section. Hidden on home
    and on mobile (the mobile menu carries these links instead). */
export default function SubNav({ active, pathname }: { active: SectionId; pathname: string }) {
  const links = SECTION_NAV[active];
  if (!links || links.length === 0) return null;

  return (
    <nav className="shell-subnav" aria-label="Section navigation">
      <div className="shell-subnav__inner">
        {links.map((link) =>
          active === 'literature' && link.href === '/literature/archive' ? (
            <CinematicRouteLink
              key={link.href}
              href={link.href}
              kind="archive"
              title="Accessing Archive"
              subtitle="ICSE / NAIAD recovered record"
              numeral="I"
              indexLabel="VY-0031"
              aria-current={pathname === link.href ? 'page' : undefined}
              images={[
                '/assets/images/veyrath-kaen-bloom.png',
                '/assets/hyperframes/archive-rupture.svg',
                '/assets/motion/pale-interval-signal-loop.svg',
                '/assets/images/art/shine-archive.jpg',
              ]}
            >
              {link.label}
            </CinematicRouteLink>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
