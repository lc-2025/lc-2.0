'use client';

import {
  useEffect,
  useRef,
  useState,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react';
import { KEY } from '@/utilities/constants';

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
  const refPrompt = useRef(null);
  const [editable, setEditable] = useState<boolean>(isEditable);
  const [blink, setBlink] = useState<boolean>(editable);
  const [content, setContent] = useState<string>(entry);
  const [historyPointer, setHistoryPointer] = useState<number>(
    history.length > 1 ? history.length -1 : history.length,
  );

  useEffect(() => {
    refPrompt.current.textContent = isEditable ? null : entry;

    focusPrompt();
  }, []);

  // Variables
  const { UP, DOWN, ENTER } = KEY;
  let delay: NodeJS.Timeout;

  // Helpers
  /**
   * @description Prompt focus handler
   * Sets the focus on the terminal prompt
   * Works as an UX helper
   * @author Luca Cattide
   * @date 24/06/2025
   */
  const focusPrompt = (): void => {
    refPrompt.current.focus();
  };

  // Handlers
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
    const key = {
      [UP]: (): void => {
        setHistoryPointer((state) => state - 1);
        setContent(history[historyPointer]);
      },
      [DOWN]: (): void => {
        setHistoryPointer((state) => state + 1);
        setContent(history[historyPointer]);
      },
      [ENTER]: (): void => {
        setEditable(false);
        onEnter(content);
      },
    };

    key[e.key as keyof typeof key]();
  };

  return (
    // Prompt Start
    <aside className="prompt flex w-full items-center caret-transparent">
      {/* Visible only with dark theme */}
      {/* Tag Start */}
      <p className="prompt__tag" onClick={focusPrompt}>
        <span className="tag__user">guest@lucatti.de</span>:
        {/* TODO: Set location based on pathname */}
        <span className="tag__location">~</span>$
      </p>
      {/* Tag End */}
      {/* Input Start */}
      <span
        className="prompt__input inline-block pl-3 focus:outline-none"
        contentEditable={editable}
        //dangerouslySetInnerHTML={{ __html: content }}
        ref={refPrompt}
        onInput={handleInput}
        onKeyDown={handleKey}
      ></span>
      {/* Input End */}
      {/* Caret Start */}
      {editable && (
        <span
          // TODO: Adapt caret height by theme
          className={`prompt__caret ${blink && 'prompt__caret--blink'} h-6 w-4 select-none`}
        ></span>
      )}
      {/* Caret End */}
      {content}
    </aside>
    // Prompt End
  );
};

export default Prompt;
