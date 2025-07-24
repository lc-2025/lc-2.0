import { MouseEventHandler } from 'react';

// Cookies
type TAction = {
  action: TActionProps;
  variant?: boolean;
};
type TActionProps = {
  label: string;
  callback?: MouseEventHandler<HTMLButtonElement> | void;
};

export type { TAction };
