'use client';
import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useEngineStore } from '@/state/engineStore';
import type { QualityTier } from '@/state/gameStore';
import ParticleField from '../particles/ParticleField';

/* Ars Visualis backdrop: warm gallery air. Gold dust motes rise slowly
   through a soft light shaft, and a few empty "floating frames" drift in
   deep parallax behind the content like canvases waiting in a dark studio. */

function FloatingFrame({
  position,
  size,
  phase,
}: {
  position: [number, number, number];
  size: [number, number];
  phase: number;
}) {
  const group = useRef<THREE.Group>(null);

  const edges = useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.PlaneGeometry(size[0], size[1]));
    return geometry;
  }, [size]);

  useEffect(() => () => edges.dispose(), [edges]);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.position.y = position[1] + Math.sin(t * 0.22 + phase) * 0.35;
    group.current.rotation.y = Math.sin(t * 0.1 + phase * 2) * 0.16;
    group.current.rotation.z = Math.sin(t * 0.07 + phase) * 0.03;
  });

  return (
    <group ref={group} position={position}>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#d4b271" transparent opacity={0.4} />
      </lineSegments>
      <mesh>
        <planeGeometry args={[size[0] * 0.92, size[1] * 0.92]} />
        <meshBasicMaterial color="#120c06" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export default function ArtScene({ tier }: { tier: QualityTier }) {
  const group = useRef<THREE.Group>(null);
  const divisor = tier === 1 ? 4 : 1;

  useFrame((_, delta) => {
    const scroll = useEngineStore.getState().scrollOffset;
    if (group.current) {
      group.current.position.y +=
        (scroll * 2.6 - group.current.position.y) * Math.min(1, delta * 3);
    }
  });

  return (
    <group ref={group}>
      <FloatingFrame position={[-5.5, 0.5, -9]} size={[2.4, 3.2]} phase={0} />
      <FloatingFrame position={[5.8, -0.8, -11]} size={[3.1, 2.2]} phase={2.1} />
      <FloatingFrame position={[1.5, 1.8, -14]} size={[2.0, 2.8]} phase={4.4} />

      {/* Rising gold dust — drift handled by the field's own rotation. */}
      <ParticleField
        count={Math.round(900 / divisor)}
        color="#e8d099"
        spread={13}
        size={0.08}
        opacity={0.6}
        drift={0.01}
        parallax={0.6}
        seed={31}
      />
      <ParticleField
        count={Math.round(250 / divisor)}
        color="#f7e6b7"
        spread={7}
        size={0.14}
        opacity={0.5}
        drift={-0.006}
        parallax={1.0}
        seed={32}
      />
    </group>
  );
}
