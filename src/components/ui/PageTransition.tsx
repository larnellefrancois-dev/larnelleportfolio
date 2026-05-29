'use client';

import React, { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

// ─── Loading Bar ────────────────────────────────────────────────────────────
export function LoadingBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const prevPathname = useRef(pathname);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      // Route changed — complete the bar
      setProgress(100);
      timerRef.current = setTimeout(() => {
        setVisible(false);
        setProgress(0);
        prevPathname.current = pathname;
      }, 400);
    }
  }, [pathname]);

  // Kick off loading bar on mount (initial page load)
  useEffect(() => {
    setVisible(true);
    setProgress(30);
    const t1 = setTimeout(() => setProgress(60), 200);
    const t2 = setTimeout(() => setProgress(80), 500);
    const t3 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setVisible(false), 400);
    }, 800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!visible && progress === 0) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'var(--ink-black)',
          transition: progress === 100
            ? 'width 0.2s ease, opacity 0.4s ease 0.2s' :'width 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)',
          opacity: progress === 100 ? 0 : 1,
        }}
      />
    </div>
  );
}

// ─── Page Transition Wrapper ─────────────────────────────────────────────────
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<'enter' | 'entered'>('enter');

  useEffect(() => {
    setTransitionStage('enter');
    setDisplayChildren(children);
    const t = setTimeout(() => setTransitionStage('entered'), 20);
    return () => clearTimeout(t);
  }, [pathname, children]);

  return (
    <div
      style={{
        opacity: transitionStage === 'enter' ? 0 : 1,
        transform: transitionStage === 'enter' ? 'translateY(8px)' : 'translateY(0)',
        transition: 'opacity 0.35s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.35s cubic-bezier(0.215, 0.61, 0.355, 1)',
      }}
    >
      {displayChildren}
    </div>
  );
}
