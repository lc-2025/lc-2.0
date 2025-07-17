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
    <>
      <div id="status"></div>
      <progress id="progress" className="hidden" value={0} max={1}></progress>
      <canvas
        id="canvas"
        className="easter-egg h-full max-h-dvh min-h-dvh w-full border-0 p-0"
      ></canvas>
      <div
        id="c64TextInputReceiver"
        className="hidden"
        contentEditable={false}
      ></div>
    </>
    // Easter Egg End
  );
};

export default EasterEgg;
