import * as THREE from 'three';

/* Procedural nebula sky: fbm value-noise clouds drifting over the void,
   tinted between the resting gold and the focused realm's accent. Rendered
   on a single large plane far behind the hub. Instantiated directly (not via
   drei shaderMaterial/extend) so no JSX namespace augmentation is needed. */

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragment = /* glsl */ `
  uniform float uTime;
  uniform vec3 uBaseColor;
  uniform vec3 uAccentColor;
  uniform float uAccentMix;
  uniform float uIntensity;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
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

  float fbm(vec2 p) {
    float value = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 5; i++) {
      value += amp * noise(p);
      p = p * 2.03 + vec2(13.7, 7.1);
      amp *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 p = vUv * 3.0;
    float t = uTime * 0.012;
    float clouds = fbm(p + vec2(t, -t * 0.6) + fbm(p * 1.7 - t));
    clouds = smoothstep(0.32, 0.92, clouds);

    vec3 tint = mix(uBaseColor, uAccentColor, uAccentMix);
    vec3 color = tint * clouds * uIntensity;

    // Vignette toward the plane edges so the rectangle never reads as one.
    float edge = smoothstep(0.0, 0.35, vUv.x) * smoothstep(1.0, 0.65, vUv.x)
               * smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.7, vUv.y);
    gl_FragColor = vec4(color * edge, 1.0);
  }
`;

export function createNebulaMaterial(): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    uniforms: {
      uTime: { value: 0 },
      uBaseColor: { value: new THREE.Color('#3a2f1d') },
      uAccentColor: { value: new THREE.Color('#e8d099') },
      uAccentMix: { value: 0 },
      uIntensity: { value: 0.85 },
    },
    depthWrite: false,
  });
}
