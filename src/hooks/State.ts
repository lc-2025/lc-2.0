import { useContext, ActionDispatch } from 'react';
import { StateContext, DispatchContext } from '@/state/context';
import { checkContext } from '@/utilities/utils';
import { TState, TStateAction } from '@/types/state/State';

/**
 * @description State Context hook
 * @author Luca Cattide
 * @date 01/07/2025
 */
const useStateContext = (): TState => {
  // Hooks
  const context = useContext(StateContext);

  checkContext(context);

  return context;
};

/**
 * @description Dispatch Context hook
 * @author Luca Cattide
 * @date 01/07/2025
 * @returns {*}  {ActionDispatch<[action}
 */
const useDispatchContext = (): ActionDispatch<[action: TStateAction]> => {
  // Hooks
  const context = useContext(DispatchContext);

  checkContext(context);

  return context as ActionDispatch<[action: TStateAction]>;
};

export { useStateContext, useDispatchContext };
