'use client';

import React from 'react';
import type { MotionAsset } from '@/data/motion-assets';

interface ProceduralMotionStoryProps {
  asset: MotionAsset;
  paused?: boolean;
  reduced?: boolean;
}

const productBeats = ['Audit', 'Map', 'Prototype', 'Ship'];
const artBeats = ['Charcoal', 'Gold', 'Bloom', 'Witness'];
const literatureBeats = ['Signal', 'Rupture', 'Refusal', 'Return'];
const homeBeats = ['Image', 'Interface', 'Story'];

export default function ProceduralMotionStory({
  asset,
  paused = false,
  reduced = false,
}: ProceduralMotionStoryProps) {
  const realm = asset.realm;
  const beats =
    realm === 'product'
      ? productBeats
      : realm === 'art'
        ? artBeats
        : realm === 'literature'
          ? literatureBeats
          : homeBeats;

  return (
    <div
      className={[
        'motion-story',
        `motion-story--${realm}`,
        paused && 'is-paused',
        reduced && 'is-reduced',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      {realm === 'product' && (
        <>
          <div className="motion-story__product-grid" />
          <svg className="motion-story__routes" viewBox="0 0 100 56" preserveAspectRatio="none">
            <path d="M5 43 C22 16 40 21 54 31 S78 45 96 12" />
            <path d="M4 22 C26 39 36 7 58 17 S82 30 96 24" />
            <path d="M14 51 C34 45 44 35 56 20 S74 7 90 7" />
          </svg>
          <div className="motion-story__node motion-story__node--a" />
          <div className="motion-story__node motion-story__node--b" />
          <div className="motion-story__node motion-story__node--c" />
          <div className="motion-story__node motion-story__node--d" />
          <div className="motion-story__panel motion-story__panel--one">
            <span>Friction map</span>
            <strong>12 flows</strong>
          </div>
          <div className="motion-story__panel motion-story__panel--two">
            <span>Token system</span>
            <strong>4 states</strong>
          </div>
          <div className="motion-story__panel motion-story__panel--three">
            <span>Release path</span>
            <strong>Ready</strong>
          </div>
        </>
      )}

      {realm === 'art' && (
        <>
          <div className="motion-story__brush motion-story__brush--one" />
          <div className="motion-story__brush motion-story__brush--two" />
          <div className="motion-story__gold-field" />
          <div className="motion-story__portrait-orbit" />
        </>
      )}

      {realm === 'literature' && (
        <>
          <div className="motion-story__moon motion-story__moon--one" />
          <div className="motion-story__moon motion-story__moon--two" />
          <div className="motion-story__rupture-line" />
          <div className="motion-story__signal-band" />
          <div className="motion-story__archive-text">VY-0031 / STRUCTURED ABSENCE</div>
        </>
      )}

      {realm === 'home' && (
        <>
          <div className="motion-story__portal-ring motion-story__portal-ring--one" />
          <div className="motion-story__portal-ring motion-story__portal-ring--two" />
          <div className="motion-story__portal-thread motion-story__portal-thread--one" />
          <div className="motion-story__portal-thread motion-story__portal-thread--two" />
        </>
      )}

      <div className="motion-story__beatline">
        {beats.map((beat, index) => (
          <span key={beat} style={{ '--beat-index': index } as React.CSSProperties}>
            {beat}
          </span>
        ))}
      </div>
    </div>
  );
}
