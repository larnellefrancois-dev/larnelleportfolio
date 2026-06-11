'use client';
import { useEffect, useRef, useState } from 'react';
import { audioEngine } from '@/sound/AudioEngine';

const TRIGGER = 'veyrath';

const LORE_LINES = [
  '> QUERY: VEYRATH',
  'DESIGNATION ... CSB-31B / CALYX SURVEY BODY 31-B',
  'STATUS ........ SEALED UNDER PROTOCOL SEVEN',
  'NOTE .......... the planet is not haunted. it is attentive.',
  'NOTE .......... it keeps what is given with enough pressure:',
  '                grief, rhythm, names said aloud at the wrong moment.',
  'NOTE .......... survivor shorthand for this is unkind but accurate:',
  '                THE ARCHIVE READS YOU BACK.',
  '> CONNECTION CLOSED BY REMOTE HOST',
];

/** Site-wide easter egg: typing "veyrath" anywhere (outside form fields)
    opens a sealed lore terminal. */
export default function LoreTerminal() {
  const [open, setOpen] = useState(false);
  const buffer = useRef('');
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && /^(input|textarea|select)$/i.test(target.tagName)) return;
      if (target?.isContentEditable) return;
      if (event.key.length !== 1) return;
      buffer.current = (buffer.current + event.key.toLowerCase()).slice(-TRIGGER.length);
      if (buffer.current === TRIGGER) {
        buffer.current = '';
        audioEngine.play('declassify');
        setOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="lore-terminal"
      role="dialog"
      aria-modal="true"
      aria-label="Sealed lore terminal"
      onClick={() => setOpen(false)}
    >
      <div className="lore-terminal__panel" onClick={(event) => event.stopPropagation()}>
        {LORE_LINES.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <button
          ref={closeButton}
          type="button"
          className="lore-terminal__close"
          onClick={() => setOpen(false)}
        >
          Sever connection
        </button>
      </div>
    </div>
  );
}
