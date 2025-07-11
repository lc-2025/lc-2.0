import localFont from 'next/font/local';
import { ViewTransitions } from 'next-view-transitions';
import DocumentNode from '@/components/Layout/DocumentNode';
import StateProvider from '@/components/StateProvider';
import { WINDOW } from '@/utilities/constants';
import { METADATA } from '@/data/content';
import type { Metadata, Viewport } from 'next';
import '../scss/global.scss';
import '../css/globals.css';

// Variables
const { LIGHT, DARK } = WINDOW.MEDIA.THEME;
const { NAME, DESCRIPTION, BASEURL, TITLE } = METADATA;
// Fonts
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
 * @description Main layout
 * @author Luca Cattide
 * @date 02/07/2025
 * @export
 * @param {Readonly<{
 *   children: React.ReactNode;
 * }>} {
 *   children,
 * }
 * @returns {*}  {React.ReactNode}
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    // HTML Start
    <StateProvider>
      <ViewTransitions>
        {/* HTML Start */}
        <html className="text-rem max-h-screen min-h-screen" lang="en">
          {/* Head Start */}
          <head>
            <meta
              httpEquiv="Content-Security-Policy"
              content="default-src 'self' localhost:3000; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self'; connect-src 'self' localhost:3000; font-src 'self'; form-action 'self';"
            />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          </head>
          {/* Head End */}
          <DocumentNode
            fontLight={vt323.className}
            fontDark={ubuntuMono.className}
          >
            {children}
          </DocumentNode>
        </html>
        {/* HTML End */}
      </ViewTransitions>
    </StateProvider>
    // HTML End
  );
}
