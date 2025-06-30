import { ROUTE } from '@/utilities/constants';
import Link from 'next/link';

const Header = (): React.ReactNode => {
  // Variables
  const { PATH, LABEL } = ROUTE.HOME;

  return (
    // Header Start
    <header className="header bg-accent flex flex-nowrap text-primary pb-6 pl-32 pr-32 pt-6">
      <h6 className="header__title hidden">Header</h6>
      {/* Logo Start */}
      <Link
        className="header__link"
        href={ROUTE.HOME.PATH}
        title={LABEL}
        tabIndex={0}
      >
        <aside className={`link__logo logo bg-size-[100%] relative h-auto min-w-[48px] w-full overflow-hidden bg-left-top bg-no-repeat pb-[4.8rem] select-none`}>
          <h6 className="logo__title absolute right-full">Luca Cattide</h6>
        </aside>
      </Link>
      {/* Logo End */}
    </header>
    // Header End
  );
};

export default Header;
