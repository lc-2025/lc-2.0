import { TModalOpen } from '../components/Modal';

// State Management
type TState = {
  theme: string;
  cookies: TStateCookies;
  modal: TModalOpen;
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
  Declined = 'declined',
}

enum Cookie {
  LinkedIn = 'linkedin',
  GitHub = 'github',
}

export { Status, Cookie };
export type { TState, TStateAction };
