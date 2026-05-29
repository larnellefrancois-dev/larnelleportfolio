/**
 * DEPRECATED — replaced by the global AppShell section switcher
 * (src/components/shell/SectionSwitcher). No-op kept for legacy call sites.
 */
import React from 'react';

interface RealmSwitcherProps {
  className?: string;
}

export default function RealmSwitcher(_props: RealmSwitcherProps): React.ReactElement | null {
  return null;
}
