'use client';
import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useEngineStore } from '@/state/engineStore';
import type { QualityTier } from '@/state/gameStore';
import ParticleField from '../particles/ParticleField';

/* Scriptorium backdrop: a crimson signal-field. A torus of "transmission"
   particles slowly precesses while a faint signal plane pulses like the
   Pale Interval waveform. Scroll position feeds camera-space depth parallax
   so the field sinks as the reader descends the page. */

const signalVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const signalFragment = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    // A sparse scanline lattice with a travelling interruption — the
    // "structured absence" of the VY-0031 signal.
    float line = smoothstep(0.012, 0.0, abs(fract(vUv.y * 28.0) - 0.5) * 0.08);
    float carrier = 0.5 + 0.5 * sin(vUv.x * 40.0 - uTime * 0.7);
    float gap = smoothstep(0.05, 0.2, abs(fract(vUv.x * 0.5 - uTime * 0.012) - 0.5));
    vec3 color = vec3(0.7, 0.14, 0.2) * line * carrier * gap * 0.35;
    float edge = smoothstep(0.0, 0.25, vUv.x) * smoothstep(1.0, 0.75, vUv.x)
               * smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.75, vUv.y);
    gl_FragColor = vec4(color * edge, 1.0);
  }
`;

export default function LiteratureScene({ tier }: { tier: QualityTier }) {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Points>(null);

  const signalMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: signalVertex,
        fragmentShader: signalFragment,
        uniforms: { uTime: { value: 0 } },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    []
  );

  const divisor = tier === 1 ? 4 : 1;

  const ringGeometry = useMemo(() => {
    const count = Math.round(700 / divisor);
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 6 + Math.sin(i * 12.9898) * 1.4;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle * 3) * 0.8;
      positions[i * 3 + 2] = Math.sin(angle) * radius - 8;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [divisor]);

  useEffect(
    () => () => {
      signalMaterial.dispose();
      ringGeometry.dispose();
    },
    [signalMaterial, ringGeometry]
  );

  useFrame((state, delta) => {
    signalMaterial.uniforms.uTime.value = state.clock.elapsedTime;
    const scroll = useEngineStore.getState().scrollOffset;
    if (group.current) {
      // Sink and tilt the whole field as the reader descends.
      group.current.position.y +=
        (scroll * 3.2 - group.current.position.y) * Math.min(1, delta * 3);
      group.current.rotation.x = scroll * 0.22;
    }
    if (ring.current) {
      ring.current.rotation.y += delta * 0.03;
      ring.current.rotation.z += delta * 0.008;
    }
  });

  return (
    <group ref={group}>
      <mesh position={[0, -1, -16]} rotation={[-0.18, 0, 0]} material={signalMaterial}>
        <planeGeometry args={[48, 22]} />
      </mesh>

      <points ref={ring} geometry={ringGeometry}>
        <pointsMaterial
          color="#b32435"
          size={0.1}
          sizeAttenuation
          transparent
          opacity={0.75}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <ParticleField
        count={Math.round(800 / divisor)}
        color="#a3c4eb"
        spread={17}
        size={0.06}
        opacity={0.45}
        drift={0.004}
        parallax={0.35}
        seed={21}
      />
      <ParticleField
        count={Math.round(220 / divisor)}
        color="#e05a6a"
        spread={9}
        size={0.12}
        opacity={0.7}
        drift={-0.014}
        parallax={0.95}
        seed={22}
      />
    </group>
  );
}
