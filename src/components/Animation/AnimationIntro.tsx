import AnimationIntroLogo from './AnimationIntroLogo';
import AnimationIntroImage from './AnimationIntroLogoImage';
import AnimationIntroTagline from './AnimationIntroTagline';
import { AnimationIntroType } from '@/types/components/AnimationIntroImage';

/**
 * @description Intro animation component
 * @author Luca Cattide
 * @date 15/07/2025
 * @returns {*}  {React.ReactNode}
 */
const AnimationIntro = (): React.ReactNode => {
  return (
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
    // Intro Animation End
  );
};

export default AnimationIntro;
