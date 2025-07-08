import { ACTION, STATE } from '@/utilities/constants';
import { TState, TStateAction } from '@/types/state/State';

/**
 * @description State reducer
 * Manages the state updates
 * @author Luca Cattide
 * @date 01/07/2025
 * @param {Partial<TState>} state
 * @param {TStateAction} action
 * @returns {*}  {TState}
 */
const reducer = (state: Partial<TState>, action: TStateAction): TState => {
  const { element } = action;
  let stateReducer = null;

  switch (action.type) {
    case ACTION.THEME:
      stateReducer = { ...state, theme: element };
      break;

    case ACTION.COOKIES:
      stateReducer = { ...state, cookies: element };
      break;

    case ACTION.RESET:
      stateReducer = STATE;
      break;

    default:
      stateReducer = STATE;
  }

  return stateReducer;
};

export default reducer;
