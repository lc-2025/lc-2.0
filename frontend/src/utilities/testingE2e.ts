/**
 * @description Path helper
 * Navigates to the provided app path
 * @author Luca Cattide
 * @date 25/07/2025
 * @param {string} path
 */
const getPath = (path: string): void => {
  cy.visit(path);
};

export { getPath };
