'use client';
import { useEffect } from 'react';
import type { RealmId } from '@/data/discovery-map';
import { useGameStore } from '@/state/gameStore';
import { audioEngine } from './AudioEngine';

/** Headless component: unlocks the AudioContext on the first user gesture,
    keeps the engine in sync with the persisted mute/volume preferences, and
    crossfades the ambient bed when the realm changes. */
export default function SoundProvider({ realm }: { realm: RealmId }) {
  const muted = useGameStore((s) => s.muted);
  const volume = useGameStore((s) => s.volume);

  useEffect(() => {
    const unlock = () => {
      audioEngine.unlock();
      if (!useGameStore.getState().muted) audioEngine.play('chime');
    };
    window.addEventListener('pointerdown', unlock, { once: true, passive: true });
    window.addEventListener('keydown', unlock, { once: true });
    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, []);

  useEffect(() => {
    audioEngine.setMuted(muted);
  }, [muted]);

  useEffect(() => {
    audioEngine.setVolume(volume);
  }, [volume]);

  useEffect(() => {
    audioEngine.setRealm(realm);
  }, [realm]);

  return null;
}
