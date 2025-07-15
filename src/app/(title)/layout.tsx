import StateProvider from '@/components/StateProvider';
import { WINDOW, ERROR } from '@/utilities/constants';
import { METADATA } from '@/data/content';
import '../../css/globals.css';
import type { Metadata, Viewport } from 'next';

// Variables
const { LIGHT, DARK } = WINDOW.MEDIA.THEME;
const { NAME, DESCRIPTION, BASEURL, TITLE } = METADATA;

// Metadata
export const metadata: Metadata = {
  // TODO: To be completed
  title: {
    template: `%s ${TITLE.SUFFIX}`,
    default: NAME,
  },
  description: DESCRIPTION,
  metadataBase: new URL(BASEURL),
  icons: {
    icon: [
      {
        media: LIGHT,
        url: 'img/lc-favicon-light.svg',
        href: 'img/lc-favicon-light.svg',
      },
      {
        media: DARK,
        url: 'img/lc-favicon-dark.svg',
        href: 'img/lc-favicon-dark.svg',
      },
    ],
  },
};

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: 'device-width',
};

/**
 * @description Title layout
 * @author Luca Cattide
 * @date 15/07/2025
 * @export
 * @param {Readonly<{
 *   children: React.ReactNode;
 * }>} {
 *   children,
 * }
 * @returns {*}  {React.ReactNode}
 */
export default function SecretLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    // HTML Start
    <StateProvider>
      {/* HTML Start */}
      <html className="text-rem max-h-screen min-h-screen" lang="en">
        {/* Head Start */}
        <head>
          <meta
            httpEquiv="Content-Security-Policy"
            content="default-src 'self' localhost:3000; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self'; connect-src 'self' localhost:3000; font-src 'self'; form-action 'self';"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        </head>
        {/* Head End */}
        {/* Body Start */}
        <body className="body bg-accent max-h-screen min-h-screen overflow-hidden antialiased">
          <noscript>{ERROR.JS}</noscript>
          {/* Container Start */}
          <div className="main-container flex max-h-screen min-h-screen flex-col">
            {/* Wrapper Start */}
            <main className="main-container__wrapper flex max-w-full flex-1 flex-col items-center justify-center overflow-hidden">
              {children}
            </main>
            {/* Wrapper End */}
          </div>
          {/* Container End */}
        </body>
        {/* Body End */}
      </html>
      {/* HTML End */}
    </StateProvider>
    // HTML End
  );
}
