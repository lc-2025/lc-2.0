import localFont from 'next/font/local';
import '../scss/global.scss';
import '../css/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cookies from '@/components/Cookies';
import type { Metadata, Viewport } from 'next';

const vt323 = localFont({
  src: '../fonts/vt323-regular-webfont.woff2',
});
const ubuntuMono = localFont({
  src: [
    {
      path: '../fonts/ubuntumono-regular-webfont.woff2',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../fonts/ubuntumono-italic-webfont.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/ubuntumono-bold-webfont.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../fonts/ubuntumono-bolditalic-webfont.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Luca Cattide',
  description: 'Software Engineer',
};

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: 'device-width',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  // TODO: Put some console.log presentational message for those who inspect the code
  console.log('foo');

  return (
    // HTML Start
    // Localization
    // TODO: Add font.classname based on current theme mode
    <html
      className={`max-h-screen min-h-screen text-rem ${vt323.className /* ubuntuMono.className */}`}
      lang="en"
    >
      {/* Head Start */}
      <head>
        {/* Content-Security Policy (vs. XSS) */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' localhost:3000; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self'; connect-src 'self' localhost:3000; font-src 'self'; form-action 'self';"
        />
        {/* Browser rendering version support (retro-compatibility) */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </head>
      {/* Head End */}
      {/* Body Start */}
      {/* TODO: Uppercase only on light theme */}
      <body
        className={`bg-primary text-accent text-mobile lg:text-desktop max-h-screen min-h-screen uppercase antialiased`}
      >
        {/* JS fallback */}
        <noscript>You need to enable JavaScript to run this website.</noscript>
        {/* Container Start */}
        <div className="main-container flex flex-col max-h-screen min-h-screen">
          <Header />
          {/* Wrapper Start */}
          {/* TODO: Flex/Padding/BG only on light theme */}
          <main
            className={`main-container__wrapper bg-accent flex flex-1 max-w-full flex-col overflow-x-hidden overflow-y-auto pr-32 pl-32`}
          >
            {children}
          </main>
          {/* Wrapper End */}
          <Cookies />
          <Footer />
        </div>
        {/* Container End */}
      </body>
      {/* Body End */}
    </html>
    // HTML End
  );
}
