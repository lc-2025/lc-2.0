import { ActionDispatch } from 'react';
import { TStateAction } from '@/types/state/State';

/**
 * @description State action handler
 * Dispatches a state reducer action
 * This unified approach works well with modest states
 * A Redux-like approach - i.e. specific actions per state
 * is better for more complex states
 * @author Luca Cattide
 * @date 01/07/2025
 * @param {*} action
 * @param {*} dispatch
 */
const handleState = (
  action: TStateAction,
  dispatch: ActionDispatch<[action: TStateAction]>,
) => {
  dispatch(action);
};

export default handleState;
