'use client';
import React from 'react';
import Link from 'next/link';
import { SECTIONS, type SectionId } from '@/lib/site-nav';
import useSound from '@/sound/useSound';

/** Persistent product/section switcher. Real links; active section marked
    with aria-current. Appears in the header on every page. */
export default function SectionSwitcher({ active }: { active: SectionId }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const { play } = useSound();

  React.useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className="switcher" ref={ref}>
      <button
        type="button"
        className="switcher__button"
        aria-label="Open realm switcher"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => {
          play(open ? 'hover' : 'chime');
          setOpen((value) => !value);
        }}
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} aria-hidden="true" />
        ))}
      </button>
      {open && (
        <div className="switcher__panel" role="menu" aria-label="Portfolio realms">
          <Link
            href="/"
            className="switcher__app-card"
            role="menuitem"
            onClick={() => setOpen(false)}
            onPointerEnter={() => play('hover')}
          >
            <span>00</span>
            <b>Portal</b>
            <em>Realm gate</em>
          </Link>
          {SECTIONS.map((section, index) => (
            <Link
              key={section.id}
              href={section.href}
              className="switcher__app-card"
              aria-current={section.id === active ? 'true' : undefined}
              role="menuitem"
              onClick={() => setOpen(false)}
              onPointerEnter={() => play('hover')}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <b>{section.label}</b>
              <em>{section.arcane}</em>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
