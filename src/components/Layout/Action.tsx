import Link from 'next/link';
import { useStateContext } from '@/hooks/State';
import { isLightTheme } from '@/utilities/utils';
import { METADATA } from '@/data/content';
import { TAction } from '@/types/components/Action';

/**
 * @description Action component
 * @author Luca Cattide
 * @date 07/07/2025
 * @param {TAction} { action, variant, index }
 * @returns {*}  {React.ReactNode}
 */
const Action = ({ action, variant, index }: TAction): React.ReactNode => {
  // Variables
  const { label } = action;
  // Hooks
  const { theme } = useStateContext();

  // Helpers
  /**
   * @description Sets the element label based on action
   * @author Luca Cattide
   * @date 01/07/2025
   * @returns {*}  {string}
   */
  const setLabel = (): string =>
    `${isLightTheme(theme) ? `⇧${label.charAt(0)}=` : `(⇧${label.charAt(0)}) `}${label}`;

  return variant ? (
    <Link
      className="actions__action uppercase select-none"
      href={label}
      title={`${label} ${METADATA.TITLE.SUFFIX}`}
      tabIndex={index}
    >
      {setLabel()}
    </Link>
  ) : (
    <button
      className="actions__action uppercase select-none"
      onClick={action.callback ?? undefined}
    >
      {setLabel()}
    </button>
  );
};

export default Action;
