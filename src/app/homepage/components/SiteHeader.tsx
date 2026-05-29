/**
 * DEPRECATED — replaced by the global AppShell header
 * (src/components/shell/Header). No-op kept for legacy call sites.
 */
import React from 'react';

interface SiteHeaderProps {
  activePage?: string;
}

export default function SiteHeader(_props: SiteHeaderProps): React.ReactElement | null {
  return null;
}
