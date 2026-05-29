/**
 * DEPRECATED — replaced by the global AppShell header
 * (src/components/shell/Header). No-op kept for legacy call sites.
 */
import React from 'react';

interface GlobalHeaderProps {
  realm: 'art' | 'product' | 'literature';
}

export default function GlobalHeader(_props: GlobalHeaderProps): React.ReactElement | null {
  return null;
}
