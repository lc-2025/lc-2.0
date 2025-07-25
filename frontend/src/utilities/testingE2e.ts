import { TEST } from './constants';

// Testing - Helpers - E2E
// Variables
const { PROMPT, ASSERTION, KEY } = TEST;
const { visit, findAllByTestId, findByTestId } = cy;

// Helpers
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
 * @description Existing element assertion helper
 * @author Luca Cattide
 * @date 25/07/2025
 * @param {string} element
 */
const assertPresence = (element: string): void => {
  findAllByTestId(element).should(ASSERTION.EXIST);
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
 * @description Prompt interaction helper
 * Enters a specific command into terminal prompt
 * @author Luca Cattide
 * @date 25/07/2025
 * @param {string} command
 */
const enterCommand = (command: string): void => {
  findByTestId(PROMPT).type(command).type(KEY.ENTER);
};

export { getPath, assertPresence, clickElement, enterCommand };
