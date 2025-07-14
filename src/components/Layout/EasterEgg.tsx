'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { COMMAND, ROUTE } from '@/utilities/constants';

/**
 * @description Easter Egg component
 * @author Luca Cattide
 * @date 12/07/2025
 * @returns {*}  {React.ReactNode}
 */
const EasterEgg = (): React.ReactNode => {
  // Hooks
  const router = useRouter();

  useEffect(() => {
    // Session storage check
    if (window.sessionStorage && !sessionStorage.getItem(COMMAND.BALLOON)) {
      router.push(ROUTE.HOME.PATH);
    }
  }, []);

  return (
    // Easter Egg Start
    <canvas
      id="canvas"
      className="easter-egg h-full max-h-screen min-h-screen w-full border-0 p-0"
    ></canvas>
    // Easter Egg End
  );
};

export default EasterEgg;
