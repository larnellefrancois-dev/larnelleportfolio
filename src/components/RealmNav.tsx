/**
 * DEPRECATED — replaced by the global AppShell (src/components/shell).
 * The unified header/switcher now lives in the root layout and renders on
 * every route, so this legacy per-page nav is a no-op. Kept only so existing
 * call sites continue to type-check; remove call sites opportunistically.
 */
import React from 'react';

interface RealmNavProps {
  brandName?: string;
}

export default function RealmNav(_props: RealmNavProps): React.ReactElement | null {
  return null;
}
