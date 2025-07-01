'use client';

import { useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { useDispatchContext, useStateContext } from '@/hooks/State';
import handleState from '@/state/actions';
import { WINDOW, THEME, ACTION } from '@/utilities/constants';

const ThemeSwitch = (): React.ReactNode => {
  // Variables
  const { LABEL } = THEME;
  const { LIGHT, DARK } = THEME.NAME;
  let isDark = false;
  // Hooks
  const state = useStateContext();
  const dispatch = useDispatchContext();

  useEffect(() => {
    // LocalStorage check
    if (window.localStorage) {
      const themeSaved = localStorage.getItem(LABEL) ?? '';

      // User preference + system-aware detection
      isDark =
        themeSaved === DARK || window.matchMedia(WINDOW.MEDIA.THEME).matches;

      handleState(
        { type: ACTION.THEME, element: isDark ? DARK : LIGHT },
        dispatch,
      );
      enableTheme(isDark);
    }
  }, []);

  // Helpers
  /**
   * @description Theme enabler
   * Activates the selected theme
   * @author Luca Cattide
   * @date 01/07/2025
   * @param {boolean} isDark
   */
  const enableTheme = (isDark: boolean): void => {
    // Dark Theme check
    if (isDark) {
      document.documentElement.classList.add(DARK);
    } else {
      document.documentElement.classList.remove(DARK);
    }
  };

  // Handlers
  /**
   * @description Theme handler
   * Manages the theme acrivation and its persistence
   * @author Luca Cattide
   * @date 01/07/2025
   * @param {boolean} value
   */
  const handleTheme = (value: boolean): void => {
    enableTheme(value);

    // LocalStorage check
    if (window.localStorage) {
      // Theme check
      if (value) {
        localStorage.setItem(LABEL, DARK);
      } else {
        localStorage.setItem(LABEL, LIGHT);
      }
    }

    handleState(
      { type: ACTION.THEME, element: value ? DARK : LIGHT },
      dispatch,
    );
  };

  return (
    // Theme Switch Start
    <aside className="theme-switcher flex items-center">
      <h6 className="theme-switch__title hidden">Theme</h6>
      <div className="theme-switch__icon theme-switch__icon--light relative mr-6 h-auto w-full max-w-[48px] min-w-[48px] bg-size-[100%] bg-left-top bg-no-repeat pb-[4.8rem] select-none"></div>
      <Switch
        checked={state.theme === DARK}
        onChange={handleTheme}
        className="theme-switcher__field group bg-primary data-[checked]:bg-accent data-[focus]:outline-accent relative flex h-12 w-24 cursor-pointer p-1 focus:outline-none data-[focus]:outline-1"
        tabIndex={3}
      >
        <span
          aria-hidden="true"
          className="bg-accent group-data-[checked]:bg-primary pointer-events-none inline-block size-10 translate-x-0 shadow-lg ring-0 group-data-[checked]:translate-x-12"
        />
      </Switch>
      <div className="theme-switch__icon theme-switch__icon--dark relative ml-6 h-auto w-full max-w-[48px] min-w-[48px] bg-size-[100%] bg-left-top bg-no-repeat pb-[4.8rem] select-none"></div>
    </aside>
    // Theme Switch End
  );
};

export default ThemeSwitch;
