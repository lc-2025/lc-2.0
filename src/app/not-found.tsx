import localFont from 'next/font/local';
import { ViewTransitions } from 'next-view-transitions';
import DocumentNode from '@/components/Layout/DocumentNode';
import StateProvider from '@/components/StateProvider';
import '../scss/global.scss';
import '../css/globals.css';

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

/**
 * @description 404 page
 * @author Luca Cattide
 * @date 16/07/2025
 * @export
 * @returns {*}  {React.ReactNode}
 */
export default function NotFound(): React.ReactNode {
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
            <aside className="not-found bg-primary flex flex-1 flex-col items-center justify-center">
              <h1 className="not-found__title">Not Found</h1>
            </aside>
          </DocumentNode>
        </html>
        {/* HTML End */}
      </ViewTransitions>
    </StateProvider>
    // HTML End
  );
}
