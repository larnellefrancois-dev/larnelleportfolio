import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

type Realm = 'home' | 'product' | 'art' | 'literature';

interface CinematicLoopProps {
  realm?: Realm;
}

const palette: Record<Realm, { bg: string; a: string; b: string; c: string }> = {
  home: { bg: '#02030a', a: '#b32435', b: '#f7e6b7', c: '#7da7d9' },
  product: { bg: '#030511', a: '#7da7d9', b: '#f7e6b7', c: '#314f7f' },
  art: { bg: '#070302', a: '#d4b271', b: '#b8412f', c: '#f7e6b7' },
  literature: { bg: '#05060f', a: '#b32435', b: '#7da7d9', c: '#f7e6b7' },
};

export function CinematicLoop({ realm = 'home' }: CinematicLoopProps) {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const p = palette[realm];
  const phase = frame / durationInFrames;
  const drift = interpolate(frame, [0, durationInFrames], [-120, 120]);
  const glow = 0.22 + Math.sin(phase * Math.PI * 2) * 0.08;
  const rotate = interpolate(frame, [0, durationInFrames], [0, 360]);

  return (
    <AbsoluteFill style={{ background: p.bg, overflow: 'hidden' }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${45 + Math.sin(phase * 6.28) * 12}% ${48 + Math.cos(phase * 6.28) * 10}%, ${p.a}${Math.round(glow * 255)
            .toString(16)
            .padStart(2, '0')}, transparent 42%)`,
        }}
      />
      <AbsoluteFill
        style={{
          opacity: 0.26,
          backgroundImage:
            realm === 'product'
              ? `linear-gradient(${p.a}33 1px, transparent 1px), linear-gradient(90deg, ${p.a}26 1px, transparent 1px)`
              : `radial-gradient(2px 2px at 20% 30%, ${p.c}99, transparent), radial-gradient(1px 1px at 80% 65%, ${p.b}88, transparent)`,
          backgroundSize: realm === 'product' ? '86px 86px' : '170px 170px',
          transform: `translate3d(${drift}px, ${-drift / 2}px, 0)`,
        }}
      />
      <svg width="1600" height="900" viewBox="0 0 1600 900" style={{ position: 'absolute' }}>
        <g opacity={realm === 'art' ? 0.62 : 0.34}>
          <path
            d="M-180 720 C270 470 570 610 880 350 S1240 140 1780 240"
            fill="none"
            stroke={p.a}
            strokeWidth={realm === 'art' ? 82 : 28}
            strokeLinecap="round"
            opacity={0.62}
          />
          <path
            d="M120 590 C300 500 450 680 620 575 S910 420 1100 535 S1380 700 1540 565"
            fill="none"
            stroke={p.b}
            strokeWidth={realm === 'literature' ? 5 : 3}
            strokeDasharray={realm === 'literature' ? '16 18' : undefined}
            opacity={0.5}
          />
        </g>
        <g
          transform={`translate(800 450) rotate(${rotate})`}
          fill="none"
          stroke={p.b}
          strokeOpacity={realm === 'home' ? 0.24 : 0.12}
        >
          <circle r="145" />
          <circle r="265" strokeDasharray="10 18" />
          <circle r="405" />
        </g>
        {realm === 'literature' && (
          <>
            <circle cx="610" cy="255" r="86" fill="none" stroke={p.b} strokeOpacity="0.58" />
            <circle cx="735" cy="300" r="58" fill="none" stroke={p.a} strokeOpacity="0.68" />
            <path
              d="M820 -60 C780 170 890 360 805 590 C755 720 820 820 790 980"
              fill="none"
              stroke={p.a}
              strokeWidth="14"
              opacity={0.8}
            />
          </>
        )}
      </svg>
      <AbsoluteFill
        style={{
          background: `linear-gradient(180deg, transparent, ${p.bg}88), radial-gradient(circle at 50% 50%, transparent, ${p.bg} 82%)`,
        }}
      />
    </AbsoluteFill>
  );
}
