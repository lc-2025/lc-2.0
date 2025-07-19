'use client';

import { useEffect } from 'react';
import { ACTION, ROUTE } from '@/utilities/constants';
import { useRouter } from 'next/navigation';
import AnimationIntroLogo from './AnimationIntroLogo';
import AnimationIntroImage from './AnimationIntroLogoImage';
import AnimationIntroTagline from './AnimationIntroTagline';
import handleState from '@/state/actions';
import { useDispatchContext, useStateContext } from '@/hooks/State';
import { getStorage } from '@/utilities/utils';
import { AnimationIntroType } from '@/types/components/AnimationIntroImage';

/**
 * @description Intro animation component
 * @author Luca Cattide
 * @date 15/07/2025
 * @returns {*}  {React.ReactNode}
 */
const AnimationIntro = (): React.ReactNode => {
  // Variables
  const { TITLE } = ACTION;
  // Hooks
  const router = useRouter();
  const { title } = useStateContext();
  const dispatch = useDispatchContext();
  const titleStorage = getStorage(TITLE) ?? false;

  useEffect(() => {
    handleTitle();
  }, []);

  // Handlers
  /**
   * @description Title handler
   * Manages the title execution and the eventual redirect
   * @author Luca Cattide
   * @date 15/07/2025
   */
  const handleTitle = (): void => {
    // TODO: Move to a new "Storage" hook
    // Storage + state check
    if (titleStorage || title) {
      handleState({ type: TITLE, element: titleStorage }, dispatch);

      router.push(ROUTE.HOME.PATH);
    }
  };

  return (
    !titleStorage && (
      // Intro Animation Start
      <section className="animation-intro flex w-full flex-col items-center justify-center">
        <h6 className="animation-intro__title hidden">Intro</h6>
        <AnimationIntroImage type={AnimationIntroType.Logo}>
          <AnimationIntroLogo />
        </AnimationIntroImage>
        <AnimationIntroImage type={AnimationIntroType.Tagline}>
          <AnimationIntroTagline />
        </AnimationIntroImage>
      </section>
    )
    // Intro Animation End
  );
};

export default AnimationIntro;
