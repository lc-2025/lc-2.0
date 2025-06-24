'use client';

import { useState } from 'react';
import Prompt from './Prompt';

const Terminal = (): React.ReactNode => {
  // Hooks
  const [commandsHistory, setCommandsHistory] = useState<string[]>([]);

  // Handlers
  /**
   * @description Enter handler
   * Manages the command history state
   * @author Luca Cattide
   * @date 24/06/2025
   * @param {string} value
   */
  const handleEnter = (value: string): void => {
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
        entry={commandsHistory.length > 0 ? commandsHistory[0] : ''}
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
            entry={commandsHistory[i + 1]}
            history={commandsHistory}
            onEnter={handleEnter}
          />
        ))}
      {/* Next Prompts End */}
    </section>
    // Terminal End
  );
};

export default Terminal;
