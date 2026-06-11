'use client';
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
  Noise,
  Vignette,
} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import type { QualityTier } from '@/state/gameStore';

/* Cinematic grade for tier 2 only: soft bloom on the emissive accents, a
   whisper of chromatic aberration and film grain, and a vignette that deepens
   the void. Tier 1 skips the composer entirely (it costs a full-screen pass). */

export default function Effects({ tier }: { tier: QualityTier }) {
  if (tier < 2) return null;

  return (
    <EffectComposer>
      <Bloom intensity={0.55} luminanceThreshold={0.18} luminanceSmoothing={0.32} mipmapBlur />
      <ChromaticAberration offset={[0.0009, 0.0006]} />
      <Noise premultiply blendFunction={BlendFunction.SCREEN} opacity={0.55} />
      <Vignette eskil={false} offset={0.18} darkness={0.78} />
    </EffectComposer>
  );
}
