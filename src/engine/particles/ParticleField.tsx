'use client';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* A single-draw-call particle field: one THREE.Points with a soft radial
   sprite. Drifts slowly and parallaxes against the shared --mouse-x/--mouse-y
   custom properties that AppShell already maintains. */

let spriteCache: THREE.CanvasTexture | null = null;

function softSprite(): THREE.CanvasTexture {
  if (spriteCache) return spriteCache;
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const g = canvas.getContext('2d')!;
  const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.35, 'rgba(255,255,255,0.55)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  spriteCache = new THREE.CanvasTexture(canvas);
  return spriteCache;
}

function readMouseVar(name: '--mouse-x' | '--mouse-y'): number {
  const raw = document.documentElement.style.getPropertyValue(name);
  const parsed = parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : 0.5;
}

interface Props {
  count: number;
  color: string;
  /** World-space radius the field is scattered through. */
  spread?: number;
  size?: number;
  opacity?: number;
  /** Rotation speed in radians/second. */
  drift?: number;
  /** How far (world units) the field shifts against the pointer. */
  parallax?: number;
  seed?: number;
}

export default function ParticleField({
  count,
  color,
  spread = 14,
  size = 0.09,
  opacity = 0.85,
  drift = 0.008,
  parallax = 0.6,
  seed = 1,
}: Props) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    // Mulberry32 — deterministic scatter so re-mounts don't reshuffle the sky.
    let state = seed * 0x9e3779b9;
    const rand = () => {
      state |= 0;
      state = (state + 0x6d2b79f5) | 0;
      let t = Math.imul(state ^ (state >>> 15), 1 | state);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Bias density toward the rim so particles don't crowd the text zone.
      const r = spread * (0.35 + 0.65 * Math.cbrt(rand()));
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      array[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      array[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      array[i * 3 + 2] = -Math.abs(r * Math.cos(phi)) - 2;
    }
    return array;
  }, [count, spread, seed]);

  useFrame((_, delta) => {
    const p = points.current;
    if (!p) return;
    p.rotation.z += drift * delta;
    const mx = readMouseVar('--mouse-x') - 0.5;
    const my = readMouseVar('--mouse-y') - 0.5;
    p.position.x += (-mx * parallax - p.position.x) * 0.04;
    p.position.y += (my * parallax - p.position.y) * 0.04;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        map={softSprite()}
        color={color}
        size={size}
        sizeAttenuation
        transparent
        opacity={opacity}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
