import { Status } from '@/types/state/State';

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
  C: 'C',
  L: 'L',
  X: 'X',
};
const COMMAND = {
  INTRO: 'intro',
  HELP: 'help',
};
const COMMAND_OUTPUT = {
  HELP: `LC V3 Terminal

List of available shell commands:

[1-n]            Select a menu entry
intro            Navigate to the summary
help             Show the help reference
⇧[Shift]+[A-Z]  Keyboard shortcut

Features:

- Command history
- Auto-suggestion`,
};
const ROUTE = {
  HOME: {
    LABEL: 'home',
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
    LABEL: 'about',
    TITLE: 'The story <ↄ The qualities and passions <ↄ Luca Cattide',
    PATH: '/about',
  },
  PORTFOLIO: {
    LABEL: 'portfolio',
    TITLE: 'Projects <ↄ Web and Mobile selection <ↄ Luca Cattide',
    PATH: '/portfolio',
  },
  CONTACTS: {
    LABEL: 'contacts',
    TITLE: 'Communications and requests <ↄ Direct line <ↄ Luca Cattide',
    PATH: '/contacts',
  },
};
const LINKS_STRUCTURAL = {
  PRIVACY: {
    LABEL: 'privacy',
    TITLE: 'Personal data processing policy <ↄ Luca Cattide',
    PATH: '/privacy',
  },
  COOKIES: {
    LABEL: 'cookies',
    TITLE: 'UE <ↄ e-Privacy Directive <ↄ Law Decree text',
    PATH: '/cookies',
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
  cookies: {
    open: false,
    status: Status.None,
    active: [],
  },
  modal: {
    links: false,
    cookies: false,
  },
  loading: false,
};
const ACTION = {
  THEME: THEME.LABEL,
  COOKIES: 'cookies',
  MODAL: 'modal',
  LOADING: 'loading',
  RESET: '',
};
const COOKIES_STATE = {
  ACCEPTED: 'accepted',
  REQUIRED: 'required',
  DECLINED: 'declined',
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
    { label: 'Cookies' },
  ],
  MODAL: [{ label: 'Close' }],
};
const ERROR = {
  CONTEXT: 'Context must be used within a `Provider`',
  JS: 'You need to enable JavaScript to run this website.',
};
const SECTION = {
  TITLES: 'titles',
  ARTICLE: 'article',
};
const COLOR = {
  BLACK: '#000',
  WHITE: '#fff',
  RED: '#880000',
  CYAN: '#AAFFEE',
  MAGENTA: '#CC44CC',
  GREEN1: '#00CC55',
  BLUE: '#0000AA',
  YELLOW: '#EEEE77',
  ORANGE: '#DD8855',
  BROWN: '#664400',
  PINK: '#FF7777',
  GREY1: '#333',
  GREY2: '#777',
  GREEN2: '#AAFF66',
  AZURE: '#0088FF',
  GREY3: '#888',
};
const MENU_LOADING = {
  LIGHT: 'Run',
  DARK: 'Loading...',
};
const PROMPT_ERROR = {
  LIGHT: '?Syntax error',
  DARK: ': command not found',
};

export {
  WINDOW,
  THEME,
  KEY,
  COMMAND,
  COMMAND_OUTPUT,
  ROUTE,
  LINKS_STRUCTURAL,
  DEFAULT_STATE,
  STATE,
  ACTION,
  COOKIES_STATE,
  ANIMATION_OPTIONS,
  ANIMATION_OPTIONS_GENERIC,
  ACTIONS,
  ERROR,
  SECTION,
  COLOR,
  MENU_LOADING,
  PROMPT_ERROR,
};
