import localFont from 'next/font/local';
import { ViewTransitions } from 'next-view-transitions';
import AnalyticsWrapper from '@/components/Analytics/AnalyticsWrapper';
import DocumentNode from '@/components/Layout/DocumentNode';
import { LoadingProvider, ThemeProvider } from '@/components/StateProvider';
import { METADATA_VIEWPORT, METADATA_LAYOUT } from '@/data/content';
import { NEXT_PUBLIC_ANALYTICS_ID } from '@/utilities/environment';
import type { Metadata, Viewport } from 'next';
import '../../scss/global.scss';
import '../../css/globals.css';

// Fonts
const vt323 = localFont({
  src: '../../fonts/vt323-regular-webfont.woff2',
});
const ubuntuMono = localFont({
  src: [
    {
      path: '../../fonts/ubuntumono-regular-webfont.woff2',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../../fonts/ubuntumono-italic-webfont.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../fonts/ubuntumono-bold-webfont.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../fonts/ubuntumono-bolditalic-webfont.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
});

// Metadata
export const metadata: Metadata = METADATA_LAYOUT;
export const viewport: Viewport = METADATA_VIEWPORT;

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
    <ThemeProvider>
      <LoadingProvider>
        <ViewTransitions>
          {/* HTML Start */}
          <html className="text-rem max-h-dvh min-h-dvh" lang="en">
            {/* Head Start */}
            <head>
              <AnalyticsWrapper id={NEXT_PUBLIC_ANALYTICS_ID} />
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
      </LoadingProvider>
    </ThemeProvider>
    // HTML End
  );
}
