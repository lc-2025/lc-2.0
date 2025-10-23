'use client';

import { useMemo, useCallback, useReducer } from 'react';
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
import {
  reducerCookies,
  reducerLoading,
  reducerModal,
  reducerTheme,
  reducerTitle,
} from '@/state/reducers';
import { STATE } from '@/utilities/constants';

/**
 * Providers seems a bit redundant in their logic
 * but leaving as is for future scalability
 */

/**
 * @description Cookies Context Provider component
 * Cookies context provider wrapper
 * @author Luca Cattide
 * @date 04/09/2025
 * @param {{
 *   children: React.ReactNode;
 * }} {
 *   children,
 * }
 * @returns {*}  {React.ReactNode}
 */
const CookiesProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [state, dispatch] = useReducer(reducerCookies, STATE.cookies);
  // Action dispatching memoization to avoid unwanted re-renders
  const setCookies = useCallback(dispatch, []);
  // Context memoization to avoid unwanted re-renders
  const cookies = useMemo(() => state, [state]);

  return (
    <CookiesContext value={cookies}>
      <CookiesDispatchContext value={setCookies}>
        {children}
      </CookiesDispatchContext>
    </CookiesContext>
  );
};

/**
 * @description Loading Context Provider component
 * Loading context provider wrapper
 * @author Luca Cattide
 * @date 04/09/2025
 * @param {{
 *   children: React.ReactNode;
 * }} {
 *   children,
 * }
 * @returns {*}  {React.ReactNode}
 */
const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [state, dispatch] = useReducer(reducerLoading, STATE.loading);
  // Action dispatching memoization to avoid unwanted re-renders
  const setLoading = useCallback(dispatch, []);
  // Context memoization to avoid unwanted re-renders
  const loading = useMemo(() => state, [state]);

  return (
    <LoadingContext value={loading}>
      <LoadingDispatchContext value={setLoading}>
        {children}
      </LoadingDispatchContext>
    </LoadingContext>
  );
};

/**
 * @description Modal Context Provider component
 * Modal context provider wrapper
 * @author Luca Cattide
 * @date 04/09/2025
 * @param {{
 *   children: React.ReactNode;
 * }} {
 *   children,
 * }
 * @returns {*}  {React.ReactNode}
 */
const ModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [state, dispatch] = useReducer(reducerModal, STATE.modal);
  // Action dispatching memoization to avoid unwanted re-renders
  const setModal = useCallback(dispatch, []);
  // Context memoization to avoid unwanted re-renders
  const modal = useMemo(() => state, [state]);

  return (
    <ModalContext value={modal}>
      <ModalDispatchContext value={setModal}>{children}</ModalDispatchContext>
    </ModalContext>
  );
};

/**
 * @description Theme Context Provider component
 * Theme context provider wrapper
 * @author Luca Cattide
 * @date 04/09/2025
 * @param {{
 *   children: React.ReactNode;
 * }} {
 *   children,
 * }
 * @returns {*}  {React.ReactNode}
 */
const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [state, dispatch] = useReducer(reducerTheme, STATE.theme);
  // Action dispatching memoization to avoid unwanted re-renders
  const setTheme = useCallback(dispatch, []);
  // Context memoization to avoid unwanted re-renders
  const theme = useMemo(() => state, [state]);

  return (
    <ThemeContext value={theme}>
      <ThemeDispatchContext value={setTheme}>{children}</ThemeDispatchContext>
    </ThemeContext>
  );
};

const TitleProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [state, dispatch] = useReducer(reducerTitle, STATE.title);
  // Action dispatching memoization to avoid unwanted re-renders
  const setTitle = useCallback(dispatch, []);
  // Context memoization to avoid unwanted re-renders
  const title = useMemo(() => state, [state]);

  return (
    <TitleContext value={title}>
      <TitleDispatchContext value={setTitle}>{children}</TitleDispatchContext>
    </TitleContext>
  );
};

export {
  CookiesProvider,
  LoadingProvider,
  ModalProvider,
  ThemeProvider,
  TitleProvider,
};
