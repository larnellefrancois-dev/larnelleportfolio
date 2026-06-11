'use client';
import { useEffect, useState } from 'react';
import usePrefersReducedMotion from '@/components/motion/usePrefersReducedMotion';
import { useGameStore, type QualityTier } from '@/state/gameStore';
import { detectTier } from './capabilities';

/** Resolved rendering tier, or null while detection is still running.
    Callers should treat null as "keep the tier-0 presentation". */
export default function useQualityTier(): QualityTier | null {
  const [detected, setDetected] = useState<QualityTier | null>(null);
  const reduced = usePrefersReducedMotion();
  const override = useGameStore((s) => s.qualityOverride);
  const contextLost = useGameStore((s) => s.contextLost);

  useEffect(() => {
    let live = true;
    detectTier().then((tier) => {
      if (live) setDetected(tier);
    });
    return () => {
      live = false;
    };
  }, []);

  if (contextLost || reduced) return 0;
  if (override !== null) return override;
  return detected;
}
