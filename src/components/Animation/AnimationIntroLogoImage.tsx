'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import handleState from '@/state/actions';
import { useDispatchContext } from '@/hooks/State';
import { setStorage } from '@/utilities/utils';
import { ROUTE, ACTION, ANIMATION_TIMELINE } from '@/utilities/constants';
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
  // Variables
  const { TITLE } = ACTION;
  const { CURSOR } = ANIMATION_TIMELINE;
  // Hooks
  const image = useRef(null);
  const router = useRouter();
  const dispatch = useDispatchContext();

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      handleTitle();
    },
    { scope: image },
  );

  // Helpers
  const setTitle = (): void => {
    setStorage(TITLE, 'true');
    handleState(
      {
        type: TITLE,
        element: true,
      },
      dispatch,
    );
  };

  // Handlers
  /**
   * @description Title animations handler
   * @author Luca Cattide
   * @date 15/07/2025
   */
  const handleTitle = (): void => {
    // Animation type check
    if (type === AnimationIntroType.Logo) {
      gsap.to('.image__mask:nth-child(odd)', {
        stagger: {
          each: 0.3,
        },
        width: 0,
      });
    } else {
      const timeline = gsap.timeline();

      timeline
        .to('.tagline__image', {
          delay: 9.2,
          opacity: 1,
        })
        .add(CURSOR, 9.5)
        .to(
          '.caret',
          {
            ease: 'step(2)',
            fill: '#7C71DA',
            repeat: 3,
            repeatDelay: 0.1,
            yoyo: true,
          },
          CURSOR,
        )
        .to(
          ['.letter', '.power'],
          {
            ease: 'step(2)',
            fill: '#3E32A1',
            repeat: 3,
            repeatDelay: 0.1,
            yoyo: true,
            onComplete: () => {
              setTitle();

              router.push(ROUTE.HOME.PATH);
            },
          },
          CURSOR,
        );
    }
  };

  return (
    // Logo Start
    <aside
      className="animation-intro__image pointer-events-none mt-6 mr-auto mb-6 ml-auto p-6 select-none"
      ref={image}
    >
      <h6 className="image__title hidden">Title</h6>
      {children}
    </aside>
    // Logo End
  );
};

export default AnimationIntroImage;
