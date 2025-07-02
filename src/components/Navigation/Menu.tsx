'use client';

import { usePathname } from 'next/navigation';
import AnimationTypedMenu from '../Animation/AnimationTypedMenu';
import { useStateContext } from '@/hooks/State';
import { setInitial, isLightTheme, isHome } from '@/utilities/utils';
import { ROUTE } from '@/utilities/constants';
import { TRoute } from '@/types/navigation/Route';
type TAnimationMenu = {
  delay?: number;
};
/**
 * @description Menu component
 * @author Luca Cattide
 * @date 25/06/2025
 * @returns {*}  {React.ReactNode}
 */
const Menu = ({ delay }: TAnimationMenu): React.ReactNode => {
  // Hooks
  const pathname = usePathname();
  const { theme } = useStateContext();

  // Handlers
  /**
   * @description Menu route handler
   * Sets the menu entries according to the current path
   * by removing it from the list
   * @author Luca Cattide
   * @date 25/06/2025
   * @returns {*}  {TRoute}
   */
  const handleRoute = (): TRoute => {
    const path = isHome(pathname)
      ? ROUTE.HOME.LABEL.toUpperCase()
      : pathname.replace('/', '').toUpperCase();
    const { [path as keyof typeof ROUTE]: _, ...rest } = ROUTE;

    return rest;
  };

  return (
    // Menu Start
    <nav className="menu flex flex-col">
      <h6 className="menu__title hidden">Menu</h6>
      {/* Entries Start */}
      <ul
        className={`menu__entries p-6 ${isLightTheme(theme) && 'leading-mobile lg:leading-desktop'}`}
      >
        {Object.values(handleRoute()).map(({ LABEL, TITLE, PATH }, i) => (
          <AnimationTypedMenu
            key={crypto.randomUUID() + i}
            path={PATH}
            title={`${TITLE}`}
            tabIndex={i * 10}
            delay={delay ? delay + i * 700 : i * 700}
            content={[
              `${i + 1} <${isLightTheme(theme) ? ')' : 'ↄ'} ${setInitial(LABEL)}`,
            ]}
          />
        ))}
      </ul>
      {/* Entries End */}
    </nav>
    // Menu End
  );
};

export default Menu;
