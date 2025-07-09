// State Management
type TState = {
  theme: string;
  cookies: TStateCookies;
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
  None = '',
  LinkedIn = 'linkedin',
  GitHub = 'github',
}

export { Status, Cookie };
export type { TState, TStateAction };
