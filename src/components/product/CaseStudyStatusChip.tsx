'use client';
import React from 'react';
import { useGameStore } from '@/state/gameStore';

/** HUD chip on case-study cards: UNREAD until the study has been opened
    this save, then ANALYZED. Renders nothing for non-case-study links. */
export default function CaseStudyStatusChip({ href }: { href: string }) {
  const [mounted, setMounted] = React.useState(false);
  const opened = useGameStore((s) => s.openedCaseStudies);

  React.useEffect(() => setMounted(true), []);

  const match = href.match(/^\/case-studies\/([^/]+)/);
  if (!match || !mounted) return null;
  const analyzed = opened.includes(match[1]);

  return (
    <span
      className="hud-chip"
      data-state={analyzed ? 'done' : 'pending'}
      aria-label={analyzed ? 'Case study analyzed' : 'Case study unread'}
    >
      {analyzed ? '◉ ANALYZED' : '◌ UNREAD'}
    </span>
  );
}
