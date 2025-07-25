import {
  getPath,
  assertPresence,
  clickElement,
  enterCommand,
} from '@/utilities/testingE2e';
import { THEME, ROUTE, TEST, COMMAND } from '@/utilities/constants';

// Interaction End-to-End Test
describe('Interaction E2E Test', () => {
  // Variables
  const { INTRO, HELP } = COMMAND;
  const { ASSERTION, COOKIE, LINK, LINK_STRUCTURAL, MODAL, CLOSE, PAGE_DELAY } =
    TEST;
  const { HAVE_CLASS, HAVE_CLASS_NOT, HIDDEN, EXIST, EXIST_NOT } = ASSERTION;
  const { BANNER, ACCEPT, REQUIRED, DECLINE, FIELD } = COOKIE;
  const { findByTestId, findByRole, get, findAllByTestId, wait } = cy;

  // Helpers
  /**
   * @description Cookies banner status assertion helper
   * @author Luca Cattide
   * @date 25/07/2025
   */
  const assertHiddenBanner = (): void => {
    findByTestId(BANNER).should(HAVE_CLASS, HIDDEN);
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

  // Setup
  beforeEach(() => {
    getPath(ROUTE.HOME.PATH);
  });
  // TESTS
  it('Switches the template theme', () => {
    findByRole('switch').click();
    get('html').should(HAVE_CLASS, THEME.NAME.DARK);
  });
  it('Accepts all the cookies', () => {
    assertCookies(ACCEPT);
  });
  it('Accepts the required cookies only', () => {
    assertCookies(REQUIRED);
  });
  it('Declines all the cookies', () => {
    assertCookies(DECLINE);
  });
  it('Manages the cookies preferences', () => {
    assertCookies(ACCEPT);
    assertPresence(COOKIE.LINK);
    clickElement(COOKIE.LINK);

    const modal = findByTestId(MODAL);

    modal.should(HAVE_CLASS_NOT, HIDDEN);

    const cookies = findAllByTestId(FIELD);
    console.log(cookies);
    cookies.should(EXIST);
    cookies.contains().click();

    clickElement(CLOSE);

    modal.should(EXIST_NOT);

    assertPresence(LINK);
    clickElement(LINK);

    modal.should(HAVE_CLASS_NOT, HIDDEN);

    findAllByTestId(LINK_STRUCTURAL).should('have.length', 3);
  });
  it('Displays the available links then closes them', () => {
    assertPresence(LINK);
    clickElement(LINK);

    const modal = findByTestId(MODAL);

    modal.should(HAVE_CLASS_NOT, HIDDEN);

    findAllByTestId(LINK_STRUCTURAL).should(EXIST);
    clickElement(CLOSE);

    modal.should(EXIST_NOT);
  });
  it('Displays a website intro summary', () => {
    wait(PAGE_DELAY).then(() => {
      enterCommand(INTRO);
      // TODO:
    });
  });
  it('Prints the commands list', () => {
    wait(PAGE_DELAY).then(() => {
      enterCommand(HELP);
    });
  });
});
