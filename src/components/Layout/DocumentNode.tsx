'use client';

import { useEffect } from 'react';
import AnimationPage from '../Animation/AnimationPage';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import CookiesBanner from '../Cookies/CookiesBanner';
import { useStateContext } from '@/hooks/State';
import { isLightTheme } from '@/utilities/utils';
import { ERROR, CONSOLE_TYPE } from '@/utilities/constants';
import { EASTER_EGG, TITLES } from '@/data/content';
import { TDocumentNode } from '@/types/components/DocumentNode';

/**
 * @description Body component
 * @author Luca Cattide
 * @date 08/07/2025
 * @param {{
 *   fontLight: string;
 *   fontDark: string;
 *   children: React.ReactNode;
 * }} {
 *   fontLight,
 *   fontDark,
 *   children,
 * }
 * @returns {*}  {React.ReactNode}
 */
const DocumentNode = ({
  fontLight,
  fontDark,
  children,
}: TDocumentNode): React.ReactNode => {
  // Variables
  const { HOME } = TITLES;
  const { HEADLINE, TAGLINE, SUMMARY } = EASTER_EGG;
  const { TITLE, SUBTITLE } = CONSOLE_TYPE;
  // Hooks
  const { theme, loading } = useStateContext();

  useEffect(() => {
    console.log(
      `%c${isLightTheme(theme) ? HOME.LIGHT.HEADLINE : HEADLINE}\n${isLightTheme(theme) ? HOME.LIGHT.TAGLINE : TAGLINE}\n`,
      getMessageStyle(TITLE),
    );
    console.log(`%c\n${SUMMARY}`, getMessageStyle(SUBTITLE));
  }, [theme]);

  // Helpers
  /**
   * @description Console message style getter
   * Manages the console message style based on the selected theme
   * @author Luca Cattide
   * @date 14/07/2025
   * @param {string} type
   * @returns {*}  {string}
   */
  const getMessageStyle = (
    type: string,
  ): string => `font-family: ${isLightTheme(theme) ? 'VT323' : '"Ubuntu Mono"'}, sans-serif;
      color: ${isLightTheme(theme) ? '#3e32a2' : '#00ff00'};
      ${type === TITLE ? `font-size: ${isLightTheme(theme) ? '32px' : 'inherit'};` : `font-size: ${isLightTheme(theme) ? '24' : '32'}px;`}
      ${!isLightTheme(theme) && 'background-color: #000;'}`;

  return (
    // Body Start
    <body
      className={`bg-primary text-accent text-mobile lg:text-desktop max-h-screen min-h-screen overflow-hidden ${isLightTheme(theme) ? `${fontLight} uppercase` : fontDark} antialiased`}
    >
      <noscript>{ERROR.JS}</noscript>
      {isLightTheme(theme) && loading && <AnimationPage />}
      {/* Container Start */}
      <div className="main-container flex max-h-screen min-h-screen flex-col">
        <Header />
        {/* Wrapper Start */}
        <main
          className={`main-container__wrapper max-w-full flex-1 overflow-x-hidden overflow-y-auto ${isLightTheme(theme) && 'bg-accent flex flex-col pr-6 pl-6 md:pr-32 md:pl-32'}`}
        >
          {children}
        </main>
        {/* Wrapper End */}
        <CookiesBanner />
        <Footer />
      </div>
      {/* Container End */}
    </body>
    // Body End
  );
};

export default DocumentNode;
