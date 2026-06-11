'use client';
import { useEffect, useState } from 'react';
import { useGameStore } from '@/state/gameStore';
import useSound from '@/sound/useSound';

const VISIBLE_MS = 5200;

/** Displays queued achievement unlocks one at a time, with a synthesized
    chime. aria-live so screen readers announce the unlock. */
export default function AchievementToast() {
  const toast = useGameStore((s) => s.toastQueue[0] ?? null);
  const popToast = useGameStore((s) => s.popToast);
  const { play } = useSound();
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!toast) return;
    setLeaving(false);
    play('chime');
    const exitTimer = window.setTimeout(() => setLeaving(true), VISIBLE_MS - 400);
    const popTimer = window.setTimeout(() => popToast(), VISIBLE_MS);
    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(popTimer);
    };
  }, [toast, play, popToast]);

  return (
    <div className="hud-toast-region" role="status" aria-live="polite">
      {toast && (
        <div className="hud-toast" data-leaving={leaving || undefined} key={toast.id}>
          <span className="hud-toast__eyebrow">Record updated</span>
          <strong className="hud-toast__title">{toast.title}</strong>
          <span className="hud-toast__body">{toast.description}</span>
          <span className="hud-toast__reward">{toast.reward}</span>
        </div>
      )}
    </div>
  );
}
