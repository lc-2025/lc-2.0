const WINDOW = {
  MEDIA: {
    THEME: '(prefers-color-scheme: dark)',
  },
};
const THEME = {
  LABEL: 'theme',
  NAME: {
    LIGHT: 'light',
    DARK: 'dark',
  },
};
const KEY = {
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  ENTER: 'Enter',
};
const COMMAND = {
  HOME: 'home',
  ABOUT: 'about',
  PORTFOLIO: 'portfolio',
  CONTACTS: 'contacts',
  HELP: 'help',
};
const COMMAND_OUTPUT = {
  HELP: 'Lorem ipsum dolor sit amet.',
};
const ROUTE = {
  HOME: {
    LABEL: COMMAND.HOME,
    PATH: '/',
  },
  ABOUT: {
    LABEL: COMMAND.ABOUT,
    PATH: `/${COMMAND.ABOUT}`,
  },
  PORTFOLIO: {
    LABEL: COMMAND.PORTFOLIO,
    PATH: `/${COMMAND.PORTFOLIO}`,
  },
  CONTACTS: {
    LABEL: COMMAND.CONTACTS,
    PATH: `/${COMMAND.CONTACTS}`,
  },
};
const DEFAULT_STATE = {
  COMMAND_HISTORY: {
    command: '',
    output: '',
  },
};
const ANIMATION_OPTIONS = {
  showCursor: false,
};
const ANIMATION_OPTIONS_GENERIC = {
  ...ANIMATION_OPTIONS,
  contentType: '',
};
const COOKIES_ACTIONS = [
  {
    label: 'Accept',
  },
  {
    label: 'Required',
  },
  {
    label: 'Decline',
  },
];

export {
  WINDOW,
  THEME,
  KEY,
  COMMAND,
  COMMAND_OUTPUT,
  ROUTE,
  DEFAULT_STATE,
  ANIMATION_OPTIONS,
  ANIMATION_OPTIONS_GENERIC,
  COOKIES_ACTIONS,
};
