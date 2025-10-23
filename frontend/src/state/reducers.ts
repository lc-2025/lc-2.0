import { ACTION, STATE } from '@/utilities/constants';
import {
  TStateActionCookies,
  TStateActionLoading,
  TStateActionModal,
  TStateActionTheme,
  TStateActionTitle,
  TStateCookies,
} from '@/types/state/State';
import { TModalOpen } from '@/types/components/Modal';

/**
 * Reducers seems a bit redundant in their logic
 * but leaving as is for future scalability
 */

/**
 * @description Cookies state reducer
 * Manages the cookies state updates
 * @author Luca Cattide
 * @date 04/09/2025
 * @param {TStateCookies} state
 * @param {TStateActionCookies} action
 * @returns {*}  {TStateCookies}
 */
const reducerCookies = (
  state: TStateCookies,
  action: TStateActionCookies,
): TStateCookies => {
  const { COOKIES, RESET } = ACTION;
  const { type, element } = action;
  let reducerCookies = null;

  switch (type) {
    case COOKIES:
      reducerCookies = { ...state, ...element };
      break;

    case RESET:
      reducerCookies = STATE.cookies;
      break;

    default:
      reducerCookies = STATE.cookies;
  }

  return reducerCookies;
};

/**
 * @description Loading state reducer
 * Manages the loading state updates
 * @author Luca Cattide
 * @date 04/09/2025
 * @param {boolean} state
 * @param {TStateActionLoading} action
 * @returns {*}  {boolean}
 */
const reducerLoading = (
  state: boolean,
  action: TStateActionLoading,
): boolean => {
  const { LOADING, RESET } = ACTION;
  const { type, element } = action;
  let reducerLoading = null;

  switch (type) {
    case LOADING:
      state = element;
      reducerLoading = state;
      break;

    case RESET:
      reducerLoading = STATE.loading;
      break;

    default:
      reducerLoading = STATE.loading;
  }

  return reducerLoading;
};

/**
 * @description Modal state reducer
 * Manages the modal state updates
 * @author Luca Cattide
 * @date 04/09/2025
 * @param {TModalOpen} state
 * @param {TStateActionModal} action
 * @returns {*}  {TModalOpen}
 */
const reducerModal = (
  state: TModalOpen,
  action: TStateActionModal,
): TModalOpen => {
  const { MODAL, RESET } = ACTION;
  const { type, element } = action;
  let reducerModal = null;

  switch (type) {
    case MODAL:
      reducerModal = { ...state, ...element };
      break;

    case RESET:
      reducerModal = STATE.modal;
      break;

    default:
      reducerModal = STATE.modal;
  }

  return reducerModal;
};

/**
 * @description Theme state reducer
 * Manages the theme state updates
 * @author Luca Cattide
 * @date 04/09/2025
 * @param {string} state
 * @param {TStateActionTheme} action
 * @returns {*}  {string}
 */
const reducerTheme = (state: string, action: TStateActionTheme): string => {
  const { THEME, RESET } = ACTION;
  const { type, element } = action;
  let reducerTheme = null;

  switch (type) {
    case THEME:
      state = element;
      reducerTheme = state;
      break;

    case RESET:
      reducerTheme = STATE.theme;
      break;

    default:
      reducerTheme = STATE.theme;
  }

  return reducerTheme;
};

/**
 * @description Title state reducer
 * Manages the title state updates
 * @author Luca Cattide
 * @date 04/09/2025
 * @param {boolean} state
 * @param {TStateActionTitle} action
 * @returns {*}  {boolean}
 */
const reducerTitle = (state: boolean, action: TStateActionTitle): boolean => {
  const { TITLE, RESET } = ACTION;
  const { type, element } = action;
  let reducerTitle = null;

  switch (type) {
    case TITLE:
      state = element;
      reducerTitle = state;
      break;

    case RESET:
      reducerTitle = STATE.title;
      break;

    default:
      reducerTitle = STATE.title;
  }

  return reducerTitle;
};

export {
  reducerCookies,
  reducerLoading,
  reducerModal,
  reducerTheme,
  reducerTitle,
};
