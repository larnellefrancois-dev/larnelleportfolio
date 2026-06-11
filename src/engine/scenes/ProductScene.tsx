'use client';
import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useEngineStore } from '@/state/engineStore';
import type { QualityTier } from '@/state/gameStore';
import ParticleField from '../particles/ParticleField';

/* Systema backdrop: a cyan wireframe ground plane receding into the void
   with pulse nodes travelling its lattice — interface logic as landscape. */

export default function ProductScene({ tier }: { tier: QualityTier }) {
  const group = useRef<THREE.Group>(null);
  const grid = useRef<THREE.LineSegments>(null);
  const nodes = useRef<THREE.Points>(null);
  const divisor = tier === 1 ? 4 : 1;

  const gridGeometry = useMemo(() => {
    const size = 36;
    const divisions = 24;
    const step = size / divisions;
    const half = size / 2;
    const points: number[] = [];
    for (let i = 0; i <= divisions; i++) {
      const offset = -half + i * step;
      points.push(-half, 0, offset, half, 0, offset);
      points.push(offset, 0, -half, offset, 0, half);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(points), 3));
    return geometry;
  }, []);

  const nodeData = useMemo(() => {
    const count = Math.round(60 / divisor);
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.sin(i * 12.9898) * 0.5 + 0.5) * 36 - 18;
      positions[i * 3 + 1] = 0.02;
      positions[i * 3 + 2] = (Math.sin(i * 78.233) * 0.5 + 0.5) * 36 - 18;
      speeds[i] = 0.4 + (Math.sin(i * 3.7) * 0.5 + 0.5) * 1.4;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return { geometry, speeds };
  }, [divisor]);

  useEffect(
    () => () => {
      gridGeometry.dispose();
      nodeData.geometry.dispose();
    },
    [gridGeometry, nodeData]
  );

  useFrame((state, delta) => {
    const scroll = useEngineStore.getState().scrollOffset;
    if (group.current) {
      group.current.position.y +=
        (scroll * 2.0 - group.current.position.y) * Math.min(1, delta * 3);
    }
    // Pulse nodes crawl along grid lines, wrapping at the edge.
    if (nodes.current) {
      const positions = nodeData.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < positions.count; i++) {
        let z = positions.getZ(i) + nodeData.speeds[i] * delta;
        if (z > 18) z = -18;
        positions.setZ(i, z);
      }
      positions.needsUpdate = true;
    }
    if (grid.current) {
      const material = grid.current.material as THREE.LineBasicMaterial;
      material.opacity = 0.16 + Math.sin(state.clock.elapsedTime * 0.8) * 0.04;
    }
  });

  return (
    <group ref={group}>
      <group position={[0, -3.2, -10]} rotation={[0, 0, 0]}>
        <lineSegments ref={grid} geometry={gridGeometry}>
          <lineBasicMaterial color="#4a6b8c" transparent opacity={0.18} />
        </lineSegments>
        <points ref={nodes} geometry={nodeData.geometry}>
          <pointsMaterial
            color="#7da7d9"
            size={0.16}
            sizeAttenuation
            transparent
            opacity={0.9}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>
      </group>

      <ParticleField
        count={Math.round(700 / divisor)}
        color="#a3c4eb"
        spread={16}
        size={0.06}
        opacity={0.5}
        drift={0.004}
        parallax={0.4}
        seed={41}
      />
      <ParticleField
        count={Math.round(180 / divisor)}
        color="#7da7d9"
        spread={9}
        size={0.11}
        opacity={0.7}
        drift={-0.01}
        parallax={0.9}
        seed={42}
      />
    </group>
  );
}
