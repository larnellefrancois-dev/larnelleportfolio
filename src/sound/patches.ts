/* Per-realm ambient synth patches. Everything is synthesized — no audio
   files. Each patch returns its top-level gain (used for crossfades) and a
   dispose() that stops every node and clears timers. Levels are deliberately
   low: ambience should sit under the room tone, not on top of it. */

import type { RealmId } from '@/data/discovery-map';

export interface PatchHandle {
  gain: GainNode;
  dispose: () => void;
}

function noiseBuffer(ctx: AudioContext, seconds = 2): AudioBuffer {
  const buffer = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < data.length; i++) {
    // Lightly lowpassed white noise reads as wind rather than static.
    const white = Math.random() * 2 - 1;
    last = last * 0.96 + white * 0.04;
    data[i] = last * 8;
  }
  return buffer;
}

function osc(
  ctx: AudioContext,
  type: OscillatorType,
  frequency: number,
  out: AudioNode,
  gainValue: number
): { osc: OscillatorNode; gain: GainNode } {
  const o = ctx.createOscillator();
  o.type = type;
  o.frequency.value = frequency;
  const g = ctx.createGain();
  g.gain.value = gainValue;
  o.connect(g);
  g.connect(out);
  o.start();
  return { osc: o, gain: g };
}

/** Scriptorium — a deep beating drone with band-filtered wind. The 0.7Hz
    detune between the two sines produces the slow "breathing" interference. */
function literaturePatch(ctx: AudioContext): PatchHandle {
  const out = ctx.createGain();
  out.gain.value = 0;

  const a = osc(ctx, 'sine', 55, out, 0.5);
  const b = osc(ctx, 'sine', 55.7, out, 0.4);

  const wind = ctx.createBufferSource();
  wind.buffer = noiseBuffer(ctx);
  wind.loop = true;
  const band = ctx.createBiquadFilter();
  band.type = 'bandpass';
  band.frequency.value = 220;
  band.Q.value = 2.2;
  const windGain = ctx.createGain();
  windGain.gain.value = 0.12;
  wind.connect(band);
  band.connect(windGain);
  windGain.connect(out);
  wind.start();

  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.05;
  const lfoDepth = ctx.createGain();
  lfoDepth.gain.value = 120;
  lfo.connect(lfoDepth);
  lfoDepth.connect(band.frequency);
  lfo.start();

  return {
    gain: out,
    dispose: () => {
      [a.osc, b.osc, wind, lfo].forEach((n) => n.stop());
      out.disconnect();
    },
  };
}

/** Systema — a filtered pulse bed with a metronomic tick once per second. */
function productPatch(ctx: AudioContext): PatchHandle {
  const out = ctx.createGain();
  out.gain.value = 0;

  const bed = osc(ctx, 'square', 110, out, 0);
  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = 260;
  bed.gain.disconnect();
  bed.gain.connect(lp);
  lp.connect(out);
  bed.gain.gain.value = 0.16;

  const tick = osc(ctx, 'sine', 1900, out, 0);
  const interval = window.setInterval(() => {
    const t = ctx.currentTime;
    tick.gain.gain.cancelScheduledValues(t);
    tick.gain.gain.setValueAtTime(0.05, t);
    tick.gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
  }, 1000);

  return {
    gain: out,
    dispose: () => {
      window.clearInterval(interval);
      [bed.osc, tick.osc].forEach((n) => n.stop());
      out.disconnect();
    },
  };
}

/** Ars Visualis — a warm detuned-triangle pad with a slow tremolo. */
function artPatch(ctx: AudioContext): PatchHandle {
  const out = ctx.createGain();
  out.gain.value = 0;

  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = 520;
  lp.connect(out);

  const voices = [110, 110.8, 164.8].map((f, i) =>
    osc(ctx, 'triangle', f, lp, i === 2 ? 0.18 : 0.26)
  );

  const tremolo = ctx.createOscillator();
  tremolo.frequency.value = 0.08;
  const depth = ctx.createGain();
  depth.gain.value = 0.08;
  tremolo.connect(depth);
  voices.forEach((v) => depth.connect(v.gain.gain));
  tremolo.start();

  return {
    gain: out,
    dispose: () => {
      voices.forEach((v) => v.osc.stop());
      tremolo.stop();
      out.disconnect();
    },
  };
}

/** Portal — near-subsonic hum with high, airy noise. Deep space at idle. */
function homePatch(ctx: AudioContext): PatchHandle {
  const out = ctx.createGain();
  out.gain.value = 0;

  const hum = osc(ctx, 'sine', 41, out, 0.5);

  const air = ctx.createBufferSource();
  air.buffer = noiseBuffer(ctx);
  air.loop = true;
  const hp = ctx.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = 2600;
  const airGain = ctx.createGain();
  airGain.gain.value = 0.04;
  air.connect(hp);
  hp.connect(airGain);
  airGain.connect(out);
  air.start();

  return {
    gain: out,
    dispose: () => {
      hum.osc.stop();
      air.stop();
      out.disconnect();
    },
  };
}

export function startAmbientPatch(
  ctx: AudioContext,
  destination: AudioNode,
  realm: RealmId
): PatchHandle {
  const factory = {
    literature: literaturePatch,
    product: productPatch,
    art: artPatch,
    home: homePatch,
  }[realm];
  const handle = factory(ctx);
  handle.gain.connect(destination);
  return handle;
}
