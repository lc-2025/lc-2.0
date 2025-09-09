'use client';

import dynamic from 'next/dynamic';
import { TitleProvider } from '../StateProvider';

const AnimationIntro = dynamic(
  () => import('@/components/Animation/AnimationIntro'),
  { ssr: false },
);

/**
 * @description Animation Wrapper (Static)
 * @author Luca Cattide
 * @date 16/07/2025
 * @returns {*}  {React.ReactNode}
 */
const AnimationWrapper = (): React.ReactNode => {
  return (
    <TitleProvider>
      <AnimationIntro />
    </TitleProvider>
  );
};

export default AnimationWrapper;
