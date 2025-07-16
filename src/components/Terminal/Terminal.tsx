'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Prompt from './Prompt';
import useAnimation from '@/hooks/Animation';
import { setRoute } from '@/utilities/utils';
import { COMMAND, DEFAULT_STATE, ROUTE } from '@/utilities/constants';
import { TCommandHistory } from '@/types/components/Command';
import { TTerminal } from '@/types/components/Terminal';
import { TRoutePrompt } from '@/types/navigation/Route';

/**
 * @description Terminal component
 * @author Luca Cattide
 * @date 25/06/2025
 * @returns {*}  {React.ReactNode}
 */
const Terminal = ({ delay }: TTerminal): React.ReactNode => {
  // Variables
  let timeout = delay ?? 0;
  const { COMMAND_HISTORY } = DEFAULT_STATE;
  // Hooks
  const pathname = usePathname();
  const [commandsHistory, setCommandsHistory] = useState<TCommandHistory[]>([]);
  const [visibility, setVisibility] = useState<boolean>(false);
  const { navigate } = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibility(true);
      clearTimeout(timer);
    }, timeout);
  });

  // Handlers
  /**
   * @description Enter handler
   * Manages the command history state
   * @author Luca Cattide
   * @date 24/06/2025
   * @param {TCommandHistory} value
   */
  const handleEnter = (value: TCommandHistory): void => {
    const { command } = value;
    const route: TRoutePrompt = Object.values(setRoute(pathname))
      .map((entry, i) => ({ [`${i + 1}` as keyof typeof route]: entry.PATH }))
      .reduce((object, prop) => Object.assign(object, prop), {});
    let destination = '';

    setCommandsHistory((state) => [...state, value]);

    // Existing check
    if (Object.keys(route).includes(command)) {
      destination = route[command];
    } else if (command.toLowerCase() === COMMAND.INTRO) {
      destination = ROUTE.HOME.SUB.INTRO.PATH;
    } else if (command.toLowerCase() === COMMAND.BALLOON) {
      // Session storage check
      if (window.sessionStorage) {
        sessionStorage.setItem(COMMAND.BALLOON, 'true');
      }

      destination = ROUTE.HOME.SUB.BALLOON.PATH;
    }

    navigate(destination);
  };

  return (
    // Terminal Start
    visibility && (
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
    )
    // Terminal End
  );
};

export default Terminal;
