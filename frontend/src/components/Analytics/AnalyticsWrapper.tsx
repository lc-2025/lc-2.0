'use client';

import dynamic from 'next/dynamic';
import { TAnalytics } from '@/types/components/Analytics';

const Analytics = dynamic(() => import('@/components/Analytics/Analytics'), {
  ssr: false,
});

/**
 * @description Analytics Wrapper (Static)
 * @author Luca Cattide
 * @date 24/07/2025
 * @param {TAnalytics} { id }
 * @returns {*}  {React.ReactNode}
 */
const AnalyticsWrapper = ({ id }: TAnalytics): React.ReactNode => {
  return <Analytics id={id} />;
};

export default AnalyticsWrapper;
