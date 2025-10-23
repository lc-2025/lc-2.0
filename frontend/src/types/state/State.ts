import { TModalOpen } from '../components/Modal';
import { TTitle } from '../components/Title';

// State Management
type TStateAction = {
  type: string;
};
type TStateActionElement = TStateAction & {
  element: boolean | string | TStateCookies | TModalOpen | TTitle;
};
type TStateActionCookies = TStateAction & {
  element: TStateCookies;
};
type TStateActionLoading = TStateAction & {
  element: boolean;
};
type TStateActionModal = TStateAction & {
  element: TModalOpen;
};
type TStateActionTheme = TStateAction & {
  element: string;
};
type TStateActionTitle = TStateAction & {
  element: boolean;
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

export { Cookie, Status };
export type {
  TStateAction,
  TStateActionCookies,
  TStateActionElement,
  TStateActionLoading,
  TStateActionModal,
  TStateActionTheme,
  TStateActionTitle,
  TStateCookies,
};
