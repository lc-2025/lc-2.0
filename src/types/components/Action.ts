import { MouseEventHandler } from 'react';

// Cookies
type TAction = {
  action: TActionProps;
  variant?: boolean;
  index?: number;
};
type TActionProps = {
  label: string;
  callback?: MouseEventHandler<HTMLButtonElement>;
};

export type { TAction };
