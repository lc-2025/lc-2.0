import Action from './Action';
import { useStateContext } from '@/hooks/State';
import { isLightTheme } from '@/utilities/utils';
import { ACTIONS } from '@/utilities/constants';

const Footer = (): React.ReactNode => {
  // Variables
  const { FOOTER } = ACTIONS;
  // Hooks
  const { theme } = useStateContext();

  // Handlers
  /**
   * @description Date handler
   * Returns the current year for the credits line
   * @author Luca Cattide
   * @date 04/07/2025
   * @returns {*}  {number}
   */
  const handleDate = (): number => new Date().getFullYear();

  return (
    // Footer Start
    <footer
      className={`footer flex justify-between p-6 ${isLightTheme(theme) ? 'bg-accent text-primary leading-mobile lg:leading-desktop pr-32 pl-32' : 'bg-primary text-accent pr-6 pl-6'}`}
    >
      {/* Actions Start */}
      {FOOTER.map((action, i) => (
        <div key={crypto.randomUUID() + i} className="inline-block">
          <Action action={action} variant={true} index={i} />
          {i < FOOTER.length - 1 && (
            <span className="actions__separator pr-3 pl-3">
              {isLightTheme(theme) ? '|' : ''}
            </span>
          )}
        </div>
      ))}
      {/* Actions End */}
      <div className="footer__credits">
        &copy; {handleDate()} {'<)'} All Rights reserved.
      </div>
    </footer>
    // Footer End
  );
};

export default Footer;
