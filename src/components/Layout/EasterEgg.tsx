'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useStorage from '@/hooks/Storage';
import { useStateContext } from '@/hooks/State';
import { checkCookiesRequired } from '@/utilities/utils';
import { COMMAND, ROUTE, ACTION } from '@/utilities/constants';

/**
 * @description Easter Egg component
 * @author Luca Cattide
 * @date 12/07/2025
 * @returns {*}  {React.ReactNode}
 */
const EasterEgg = (): React.ReactNode => {
  // Hooks
  const router = useRouter();
  const { getStorage } = useStorage();
  const cookiesStorage = getStorage(ACTION.COOKIES);
  const { cookies } = useStateContext();

  useEffect(() => {
    // Session storage check
    if (
      window.sessionStorage &&
        !sessionStorage.getItem(COMMAND.BALLOON) &&
        ((cookiesStorage &&
        JSON.parse(cookiesStorage).status) ||
      checkCookiesRequired(cookies))
    ) {
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
