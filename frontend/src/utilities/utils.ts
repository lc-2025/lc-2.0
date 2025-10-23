import { ActionDispatch } from 'react';
import { THEME, ROUTE, ERROR, SECTION, LINKS_STRUCTURAL } from './constants';
import {
  TStateCookies,
  Cookie,
  TStateActionCookies,
  TStateActionLoading,
  TStateActionModal,
  TStateActionTheme,
  TStateActionTitle,
} from '@/types/state/State';
import { TRoute } from '@/types/navigation/Route';
import { TModalOpen } from '@/types/components/Modal';

// Utilities
const { HOME, ABOUT, PORTFOLIO, CONTACTS } = ROUTE;
const { PRIVACY, COOKIES } = LINKS_STRUCTURAL;
const { TITLES, ARTICLE } = SECTION;

/**
 * @description String capitalization helper
 * Capitalizes a string first letter
 * @author Luca Cattide
 * @date 25/06/2025
 * @param {string} value
 * @returns {*}  {string}
 */
const setInitial = (value: string): string =>
  value.charAt(0).toUpperCase() + value.slice(1);

/**
 * @description Context helper
 * Checks if the context is properly defined
 * @author Luca Cattide
 * @date 04/09/2025
 * @param {(TStateCookies
 *     | boolean
 *     | TModalOpen
 *     | string
 *     | ActionDispatch<[action)} context
 * @param {*} TStateAction
 */
const checkContext = (
  context:
    | TStateCookies
    | boolean
    | TModalOpen
    | string
    | ActionDispatch<
        [
          action:
            | TStateActionCookies
            | TStateActionLoading
            | TStateActionModal
            | TStateActionTheme
            | TStateActionTitle,
        ]
      >
    | null,
): void => {
  // Context check
  if (context === null) {
    throw new Error(ERROR.CONTEXT);
  }
};

/**
 * @description Light theme helper
 * Verifies if the current theme is the light one
 * @author Luca Cattide
 * @date 01/07/2025
 * @param {string} theme
 * @returns {*}  {boolean}
 */
const isLightTheme = (theme: string): boolean => theme === THEME.NAME.LIGHT;

/**
 * @description Home page helper
 * Verifies if the current page is the home
 * @author Luca Cattide
 * @date 01/07/2025
 * @param {string} path
 * @returns {*}  {boolean}
 */
const isHome = (path: string): boolean => path === HOME.PATH;

/**
 * @description Animation timeline setter
 * Sets the animation delays
 * according to the current page/section
 * @author Luca Cattide
 * @date 02/07/2025
 * @param {string} path
 * @param {string} type
 * @returns {*}  {number}
 */
const setTimeline = (
  path: string,
  type: string,
  themeLight: boolean,
  delay?: number,
): number => {
  const section = {
    [TITLES]: {
      [HOME.PATH]: delay ? delay : themeLight ? 600 : 0,
    },
    [ARTICLE]: {
      [HOME.PATH]: delay ? delay : themeLight ? 800 : 0,
      [HOME.SUB.INTRO.PATH]: delay ? delay : themeLight ? 100 : 0,
      [ABOUT.PATH]: delay ? delay : themeLight ? 200 : 0,
      [PORTFOLIO.PATH]: delay ? delay : themeLight ? 300 : 0,
      [CONTACTS.PATH]: delay ? delay : themeLight ? 400 : 0,
      [PRIVACY.PATH]: delay ? delay : themeLight ? 500 : 0,
      [COOKIES.PATH]: delay ? delay : themeLight ? 700 : 0,
    },
  };

  return section[type][path];
};

/**
 * @description Reverse symbol getter
 * Retrieves the reverse C symbol based on the
 * current theme
 * @author Luca Cattide
 * @date 07/07/2025
 * @param {boolean} themeLight
 * @returns {*}  {string}
 */
const getReverseC = (themeLight: boolean): string => (themeLight ? ')' : 'ↄ');

/**
 * @description Acrive cookies checker
 * Verifies if the selected cookies is active
 * @author Luca Cattide
 * @date 09/07/2025
 * @param {Array<Cookie>} cookies
 * @param {string} cookie
 * @returns {*}  {boolean}
 */
const isCookieActive = (cookies: Array<Cookie>, cookie: string): boolean =>
  Object.values(cookies).includes(cookie.toLowerCase() as Cookie);

/**
 * @description Menu route helper
 * Sets the menu entries according to the current path
 * by removing it from the list
 * @author Luca Cattide
 * @date 25/06/2025
 * @returns {*}  {TRoute}
 */
const setRoute = (pathname: string): TRoute => {
  const path = isHome(pathname)
    ? ROUTE.HOME.LABEL.toUpperCase()
    : pathname.replace('/', '').toUpperCase();
  const { [path as keyof typeof ROUTE]: _, ...rest } = ROUTE;

  return rest;
};

/**
 * @description Cookies checking helper
 * Verifies if the requested cookies are enabled
 * @author Luca Cattide
 * @date 23/07/2025
 * @param {TStateCookies} cookies
 * @returns {*}  {boolean}
 */
const checkCookies = (cookies: TStateCookies, type: Cookie): boolean =>
  cookies.active.includes(type);

/**
 * @description Date formatter helper
 * Converts a default date notation into MM/DD/YYYY
 * @author Luca Cattide
 * @date 23/07/2025
 * @param {string} date
 * @returns {*}  {string}
 */
const formatDate = (date: string): string => {
  const dateFormat = new Date(date);

  return `${dateFormat.getMonth() + 1}/${dateFormat.getDate()}/${dateFormat.getFullYear()}`;
};

export {
  setInitial,
  checkContext,
  isLightTheme,
  isHome,
  setTimeline,
  getReverseC,
  isCookieActive,
  setRoute,
  checkCookies,
  formatDate,
};
