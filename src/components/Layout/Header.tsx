import { ROUTE } from '@/utilities/constants';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import { useStateContext } from '@/hooks/State';
import { isLightTheme } from '@/utilities/utils';
import { METADATA } from '@/data/content';

const Header = (): React.ReactNode => {
  // Variables
  const { PATH, LABEL } = ROUTE.HOME;
  // Hooks
  const state = useStateContext();

  return (
    // Header Start
    <header
      className={`header text-primary flex flex-nowrap justify-between pb-6 ${isLightTheme(state.theme) ? 'bg-accent pr-32 pl-32' : 'bg-primary pr-6 pl-6'} pt-6`}
    >
      <h6 className="header__title hidden">Header</h6>
      {/* Logo Start */}
      <Link className="header__link" href={PATH} title={LABEL} tabIndex={0}>
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
