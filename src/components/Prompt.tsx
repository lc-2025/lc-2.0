'use client';

import {
  useEffect,
  useRef,
  useState,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react';
import { KEY, COMMAND } from '@/utilities/constants';

/**
 * @description Terminal prompt component
 * @author Luca Cattide
 * @date 24/06/2025
 * @param {{
 *   isEditable: boolean;
 *   entry: string;
 *   onEnter: (value: string) => void;
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
  entry: string;
  history: Array<string>;
  onEnter: (value: string) => void;
}): React.ReactNode => {
  // Hooks
  const refPrompt = useRef<any>(null);
  const [editable, setEditable] = useState<boolean>(isEditable);
  const [blink, setBlink] = useState<boolean>(editable);
  const [content, setContent] = useState<string>(entry);
  const [historyPointer, setHistoryPointer] = useState<number>(
    history.length > 0 ? history.length - 1 : history.length,
  );
  const [commandOutput, setCommandOutput] = useState<string>('');

  useEffect(() => {
    refPrompt.current.innerText = isEditable ? null : entry;

    handleFocus();
  }, []);

  // Variables
  const { UP, DOWN, ENTER } = KEY;
  let delay: NodeJS.Timeout;

  // Helpers
  const updateOutput = (): void => {
    // Command check
    if (
      Object.values(COMMAND)
        .map((command) => command.toLocaleLowerCase())
        .includes(content)
    ) {
      setCommandOutput('foo');
    }
  };

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
      key === UP
        ? state > 0
          ? state - 1
          : state
        : state < history.length
          ? state + 1
          : state - 1,
    );
    setContent(history[historyPointer]);
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
        onEnter(content);
        updateOutput();
        break;

      default:
    }
  };

  return (
    // Prompt Start
    <aside className="prompt flex w-full flex-wrap items-center">
      <h6 className="prompt__title hidden">Prompt</h6>
      {/* Command Output Start */}
      <p className="prompt__output basis-full">{commandOutput}</p>
      {/* Command Output End */}
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
      {isEditable && history.includes(content) && (
        <span className="prompt__history">{content}</span>
      )}
      {/* History End */}
      {/* Caret Start */}
      {editable && (
        <span
          // TODO: Adapt caret height by theme
          className={`prompt__caret ${blink && 'prompt__caret--blink'} h-6 w-4 select-none`}
        ></span>
      )}
      {/* Caret End */}
    </aside>
    // Prompt End
  );
};

export default Prompt;
