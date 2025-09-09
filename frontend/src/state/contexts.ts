import { createContext, ActionDispatch } from 'react';
import { STATE } from '@/utilities/constants';
import { TStateAction, TStateCookies } from '@/types/state/State';
import { TModalOpen } from '@/types/components/Modal';

/**
 * State & Disaptch Context
 * Using separated context to avoid unwanted re-renders
 */
const CookiesContext = createContext<TStateCookies>(STATE.cookies);
const LoadingContext = createContext<boolean>(STATE.loading);
const ModalContext = createContext<TModalOpen>(STATE.modal);
const ThemeContext = createContext<string>(STATE.theme);
const TitleContext = createContext<boolean>(STATE.title);
const DispatchContext = createContext<ActionDispatch<
  [action: TStateAction]
> | null>(null);

export {
  CookiesContext,
  ModalContext,
  ThemeContext,
  LoadingContext,
  TitleContext,
  DispatchContext,
};
