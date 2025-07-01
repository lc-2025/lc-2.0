'use client';

import { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import { ANIMATION_OPTIONS_GENERIC } from '@/utilities/constants';
import { TAnimationTyped } from '@/types/components/AnimationTyped';
import { isLightTheme } from '@/utilities/utils';
import { useStateContext } from '@/hooks/State';

/**
 * @description Typed animation component - Article variant
 * Cannot abstract to commont component due to the
 * animation library limitations
 * @author Luca Cattide
 * @date 26/06/2025
 * @param {TAnimationTyped} {
 *   content,
 * }
 * @returns {*}  {React.ReactNode}
 */
const AnimationTypedArticle = ({
  content,
}: TAnimationTyped): React.ReactNode => {
  // Hooks
  const article = useRef<any>(null);
  const { theme } = useStateContext();

  useEffect(() => {
    const paragraph = new Typed(article.current, {
      ...ANIMATION_OPTIONS_GENERIC,
      strings: content,
      typeSpeed: 50,
    });

    return () => {
      paragraph.destroy();
    };
  }, []);

  return (
    // Article Start
    <article className="content">
      <h6 className="content__title hidden">Content</h6>
      <p
        className={`content__entry ${isLightTheme(theme) && 'leading-mobile lg:leading-desktop'} p-6`}
        ref={article}
      ></p>
    </article>
    // Article End
  );
};

export default AnimationTypedArticle;
