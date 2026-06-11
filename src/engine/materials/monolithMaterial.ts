import * as THREE from 'three';

/* Material for the portal realm monoliths: a near-black slab crossed by
   slow signal veins in the realm accent, with an edge glow that swells when
   the realm is focused. uFocus is lerped per-frame from the hub state. */

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragment = /* glsl */ `
  uniform float uTime;
  uniform vec3 uAccent;
  uniform float uFocus;
  uniform float uSeed;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7)) + uSeed * 17.0) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  void main() {
    // Obsidian body with a faint vertical sheen.
    vec3 body = vec3(0.012, 0.014, 0.03) + vec3(0.02) * pow(1.0 - abs(vUv.x - 0.5) * 2.0, 3.0);

    // Signal veins: thin bright bands of noise crawling upward.
    float vein = noise(vec2(vUv.x * 8.0, vUv.y * 3.0 - uTime * 0.06));
    vein = smoothstep(0.62, 0.66, vein) * smoothstep(0.7, 0.66, vein);

    // Edge glow, swelling with focus.
    float edgeX = smoothstep(0.5, 0.0, abs(vUv.x - 0.5)) ;
    float frame = pow(1.0 - edgeX, 6.0);
    float pulse = 0.75 + 0.25 * sin(uTime * 1.4 + uSeed * 6.0);

    float glow = (0.18 + uFocus * 0.85) * pulse;
    vec3 color = body
      + uAccent * vein * (0.35 + uFocus * 0.9)
      + uAccent * frame * glow;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export function createMonolithMaterial(accent: string, seed: number): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    uniforms: {
      uTime: { value: 0 },
      uAccent: { value: new THREE.Color(accent) },
      uFocus: { value: 0 },
      uSeed: { value: seed },
    },
  });
}
