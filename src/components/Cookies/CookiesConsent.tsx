'use client';

import Form from 'next/form';
import { useDispatchContext, useStateContext } from '@/hooks/State';
import handleState from '@/state/actions';
import { LINKS } from '@/data/content';
import { Cookie, Status } from '@/types/state/State';
import { ACTION } from '@/utilities/constants';
import { isCookieActive, setStorage } from '@/utilities/utils';

/**
 * @description Cookies consent component
 * @author Luca Cattide
 * @date 09/07/2025
 * @returns {*}  {React.ReactNode}
 */
const CookiesConsent = (): React.ReactNode => {
  // Hooks
  const { cookies } = useStateContext();
  const { active } = cookies;
  const dispatch = useDispatchContext();

  // Handlers
  /**
   * @description Active cookies handler
   * Manages the active cookies selection
   * @author Luca Cattide
   * @date 09/07/2025
   * @param {string} cookie
   */
  const handleCookie = (cookie: string): void => {
    const selection = {
      ...cookies,
      // TODO: Add the 'required' condition
      status: active.some((activeCookie) => activeCookie === cookie)
        ? Status.Accepted
        : Status.Declined,
      active: active.includes(cookie as Cookie)
        ? active.filter((activeCookie) => activeCookie !== cookie)
        : [...active, cookie],
    };

    setStorage(ACTION.COOKIES, JSON.stringify(selection));
    handleState(
      {
        type: ACTION.COOKIES,
        element: selection,
      },
      dispatch,
    );
  };

  return (
    <div className="cookies-consent">
      <h3 className="cookies-consent_subtitle pb-6 text-center">Required</h3>
      {/* TODO: Analytics/Other? */}
      <h3 className="cookies-consent_subtitle pb-6 text-center">Optional</h3>
      {/* Form Start */}
      <Form
        action=""
        className="cookies-consent__form flex flex-col items-center"
      >
        <div className="form__container flex flex-col items-start">
          {LINKS.slice(2).map(({ label, title }, i) => (
            // Label Start
            <label
              key={crypto.randomUUID() + i}
              className="container__label flex cursor-pointer items-center pt-6 pb-6 select-none"
              htmlFor={label}
            >
              <input
                className="label__checkbox bg-accent border-primary checked:bg-primary h-[2rem] w-[2rem] cursor-pointer appearance-none border-2 checked:border-0"
                id={label}
                type="checkbox"
                title={title}
                defaultChecked={isCookieActive(active, label)}
                onChange={() => handleCookie(label.toLowerCase())}
              />
              <span className="label__copy pl-6">{label}</span>
            </label>
            // Label End
          ))}
        </div>
      </Form>
      {/* Form End */}
    </div>
  );
};

export default CookiesConsent;
