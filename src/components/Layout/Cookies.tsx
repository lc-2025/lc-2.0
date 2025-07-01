'use client';

import { useEffect } from 'react';
import Action from './Action';
import { useStateContext } from '@/hooks/State';
import { isLightTheme } from '@/utilities/utils';
import { ACTIONS } from '@/utilities/constants';

const Cookies = (): React.ReactNode => {
  // Variables
  const { COOKIES } = ACTIONS;
  // Hooks
  const { theme } = useStateContext();

  useEffect(() => {
    handleTicker();
  }, []);

  // Handlers
  /**
   * @description Ticker handler
   * Manages the ticker animation
   * @author Luca Cattide
   * @date 30/06/2025
   */
  const handleTicker = (): void => {
    const element = document.getElementsByClassName(
      'cookies__summary',
    )[0] as HTMLElement;
    const elementWidth = element.offsetWidth;
    const parentWidth = element.parentElement!.offsetWidth;
    let flag = 0;

    setInterval(() => {
      element.style.marginLeft = --flag + 'px';

      // Position Check
      if (elementWidth === -flag) {
        flag = parentWidth;
      }
    }, 10);
  };

  return (
    // Cookies Start
    <aside
      className={`cookies bg-accent border-accent text-primary flex flex-col justify-between border-16 ${isLightTheme(theme) && 'absolute right-6 bottom-[12rem] left-6 m-auto w-[calc(100%-12rem-30px)] overflow-hidden pr-6 pl-6'}`}
    >
      <h6 className="cookies__title hidden">Cookies</h6>
      <p
        className={`cookies__summary w-full ${isLightTheme(theme) && 'leading-mobile lg:leading-desktop'}`}
      >
        Lorem ipsum dolor sit amet.
      </p>
      {/* Actions Start */}
      <div
        className={`cookies__actions pt-6 text-right ${isLightTheme(theme) && 'leading-mobile lg:leading-desktop'}`}
      >
        {COOKIES.map((action, i) => (
          <div key={crypto.randomUUID() + i} className="inline-block">
            <Action action={action} />
            {i < COOKIES.length - 1 && (
              <span className="actions__separator pr-3 pl-3">
                {isLightTheme(theme) ? '|' : ''}
              </span>
            )}
          </div>
        ))}
      </div>
      {/* Actions End */}
    </aside>
    // Cookies End
  );
};

export default Cookies;
