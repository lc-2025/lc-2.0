'use client';

import Action from './Action';
import { ACTIONS, TEST } from '@/utilities/constants';
import { TModal } from '@/types/components/Modal';
import { isLightTheme } from '@/utilities/utils';
import { useStateContext } from '@/hooks/State';

/**
 * @description Modal component
 * @author Luca Cattide
 * @date 08/07/2025
 * @param {TModal} { open, title, callback, children }
 * @returns {*}  {React.ReactNode}
 */
const Modal = ({
  open,
  title,
  callback,
  children,
}: TModal): React.ReactNode => {
  // Hooks
  const { theme } = useStateContext();

  return (
    // Modal Start
    open && (
      <div
        className="overlay fixed top-0 right-0 bottom-0 left-0 z-40 flex h-full w-full flex-col items-center justify-center overflow-hidden"
        data-testid={TEST.MODAL}
      >
        <aside
          className={`overlay__modal bg-accent border-primary flex max-h-2/3 w-3/3 max-w-3/3 flex-col items-center overflow-x-hidden overflow-y-auto border-16 pt-6 pr-6 pb-6 pl-6 md:w-2/3 md:max-w-2/3 md:pt-30 md:pr-30 md:pl-30 ${!isLightTheme(theme) && 'text-primary'}`}
        >
          <h2 className="modal__title">{title}</h2>
          {children}
          <div className="modal__action mt-10 self-start">
            <Action action={{ ...ACTIONS.MODAL[0], callback }} />
          </div>
        </aside>
      </div>
    )
    // Modal End
  );
};

export default Modal;
