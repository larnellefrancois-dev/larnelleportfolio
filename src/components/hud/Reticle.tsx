'use client';
import { useEffect, useRef, useState } from 'react';
import usePrefersReducedMotion from '@/components/motion/usePrefersReducedMotion';

/** Accent reticle that trails the pointer and flares over interactive
    elements. Desktop pointer:fine only; the native cursor stays visible. */
export default function Reticle() {
  const reduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setEnabled(window.matchMedia('(pointer: fine)').matches);
  }, []);

  useEffect(() => {
    if (!enabled || reduced) return;
    const el = ring.current;
    if (!el) return;

    let targetX = -100;
    let targetY = -100;
    let x = targetX;
    let y = targetY;
    let raf = 0;
    let active = false;

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      const hit = (event.target as Element | null)?.closest?.(
        'a, button, [role="button"], input, select, textarea, summary, [tabindex]'
      );
      const nowActive = Boolean(hit);
      if (nowActive !== active) {
        active = nowActive;
        el.dataset.state = active ? 'active' : 'idle';
      }
    };

    const tick = () => {
      x += (targetX - x) * 0.22;
      y += (targetY - y) * 0.22;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled, reduced]);

  if (!enabled || reduced) return null;

  return (
    <div ref={ring} className="hud-reticle" data-state="idle" aria-hidden="true">
      <span className="hud-reticle__ring" />
      <span className="hud-reticle__dot" />
    </div>
  );
}
