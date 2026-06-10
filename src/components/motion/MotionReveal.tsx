'use client';

import React from 'react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

export type MotionRevealVariant = 'lift' | 'fade' | 'scale' | 'clip' | 'stagger';

export interface MotionRevealProps {
  children: React.ReactNode;
  delay?: number;
  variant?: MotionRevealVariant;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export default function MotionReveal({
  children,
  delay = 0,
  variant = 'lift',
  className,
  style,
  as = 'div',
  ...rest
}: MotionRevealProps & React.HTMLAttributes<HTMLElement>) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(false);
  const reduced = usePrefersReducedMotion();

  React.useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const revealIfInView = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < viewportHeight * 0.96 && rect.bottom > 0) {
        setVisible(true);
        return true;
      }
      return false;
    };

    if (revealIfInView()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px 12% 0px', threshold: 0.01 }
    );
    observer.observe(node);

    const frame = window.requestAnimationFrame(revealIfInView);
    const failOpen = window.setTimeout(() => setVisible(true), 1800);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.clearTimeout(failOpen);
    };
  }, [reduced]);

  const Component = as;

  return (
    <Component
      ref={ref as React.Ref<never>}
      {...rest}
      className={['motion-reveal', `motion-reveal--${variant}`, visible && 'is-visible', className]
        .filter(Boolean)
        .join(' ')}
      style={{ ...style, '--motion-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Component>
  );
}
