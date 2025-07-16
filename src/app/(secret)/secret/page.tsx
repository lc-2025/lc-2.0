import Script from 'next/script';
import { headers } from 'next/headers';
import EasterEgg from '@/components/Layout/EasterEgg';

/**
 * @description Secret page
 * @author Luca Cattide
 * @date 12/07/2025
 * @export
 * @returns {*}  {React.ReactNode}
 */
export default async function Secret(): Promise<React.ReactNode> {
  const nonce = (await headers()).get('x-nonce');

  return (
    // Secret Start
    <>
      <EasterEgg />
      <Script src="js/secret.js" strategy="afterInteractive" nonce={nonce!} />
      <Script src="js/c64.js" strategy="afterInteractive" nonce={nonce!} />
    </>
    // Secret End
  );
}
