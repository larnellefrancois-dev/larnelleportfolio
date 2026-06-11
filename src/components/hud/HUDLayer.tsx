'use client';
import type { RealmId } from '@/data/discovery-map';
import { DISCOVERY_TOTAL } from '@/data/discovery-map';
import { useDiscoveryCount } from '@/state/gameStore';
import useSound from '@/sound/useSound';
import Scanlines from './Scanlines';
import Reticle from './Reticle';
import AchievementToast from './AchievementToast';
import LoreTerminal from './LoreTerminal';

const REALM_DESIGNATIONS: Record<RealmId, string> = {
  home: 'PORTAL // ICSE ARCHIVE',
  product: 'SYSTEMA — M·II',
  art: 'ARS VISUALIS — M·I',
  literature: 'SCRIPTORIUM — M·III',
};

interface Props {
  realm: RealmId;
  /** Portal renders a stripped HUD: no status strip, just toasts + audio. */
  bare?: boolean;
}

/** Fixed diegetic overlay: realm designation, discovery counter, audio
    toggle, scanlines, reticle, and the achievement toast region. Everything
    is pointer-events:none except the controls themselves. */
export default function HUDLayer({ realm, bare = false }: Props) {
  const { found } = useDiscoveryCount();
  const { muted, toggleMute, play } = useSound();

  return (
    <div className="hud-layer" data-realm={realm}>
      <Scanlines />
      <Reticle />
      <AchievementToast />
      <LoreTerminal />

      {!bare && (
        <div className="hud-status" aria-hidden="true">
          <span className="hud-status__realm">{REALM_DESIGNATIONS[realm]}</span>
          <span className="hud-status__divider" />
          <span className="hud-status__counter">
            ARCHIVE {String(found).padStart(2, '0')}/{DISCOVERY_TOTAL}
          </span>
        </div>
      )}

      <button
        type="button"
        className="hud-mute"
        aria-pressed={!muted}
        aria-label={muted ? 'Enable audio' : 'Disable audio'}
        onClick={() => {
          toggleMute();
          if (muted) play('confirm');
        }}
      >
        <span className="hud-mute__icon" data-muted={muted || undefined} aria-hidden="true" />
        <span className="hud-mute__label">{muted ? 'AUDIO OFF' : 'AUDIO ON'}</span>
      </button>
    </div>
  );
}
