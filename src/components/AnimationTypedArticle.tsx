import { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import { ANIMATION_OPTIONS } from '@/utilities/constants';
import { TAnimationTyped } from '@/types/AnimationTyped';

const AnimationTypedArticle = ({
  content,
}: TAnimationTyped): React.ReactNode => {
  // Hooks
  const article = useRef<any>(null);

  useEffect(() => {
    const paragraph = new Typed(article.current, {
      ...ANIMATION_OPTIONS,
      strings: [content[0]],
      typeSpeed: 50,
      startDelay: 3000
    });

    return () => {
      paragraph.destroy();
    };
  }, []);

  return (
    // Titles End
    // Article Start
    <article className="content">
      <h6 className="content__title hidden">Content</h6>
      <p ref={article}></p>
    </article>
  );
  // Article End
};

export default AnimationTypedArticle;
