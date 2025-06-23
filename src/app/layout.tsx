import type { Metadata, Viewport } from 'next';
import '../scss/global.scss';
import '../css/globals.css';

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
  return (
    // HTML Start
    // Localization
    <html lang="en">
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
      <body className="antialiased">
        {/* JS fallback */}
        <noscript>You need to enable JavaScript to run this app.</noscript>
        {/* Container Start */}
        <main className="container max-w-full">
          <div className="container__wrapper">{children}</div>
        </main>
      </body>
      {/* Body End */}
    </html>
    // HTML End
  );
}
