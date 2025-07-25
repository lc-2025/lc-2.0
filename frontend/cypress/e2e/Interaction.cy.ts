import { getPath } from '@/utilities/testingE2e';
import { THEME, ROUTE, TEST, COMMAND } from '@/utilities/constants';

// Interaction End-to-End Test
describe('Interaction E2E Test', () => {
  const { ASSERTION, COOKIE, LINK, LINK_STRUCTURAL, MODAL, CLOSE, PROMPT } =
    TEST;
  const { HAVE_CLASS, HAVE_CLASS_NOT, HIDDEN, EXIST, EXIST_NOT } = ASSERTION;
  const { BANNER, ACCEPT, REQUIRED, DECLINE } = COOKIE;

  /**
   * @description Cookies banner assertion helper
   * Tests if the banner status is hidden
   * @author Luca Cattide
   * @date 25/07/2025
   */
  const assertHiddenBanner = (): void => {
    cy.findByTestId(BANNER).should(HAVE_CLASS, HIDDEN);
  };

  // Setup
  beforeEach(() => {
    getPath(ROUTE.HOME.PATH);
  });
  // TESTS
  it('Switches the template theme', () => {
    cy.findByRole('switch').click();
    cy.get('html').should(HAVE_CLASS, THEME.NAME.DARK);
  });
  it('Accepts all the cookies', () => {
    cy.findByTestId(ACCEPT).click();

    assertHiddenBanner();
  });
  it('Accepts the required cookies only', () => {
    cy.findByTestId(REQUIRED).click();

    assertHiddenBanner();
  });
  it('Declines all the cookies', () => {
    cy.findByTestId(DECLINE).click();

    assertHiddenBanner();
  });
  it('Displays the available links then closes them', () => {
    cy.findByTestId(LINK).click();

    const modal = cy.findByTestId(MODAL);

    modal.should(HAVE_CLASS_NOT, HIDDEN);

    cy.findAllByTestId(LINK_STRUCTURAL).should(EXIST);
    cy.findByTestId(CLOSE).click();

    modal.should(EXIST_NOT);
  });
  it('Displays the available links via shortcut', () => {});
  it('Prints the command list', () => {
    cy.wait(10000).then(() => {
      cy.findByTestId(PROMPT).type(COMMAND.HELP).type('{enter}');
    });
  });
});
