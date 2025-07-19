'use client';

import { useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { useDispatchContext, useStateContext } from '@/hooks/State';
import handleState from '@/state/actions';
import { isLightTheme, getStorage, setStorage } from '@/utilities/utils';
import { WINDOW, THEME, ACTION } from '@/utilities/constants';
import { Cookie } from '@/types/state/State';

const ThemeSwitch = (): React.ReactNode => {
  // Variables
  const { LABEL } = THEME;
  const { LIGHT, DARK } = THEME.NAME;
  const themeSaved = getStorage(LABEL) ?? '';
  const cookiesStorage = getStorage(ACTION.COOKIES);
  let isDark = false;
  // Hooks
  const { theme } = useStateContext();
  const dispatch = useDispatchContext();

  useEffect(() => {
    // User preference + system-aware detection
    isDark =
      themeSaved === DARK || window.matchMedia(WINDOW.MEDIA.THEME.DARK).matches;

    handleState(
      { type: ACTION.THEME, element: isDark ? DARK : LIGHT },
      dispatch,
    );
    enableTheme(isDark);
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

    // TODO: Move to a new "Storage" hook
    // Storage + state check
    if (
      themeSaved !== '' ||
      (cookiesStorage &&
        JSON.parse(cookiesStorage).active.includes(Cookie.Essentials))
    ) {
      setStorage(LABEL, value ? LIGHT : DARK);
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
      {isLightTheme(theme) ? (
        <div className="theme-switch__icon theme-switch__icon--light relative mr-6 h-auto w-full max-w-[48px] min-w-[48px] bg-size-[100%] bg-left-top bg-no-repeat pb-[4.8rem] select-none"></div>
      ) : (
        <span className="theme-switch__icon mr-6 text-[3.8rem] select-none">
          ☀️
        </span>
      )}
      <Switch
        checked={!isLightTheme(theme)}
        onChange={handleTheme}
        className={`theme-switcher__field group data-[focus]:outline-accent relative flex h-19 w-38 cursor-pointer p-1 focus:outline-none data-[focus]:outline-1 ${isLightTheme(theme) ? 'bg-primary data-[checked]:bg-accent p-1' : 'bg-accent data-[checked]:bg-primary border-accent border-2 pt-[0.5px] pr-0 pb-0 pl-[2px]'}`}
        tabIndex={3}
      >
        <span
          aria-hidden="true"
          className={`pointer-events-none inline-block size-17 translate-x-0 group-data-[checked]:translate-x-19 ${isLightTheme(theme) ? 'bg-accent group-data-[checked]:bg-primary' : 'bg-primary group-data-[checked]:bg-accent'}`}
        />
      </Switch>
      {isLightTheme(theme) ? (
        <div className="theme-switch__icon theme-switch__icon--dark relative ml-6 h-auto w-full max-w-[48px] min-w-[48px] bg-size-[100%] bg-left-top bg-no-repeat pb-[4.8rem] select-none"></div>
      ) : (
        <span className="theme-switch__icon ml-6 text-[3.8rem] select-none">
          🌙
        </span>
      )}
    </aside>
    // Theme Switch End
  );
};

export default ThemeSwitch;
