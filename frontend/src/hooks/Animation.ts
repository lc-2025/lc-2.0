import { MouseEvent } from 'react';
import { useTransitionRouter } from 'next-view-transitions';
import { useDispatchContext } from './State';
import handleState from '@/state/actions';
import { ACTION } from '@/utilities/constants';
import { TUseAnimation } from '@/types/hooks/Animation';

/**
 * @description Animations hook
 * @author Luca Cattide
 * @date 11/07/2025
 * @returns {*}  {(() => void)}
 */
const useAnimation = (): TUseAnimation => {
  // Hooks
  const dispatch = useDispatchContext();
  const router = useTransitionRouter();

  // Helpers
  /**
   * @description Animation starting helper
   * Initializes the page transition effect
   * @author Luca Cattide
   * @date 11/07/2025
   */
  const startAnimation = (): void => {
    handleState(
      {
        type: ACTION.LOADING,
        element: true,
      },
      dispatch,
    );
  };

  /**
   * @description Navigation helper
   * Changes page via router based on the path
   * @author Luca Cattide
   * @date 11/07/2025
   * @param {string} path
   */
  const navigate = (path: string, e?: MouseEvent): void => {
    // Existing check
    if (e) {
      e.preventDefault();
    }

    router.push(path, {
      onTransitionReady: () => {
        startAnimation();
      },
    });
  };

  return {
    navigate,
  } as TUseAnimation;
};

export default useAnimation;
