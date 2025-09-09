'use client';

import dynamic from 'next/dynamic';
import { TTerminal } from '@/types/components/Terminal';
import { CookiesProvider } from '../StateProvider';

const Terminal = dynamic(() => import('@/components/Terminal/Terminal'), {
  ssr: false,
});

/**
 * @description Terminal Wrapper (Static)
 * @author Luca Cattide
 * @date 24/07/2025
 * @param {TTerminal} { delay }
 * @returns {*}  {React.ReactNode}
 */
const TerminalWrapper = ({ delay }: TTerminal): React.ReactNode => {
  return (
    <CookiesProvider>
      <Terminal delay={delay} />
    </CookiesProvider>
  );
};

export default TerminalWrapper;
