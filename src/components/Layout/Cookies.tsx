'use client';

import { useEffect, useState } from 'react';
import Action from './Action';
import useShortcut from '@/hooks/Shortcut';
import { useDispatchContext, useStateContext } from '@/hooks/State';
import handleState from '@/state/actions';
import { isLightTheme } from '@/utilities/utils';
import { ACTIONS, ACTION, COOKIES_STATE } from '@/utilities/constants';
import { METADATA } from '@/data/content';

/**
 * @description Cookies component
 * @author Luca Cattide
 * @date 08/07/2025
 * @returns {*}  {React.ReactNode}
 */
const Cookies = (): React.ReactNode => {
  // Variables
  const { COOKIES } = ACTIONS;
  // Hooks
  const { theme } = useStateContext();
  const dispatch = useDispatchContext();
  const [open, setOpen] = useState<boolean>(false);

  useShortcut();
  useEffect(() => {
    initCookies();
    handleTicker();
  }, []);

  // Helpers
  /**
   * @description Cookies initialization helper
   * @author Luca Cattide
   * @date 08/07/2025
   */
  const initCookies = (): void => {
    // LocalStorage check
    if (window.localStorage) {
      const cookies = localStorage.getItem(ACTION.COOKIES) ?? '';

      handleState({ type: ACTION.COOKIES, element: cookies }, dispatch);
      setOpen(cookies ? false : true);
    }
  };

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

    // Existing check
    if (element) {
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
    }
  };

  const handleCookies = (option: string): void => {
    // LocalStorage check
    if (window.localStorage) {
      localStorage.setItem(ACTION.COOKIES, option);
    }

    handleState({ type: ACTION.COOKIES, element: option }, dispatch);
    setOpen(false);
  };

  return (
    // Cookies Start
    <aside className={`cookies bg-accent text-primary ${!open && 'hidden'}`}>
      <h6 className="cookies__title hidden">{METADATA.TITLE.COOKIES.LABEL}</h6>
      {/* Container Start */}
      <div
        className={`cookies__container bg-accent flex flex-col justify-between p-6 ${isLightTheme(theme) && 'border-primary m-auto w-[calc(100%-16rem)] overflow-hidden border-16'}`}
      >
        <p
          className={`cookies__summary w-max ${isLightTheme(theme) && 'leading-mobile lg:leading-desktop'}`}
        >
          This site uses cookies - technical and third-party - to offer the best
          possible web experience. By accepting, you consent to their use.
        </p>
        {/* Actions Start */}
        <ul
          className={`cookies__actions pt-6 text-right ${isLightTheme(theme) && 'leading-mobile lg:leading-desktop'}`}
        >
          {COOKIES.map((action, i) => (
            // Action Start
            <li key={crypto.randomUUID() + i} className="inline-block">
              <Action
                action={{
                  ...action,
                  callback: () =>
                    handleCookies(Object.values(COOKIES_STATE)[i]),
                }}
              />
              {i < COOKIES.length - 1 && (
                <span className="actions__separator pr-3 pl-3">
                  {isLightTheme(theme) ? '|' : ''}
                </span>
              )}
            </li>
            // Action End
          ))}
        </ul>
        {/* Actions End */}
      </div>
      {/* Container End */}
    </aside>
    // Cookies End
  );
};

export default Cookies;
