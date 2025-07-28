import { TEST } from './constants';

// Testing - Helpers - E2E
// Variables
const { PROMPT, ASSERTION, KEY, COOKIE, MODAL } = TEST;
const { HAVE_CLASS, HAVE_CLASS_NOT, HIDDEN, EXIST, EXIST_NOT, EQUAL } =
  ASSERTION;
const { visit, findAllByTestId, findByTestId, location } = cy;

/**
 * @description Path helper
 * Navigates to the provided app path
 * @author Luca Cattide
 * @date 25/07/2025
 * @param {string} path
 */
const getPath = (path: string): void => {
  visit(path);
};

/**
 * @description Element click helper
 * @author Luca Cattide
 * @date 25/07/2025
 * @param {string} element
 */
const clickElement = (element: string): void => {
  findByTestId(element).click();
};

/**
 * @description Structural link click helper
 * @author Luca Cattide
 * @date 28/07/2025
 */
const clickLinkStructural = (link: string): void => {
  assertPresence(link);
  clickElement(link);
  assertModal(true);
};

/**
 * @description Prompt interaction helper
 * Enters a specific command into terminal prompt
 * @author Luca Cattide
 * @date 25/07/2025
 * @param {string} command
 */
const enterCommand = (command: string): void => {
  findByTestId(PROMPT).type(command).type(KEY.ENTER);
};

/**
 * @description Existing element assertion helper
 * @author Luca Cattide
 * @date 25/07/2025
 * @param {string} element
 */
const assertPresence = (element: string): void => {
  findAllByTestId(element).should(EXIST);
};

/**
 * @description Cookies banner status assertion helper
 * @author Luca Cattide
 * @date 25/07/2025
 */
const assertHiddenBanner = (): void => {
  findByTestId(COOKIE.BANNER).should(HAVE_CLASS, HIDDEN);
};

/**
 * @description Location assertion helper
 * @author Luca Cattide
 * @date 28/07/2025
 * @param {string} path
 */
const assertLocation = (path: string): void => {
  location('pathname').should(EQUAL, path);
};

/**
 * @description Cookies consent assertion helper
 * @author Luca Cattide
 * @date 25/07/2025
 * @param {string} type
 */
const assertCookies = (type: string): void => {
  assertPresence(type);
  clickElement(type);
  assertHiddenBanner();
};

/**
 * @description Modal popup assertion
 * @author Luca Cattide
 * @date 28/07/2025
 * @param {boolean} open
 */
const assertModal = (open: boolean): void => {
  const modal = findByTestId(MODAL);

  // Status check
  if (open) {
    modal.should(HAVE_CLASS_NOT, HIDDEN);
  } else {
    modal.should(EXIST_NOT);
  }
};

export {
  getPath,
  clickElement,
  clickLinkStructural,
  enterCommand,
  assertPresence,
  assertLocation,
  assertCookies,
  assertModal,
};
