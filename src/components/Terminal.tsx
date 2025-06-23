'use client';

import { useState } from 'react';
import Prompt from './Prompt';

const Terminal = (): React.ReactNode => {
  const [commandsHistory, setCommandsHistory] = useState<string[]>(['']);

  const handleEnter = (value: string): void => {
    setCommandsHistory((state) => [...state, value]);
  };

  return (
    <section className="terminal">
      <h6 className="terminal__title hidden">Terminal</h6>
      {commandsHistory.map((command, i) => (
        <Prompt
          key={crypto.randomUUID() + i}
          isEditable={i === commandsHistory.length - 1}
          entry={command}
          onEnter={handleEnter}
        />
      ))}
    </section>
  );
};

export default Terminal;
