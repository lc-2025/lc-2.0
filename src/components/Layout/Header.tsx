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
      className={`header text-primary flex flex-nowrap justify-between pb-6 ${isLightTheme(theme) ? 'bg-accent pr-32 pl-32' : 'bg-primary pr-6 pl-6'} pt-6`}
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
      {/* Audio Start */}
      <aside className="audio">
        <h6 className="audio__title hidden">Audio</h6>
        {isLightTheme(theme) ? (
          <div className="audio__icon audio__icon--light-on relative mr-6 h-auto w-full max-w-[48px] min-w-[48px] cursor-pointer bg-size-[100%] bg-left-top bg-no-repeat pb-[5.1rem] select-none"></div>
        ) : (
          <span className="audio__icon mr-6 cursor-pointer text-[3.8rem] select-none">
            🔊
          </span>
        )}
      </aside>
      {/* Audio End */}
      <ThemeSwitch />
    </header>
    // Header End
  );
};

export default Header;
