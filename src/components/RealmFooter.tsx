/**
 * DEPRECATED — replaced by the unified global footer
 * (src/components/shell/Footer). No-op kept for legacy call sites.
 */
import React from 'react';

interface RealmFooterProps {
  realm: 'art' | 'product' | 'literature';
}

export default function RealmFooter(_props: RealmFooterProps): React.ReactElement | null {
  return null;
}
