import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useStateContext } from '@/hooks/State';
import useAnimation from '@/hooks/Animation';
import { isLightTheme } from '@/utilities/utils';
import { ROUTE } from '@/utilities/constants';
import { METADATA } from '@/data/content';

const ThemeSwitch = dynamic(() => import('./ThemeSwitch'), { ssr: false });

/**
 * @description Header component
 * @author Luca Cattide
 * @date 04/07/2025
 * @returns {*}  {React.ReactNode}
 */
const Header = (): React.ReactNode => {
  // Hooks
  const { theme } = useStateContext();
  const { navigate } = useAnimation();

  return (
    // Header Start
    <header
      className={`header text-primary flex flex-nowrap items-center justify-between pb-6 ${isLightTheme(theme) ? 'bg-accent pr-6 pl-6 md:pr-32 md:pl-32' : 'bg-primary pr-6 pl-6'} pt-6`}
    >
      <h6 className="header__title hidden">Header</h6>
      {/* Logo Start */}
      <Link
        className="header__link"
        href={ROUTE.HOME.PATH}
        title="Software Engineer <ↄ LC <ↄ Back to the Home Page"
        tabIndex={0}
        onClick={(e) => navigate(ROUTE.HOME.PATH, e)}
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
