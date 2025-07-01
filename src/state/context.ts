import { createContext, ActionDispatch } from 'react';
import { STATE } from '@/utilities/constants';
import { TState, TStateAction } from '@/types/state/State';

// State & Disaptch Context
const StateContext = createContext<TState>(STATE);
const DispatchContext = createContext<ActionDispatch<
  [action: TStateAction]
> | null>(null);

export { StateContext, DispatchContext };
