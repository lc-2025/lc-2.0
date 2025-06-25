import { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import { ANIMATION_TYPE } from '@/utilities/constants';
import { TAnimationTyped } from '@/types/AnimationTyped';

const AnimationTyped = ({
  type,
  content,
}: TAnimationTyped): React.ReactNode => {
  // Variables
  const { TITLES, ARTICLE } = ANIMATION_TYPE;
  const commonOptions = {
    showCursor: false,
  };
  // Hooks
  const reference = {
    titles: {
      headline: useRef<any>(null),
      tagline: useRef<any>(null),
    },
    article: useRef<any>(null),
  };
  const { titles, article } = reference;

  // Helpers
  const animateTitles = (): Function => {
    const animation = {
      headline: new Typed(titles.headline.current, {
        ...commonOptions,
        strings: ['FOO'],
        typeSpeed: 500,
      }),
      tagline: new Typed(titles.tagline.current, {
        ...commonOptions,
        strings: ['BAR'],
        typeSpeed: 500,
        startDelay: 1500,
      }),
    };

    return () => {
      animation.headline.destroy();
      animation.tagline.destroy();
    };
  };

  useEffect(() => {
    const animate = {
      [TITLES]: animateTitles(),
    };

    animate[type];
  }, []);

  return type === TITLES ? (
    // Titles Start
    <hgroup className="terminal__titles">
      {content.map((entry, i) =>
        i === 0 ? (
          <h1
            key={crypto.randomUUID() + i}
            className="terminal__headline"
            ref={titles.headline}
          >
            <span className="headline__placheholder hidden">{entry}</span>
          </h1>
        ) : (
          <h2
            key={crypto.randomUUID() + i}
            className="terminal__tagline"
            ref={titles.tagline}
          ></h2>
        ),
      )}
    </hgroup>
  ) : // Titles End
  type === ARTICLE ? (
    // Article Start
    <article className="content">
      <h3 className="content__title hidden" ref={article}>
        Content
      </h3>
      <p>{content[0]}</p>
    </article>
  ) : (
    // Article End
    <></>
  );
};

export default AnimationTyped;
