'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import handleState from '@/state/actions';
import { useDispatchContext } from '@/hooks/State';
import { ROUTE, ACTION } from '@/utilities/constants';
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
    // Local Storage check
    if (window.localStorage) {
      localStorage.setItem(TITLE, 'true');

      handleState(
        {
          type: TITLE,
          element: true,
        },
        dispatch,
      );
    }
  };

  // Handlers
  /**
   * @description Title animations handler
   * @author Luca Cattide
   * @date 15/07/2025
   */
  const handleTitle = (): void => {
    const colors = {
      default: {
        fill: '#3E32A1',
      },
      variant: {
        fill: '#7C71DA',
      },
    };
    const transition = {
      start: colors,
    };
    const { start } = transition;

    // Animation type check
    if (type === AnimationIntroType.Logo) {
      gsap.to('.image__mask:nth-child(odd)', {
        width: 0,
        stagger: {
          each: 0.3,
        },
      });
    } else {
      gsap.to('.tagline__image', {
        opacity: 1,
        delay: 9.2,
      });
      gsap.fromTo('.caret', start.default, {
        delay: 9.5,
        ease: 'step(2)',
        repeat: 3,
        repeatDelay: 0.1,
        yoyo: true,
        fill: '#7C71DA',
      });
      gsap.fromTo(['.letter', '.power'], start.variant, {
        delay: 9.5,
        ease: 'step(2)',
        repeat: 3,
        repeatDelay: 0.1,
        yoyo: true,
        fill: '#3E32A1',
        onComplete: () => {
          setTitle();

          router.push(ROUTE.HOME.PATH);
        },
      });
    }
  };

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
