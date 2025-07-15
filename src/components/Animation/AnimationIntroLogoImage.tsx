'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  AnimationIntroType,
  TAnimationIntroImage,
} from '@/types/components/AnimationIntroImage';

/**
 * @description Intro animation component - Logo/Tagline
 * @author Luca Cattide
 * @date 15/07/2025
 * @param {TAnimationIntroImage} {
 *   children,
 * }
 * @returns {*}  {React.ReactNode}
 */
const AnimationIntroImage = ({
  type,
  children,
}: TAnimationIntroImage): React.ReactNode => {
  // Hooks
  const image = useRef(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      // Animation type check
      if (type === AnimationIntroType.Logo) {
        gsap.to('.image__mask:nth-child(odd)', {
          width: 0,
          stagger: {
            each: 0.3,
          },
        });
      } else {
        gsap.to('.caret', {
          fill: '#000',
          ease: 'none',
          repeat: -1,
        });
      }
    },
    { scope: image },
  );

  return (
    // Logo Start
    <aside
      className="animation-intro__image pointer-events-none flex h-auto w-2/3 justify-center select-none"
      ref={image}
    >
      <h6 className="image__title hidden">Title</h6>
      {children}
    </aside>
    // Logo End
  );
};

export default AnimationIntroImage;
