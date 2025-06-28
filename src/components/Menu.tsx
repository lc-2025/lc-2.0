'use client';

import { usePathname } from 'next/navigation';
import { ROUTE } from '@/utilities/constants';
import { TRoute } from '@/types/Route';
import AnimationTypedMenu from './AnimationTypedMenu';

/**
 * @description Menu component
 * @author Luca Cattide
 * @date 25/06/2025
 * @returns {*}  {React.ReactNode}
 */
const Menu = (): React.ReactNode => {
  // Hooks
  const pathname = usePathname();

  // Helpers
  /**
   * @description String capitalization helper
   * Capitalizes a string first letter
   * @author Luca Cattide
   * @date 25/06/2025
   * @param {string} value
   * @returns {*}  {string}
   */
  const setInitial = (value: string): string =>
    value.charAt(0).toUpperCase() + value.slice(1);

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
    const path =
      pathname === ROUTE.HOME.PATH
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
      <ul className="menu__entries p-6">
        {Object.values(handleRoute()).map(({ LABEL, PATH }, i) => (
          <AnimationTypedMenu
            key={crypto.randomUUID() + i}
            path={PATH}
            title={`${setInitial(LABEL)}`}
            tabIndex={i * 10}
            delay={i * 1000}
            // TODO: Show ) or ↄ based on theme
            content={[`${i + 1} <)ↄ ${setInitial(LABEL)}`]}
          />
        ))}
      </ul>
      {/* Entries End */}
    </nav>
    // Menu End
  );
};

export default Menu;
