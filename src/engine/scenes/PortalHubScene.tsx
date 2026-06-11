'use client';
import { useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useEngineStore } from '@/state/engineStore';
import type { RealmId } from '@/data/discovery-map';
import type { QualityTier } from '@/state/gameStore';
import { createNebulaMaterial } from '../materials/nebulaMaterial';
import { createMonolithMaterial } from '../materials/monolithMaterial';
import ParticleField from '../particles/ParticleField';

/* The navigable portal hub: three realm monoliths floating in a nebula.
   The DOM triptych stays the accessible interactive surface; this scene
   listens to the engine store for hover focus (camera dolly + monolith
   glow) and gate transitions (camera fly-through while the overlay plays). */

const MONOLITHS: Array<{ realm: RealmId; accent: string; x: number }> = [
  { realm: 'literature', accent: '#b32435', x: -3.4 },
  { realm: 'art', accent: '#e8d099', x: 0 },
  { realm: 'product', accent: '#7da7d9', x: 3.4 },
];

const REST_CAMERA = new THREE.Vector3(0, 0.2, 9);
const tmpTarget = new THREE.Vector3();

function Monolith({ realm, accent, x }: { realm: RealmId; accent: string; x: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useMemo(() => createMonolithMaterial(accent, x), [accent, x]);
  const focusRef = useRef(0);

  useEffect(() => () => material.dispose(), [material]);

  useFrame((state, delta) => {
    const { hubFocus, gateTarget } = useEngineStore.getState();
    const focused = hubFocus === realm || gateTarget === realm;
    focusRef.current += ((focused ? 1 : 0) - focusRef.current) * Math.min(1, delta * 5);
    material.uniforms.uTime.value = state.clock.elapsedTime;
    material.uniforms.uFocus.value = focusRef.current;
    if (mesh.current) {
      mesh.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.35 + x) * 0.12 + focusRef.current * 0.25;
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.18 + x * 2.0) * 0.08;
    }
  });

  return (
    <mesh ref={mesh} position={[x, 0, 0]} material={material}>
      <boxGeometry args={[1.7, 3.6, 0.35]} />
    </mesh>
  );
}

export default function PortalHubScene({ tier }: { tier: QualityTier }) {
  const camera = useThree((s) => s.camera);
  const nebula = useMemo(() => createNebulaMaterial(), []);
  const accentColor = useRef(new THREE.Color('#e8d099'));

  useEffect(() => () => nebula.dispose(), [nebula]);

  useFrame((state, delta) => {
    const { hubFocus, gateTarget } = useEngineStore.getState();
    const focus = gateTarget ?? hubFocus;
    const lerp = Math.min(1, delta * 2.2);

    // Camera: drift at rest, dolly toward the focused monolith, fly through
    // the gate target while the DOM overlay plays.
    const def = MONOLITHS.find((m) => m.realm === focus);
    if (gateTarget && def) {
      tmpTarget.set(def.x, 0.1, 2.2);
    } else if (def) {
      tmpTarget.set(def.x * 0.45, 0.15, 7.4);
    } else {
      tmpTarget.copy(REST_CAMERA);
      tmpTarget.x += Math.sin(state.clock.elapsedTime * 0.1) * 0.35;
      tmpTarget.y += Math.cos(state.clock.elapsedTime * 0.13) * 0.18;
    }
    camera.position.lerp(tmpTarget, gateTarget ? Math.min(1, delta * 1.6) : lerp);
    camera.lookAt(def && gateTarget ? def.x : 0, 0, 0);

    // Nebula tint follows the focused realm.
    nebula.uniforms.uTime.value = state.clock.elapsedTime;
    const targetAccent = def ? def.accent : '#e8d099';
    accentColor.current.lerp(new THREE.Color(targetAccent), lerp * 0.6);
    (nebula.uniforms.uAccentColor.value as THREE.Color).copy(accentColor.current);
    nebula.uniforms.uAccentMix.value +=
      ((focus ? 0.8 : 0.25) - nebula.uniforms.uAccentMix.value) * lerp;
  });

  const divisor = tier === 1 ? 4 : 1;

  return (
    <group>
      <mesh position={[0, 0, -22]} material={nebula}>
        <planeGeometry args={[70, 36]} />
      </mesh>

      {MONOLITHS.map((m) => (
        <Monolith key={m.realm} realm={m.realm} accent={m.accent} x={m.x} />
      ))}

      <ParticleField
        count={Math.round(1200 / divisor)}
        color="#a3c4eb"
        spread={20}
        size={0.07}
        opacity={0.6}
        drift={0.004}
        parallax={0.5}
        seed={11}
      />
      <ParticleField
        count={Math.round(300 / divisor)}
        color="#e8d099"
        spread={9}
        size={0.12}
        opacity={0.7}
        drift={-0.01}
        parallax={1.1}
        seed={12}
      />
    </group>
  );
}
