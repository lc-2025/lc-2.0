import { TModalOpen } from '../components/Modal';

// State Management
type TState = {
  theme: string;
  cookies: TStateCookies;
  modal: TModalOpen;
  loading: boolean;
  title: boolean;
};

type TStateAction = {
  type: string;
  element: any;
};

type TStateCookies = {
  open: boolean;
  status: Status;
  active: Array<Cookie>;
};

enum Status {
  None = '',
  Accepted = 'accepted',
  Required = 'required',
  Optional = 'optional',
  Declined = 'declined',
}

enum Cookie {
  Essentials = 'essentials',
  Analytics = 'google analytics',
  LinkedIn = 'linkedin',
  GitHub = 'github',
}

export { Status, Cookie };
export type { TState, TStateAction, TStateCookies };
