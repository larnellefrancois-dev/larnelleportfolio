/* Synthesized one-shot UI sounds. Each function schedules a short envelope
   against the shared context and lets the nodes garbage-collect after stop. */

export type SfxName = 'hover' | 'confirm' | 'portal' | 'declassify' | 'chime' | 'denied';

function blip(
  ctx: AudioContext,
  dest: AudioNode,
  frequency: number,
  start: number,
  peak: number,
  duration: number,
  type: OscillatorType = 'sine'
) {
  const o = ctx.createOscillator();
  o.type = type;
  o.frequency.value = frequency;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, start);
  g.gain.exponentialRampToValueAtTime(peak, start + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  o.connect(g);
  g.connect(dest);
  o.start(start);
  o.stop(start + duration + 0.05);
}

const SFX: Record<SfxName, (ctx: AudioContext, dest: AudioNode) => void> = {
  hover: (ctx, dest) => {
    blip(ctx, dest, 1400, ctx.currentTime, 0.035, 0.06);
  },

  confirm: (ctx, dest) => {
    const t = ctx.currentTime;
    blip(ctx, dest, 880, t, 0.06, 0.09);
    blip(ctx, dest, 1320, t + 0.07, 0.05, 0.14);
  },

  portal: (ctx, dest) => {
    const t = ctx.currentTime;
    const length = 0.72;
    const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * length), ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      const fade = 1 - i / data.length;
      data[i] = (Math.random() * 2 - 1) * fade;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const sweep = ctx.createBiquadFilter();
    sweep.type = 'bandpass';
    sweep.Q.value = 4.8;
    sweep.frequency.setValueAtTime(220, t);
    sweep.frequency.exponentialRampToValueAtTime(5200, t + length * 0.68);
    sweep.frequency.exponentialRampToValueAtTime(780, t + length);

    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.16, t + 0.08);
    g.gain.exponentialRampToValueAtTime(0.0001, t + length);
    noise.connect(sweep);
    sweep.connect(g);
    g.connect(dest);
    noise.start(t);
    noise.stop(t + length);

    blip(ctx, dest, 90, t + 0.04, 0.08, 0.42, 'sine');
    blip(ctx, dest, 740, t + 0.2, 0.045, 0.34, 'triangle');
    blip(ctx, dest, 1110, t + 0.38, 0.03, 0.28, 'triangle');
  },

  denied: (ctx, dest) => {
    blip(ctx, dest, 180, ctx.currentTime, 0.07, 0.14, 'square');
  },

  /** Filtered-noise sweep used for the hold-to-declassify scrub. */
  declassify: (ctx, dest) => {
    const t = ctx.currentTime;
    const length = 0.45;
    const buffer = ctx.createBuffer(1, ctx.sampleRate * length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const band = ctx.createBiquadFilter();
    band.type = 'bandpass';
    band.Q.value = 6;
    band.frequency.setValueAtTime(400, t);
    band.frequency.exponentialRampToValueAtTime(3000, t + length);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.07, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + length);
    src.connect(band);
    band.connect(g);
    g.connect(dest);
    src.start(t);
    src.stop(t + length);
  },

  /** Three-note ascending chime for achievements. */
  chime: (ctx, dest) => {
    const t = ctx.currentTime;
    blip(ctx, dest, 660, t, 0.06, 0.5);
    blip(ctx, dest, 880, t + 0.12, 0.06, 0.5);
    blip(ctx, dest, 1320, t + 0.24, 0.05, 0.7);
  },
};

export function playSfx(ctx: AudioContext, dest: AudioNode, name: SfxName) {
  SFX[name](ctx, dest);
}
