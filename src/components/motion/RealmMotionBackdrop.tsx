import React from 'react';
import type { MotionRealm } from '@/data/motion-assets';

interface RealmMotionBackdropProps {
  realm: MotionRealm;
  density?: 'quiet' | 'normal' | 'max';
}

export default function RealmMotionBackdrop({
  realm,
  density = 'normal',
}: RealmMotionBackdropProps) {
  return (
    <div
      className="realm-motion"
      data-motion-realm={realm}
      data-density={density}
      aria-hidden="true"
    >
      <div className="realm-motion__beam realm-motion__beam--one" />
      <div className="realm-motion__beam realm-motion__beam--two" />
      <div className="realm-motion__mesh" />
      <div className="realm-motion__scan" />
    </div>
  );
}
