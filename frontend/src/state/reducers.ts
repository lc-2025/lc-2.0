import { ACTION, STATE } from '@/utilities/constants';
import { TStateAction, TStateCookies } from '@/types/state/State';
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
 * @param {TStateAction} action
 * @returns {*}  {TStateCookies}
 */
const reducerCookies = (
  state: TStateCookies,
  action: TStateAction,
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
 * @param {TStateAction} action
 * @returns {*}  {boolean}
 */
const reducerLoading = (state: boolean, action: TStateAction): boolean => {
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
 * @param {TStateAction} action
 * @returns {*}  {TModalOpen}
 */
const reducerModal = (state: TModalOpen, action: TStateAction): TModalOpen => {
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
 * @param {TStateAction} action
 * @returns {*}  {string}
 */
const reducerTheme = (state: string, action: TStateAction): string => {
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
 * @param {TStateAction} action
 * @returns {*}  {boolean}
 */
const reducerTitle = (state: boolean, action: TStateAction): boolean => {
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
