import React from 'react';
import CinematicVideo from './CinematicVideo';
import { hyperFrameLoreAssets } from '@/data/motion-assets';

interface HyperFrameLoreStripProps {
  compact?: boolean;
}

export default function HyperFrameLoreStrip({ compact = false }: HyperFrameLoreStripProps) {
  return (
    <section
      className={compact ? 'hyperframes-strip hyperframes-strip--compact' : 'hyperframes-strip'}
    >
      <div className="hyperframes-strip__intro">
        <p className="ds-eyebrow">HyperFrames · Lore Signals</p>
        <h2>{compact ? 'Signal Trailers' : 'Cinematic Lore Signals'}</h2>
        <p>
          Short motion studies for The Pale Interval: signal interference, twin-moon alignment, and
          archive rupture behavior.
        </p>
      </div>
      <div className="hyperframes-strip__grid">
        {hyperFrameLoreAssets.map((asset) => (
          <CinematicVideo key={asset.id} asset={asset} intensity="feature" showCaption />
        ))}
      </div>
    </section>
  );
}
