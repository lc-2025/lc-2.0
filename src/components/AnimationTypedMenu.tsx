'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Typed from 'typed.js';
import { ANIMATION_OPTIONS } from '@/utilities/constants';
import { TAnimationTyped } from '@/types/AnimationTyped';

/**
 * @description Typed animation component - Menu variant
 * Cannot abstract to commont component due to the
 * animation library limitations
 * @author Luca Cattide
 * @date 26/06/2025
 * @param {TAnimationTyped} {
 *   path,
 *   title,
 *   tabindex,
 *   delay,
 *   content,
 * }
 * @returns {*}  {React.ReactNode}
 */
const AnimationTypedMenu = ({
  path,
  title,
  tabIndex,
  delay,
  content,
}: TAnimationTyped): React.ReactNode => {
  // Hooks
  const menu = useRef<any>(null);

  useEffect(() => {
    const option = new Typed(menu.current, {
      ...ANIMATION_OPTIONS,
      strings: content,
      typeSpeed: 50,
      startDelay: delay,
    });

    return () => {
      option.destroy();
    };
  }, []);

  return (
    // Entry Start
    <li className="entries__entry">
      <Link
        className="entry__link"
        href={path!}
        title={title}
        tabIndex={tabIndex}
        ref={menu}
      ></Link>
    </li>
    // Entry End
  );
};

export default AnimationTypedMenu;
