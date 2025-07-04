const WINDOW = {
  MEDIA: {
    THEME: {
      LIGHT: '(prefers-color-scheme: light)',
      DARK: '(prefers-color-scheme: dark)',
    },
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
  SHIFT: 'Shift',
  A: 'A',
  R: 'R',
  D: 'D',
  C: 'C',
  L: 'L',
};
const COMMAND = {
  HOME: 'home',
  INTRO: 'intro',
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
    TITLE: 'Developer <ↄ Scholar and martial artist <ↄ Luca Cattide',
    PATH: '/',
    SUB: {
      INTRO: {
        LABEL: COMMAND.INTRO,
        PATH: '/intro',
      },
    },
  },
  ABOUT: {
    LABEL: COMMAND.ABOUT,
    TITLE: 'The story <ↄ The qualities and passions <ↄ Luca Cattide',
    PATH: `/${COMMAND.ABOUT}`,
  },
  PORTFOLIO: {
    LABEL: COMMAND.PORTFOLIO,
    TITLE: 'Projects <ↄ Web and Mobile selection <ↄ Luca Cattide',
    PATH: `/${COMMAND.PORTFOLIO}`,
  },
  CONTACTS: {
    LABEL: COMMAND.CONTACTS,
    TITLE: 'Communications and requests <ↄ Direct line <ↄ Luca Cattide',
    PATH: `/${COMMAND.CONTACTS}`,
  },
};
const DEFAULT_STATE = {
  THEME: THEME.NAME.LIGHT,
  COMMAND_HISTORY: {
    command: '',
    output: '',
  },
};
const STATE = {
  theme: DEFAULT_STATE.THEME,
};
const ACTION = {
  THEME: THEME.LABEL,
  RESET: '',
};
const ANIMATION_OPTIONS = {
  showCursor: false,
};
const ANIMATION_OPTIONS_GENERIC = {
  ...ANIMATION_OPTIONS,
  contentType: '',
};
const ACTIONS = {
  COOKIES: [
    {
      label: 'Accept',
    },
    {
      label: 'Required',
    },
    {
      label: 'Decline',
    },
  ],
  FOOTER: [
    {
      label: 'Links',
    },
    { label: 'Credits' },
  ],
};
const ERROR = {
  CONTEXT: 'Context must be used within a `Provider`',
  JS: 'You need to enable JavaScript to run this website.',
};
const SECTION = {
  TITLES: 'titles',
  ARTICLE: 'article',
};

export {
  WINDOW,
  THEME,
  KEY,
  COMMAND,
  COMMAND_OUTPUT,
  ROUTE,
  DEFAULT_STATE,
  STATE,
  ACTION,
  ANIMATION_OPTIONS,
  ANIMATION_OPTIONS_GENERIC,
  ACTIONS,
  ERROR,
  SECTION,
};
