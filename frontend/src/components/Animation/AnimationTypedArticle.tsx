'use client';

import { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Typed from 'typed.js';
import { ANIMATION_OPTIONS_GENERIC, SECTION } from '@/utilities/constants';
import { TAnimationTyped } from '@/types/components/AnimationTyped';
import { isLightTheme, setTimeline } from '@/utilities/utils';
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
  html,
  speed,
  delay,
}: TAnimationTyped): React.ReactNode => {
  // Hooks
  const pathname = usePathname();
  const article = useRef<any>(null);
  const { theme } = useStateContext();

  useEffect(() => {
    const paragraph = new Typed(article.current, {
      ...ANIMATION_OPTIONS_GENERIC,
      contentType: html ? 'html' : '',
      strings: content,
      typeSpeed: speed ?? 25,
      startDelay: setTimeline(
        pathname,
        SECTION.ARTICLE,
        isLightTheme(theme),
        delay,
      ),
    });

    return () => {
      paragraph.destroy();
    };
  }, [theme]);

  return (
    // Article Start
    <article className="content">
      <h6 className="content__title hidden">Content</h6>
      <p className="content__placeholder hidden">{content}</p>
      <span
        className={`content__entry block p-6 ${isLightTheme(theme) && 'leading-mobile lg:leading-desktop'}`}
        ref={article}
      ></span>
    </article>
    // Article End
  );
};

export default AnimationTypedArticle;
