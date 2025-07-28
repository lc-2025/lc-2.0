import {
  getPath,
  assertPresence,
  assertCookies,
  assertModal,
  clickElement,
  enterCommand,
  clickLinkStructural,
} from '@/utilities/testingE2e';
import { THEME, ROUTE, TEST, COMMAND, COOKIES } from '@/utilities/constants';

// Interaction End-to-End Test
describe('Interaction E2E Test', () => {
  // Variables
  const { HOME, ABOUT, PORTFOLIO } = ROUTE;
  const { INTRO, HELP } = COMMAND;
  const {
    ASSERTION,
    COOKIE,
    LINK,
    LINK_STRUCTURAL,
    LINK_ASSOCIATIVE,
    CLOSE,
    PAGE_DELAY,
    PROJECT,
    SLIDESHOW,
    SLIDESHOW_NAVIGATION,
  } = TEST;
  const { RESUME } = LINK_ASSOCIATIVE;
  const { HAVE_CLASS, HAVE_CLASS_NOT, HIDDEN, HAVE_LENGTH, EXIST } = ASSERTION;
  const { ACCEPT, REQUIRED, DECLINE, FIELD } = COOKIE;
  const { findByRole, get, findByTestId, findAllByTestId, wait } = cy;

  // Setup
  beforeEach(() => {
    getPath(HOME.PATH);
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
  it('Manages the cookies preferences and verifies them', () => {
    assertCookies(ACCEPT);
    clickLinkStructural(COOKIE.LINK);

    const cookies = findAllByTestId(FIELD);

    cookies.should(EXIST);
    cookies.parent().contains(COOKIES[2].name).click();

    clickElement(CLOSE);
    assertModal(false);
    clickLinkStructural(LINK);
    findAllByTestId(LINK_STRUCTURAL).should(HAVE_LENGTH, 3);
  });
  it('Displays the available links then closes them', () => {
    clickLinkStructural(LINK);
    assertPresence(LINK_STRUCTURAL);
    clickElement(CLOSE);
    assertModal(false);
  });
  it('Displays a website intro summary', () => {
    wait(PAGE_DELAY).then(() => {
      enterCommand(INTRO);
      assertPresence(TEST.INTRO);
    });
  });
  it('Prints the commands list', () => {
    wait(PAGE_DELAY).then(() => {
      enterCommand(HELP);
    });
  });
  it('Downloads the resume', () => {
    getPath(ABOUT.PATH);
    wait(62000).then(() => {
      assertPresence(RESUME);
      clickElement(RESUME);
    });
  });
  it('Checks the portfolio', () => {
    getPath(PORTFOLIO.PATH);
    findByTestId(PROJECT).within(() => {
      get('> div > div').click();
      get('aside').should(HAVE_CLASS_NOT, HIDDEN);
      findByTestId(SLIDESHOW).should(EXIST);
      findByTestId(SLIDESHOW_NAVIGATION).click();
    });
  });
});
