import { TAction } from '@/types/components/Action';

const Action = ({ action }: TAction): React.ReactNode => {
  const { label } = action;

  return (
    <button className="actions__accept uppercase">{`${label.charAt(0)}=${label}`}</button>
  );
};

export default Action;
