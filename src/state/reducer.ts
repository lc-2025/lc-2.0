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
  const { THEME, COOKIES, MODAL, LOADING, TITLE, RESET } = ACTION;
  const { type, element } = action;
  let stateReducer = null;

  switch (type) {
    case THEME:
      stateReducer = { ...state, theme: element };
      break;

    case COOKIES:
      stateReducer = { ...state, cookies: element };
      break;

    case MODAL:
      stateReducer = { ...state, modal: element };
      break;

    case LOADING:
      stateReducer = { ...state, loading: element };
      break;

    case TITLE:
      stateReducer = { ...state, title: element };

    case RESET:
      stateReducer = STATE;
      break;

    default:
      stateReducer = STATE;
  }

  return stateReducer as TState;
};

export default reducer;
