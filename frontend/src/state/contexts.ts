import { createContext, ActionDispatch } from 'react';
import { STATE } from '@/utilities/constants';
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
 * State & Disaptch Context
 * Using separated context to avoid unwanted re-renders
 */
const CookiesContext = createContext<TStateCookies>(STATE.cookies);
const LoadingContext = createContext<boolean>(STATE.loading);
const ModalContext = createContext<TModalOpen>(STATE.modal);
const ThemeContext = createContext<string>(STATE.theme);
const TitleContext = createContext<boolean>(STATE.title);
const CookiesDispatchContext = createContext<ActionDispatch<
  [action: TStateActionCookies]
> | null>(null);
const LoadingDispatchContext = createContext<ActionDispatch<
  [action: TStateActionLoading]
> | null>(null);
const ModalDispatchContext = createContext<ActionDispatch<
  [action: TStateActionModal]
> | null>(null);
const ThemeDispatchContext = createContext<ActionDispatch<
  [action: TStateActionTheme]
> | null>(null);
const TitleDispatchContext = createContext<ActionDispatch<
  [action: TStateActionTitle]
> | null>(null);

export {
  CookiesContext,
  ModalContext,
  ThemeContext,
  LoadingContext,
  TitleContext,
  CookiesDispatchContext,
  LoadingDispatchContext,
  ModalDispatchContext,
  ThemeDispatchContext,
  TitleDispatchContext,
};
