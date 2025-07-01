import Link from 'next/link';
import { useStateContext } from '@/hooks/State';
import { isLightTheme } from '@/utilities/utils';
import { TAction } from '@/types/components/Action';

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
    `${isLightTheme(theme) ? `${label.charAt(0)}=` : `(${label.charAt(0)}) `}${label}`;

  return variant ? (
    <Link
      className="actions__accept uppercase select-none"
      href={label}
      title={label}
      tabIndex={index}
    >
      {setLabel()}
    </Link>
  ) : (
    <button className="actions__accept uppercase select-none">
      {setLabel()}
    </button>
  );
};

export default Action;
