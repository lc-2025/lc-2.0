import Action from './Action';
import { useStateContext } from '@/hooks/State';
import { isLightTheme } from '@/utilities/utils';
import { ACTIONS } from '@/utilities/constants';

const Footer = (): React.ReactNode => {
  // Variables
  const { FOOTER } = ACTIONS;
  // Hooks
  const { theme } = useStateContext();

  return (
    // Footer Start
    <footer
      className={`footer p-6 ${isLightTheme(theme) ? 'bg-accent text-primary pr-32 pl-32' : 'bg-primary text-accent pr-6 pl-6'}`}
    >
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
    </footer>
    // Footer End
  );
};

export default Footer;
