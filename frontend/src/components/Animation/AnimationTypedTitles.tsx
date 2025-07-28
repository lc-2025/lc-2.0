'use client';

import { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Typed from 'typed.js';
import { useStateContext } from '@/hooks/State';
import { TITLES } from '@/data/content';
import { isLightTheme, setTimeline } from '@/utilities/utils';
import { ANIMATION_OPTIONS, SECTION } from '@/utilities/constants';
import { METADATA } from '@/data/content';
import { TAnimationTyped } from '@/types/components/AnimationTyped';

/**
 * @description Typed animation component - Titles variant
 * Cannot abstract to commont component due to the
 * animation library limitations
 * @author Luca Cattide
 * @date 26/06/2025
 * @param {TAnimationTyped} {
 *   content,
 * }
 * @returns {*}  {React.ReactNode}
 */
const AnimationTypedTitles = ({
  content,
}: TAnimationTyped): React.ReactNode => {
  // Variables
  const { NAME, KEYWORD } = METADATA;
  const pathname = usePathname();
  const { theme } = useStateContext();
  const { LIGHT, DARK } = TITLES.HOME;
  const data: Array<string> =
    (content ?? isLightTheme(theme))
      ? [LIGHT.HEADLINE, LIGHT.TAGLINE]
      : [DARK.HEADLINE, DARK.TAGLINE];
  // Hooks
  const titles = {
    headline: useRef<any>(null),
    tagline: useRef<any>(null),
  };

  useEffect(() => {
    const headline = new Typed(titles.headline.current, {
      ...ANIMATION_OPTIONS,
      strings: [data[0]],
      typeSpeed: setTypeSpeed(),
    });
    const tagline = new Typed(titles.tagline.current, {
      ...ANIMATION_OPTIONS,
      strings: [data[1]],
      typeSpeed: setTypeSpeed(),
      startDelay: setTimeline(pathname, SECTION.TITLES, isLightTheme(theme)),
    });

    return () => {
      headline.destroy();
      tagline.destroy();
    };
  }, [data]);

  // Helpers
  /**
   * @description Animation type speed setter
   * Sets the animation speed based on theme
   * @author Luca Cattide
   * @date 01/07/2025
   * @returns {*}  {number}
   */
  const setTypeSpeed = (): number => (isLightTheme(theme) ? 5 : 1);

  return (
    // Titles Start
    <hgroup className="terminal__titles">
      {data.map((_, i) =>
        i === 0 ? (
          <div key={crypto.randomUUID() + i}>
            <h1 className="terminal__placheholder hidden">{NAME}</h1>
            {isLightTheme(theme) ? (
              <span
                className={`terminal__headline terminal__headline--light leading-mobile lg:leading-desktop m-auto block max-w-[300px] lg:max-w-[380px]`}
                ref={titles.headline}
              ></span>
            ) : (
              <pre
                className="terminal__headline terminal__headline--dark m-auto flex justify-center p-6 select-none"
                ref={titles.headline}
              ></pre>
            )}
          </div>
        ) : (
          <div key={crypto.randomUUID() + i}>
            <h2 className="terminal__placheholder hidden">{KEYWORD}</h2>
            {isLightTheme(theme) ? (
              <span
                className="terminal__tagline terminal__tagline--light leading-mobile lg:leading-desktop m-auto block max-w-[204px] lg:max-w-[260px]"
                ref={titles.tagline}
              ></span>
            ) : (
              <pre
                key={crypto.randomUUID() + i}
                className="terminal__tagline terminal__tagline--dark m-auto flex justify-center p-6 select-none"
                ref={titles.tagline}
              ></pre>
            )}
          </div>
        ),
      )}
    </hgroup>
    // Titles End
  );
};

export default AnimationTypedTitles;
