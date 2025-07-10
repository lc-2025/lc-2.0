import { ROUTE } from '@/utilities/constants';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import { useStateContext } from '@/hooks/State';
import { isLightTheme } from '@/utilities/utils';
import { METADATA } from '@/data/content';

/**
 * @description Header component
 * @author Luca Cattide
 * @date 04/07/2025
 * @returns {*}  {React.ReactNode}
 */
const Header = (): React.ReactNode => {
  // Hooks
  const { theme } = useStateContext();

  return (
    // Header Start
    <header
      className={`header text-primary flex flex-nowrap justify-between pb-6 ${isLightTheme(theme) ? 'bg-accent pr-6 pl-6 md:pr-32 md:pl-32' : 'bg-primary pr-6 pl-6'} pt-6`}
    >
      <h6 className="header__title hidden">Header</h6>
      {/* Logo Start */}
      <Link
        className="header__link"
        href={ROUTE.HOME.PATH}
        title="Software Engineer <ↄ Luca Cattide <ↄ Back to the Home Page"
        tabIndex={0}
      >
        <aside
          className={`link__logo logo relative h-auto w-full min-w-[48px] overflow-hidden bg-size-[100%] bg-left-top bg-no-repeat pb-[4.8rem] select-none`}
        >
          <h6 className="logo__title absolute right-full">{METADATA.NAME}</h6>
        </aside>
      </Link>
      {/* Logo End */}
      <ThemeSwitch />
    </header>
    // Header End
  );
};

export default Header;
