'use client';

/** Subtle CRT scanline wash over the whole viewport, tinted by the realm
    accent via the design-system custom properties. Pure CSS, zero JS cost. */
export default function Scanlines() {
  return <div className="hud-scanlines" aria-hidden="true" />;
}
