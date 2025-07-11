'use client';

import { useEffect, useRef, Ref } from 'react';
import { useDispatchContext, useStateContext } from '@/hooks/State';
import handleState from '@/state/actions';
import { ACTION } from '@/utilities/constants';

/**
 * @description Page transition component
 * @author Luca Cattide
 * @date 10/07/2025
 * @returns {*}  {React.ReactNode}
 */
const AnimationPage = (): React.ReactNode => {
  // Variables
  const rainbow = {
    black: '#000',
    white: '#fff',
    red: '#880000',
    cyan: '#AAFFEE',
    magenta: '#CC44CC',
    green1: '#00CC55',
    blue: '#0000AA',
    yellow: '#EEEE77',
    orange: '#DD8855',
    brown: '#664400',
    pink: '#FF7777',
    grey1: '#333',
    grey2: '#777',
    green2: '#AAFF66',
    azure: '#0088FF',
    grey3: '#888',
  };
  // Hooks
  const bars = useRef<Array<HTMLDivElement>>([]);
  const { loading } = useStateContext();
  const dispatch = useDispatchContext();

  useEffect(() => {
    setInterval(() => {
      handleColor();
    }, 100);

    const timer = setTimeout(() => {
      handleState(
        {
          type: ACTION.LOADING,
          element: false,
        },
        dispatch,
      );
      clearTimeout(timer);
    }, 500);
  }, [loading]);

  // TODO: animation + viewTransition API (library) - https://www.youtube.com/watch?v=YID_QG07_qU&t=69s
  // Component visibility state on/off on global state context - triggered via viewT. API

  /**
   * @description Loader color handler
   * Manages the bar colors animation by randomly
   * assignin a value
   * @author Luca Cattide
   * @date 11/07/2025
   */
  const handleColor = (): void => {
    const keys = Object.keys(rainbow);

    bars.current.forEach((bar) => {
      bar.style.backgroundColor = keys[Math.floor(Math.random() * keys.length)];
    });
  };

  return (
    // Page Transition Start
    <aside
      className={`page-transition pointer-events-none fixed z-50 flex h-full w-full flex-col overflow-hidden select-none ${!loading && 'hidden'}`}
    >
      <h6 className="page-transition__title hidden">Transition</h6>
      {Object.values(rainbow).map((color, i) => (
        <div
          key={i}
          style={{ backgroundColor: color }}
          className="page-transition__color h-[6.25%] w-full"
          ref={
            ((e: HTMLDivElement) =>
              (bars.current[i] = e)) as unknown as Ref<HTMLDivElement>
          }
        ></div>
      ))}
    </aside>
    // Page Transition End
  );
};

export default AnimationPage;
