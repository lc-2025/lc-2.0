'use client';

import Form from 'next/form';
import handleState from '@/state/actions';
import { Cookie, Status } from '@/types/state/State';
import { useDispatchContext, useStateContext } from '@/hooks/State';
import useStorage from '@/hooks/Storage';
import { isCookieActive } from '@/utilities/utils';
import { ACTION, COOKIE_LEVEL, COOKIES } from '@/utilities/constants';
import { TCookiesConsentForm } from '@/types/components/Cookies';

/**
 * @description Cookies consent form component
 * @author Luca Cattide
 * @date 18/07/2025
 * @param {TCookiesConsentForm} {
 *   title,
 *   fields,
 * }
 * @returns {*}  {React.ReactNode}
 */
const CookiesConsentForm = ({
  title,
  fields,
}: TCookiesConsentForm): React.ReactNode => {
  // Hooks
  const { setStorage, deleteStorages } = useStorage();
  const { cookies } = useStateContext();
  const { active } = cookies;
  const dispatch = useDispatchContext();

  // Helpers
  /**
   * @description Existing cookie level helper
   * Checks if a cookie exists and verifies its type
   * @author Luca Cattide
   * @date 21/07/2025
   * @param {Array<string>} cookies
   * @param {(typeof COOKIES)[0]} item
   * @param {string} level
   * @returns {*}  {boolean}
   */
  const checkExistingCookiesLevel = (
    cookies: Array<string>,
    item: (typeof COOKIES)[0],
    level: string,
  ): boolean =>
    cookies.includes(item.name.toLowerCase()) && item.level === level;

  /**
   * @description Cookies status validator
   * Checks which kind of cookies the user enabled/disabled
   * @author Luca Cattide
   * @date 18/07/2025
   * @param {Status} status
   * @param {Array<string>} activeCookies
   * @returns {*}  {boolean}
   */
  const getStatus = (status: Status, activeCookies: Array<string>): boolean => {
    const condition = {
      [Status.Required]:
        (activeCookies.length === 1 &&
          COOKIES.find((element) =>
            checkExistingCookiesLevel(activeCookies, element, COOKIE_LEVEL.ESSENTIAL),
          )) ||
        (activeCookies.length > 0 &&
          COOKIES.every((element) =>
            checkExistingCookiesLevel(activeCookies, element, COOKIE_LEVEL.ESSENTIAL),
          ))
          ? true
          : false,
      [Status.Accepted]:
        activeCookies.length > 0 &&
        COOKIES.some((element) =>
          checkExistingCookiesLevel(activeCookies, element, COOKIE_LEVEL.OPTIONAL),
        ) &&
        COOKIES.find((element) =>
          checkExistingCookiesLevel(activeCookies, element, COOKIE_LEVEL.ESSENTIAL),
        )
          ? true
          : false,
      [Status.Optional]:
        activeCookies.length > 0 &&
        COOKIES.some((element) =>
          checkExistingCookiesLevel(activeCookies, element, COOKIE_LEVEL.OPTIONAL),
        ),
    };

    return condition[status as keyof typeof condition];
  };

  // Handlers
  /**
   * @description Active cookies handler
   * Manages the active cookies selection
   * @author Luca Cattide
   * @date 09/07/2025
   * @param {string} cookie
   */
  const handleCookie = (cookie: string): void => {
    const activeCookies = active.includes(cookie as Cookie)
      ? active.filter((activeCookie) => activeCookie !== cookie)
      : [...active, cookie];
    const selection = {
      ...cookies,
      status: getStatus(Status.Required, activeCookies)
        ? Status.Required
        : getStatus(Status.Accepted, activeCookies)
          ? Status.Accepted
          : getStatus(Status.Optional, activeCookies)
            ? Status.Optional
            : Status.Declined,
      active: activeCookies,
    };

    // Non-cookies storage items check
    if (!selection.active.includes(Cookie.Essentials)) {
      deleteStorages([ACTION.TITLE, ACTION.THEME]);
    }

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
    <>
      <h3 className="cookies-consent_subtitle pt-6 pb-6 text-center">
        {title}
      </h3>
      {/* Form Start */}
      <Form action="" className="cookies-consent__form">
        <div className="form__container flex flex-col items-start">
          {fields.map(({ name }, i) => (
            // Label Start
            <label
              key={crypto.randomUUID() + i}
              className="container__label flex cursor-pointer items-center pt-6 pb-6 select-none"
              htmlFor={name}
            >
              <input
                className="label__checkbox bg-accent border-primary checked:bg-primary h-[2rem] w-[2rem] cursor-pointer appearance-none border-2 checked:border-0"
                id={name}
                type="checkbox"
                title={title}
                defaultChecked={isCookieActive(active, name)}
                onChange={() => handleCookie(name.toLowerCase())}
              />
              <span className="label__copy pl-6">{name}</span>
            </label>
            // Label End
          ))}
        </div>
      </Form>
      {/* Form End */}
    </>
  );
};

export default CookiesConsentForm;
