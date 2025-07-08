import { TModal } from '@/types/components/Modal';
import Action from './Action';

/**
 * @description Modal component
 * @author Luca Cattide
 * @date 08/07/2025
 * @param {TModal} { open, title, children }
 * @returns {*}  {React.ReactNode}
 */
const Modal = ({ open, title, children }: TModal): React.ReactNode => {
  return (
    // Modal Start
    open && (
      <div className="overlay fixed top-0 right-0 bottom-0 left-0 z-40 flex h-full w-full flex-col items-center justify-center overflow-hidden">
        <aside className="overlay__modal bg-accent border-primary flex max-h-2/3 w-2/3 max-w-2/3 flex-col items-center overflow-x-hidden overflow-y-auto border-16 p-6">
          <h2 className="modal__title mb-6 font-bold">{title}</h2>
          {children}
          <div className="modal__action mt-6">
            <Action action={{ label: 'Close' }} />
          </div>
        </aside>
      </div>
    )
    // Modal End
  );
};

export default Modal;
