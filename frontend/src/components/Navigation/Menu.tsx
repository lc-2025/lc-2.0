'use client';

import { usePathname } from 'next/navigation';
import AnimationTypedMenu from '../Animation/AnimationTypedMenu';
import { useThemeContext } from '@/hooks/State';
import {
  setInitial,
  isLightTheme,
  getReverseC,
  setRoute,
} from '@/utilities/utils';
import { TEST } from '@/utilities/constants';
import { TAnimationMenu } from '@/types/components/AnimationTypedMenu';

/**
 * @description Menu component
 * @author Luca Cattide
 * @date 25/06/2025
 * @returns {*}  {React.ReactNode}
 */
const Menu = ({ delay }: TAnimationMenu): React.ReactNode => {
  // Hooks
  const pathname = usePathname();
  const theme = useThemeContext();

  return (
    // Menu Start
    <nav className="menu flex flex-col" data-testid={TEST.MENU}>
      <h6 className="menu__title hidden">Menu</h6>
      {/* Entries Start */}
      <ul
        className={`menu__entries p-6 ${isLightTheme(theme) && 'leading-mobile lg:leading-desktop'}`}
      >
        {Object.values(setRoute(pathname)).map(({ LABEL, TITLE, PATH }, i) => (
          <AnimationTypedMenu
            key={crypto.randomUUID() + i}
            path={PATH}
            title={`${TITLE}`}
            delay={delay ? delay + i * 700 : i * 700}
            content={[
              `${i + 1} <${getReverseC(isLightTheme(theme))} ${setInitial(LABEL)}`,
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
