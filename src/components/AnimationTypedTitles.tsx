'use client';

import { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import { ANIMATION_OPTIONS } from '@/utilities/constants';
import { TAnimationTyped } from '@/types/AnimationTyped';

// TODO: Check if needed anymore or not
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
  // Hooks
  const titles = {
    headline: useRef<any>(null),
    tagline: useRef<any>(null),
  };

  useEffect(() => {
    const headline = new Typed(titles.headline.current, {
      ...ANIMATION_OPTIONS,
      strings: [content[0]],
      typeSpeed: 1,
    });
    const tagline = new Typed(titles.tagline.current, {
      ...ANIMATION_OPTIONS,
      strings: [content[1]],
      typeSpeed: 1,
    });

    return () => {
      headline.destroy();
      tagline.destroy();
    };
  }, []);

  return (
    // Titles Start
    <hgroup className="terminal__titles">
      {content.map((entry, i) =>
        i === 0 ? (
          <div key={crypto.randomUUID() + i}>
            <pre className="terminal__headline p-6 select-none" ref={titles.headline}></pre>
            <h1 className="headline__placheholder hidden">Luca Cattide</h1>
          </div>
        ) : (
          <div key={crypto.randomUUID() + i}>
            <pre
              key={crypto.randomUUID() + i}
              className="terminal__tagline p-6 select-none"
              ref={titles.tagline}
            ></pre>
            <h2 className="headline__placheholder hidden">Software Engineer</h2>
          </div>
        ),
      )}
    </hgroup>
    // Titles End
  );
};

export default AnimationTypedTitles;
