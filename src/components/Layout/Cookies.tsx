'use client';

import { useEffect } from 'react';
import Action from './Action';
import { COOKIES_ACTIONS } from '@/utilities/constants';

const Cookies = (): React.ReactNode => {
  // Hooks
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
    <aside className="cookies bg-accent border-accent text-primary absolute right-6 bottom-[10.6rem] left-6 m-auto flex w-[calc(100%-19.2rem)] flex-col justify-between overflow-hidden border-16">
      <h6 className="cookies__title hidden">Cookies</h6>
      <p className="cookies__summary w-full">Lorem ipsum dolor sit amet.</p>
      {/* Actions Start */}
      <div className="cookies__actions text-right">
        {COOKIES_ACTIONS.map((action, i) => (
          <div key={crypto.randomUUID() + i} className="inline-block">
            <Action action={action} />
            {i < COOKIES_ACTIONS.length - 1 && (
              <span className="actions__separator pr-3 pl-3">|</span>
            )}
          </div>
        ))}
      </div>
      {/* Actions End */}
    </aside>
    // Cookies End
  );
};

export default Cookies;
