import type { Metadata, Viewport } from 'next';
import '../scss/global.scss';
import '../css/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cookies from '@/components/Cookies';

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
  return (
    // HTML Start
    // Localization
    <html className="max-h-screen min-h-screen" lang="en">
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
      <body className="max-h-screen min-h-screen antialiased">
        {/* JS fallback */}
        <noscript>You need to enable JavaScript to run this app.</noscript>
        {/* Container Start */}
        <div className="main-container flex flex-col max-h-screen min-h-screen">
          <Header />
          {/* Wrapper Start */}
          <main className="main-container__wrapper max-w-full overflow-auto">
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
