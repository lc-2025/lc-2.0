import { useContext, ActionDispatch } from 'react';
import {
  CookiesContext,
  LoadingContext,
  ModalContext,
  ThemeContext,
  TitleContext,
  CookiesDispatchContext,
  LoadingDispatchContext,
  ModalDispatchContext,
  ThemeDispatchContext,
  TitleDispatchContext,
} from '@/state/contexts';
import { checkContext } from '@/utilities/utils';
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
 * Hooks seems a bit redundant in their logic
 * but leaving as is for future scalability
 */

/**
 * @description Cookies state context hook
 * @author Luca Cattide
 * @date 04/09/2025
 * @returns {*}  {TStateCookies}
 */
const useCookiesContext = (): TStateCookies => {
  // Hooks
  const context = useContext(CookiesContext);

  checkContext(context);

  return context;
};

/**
 * @description Loading state context hook
 * @author Luca Cattide
 * @date 04/09/2025
 * @returns {*}  {boolean}
 */
const useLoadingContext = (): boolean => {
  // Hooks
  const context = useContext(LoadingContext);

  checkContext(context);

  return context;
};

/**
 * @description Modal state context hook
 * @author Luca Cattide
 * @date 04/09/2025
 * @returns {*}  {TModalOpen}
 */
const useModalContext = (): TModalOpen => {
  // Hooks
  const context = useContext(ModalContext);

  checkContext(context);

  return context;
};

/**
 * @description Theme state context hook
 * @author Luca Cattide
 * @date 04/09/2025
 * @returns {*}  {string}
 */
const useThemeContext = (): string => {
  // Hooks
  const context = useContext(ThemeContext);

  checkContext(context);

  return context;
};

/**
 * @description Title state context hook
 * @author Luca Cattide
 * @date 04/09/2025
 * @returns {*}  {boolean}
 */
const useTitleContext = (): boolean => {
  // Hooks
  const context = useContext(TitleContext);

  checkContext(context);

  return context;
};

/**
 * @description Cookies Dispatch Context hook
 * @author Luca Cattide
 * @date 23/10/2025
 * @returns {*}  {ActionDispatch<
 *   [action}
 */
const useDispatchContextCookies = (): ActionDispatch<
  [action: TStateActionCookies]
> => {
  // Hooks
  const context = useContext(CookiesDispatchContext);

  checkContext(context as keyof typeof context);

  return context as ActionDispatch<[action: TStateActionCookies]>;
};

/**
 * @description Loading Dispatch Context hook
 * @author Luca Cattide
 * @date 23/10/2025
 * @returns {*}  {ActionDispatch<
 *   [action}
 */
const useDispatchContextLoading = (): ActionDispatch<
  [action: TStateActionLoading]
> => {
  // Hooks
  const context = useContext(LoadingDispatchContext);

  checkContext(context as keyof typeof context);

  return context as ActionDispatch<[action: TStateActionLoading]>;
};

/**
 * @description Modal Dispatch Context hook
 * @author Luca Cattide
 * @date 23/10/2025
 * @returns {*}  {ActionDispatch<
 *   [action}
 */
const useDispatchContextModal = (): ActionDispatch<
  [action: TStateActionModal]
> => {
  // Hooks
  const context = useContext(ModalDispatchContext);

  checkContext(context as keyof typeof context);

  return context as ActionDispatch<[action: TStateActionModal]>;
};

/**
 * @description Theme Dispatch Context hook
 * @author Luca Cattide
 * @date 23/10/2025
 * @returns {*}  {ActionDispatch<
 *   [action}
 */
const useDispatchContextTheme = (): ActionDispatch<
  [action: TStateActionTheme]
> => {
  // Hooks
  const context = useContext(ThemeDispatchContext);

  checkContext(context as keyof typeof context);

  return context as ActionDispatch<[action: TStateActionTheme]>;
};

/**
 * @description Title Dispatch Context hook
 * @author Luca Cattide
 * @date 23/10/2025
 * @returns {*}  {ActionDispatch<
 *   [action}
 */
const useDispatchContextTitle = (): ActionDispatch<
  [action: TStateActionTitle]
> => {
  // Hooks
  const context = useContext(TitleDispatchContext);

  checkContext(context as keyof typeof context);

  return context as ActionDispatch<[action: TStateActionTitle]>;
};

export {
  useCookiesContext,
  useLoadingContext,
  useModalContext,
  useThemeContext,
  useTitleContext,
  useDispatchContextCookies,
  useDispatchContextLoading,
  useDispatchContextModal,
  useDispatchContextTheme,
  useDispatchContextTitle,
};
