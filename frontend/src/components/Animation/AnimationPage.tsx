'use client';

import { useEffect, useRef, Ref } from 'react';
import {
  useDispatchContext,
  useLoadingContext,
  useThemeContext,
} from '@/hooks/State';
import handleState from '@/state/actions';
import { isLightTheme } from '@/utilities/utils';
import { ACTION, COLOR, TEST } from '@/utilities/constants';

/**
 * @description Page transition component
 * @author Luca Cattide
 * @date 10/07/2025
 * @returns {*}  {React.ReactNode}
 */
const AnimationPage = (): React.ReactNode => {
  // Hooks
  const bars = useRef<Array<HTMLDivElement>>([]);
  const theme = useThemeContext();
  const loading = useLoadingContext();
  const dispatch = useDispatchContext();

  useEffect(() => {
    // Theme check
    if (isLightTheme(theme)) {
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
    }
  }, []);

  /**
   * @description Loader color handler
   * Manages the bar colors animation by randomly
   * assignin a value
   * @author Luca Cattide
   * @date 11/07/2025
   */
  const handleColor = (): void => {
    const keys = Object.keys(COLOR);

    bars.current.forEach((bar) => {
      // Existing check
      if (bar) {
        bar.style.backgroundColor =
          keys[Math.floor(Math.random() * keys.length)];
      }
    });
  };

  return (
    // Page Transition Start
    <aside
      className={`page-transition pointer-events-none fixed z-50 flex h-full w-full flex-col overflow-hidden select-none ${!loading && 'hidden'}`}
      data-testid={TEST.TRANSITION}
    >
      <h6 className="page-transition__title hidden">Transition</h6>
      {Object.values(COLOR).map((color, i) => (
        // Bar Start
        <div
          key={i}
          style={{ backgroundColor: color }}
          className="page-transition__color h-[6.25%] w-full skew-[-0.2deg]"
          ref={
            ((e: HTMLDivElement) =>
              (bars.current[i] = e)) as unknown as Ref<HTMLDivElement>
          }
        ></div>
        // Bar End
      ))}
    </aside>
    // Page Transition End
  );
};

export default AnimationPage;
