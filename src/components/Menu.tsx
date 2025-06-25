import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTE } from '@/utilities/constants';
import { TRoute } from '@/types/Route';

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
      <ul className="menu__entries m-0 p-0">
        {Object.values(handleRoute()).map(({ LABEL, PATH }, i) => (
          // Entry Start
          <li className="entries__entry" key={crypto.randomUUID() + i}>
            <Link
              className="entry__link"
              href={PATH}
              title={`${setInitial(LABEL)}`}
              tabIndex={i * 10}
            >
              {`${i + 1} - ${setInitial(LABEL)}`}
            </Link>
          </li>
          // Entry End
        ))}
      </ul>
      {/* Entries End */}
    </nav>
    // Menu End
  );
};

export default Menu;
