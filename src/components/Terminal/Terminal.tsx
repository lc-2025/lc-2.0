'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Prompt from './Prompt';
import { DEFAULT_STATE, ROUTE } from '@/utilities/constants';
import { TCommandHistory } from '@/types/components/Command';

/**
 * @description Terminal component
 * @author Luca Cattide
 * @date 25/06/2025
 * @returns {*}  {React.ReactNode}
 */
const Terminal = (): React.ReactNode => {
  // Variables
  const { COMMAND_HISTORY } = DEFAULT_STATE;
  // Hooks
  const router = useRouter();
  const [commandsHistory, setCommandsHistory] = useState<TCommandHistory[]>([]);

  // Handlers
  /**
   * @description Enter handler
   * Manages the command history state
   * @author Luca Cattide
   * @date 24/06/2025
   * @param {TCommandHistory} value
   */
  const handleEnter = (value: TCommandHistory): void => {
    setCommandsHistory((state) => [...state, value]);
    //router.push(ROUTE.ABOUT.PATH);
  };

  return (
    // Terminal Start
    <section className="terminal">
      {/* First Prompt Start */}
      <Prompt
        key={crypto.randomUUID()}
        isEditable={commandsHistory.length === 0}
        entry={
          commandsHistory.length > 0 ? commandsHistory[0] : COMMAND_HISTORY
        }
        history={commandsHistory}
        onEnter={handleEnter}
      />
      {/* First Prompt End */}
      {/* Next Prompts Start */}
      {commandsHistory.length > 0 &&
        commandsHistory.map((_, i) => (
          <Prompt
            key={crypto.randomUUID() + i}
            isEditable={i === commandsHistory.length - 1}
            entry={commandsHistory[i + 1] ?? COMMAND_HISTORY}
            history={commandsHistory}
            onEnter={handleEnter}
          />
        ))}
      {/* Next Prompts End */}
    </section>
    // Terminal End
    /* TODO: Easter-Egg: listen for backslash press on window level to open a secret console */
  );
};

export default Terminal;
