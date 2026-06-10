import React from 'react';
import { Composition } from 'remotion';
import { CinematicLoop } from './loops/CinematicLoop';

const DURATION = 240;
const FPS = 30;
const WIDTH = 1600;
const HEIGHT = 900;

export function RemotionRoot() {
  return (
    <>
      <Composition
        id="home-portal-loop"
        component={CinematicLoop}
        durationInFrames={DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{ realm: 'home' as const }}
      />
      <Composition
        id="product-system-loop"
        component={CinematicLoop}
        durationInFrames={DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{ realm: 'product' as const }}
      />
      <Composition
        id="art-gallery-loop"
        component={CinematicLoop}
        durationInFrames={DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{ realm: 'art' as const }}
      />
      <Composition
        id="pale-interval-signal-loop"
        component={CinematicLoop}
        durationInFrames={DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{ realm: 'literature' as const }}
      />
    </>
  );
}
