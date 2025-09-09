import { useContext, ActionDispatch } from 'react';
import {
  DispatchContext,
  CookiesContext,
  LoadingContext,
  ModalContext,
  ThemeContext,
  TitleContext,
} from '@/state/contexts';
import { checkContext } from '@/utilities/utils';
import { TStateAction, TStateCookies } from '@/types/state/State';
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
 * @description Dispatch Context hook
 * @author Luca Cattide
 * @date 01/07/2025
 * @returns {*}  {ActionDispatch<[action}
 */
const useDispatchContext = (): ActionDispatch<[action: TStateAction]> => {
  // Hooks
  const context = useContext(DispatchContext);

  checkContext(context);

  return context as ActionDispatch<[action: TStateAction]>;
};

export {
  useCookiesContext,
  useLoadingContext,
  useModalContext,
  useThemeContext,
  useTitleContext,
  useDispatchContext,
};
