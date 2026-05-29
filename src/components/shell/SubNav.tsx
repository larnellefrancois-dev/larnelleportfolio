'use client';
import React from 'react';
import Link from 'next/link';
import { SECTION_NAV, type SectionId } from '@/lib/site-nav';

/** Desktop secondary navigation for the active section. Hidden on home
    and on mobile (the mobile menu carries these links instead). */
export default function SubNav({ active, pathname }: { active: SectionId; pathname: string }) {
  const links = SECTION_NAV[active];
  if (!links || links.length === 0) return null;

  return (
    <nav className="shell-subnav" aria-label="Section navigation">
      <div className="shell-subnav__inner">
        {links.map((link) => {
          const isActive =
            link.href === active || pathname === link.href ||
            (link.href !== `/${active}` && pathname.startsWith(link.href) && link.href.split('/').length > 2);
          return (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
