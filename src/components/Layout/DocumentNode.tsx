'use client';

import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Cookies from '@/components/Layout/Cookies';
import { useStateContext } from '@/hooks/State';
import { isLightTheme } from '@/utilities/utils';

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
      className={`bg-primary text-accent text-mobile lg:text-desktop max-h-screen min-h-screen ${isLightTheme(theme) ? `${fontLight} uppercase` : fontDark} antialiased`}
    >
      <noscript>You need to enable JavaScript to run this website.</noscript>
      {/* Container Start */}
      <div className="main-container flex max-h-screen min-h-screen flex-col">
        <Header />
        {/* Wrapper Start */}
        <main
          className={`main-container__wrapper max-w-full flex-1 overflow-x-hidden overflow-y-auto ${isLightTheme(theme) && 'bg-accent flex flex-col pr-32 pl-32'}`}
        >
          {children}
        </main>
        {/* Wrapper End */}
        <Cookies />
        <Footer />
      </div>
      {/* Container End */}
    </body>
    // Body End
  );
};

export default DocumentNode;
