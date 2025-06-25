'use client';

import { useState } from 'react';
import Prompt from './Prompt';
import { DEFAULT_STATE } from '@/utilities/constants';
import { TCommandHistory } from '@/types/Command';

const Terminal = (): React.ReactNode => {
  // Hooks
  const [commandsHistory, setCommandsHistory] = useState<TCommandHistory[]>([]);
  // Variables
  const { COMMAND_HISTORY } = DEFAULT_STATE;

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
  };

  return (
    // Terminal Start
    <section className="terminal">
      <h6 className="terminal__title hidden">Terminal</h6>
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
