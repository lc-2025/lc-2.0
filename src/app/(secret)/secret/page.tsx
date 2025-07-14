import EasterEgg from '@/components/Layout/EasterEgg';
import Script from 'next/script';

/**
 * @description Secret page
 * @author Luca Cattide
 * @date 12/07/2025
 * @export
 * @returns {*}  {React.ReactNode}
 */
export default function Secret(): React.ReactNode {
  return (
    // Secret Start
    <>
      <EasterEgg />
      <Script src="js/secret.js" strategy="afterInteractive" />
      <Script src="js/c64.js" strategy="afterInteractive" />
    </>
    // Secret End
  );
}
