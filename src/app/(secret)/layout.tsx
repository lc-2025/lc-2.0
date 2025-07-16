import StateProvider from '@/components/StateProvider';
import { ERROR } from '@/utilities/constants';
import '../../css/globals.css';
import type { Metadata, Viewport } from 'next';
import { METADATA_LAYOUT, METADATA_VIEWPORT } from '@/data/content';

// Metadata
export const metadata: Metadata = METADATA_LAYOUT;
export const viewport: Viewport = METADATA_VIEWPORT;

/**
 * @description Secret layout
 * @author Luca Cattide
 * @date 12/07/2025
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
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        </head>
        {/* Head End */}
        {/* Body Start */}
        <body className="body max-h-screen min-h-screen overflow-hidden antialiased">
          <noscript>{ERROR.JS}</noscript>
          {/* Container Start */}
          <div className="main-container flex max-h-screen min-h-screen flex-col">
            {/* Wrapper Start */}
            <main className="main-container__wrapper max-w-full flex-1 overflow-hidden">
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
