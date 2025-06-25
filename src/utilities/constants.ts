const KEY = {
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  ENTER: 'Enter',
};
const COMMAND = {
  ABOUT: 'about',
  PORTFOLIO: 'portfolio',
  CONTACTS: 'contacts',
  HELP: 'help',
};
const COMMAND_OUTPUT = {
  HELP: 'Lorem ipsum dolor sit amet.',
};
const DEFAULT_STATE = {
  COMMAND_HISTORY: {
    command: '',
    output: '',
  },
};

export { KEY, COMMAND, COMMAND_OUTPUT, DEFAULT_STATE };
