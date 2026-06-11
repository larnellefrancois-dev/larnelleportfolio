'use client';
import type { QualityTier } from '@/state/gameStore';

/* Quality tiers:
   0 — canvas never mounts; the CSS/SVG motion system carries the experience.
   1 — dpr 1, reduced particle counts, no postprocessing.
   2 — full fidelity. */

let cached: Promise<QualityTier> | null = null;

function baselineBlocks(): boolean {
  if (typeof window === 'undefined') return true;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;

  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean };
    deviceMemory?: number;
  };
  if (nav.connection?.saveData) return true;
  if (typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 2) return true;

  const probe = document.createElement('canvas');
  const gl = probe.getContext('webgl2');
  if (!gl) return true;
  gl.getExtension('WEBGL_lose_context')?.loseContext();
  return false;
}

export function detectTier(): Promise<QualityTier> {
  if (!cached) {
    cached = (async (): Promise<QualityTier> => {
      if (baselineBlocks()) return 0;
      try {
        const { getGPUTier } = await import('detect-gpu');
        const gpu = await getGPUTier();
        if (gpu.tier <= 0) return 0;
        if (gpu.tier === 1 || gpu.isMobile) return 1;
        return 2;
      } catch {
        // GPU benchmark unavailable (offline, blocked CDN) — assume modest hardware.
        return 1;
      }
    })();
  }
  return cached;
}
