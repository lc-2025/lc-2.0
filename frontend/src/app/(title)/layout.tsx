import AnalyticsWrapper from '@/components/Analytics/AnalyticsWrapper';
import { ERROR } from '@/utilities/constants';
import { METADATA_LAYOUT, METADATA_VIEWPORT } from '@/data/content';
import { NEXT_PUBLIC_ANALYTICS_ID } from '@/utilities/environment';
import type { Metadata, Viewport } from 'next';
import '../../css/globals.css';

// Metadata
export const metadata: Metadata = METADATA_LAYOUT;
export const viewport: Viewport = METADATA_VIEWPORT;

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
    <html className="text-rem max-h-dvh min-h-dvh" lang="en">
      {/* Head Start */}
      <head>
        <AnalyticsWrapper id={NEXT_PUBLIC_ANALYTICS_ID} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </head>
      {/* Head End */}
      {/* Body Start */}
      <body className="body bg-accent max-h-dvh min-h-dvh overflow-hidden antialiased">
        <noscript>{ERROR.JS}</noscript>
        {/* Container Start */}
        <div className="main-container flex max-h-dvh min-h-dvh flex-col">
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
    // HTML End
  );
}
