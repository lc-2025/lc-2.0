import { useEffect } from 'react';
import { useDispatchContext, useStateContext } from './State';
import { KEY, ACTION } from '@/utilities/constants';
import handleState from '@/state/actions';

/**
 * @description Keyboard shortcuts hook
 * @author Luca Cattide
 * @date 09/07/2025
 */
const useShortcut = (): void => {
  // Variables
  let lastKey = '';
  const { MODAL } = ACTION;
  const { SHIFT, C, L, X } = KEY;
  // Hooks
  const { modal } = useStateContext();
  const dispatch = useDispatchContext();

  useEffect(() => {
    document.addEventListener('keydown', handleInput);

    return () => document.removeEventListener('keydown', handleInput);
  }, []);

  // Handlers
  /**
   * @description Keyboard input handler
   * Manages the keyboard shortcuts
   * @author Luca Cattide
   * @date 09/07/2025
   * @param {KeyboardEvent} e
   */
  const handleInput = (e: KeyboardEvent): void => {
    const shortcut = {
      [C]: { type: MODAL, element: { ...modal, cookies: true } },
      [L]: { type: MODAL, element: { ...modal, links: true } },

      [X]: { type: MODAL, element: { links: false, cookies: false } },
    };
    const value = e.key;

    // Sequence check
    if (lastKey === SHIFT) {
      handleState(shortcut[value], dispatch);
    }

    lastKey = value;
  };
};

export default useShortcut;
