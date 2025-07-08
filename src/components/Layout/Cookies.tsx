'use client';

import { useEffect } from 'react';
import Action from './Action';
import useShortcut from '@/hooks/Shortcut';
import { useStateContext } from '@/hooks/State';
import { isLightTheme } from '@/utilities/utils';
import { ACTIONS } from '@/utilities/constants';
import { METADATA } from '@/data/content';

/**
 * @description Cookies component
 * @author Luca Cattide
 * @date 08/07/2025
 * @returns {*}  {React.ReactNode}
 */
const Cookies = (): React.ReactNode => {
  // Variables
  const { COOKIES } = ACTIONS;
  // Hooks
  const { theme } = useStateContext();

  useShortcut();
  useEffect(() => {
    handleTicker();
  }, []);

  // Handlers
  /**
   * @description Ticker handler
   * Manages the ticker animation
   * @author Luca Cattide
   * @date 30/06/2025
   */
  const handleTicker = (): void => {
    const element = document.getElementsByClassName(
      'cookies__summary',
    )[0] as HTMLElement;
    const elementWidth = element.offsetWidth;
    const parentWidth = element.parentElement!.offsetWidth;
    let flag = 0;

    setInterval(() => {
      element.style.marginLeft = --flag + 'px';

      // Position Check
      if (elementWidth === -flag) {
        flag = parentWidth;
      }
    }, 10);
  };

  return (
    // Cookies Start
    <aside className="cookies bg-accent text-primary">
      <h6 className="cookies__title hidden">{METADATA.TITLE.COOKIES}</h6>
      <div
        className={`cookies__container bg-accent flex flex-col justify-between p-6 ${isLightTheme(theme) && 'border-primary m-auto w-[calc(100%-16rem)] overflow-hidden border-16'}`}
      >
        <p
          className={`cookies__summary w-max ${isLightTheme(theme) && 'leading-mobile lg:leading-desktop'}`}
        >
          This site uses cookies - technical and third-party - to offer the best
          possible web experience. By accepting, you consent to their use.
        </p>
        {/* Actions Start */}
        <div
          className={`cookies__actions pt-6 text-right ${isLightTheme(theme) && 'leading-mobile lg:leading-desktop'}`}
        >
          {COOKIES.map((action, i) => (
            <div key={crypto.randomUUID() + i} className="inline-block">
              <Action action={action} />
              {i < COOKIES.length - 1 && (
                <span className="actions__separator pr-3 pl-3">
                  {isLightTheme(theme) ? '|' : ''}
                </span>
              )}
            </div>
          ))}
        </div>
        {/* Actions End */}
      </div>
    </aside>
    // Cookies End
  );
};

export default Cookies;
