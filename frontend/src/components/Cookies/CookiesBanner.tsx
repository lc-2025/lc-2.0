'use client';

import { useEffect } from 'react';
import Action from '../Layout/Action';
import {
  useCookiesContext,
  useDispatchContextCookies,
  useThemeContext,
} from '@/hooks/State';
import useStorage from '@/hooks/Storage';
import handleState from '@/state/actions';
import { isLightTheme } from '@/utilities/utils';
import { ACTIONS, ACTION, COOKIES_STATE, TEST } from '@/utilities/constants';
import { METADATA } from '@/data/content';
import { Cookie, Status, TStateCookies } from '@/types/state/State';

/**
 * @description Cookies banner component
 * @author Luca Cattide
 * @date 08/07/2025
 * @returns {*}  {React.ReactNode}
 */
const CookiesBanner = (): React.ReactNode => {
  // Variables
  const { COOKIES } = ACTIONS;
  // Hooks
  const { getStorage, setStorage } = useStorage();
  const theme = useThemeContext();
  const cookies = useCookiesContext();
  const { open } = cookies;
  const dispatch = useDispatchContextCookies();

  useEffect(() => {
    initCookies();

    // Banner check
    if (open) {
      handleTicker();
    }
  }, [open]);

  // Helpers
  /**
   * @description Cookies initialization helper
   * @author Luca Cattide
   * @date 08/07/2025
   */
  const initCookies = (): void => {
    const cookiesSaved = getStorage(ACTION.COOKIES)
      ? JSON.parse(getStorage(ACTION.COOKIES)!)
      : '';

    handleState(
      {
        type: ACTION.COOKIES,
        element: {
          open: cookiesSaved ? false : true,
          status: cookiesSaved.status ?? cookies.status,
          active: cookiesSaved.active ?? cookies.active,
        },
      },
      dispatch as keyof typeof dispatch,
    );
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
      'container__summary',
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

  /**
   * @description Cookies selection handler
   * Manages the selected cookies
   * @author Luca Cattide
   * @date 09/07/2025
   * @param {string} option
   */
  const handleCookies = (option: string): void => {
    const cookiesList = {
      [Status.Accepted]: Object.values(Cookie),
      [Status.Required]: [Cookie.Essentials],
      [Status.Declined]: [],
    };
    const selection = {
      open: false,
      status: option,
      active: cookiesList[option as keyof typeof cookiesList],
    };

    setStorage(ACTION.COOKIES, JSON.stringify(selection));
    handleState(
      {
        type: ACTION.COOKIES,
        element: selection as TStateCookies,
      },
      dispatch as keyof typeof dispatch,
    );
  };

  return (
    // Cookies Start
    <aside
      className={`cookies-banner bg-accent text-primary ${!open && 'hidden'}`}
      data-testid={TEST.COOKIE.BANNER}
    >
      <h6 className="cookies-banner__title hidden">
        {METADATA.TITLE.COOKIES.LABEL}
      </h6>
      {/* Container Start */}
      <div
        className={`cookies-banner__container bg-accent flex flex-col justify-between p-6 ${isLightTheme(theme) && 'border-primary m-auto w-[calc(100%-3rem)] overflow-hidden border-16 md:w-[calc(100%-16rem)]'}`}
      >
        <p
          className={`container__summary w-max ${isLightTheme(theme) && 'leading-mobile lg:leading-desktop'}`}
        >
          This site uses cookies - technical and third-party - to offer the best
          possible web experience. By accepting, you consent to their use.
        </p>
        {/* Actions Start */}
        <ul
          className={`container__actions pt-6 text-center md:text-right ${isLightTheme(theme) && 'leading-mobile lg:leading-desktop'}`}
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

export default CookiesBanner;
