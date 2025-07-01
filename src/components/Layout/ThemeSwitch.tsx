'use client';

import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';
import { WINDOW, THEME } from '@/utilities/constants';

const ThemeSwitch = (): React.ReactNode => {
  // Variables
  const { LABEL } = THEME;
  const { LIGHT, DARK } = THEME.NAME;
  let isDark = false;
  // Hooks
  const [theme, setTheme] = useState<string>(LIGHT);

  useEffect(() => {
    // LocalStorage check
    if (window.localStorage) {
      const themeSaved = localStorage.getItem(LABEL) ?? '';

      // User preference + system-aware detection
      isDark =
        themeSaved === DARK || window.matchMedia(WINDOW.MEDIA.THEME).matches;

      setTheme(isDark ? DARK : LIGHT);
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

    setTheme(value ? DARK : LIGHT);
  };

  return (
    // Theme Switch Start
    <aside className="theme-switcher flex items-center">
      <h6 className="theme-switch__title hidden">Theme</h6>
      <div className="theme-switch__icon theme-switch__icon--light relative h-auto mr-6 w-full max-w-[48px] min-w-[48px] bg-size-[100%] bg-left-top bg-no-repeat pb-[4.8rem] select-none"></div>
      <Switch
        checked={theme === DARK}
        onChange={handleTheme}
        className="theme-switcher__field group relative flex h-12 w-24 cursor-pointer bg-primary p-1 focus:outline-none data-[checked]:bg-accent data-[focus]:outline-1 data-[focus]:outline-accent"
        tabIndex={3}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-10 translate-x-0 bg-accent shadow-lg ring-0 group-data-[checked]:translate-x-12 group-data-[checked]:bg-primary"
        />
      </Switch>
      <div className="theme-switch__icon theme-switch__icon--dark relative h-auto ml-6 w-full max-w-[48px] min-w-[48px] bg-size-[100%] bg-left-top bg-no-repeat pb-[4.8rem] select-none"></div>
    </aside>
    // Theme Switch End
  );
};

export default ThemeSwitch;
