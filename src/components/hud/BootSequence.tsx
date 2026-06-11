'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import usePrefersReducedMotion from '@/components/motion/usePrefersReducedMotion';
import { useGameStore } from '@/state/gameStore';
import { audioEngine } from '@/sound/AudioEngine';

/* First-visit ICSE terminal boot over the portal. Runs once per save
   (hasBooted persists), is skippable with any key/click, and its INITIALIZE
   action doubles as the user gesture that unlocks the AudioContext. */

const BOOT_LINES = [
  'ICSE ARCHIVE INTERFACE v3.1',
  'ESTABLISHING UPLINK .......... OK',
  'CALYX SURVEY BODY 31-B ....... SIGNAL FOUND',
  'LOADING REALM INDEX [ M·I / M·II / M·III ]',
  'CLEARANCE LEVEL .............. VISITOR',
  'AUDIO BUS .................... STANDBY',
];

const LINE_INTERVAL_MS = 420;

export default function BootSequence() {
  const hasBooted = useGameStore((s) => s.hasBooted);
  const setBooted = useGameStore((s) => s.setBooted);
  const reduced = usePrefersReducedMotion();

  const [mounted, setMounted] = useState(false);
  const [lines, setLines] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const dismissed = useRef(false);

  // Persisted state is rehydrated after first render; wait for mount so a
  // returning visitor never sees a boot flash.
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || hasBooted || reduced) return;
    if (lines >= BOOT_LINES.length) return;
    const t = window.setTimeout(() => setLines((n) => n + 1), LINE_INTERVAL_MS);
    return () => window.clearTimeout(t);
  }, [mounted, hasBooted, reduced, lines]);

  const complete = useCallback(() => {
    if (dismissed.current) return;
    dismissed.current = true;
    audioEngine.unlock();
    setLeaving(true);
    window.setTimeout(() => setBooted(), 650);
  }, [setBooted]);

  // Any keypress skips/confirms.
  useEffect(() => {
    if (!mounted || hasBooted) return;
    const onKey = () => complete();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mounted, hasBooted, complete]);

  if (!mounted || hasBooted) return null;

  const shown = reduced ? BOOT_LINES.length : lines;
  const ready = shown >= BOOT_LINES.length;

  return (
    <div
      className="boot-sequence"
      data-leaving={leaving || undefined}
      role="dialog"
      aria-label="Archive boot sequence"
      onClick={complete}
    >
      <div className="boot-sequence__terminal">
        {BOOT_LINES.slice(0, shown).map((line) => (
          <p className="boot-sequence__line" key={line}>
            {line}
          </p>
        ))}
        {ready && (
          <button type="button" className="boot-sequence__cta" onClick={complete} autoFocus>
            &gt; INITIALIZE ARCHIVE_
          </button>
        )}
      </div>
      <span className="boot-sequence__hint">any key to skip</span>
    </div>
  );
}
