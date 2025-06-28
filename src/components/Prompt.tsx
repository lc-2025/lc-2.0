'use client';

import {
  useEffect,
  useRef,
  useState,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react';
import { KEY, COMMAND, COMMAND_OUTPUT } from '@/utilities/constants';
import { TCommandHistory } from '@/types/Command';

/**
 * @description Terminal prompt component
 * @author Luca Cattide
 * @date 24/06/2025
 * @param {{
 *   isEditable: boolean;
 *   entry: TCommandHistory;
 *   onEnter: (value: TCommandHistory) => void;
 * }} {
 *   isEditable,
 *   entry,
 *   onEnter,
 * }
 * @returns {*}  {React.ReactNode}
 */
const Prompt = ({
  isEditable,
  entry,
  history,
  onEnter,
}: {
  isEditable: boolean;
  entry: TCommandHistory;
  history: Array<TCommandHistory>;
  onEnter: (value: TCommandHistory) => void;
}): React.ReactNode => {
  // Hooks
  const refPrompt = useRef<any>(null);
  const [editable, setEditable] = useState<boolean>(isEditable);
  const [blink, setBlink] = useState<boolean>(editable);
  const [content, setContent] = useState<string>(entry.command);
  const [historyPointer, setHistoryPointer] = useState<number>(
    history.length > 0 ? history.length - 1 : history.length,
  );
  const [commandOutput, setCommandOutput] = useState<string>(entry.output);

  useEffect(() => {
    refPrompt.current.innerText = isEditable ? null : entry.command;

    handleFocus();
  }, []);

  // Variables
  const { UP, DOWN, ENTER } = KEY;
  let delay: NodeJS.Timeout;

  // Helpers
  /**
   * @description History navigation helper
   * Navigates the history according to
   * user input
   * @author Luca Cattide
   * @date 24/06/2025
   * @param {string} key
   */
  const navigateHistory = (key: string): void => {
    setHistoryPointer((state) =>
      // Backward - Older
      key === UP
        ? state > 0
          ? state - 1
          : state
        : // Forward - Newer
          state < history.length - 1
          ? state + 1
          : state,
    );
    setContent(history[historyPointer].command);
  };

  const updateCommandOutput = (): string => {
    const message = {
      [COMMAND.HELP]: COMMAND_OUTPUT.HELP,
    };

    // Command check
    if (
      Object.values(COMMAND)
        .map((command) => command)
        .includes(content)
    ) {
      setCommandOutput(message[content]);
    }

    return message[content];
  };

  // Handlers
  /**
   * @description Prompt focus handler
   * Sets the focus on the terminal prompt
   * Works as an UX helper
   * @author Luca Cattide
   * @date 24/06/2025
   */
  const handleFocus = (): void => {
    refPrompt.current.focus();
  };

  /**
   * @description Typing handler
   * Manages the content and the caret
   * animation states
   * @author Luca Cattide
   * @date 24/06/2025
   */
  const handleInput = (): void => {
    clearTimeout(delay);
    setBlink(false);
    setContent(refPrompt.current.innerText);

    delay = setTimeout(() => {
      setBlink(true);
    }, 500);
  };

  /**
   * @description Confirmation handler
   * Manages the keyboard commands and their
   * related states
   * @author Luca Cattide
   * @date 24/06/2025
   * @param {DetailedHTMLProps<
   *       HTMLAttributes<HTMLParagraphElement>,
   *       HTMLParagraphElement
   *     >} e
   */
  const handleKey = (
    e: DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
  ): void => {
    // Key check
    switch (e.key) {
      case UP:
        navigateHistory(UP);
        break;

      case DOWN:
        navigateHistory(DOWN);
        break;

      case ENTER:
        setEditable(false);
        onEnter({
          command: content,
          output: updateCommandOutput(),
        });
        break;

      default:
    }
  };

  return (
    // Prompt Start
    <aside className="prompt flex w-full flex-wrap items-center p-6">
      <h6 className="prompt__title hidden">Prompt</h6>
      {/* Visible only with dark theme */}
      {/* Tag Start */}
      <p className="prompt__tag hover:cursor-pointer" onClick={handleFocus}>
        <span className="tag__user">guest@lucatti.de</span>:
        {/* TODO: Set location based on pathname */}
        <span className="tag__location">~</span>$
      </p>
      {/* Tag End */}
      {/* Input Start */}
      <span
        className="prompt__input inline-block pl-3 caret-transparent focus:outline-none"
        contentEditable={editable}
        ref={refPrompt}
        onInput={handleInput}
        onKeyDown={handleKey}
      ></span>
      {/* Input End */}
      {/* History Start */}
      {isEditable &&
        history.some((element) => element.command.includes(content)) && (
          <span className="prompt__history">{content}</span>
        )}
      {/* History End */}
      {/* Caret Start */}
      {editable && (
        <span
          // TODO: Adapt caret height by theme
          className={`prompt__caret ${blink && 'prompt__caret--blink'} select-none`}
        ></span>
      )}
      {/* Caret End */}
      {/* Command Output Start */}
      <p
        className={`prompt__output basis-full ${commandOutput && 'mb-3'}`}
      >
        {commandOutput}
      </p>
      {/* Command Output End */}
    </aside>
    // Prompt End
  );
};

export default Prompt;
