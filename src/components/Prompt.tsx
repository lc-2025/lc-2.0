'use client';

import { useEffect, useRef, useState } from 'react';
import { KEY } from '@/utilities/constants';

const Prompt = ({
  isEditable,
  entry,
  onEnter,
}: {
  isEditable: boolean;
  entry: string;
  onEnter: (value: string) => void;
}): React.ReactNode => {
  const refPrompt = useRef(null);
  const [editable, setEditable] = useState<boolean>(isEditable);
  const [blink, setBlink] = useState<boolean>(editable);
  const [content, setContent] = useState<string>(entry);
  let delay: NodeJS.Timeout;

  // Handlers
  const handleInput = (): void => {
    clearTimeout(delay);
    setBlink(false);
    setContent(refPrompt.current.textContent);

    delay = setTimeout(() => {
      setBlink(true);
    }, 500);
  };

  const handleKey = (e: KeyboardEvent): void => {
    if (e.key === KEY.ENTER) {
      setEditable(false);
      onEnter(content);
    }
  };

  // Hooks
  useEffect(() => {
    refPrompt.current.textContent = isEditable ? null : entry;
    refPrompt.current.focus();
  }, []);

  return (
    // Prompt Start
    <aside className="prompt caret-transparent flex items-center w-full">
      {/* Visible only with dark theme */}
      <p className="prompt__tag pr-3">
        <span className="tag__user">guest@lucatti.de</span>:
        {/* TODO: Set location based on pathname */}
        <span className="tag__location">~</span>$
      </p>
      <p
        className="prompt__input focus:outline-none"
        contentEditable={editable}
        ref={refPrompt}
        onInput={handleInput}
        onKeyDown={handleKey}
      ></p>
      {editable && (
        <span
          className={`prompt__caret ${blink && 'prompt__caret--blink'} h-6 select-none w-4`}
        ></span>
      )}
    </aside>
    // Prompt End
  );
};

export default Prompt;
