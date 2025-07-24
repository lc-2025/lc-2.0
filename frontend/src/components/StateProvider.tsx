'use client';

import { useReducer } from 'react';
import { StateContext, DispatchContext } from '@/state/context';
import reducer from '@/state/reducer';
import { STATE } from '@/utilities/constants';

/**
 * @description State Context Provider component
 * Context provider wrapper
 * @author Luca Cattide
 * @date 01/07/2025
 * @param {{
 *   children: React.ReactNode;
 * }} {
 *   children,
 * }
 * @returns {*}  {React.ReactNode}
 */
const StateProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [state, dispatch] = useReducer(reducer, STATE);

  return (
    <StateContext value={state}>
      <DispatchContext value={dispatch}>{children}</DispatchContext>
    </StateContext>
  );
};

export default StateProvider;
