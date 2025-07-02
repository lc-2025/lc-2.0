import { useEffect } from 'react';
import { KEY } from '@/utilities/constants';

/**
 * @description Keyboard shortcuts hook
 * @author Luca Cattide
 * @date 02/07/2025
 */
const useShortcut = (): void => {
  // Variables
  const { SHIFT, A, R, D, C, L } = KEY;
  let lastKey = '';

  // Hooks
  useEffect(() => {
    document.addEventListener('keydown', handleInput);

    return () => document.removeEventListener('keydown', handleInput);
  }, []);

  // Handlers
  const handleInput = (e: KeyboardEvent): void => {
    // TODO: If possible to gather by area/effect, switch to if/select
    const shortcut = {
      [A]: null,
      [R]: null,
      [D]: null,
      [C]: null,
    };
    const value = e.key;

    // Sequence check
    if (lastKey === SHIFT) {
      shortcut[value];
    }

    lastKey = value;
  };
};

export default useShortcut;
