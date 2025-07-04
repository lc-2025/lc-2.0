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
  INTRO: 'intro',
  HELP: 'help',
};
const COMMAND_OUTPUT = {
  HELP: `LC V3 Terminal

List of available shell commands:

[1-n]            Select a menu entry
intro            Navigate to the summary
help             Show the help reference
⇧[Shift]+[A-Z]   Keyboard shortcut

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
