'use client';
import { useCallback } from 'react';
import { useGameStore } from '@/state/gameStore';
import { audioEngine, type SfxName } from './AudioEngine';

export default function useSound() {
  const muted = useGameStore((s) => s.muted);
  const setMuted = useGameStore((s) => s.setMuted);

  const play = useCallback((name: SfxName) => {
    audioEngine.play(name);
  }, []);

  const toggleMute = useCallback(() => {
    const nextMuted = !useGameStore.getState().muted;
    setMuted(nextMuted);
    audioEngine.setMuted(nextMuted);
    if (!nextMuted) audioEngine.play('confirm');
  }, [setMuted]);

  return { play, muted, toggleMute };
}
