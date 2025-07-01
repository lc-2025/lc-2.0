import { ActionDispatch } from 'react';
import { TStateAction } from '@/types/state/State';

/**
 * @description State action handler
 * Dispatches a state reducer action
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
