/* Singleton Web Audio engine. The AudioContext is constructed only inside
   unlock(), which SoundProvider calls from the first user gesture — nothing
   ever autoplays. Ambient patches crossfade over ~3s on realm changes. */

import type { RealmId } from '@/data/discovery-map';
import { startAmbientPatch, type PatchHandle } from './patches';
import { playSfx, type SfxName } from './sfx';

const AMBIENT_LEVEL = 0.06;
const SFX_LEVEL = 0.82;
const CROSSFADE_S = 3;

class AudioEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private ambientBus: GainNode | null = null;
  private sfxBus: GainNode | null = null;
  private current: PatchHandle | null = null;
  private realm: RealmId = 'home';
  private muted = false;
  private volume = 0.7;

  get unlocked(): boolean {
    return this.ctx !== null;
  }

  unlock(): boolean {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') void this.ctx.resume();
      return true;
    }
    const ctx = new AudioContext();
    const compressor = ctx.createDynamicsCompressor();
    compressor.connect(ctx.destination);

    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : this.volume;
    this.master.connect(compressor);

    this.ambientBus = ctx.createGain();
    this.ambientBus.gain.value = AMBIENT_LEVEL;
    this.ambientBus.connect(this.master);

    this.sfxBus = ctx.createGain();
    this.sfxBus.gain.value = SFX_LEVEL;
    this.sfxBus.connect(this.master);

    this.ctx = ctx;
    this.startAmbient(this.realm, 1.5);
    return true;
  }

  setRealm(realm: RealmId) {
    if (realm === this.realm && this.current) return;
    this.realm = realm;
    if (!this.ctx) return;
    this.startAmbient(realm, CROSSFADE_S);
  }

  private startAmbient(realm: RealmId, fadeSeconds: number) {
    const ctx = this.ctx;
    if (!ctx || !this.ambientBus) return;
    const t = ctx.currentTime;

    const old = this.current;
    if (old) {
      old.gain.gain.cancelScheduledValues(t);
      old.gain.gain.setValueAtTime(old.gain.gain.value, t);
      old.gain.gain.linearRampToValueAtTime(0, t + fadeSeconds);
      window.setTimeout(() => old.dispose(), fadeSeconds * 1000 + 200);
    }

    const next = startAmbientPatch(ctx, this.ambientBus, realm);
    next.gain.gain.setValueAtTime(0, t);
    next.gain.gain.linearRampToValueAtTime(1, t + fadeSeconds);
    this.current = next;
  }

  play(name: SfxName) {
    if (!this.ctx) this.unlock();
    if (!this.ctx || !this.sfxBus || this.muted) return;
    if (this.ctx.state === 'suspended') void this.ctx.resume();
    playSfx(this.ctx, this.sfxBus, name);
  }

  setMuted(muted: boolean) {
    this.muted = muted;
    this.applyMaster();
  }

  setVolume(volume: number) {
    this.volume = volume;
    this.applyMaster();
  }

  private applyMaster() {
    if (!this.ctx || !this.master) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setValueAtTime(this.master.gain.value, t);
    this.master.gain.linearRampToValueAtTime(this.muted ? 0 : this.volume, t + 0.25);
  }
}

export const audioEngine = new AudioEngine();
export type { SfxName };
