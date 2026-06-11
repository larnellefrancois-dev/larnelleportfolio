'use client';
import { Canvas } from '@react-three/fiber';
import type { RealmId } from '@/data/discovery-map';
import { useGameStore, type QualityTier } from '@/state/gameStore';
import SceneRouter from './SceneRouter';
import Effects from './postprocessing/Effects';

/* The single persistent WebGL canvas, mounted once by AppShell behind all
   content. Dynamic-imported with ssr:false and only when the device tier
   allows it; on context loss it drops the whole experience back to tier 0. */

interface Props {
  realm: RealmId;
  isPortal: boolean;
  tier: QualityTier;
}

export default function Canvas3DRoot({ realm, isPortal, tier }: Props) {
  if (tier === 0) return null;

  return (
    <div className="engine-canvas" aria-hidden="true">
      <Canvas
        dpr={tier === 2 ? [1, 2] : 1}
        camera={{ position: [0, 0, 8], fov: 50 }}
        frameloop="always"
        gl={{
          antialias: tier === 2,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener('webglcontextlost', (event) => {
            event.preventDefault();
            useGameStore.getState().setContextLost(true);
          });
        }}
      >
        <SceneRouter realm={realm} isPortal={isPortal} tier={tier} />
        <Effects tier={tier} />
      </Canvas>
    </div>
  );
}
