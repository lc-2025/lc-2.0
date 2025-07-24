'use client';

import Script from 'next/script';
import useStorage from '@/hooks/Storage';
import { useStateContext } from '@/hooks/State';
import { checkCookies } from '@/utilities/utils';
import { ACTION } from '@/utilities/constants';
import { Cookie } from '@/types/state/State';
import { TAnalytics } from '@/types/components/Analytics';

/**
 * @description Analytics component
 * @author Luca Cattide
 * @date 23/07/2025
 * @param {TAnalytics} { id }
 * @returns {*}  {React.ReactNode}
 */
const Analytics = ({ id }: TAnalytics): React.ReactNode => {
  // Hooks
  const { getStorage } = useStorage();
  const cookiesStorage = getStorage(ACTION.COOKIES);
  const { cookies } = useStateContext();

  return (
    (cookiesStorage &&
      checkCookies(JSON.parse(cookiesStorage), Cookie.Analytics)) ||
    (checkCookies(cookies, Cookie.Analytics) && (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
          strategy="afterInteractive"
        />
        <Script src="js/analytics.js" strategy="afterInteractive" />
      </>
    ))
  );
};

export default Analytics;
