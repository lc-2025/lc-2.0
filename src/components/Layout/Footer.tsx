import { useState } from 'react';
import Link from 'next/link';
import Action from './Action';
import Modal from './Modal';
import CookiesConsent from '../Cookies/CookiesConsent';
import { useStateContext } from '@/hooks/State';
import { getReverseC, isCookieActive, isLightTheme } from '@/utilities/utils';
import { ACTIONS } from '@/utilities/constants';
import { TModalOpen } from '@/types/components/Modal';
import { LINKS } from '@/data/content';

/**
 * @description Footer component
 * @author Luca Cattide
 * @date 08/07/2025
 * @returns {*}  {React.ReactNode}
 */
const Footer = (): React.ReactNode => {
  // Variables
  const { FOOTER } = ACTIONS;
  // Hooks
  const { theme, cookies } = useStateContext();
  const [open, setOpen] = useState<TModalOpen>({
    links: false,
    cookies: false,
  });

  // Handlers
  /**
   * @description Date handler
   * Returns the current year for the credits line
   * @author Luca Cattide
   * @date 04/07/2025
   * @returns {*}  {number}
   */
  const handleDate = (): number => new Date().getFullYear();

  /**
   * @description Modal opening handler
   * @author Luca Cattide
   * @date 08/07/2025
   * @param {string} type
   */
  const handleOpen = (type: string): void => {
    setOpen((state) => ({
      ...state,
      [type]: !open[type as keyof typeof open],
    }));
  };

  return (
    // Footer Start
    <footer
      className={`footer flex justify-between p-6 ${isLightTheme(theme) ? 'bg-accent text-primary leading-mobile lg:leading-desktop pr-32 pl-32' : 'bg-primary text-accent pr-6 pl-6'}`}
    >
      {/* Actions Start */}
      <ul className="footer__actions flex justify-start">
        {FOOTER.map(
          (action, i) =>
            (i === 0 || (i > 0 && cookies)) && (
              <li key={crypto.randomUUID() + i} className="actions__action">
                <Action
                  action={{
                    ...action,
                    callback: () => handleOpen(action.label.toLowerCase()),
                  }}
                  index={i}
                />
                {i < FOOTER.length - 1 && cookies && (
                  <span className="action__separator pr-3 pl-3">
                    {isLightTheme(theme) ? '|' : ''}
                  </span>
                )}
              </li>
            ),
        )}
      </ul>
      {/* Actions End */}
      {/* Links Start */}
      <Modal
        open={open.links}
        title={ACTIONS.FOOTER[0].label}
        callback={() => handleOpen(ACTIONS.FOOTER[0].label.toLowerCase())}
      >
        <ul className="footer__links">
          {LINKS.map(
            ({ label, title, link }, i) =>
              (i < 2 || isCookieActive(cookies.active, label)) && (
                // Link Start
                <li
                  className="links__entry leading-mobile lg:leading-desktop pt-6 pb-6 text-center"
                  key={crypto.randomUUID() + i}
                >
                  <Link
                    className="entry__link font-bold"
                    href={link}
                    title={title}
                    tabIndex={20 + i}
                    target={i > 1 ? '_blank' : 'self'}
                    rel={i < 2 ? 'nofollow' : ''}
                  >
                    {label}
                  </Link>
                </li>
                // Link End
              ),
          )}
        </ul>
      </Modal>
      {/* Links End */}
      {/* Cookies Start */}
      <Modal
        open={open.cookies}
        title={ACTIONS.FOOTER[1].label}
        callback={() => handleOpen(ACTIONS.FOOTER[1].label.toLowerCase())}
      >
        <CookiesConsent />
      </Modal>
      {/* Cookies End */}
      {/* Credits Start */}
      <aside className="footer__credits">
        <h6 className="credits__title hidden">Credits</h6>
        &copy; {handleDate()} {`<${getReverseC(isLightTheme(theme))}`} All
        Rights reserved.
      </aside>
      {/* Credits End */}
    </footer>
    // Footer End
  );
};

export default Footer;
