'use client';

import { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import { ANIMATION_OPTIONS_GENERIC } from '@/utilities/constants';
import { TAnimationTyped } from '@/types/components/AnimationTyped';

/**
 * @description Typed animation component - List variant
 * Cannot abstract to commont component due to the
 * animation library limitations
 * @author Luca Cattide
 * @date 03/07/2025
 * @param {TAnimationTyped} {
 *   content,
 *   speed,
 *   delay
 * }
 * @returns {*}  {React.ReactNode}
 */
const AnimationTypedList = ({
  content,
  speed,
  delay,
}: TAnimationTyped): React.ReactNode => {
  // Hooks
  const list = useRef<any>(null);

  useEffect(() => {
    const option = new Typed(list.current, {
      ...ANIMATION_OPTIONS_GENERIC,
      strings: content,
      typeSpeed: speed ?? 25,
      startDelay: delay,
    });

    return () => {
      option.destroy();
    };
  }, []);

  return (
    // Entry Start
    <li className="entries__entry select-none">
      <span className="entry__placeholder hidden">{content}</span>
      <span className="entry__link" ref={list}></span>
    </li>
    // Entry End
  );
};

export default AnimationTypedList;
