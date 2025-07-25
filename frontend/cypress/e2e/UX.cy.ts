import { getPath } from '@/utilities/testingE2e';
import { ROUTE, TEST } from '@/utilities/constants';

// UX End-to-End Test
describe('UX E2E Test', () => {
  // Tests
  it('Displays an intro animation then navigates to the home page', () => {
    const { HOME } = ROUTE;

    getPath(HOME.SUB.TITLE.PATH);

    cy.findAllByTestId(TEST.INTRO).should('exist');
    cy.wait(13000).then(() => {
      cy.location('pathname').should('equal', HOME.PATH);
    });
  });
});
