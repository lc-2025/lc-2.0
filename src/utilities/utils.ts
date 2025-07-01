import { ActionDispatch } from 'react';
import { THEME, ERROR } from './constants';
import { TState, TStateAction } from '@/types/state/State';

// Utilities
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
 * @date 01/07/2025
 * @param {(TState | ActionDispatch<[action)} context
 * @param {*} TStateAction
 */
const checkContext = (
  context: TState | ActionDispatch<[action: TStateAction]> | null,
): void => {
  // Context check
  if (!context) {
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
const isLightTheme = (theme: string): boolean => theme === THEME.NAME.LIGHT

export { setInitial, checkContext, isLightTheme };
