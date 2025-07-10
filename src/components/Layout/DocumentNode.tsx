'use client';

import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import CookiesBanner from '../Cookies/CookiesBanner';
import { useStateContext } from '@/hooks/State';
import { isLightTheme } from '@/utilities/utils';
import { ERROR } from '@/utilities/constants';

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
}: {
  fontLight: string;
  fontDark: string;
  children: React.ReactNode;
}): React.ReactNode => {
  // Hooks
  const { theme } = useStateContext();

  useEffect(() => {
    // TODO: Put some console.log presentational message for those who inspect the code in a client component and run it once
    console.log(
      '%cLorem ipsum dolor sit amet',
      `font-family: ${isLightTheme(theme) ? 'VT323' : '"Ubuntu Mono"'}, sans-serif;
      color: ${isLightTheme(theme) ? '#000' : '#00ff00'};
      font-size: 32px`,
    );
  }, []);

  return (
    // Body Start
    <body
      className={`bg-primary text-accent text-mobile lg:text-desktop max-h-screen min-h-screen overflow-hidden ${isLightTheme(theme) ? `${fontLight} uppercase` : fontDark} antialiased`}
    >
      <noscript>{ERROR.JS}</noscript>
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
