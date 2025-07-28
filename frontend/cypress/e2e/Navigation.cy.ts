import {
  ROUTE,
  TEST,
  COMMAND,
  LINKS_STRUCTURAL,
  COOKIES,
} from '@/utilities/constants';
import {
  getPath,
  enterCommand,
  assertPresence,
  assertLocation,
  assertCookies,
  clickLinkStructural,
  clickElement,
} from '@/utilities/testingE2e';

// Navigation End-to-End Test
describe('Navigation E2E Test', () => {
  // Variables
  const { HOME, ABOUT, PORTFOLIO, CONTACTS } = ROUTE;
  const { PRIVACY } = LINKS_STRUCTURAL;
  const { PATH, SUB } = HOME;
  const {
    PAGE_DELAY,
    PROMPT,
    KEY,
    COOKIE,
    LINK,
    LINK_STRUCTURAL,
    LINK_ASSOCIATIVE,
  } = TEST;
  const { ONE, TWO, THREE } = KEY;
  const { wait, findAllByTestId, location } = cy;

  // Helpers
  const assertNavigationTerminal = (command: string, path: string): void => {
    wait(PAGE_DELAY).then(() => {
      assertPresence(PROMPT);
      enterCommand(command);
    });
    assertLocation(path);
  };

  const assertNavigationLink = (
    label: string,
    path?: string,
    cookies?: boolean,
  ): void => {
    // Cookies check
    if (cookies) {
      assertCookies(COOKIE.ACCEPT);
    }

    clickLinkStructural(LINK);
    assertPresence(LINK_STRUCTURAL);
    findAllByTestId(LINK_STRUCTURAL).parent().contains(label).click();

    // Cookies check
    if (!cookies && path) {
      assertLocation(path);
    }
  };

  // Setup
  beforeEach(() => {
    getPath(PATH);
  });
  // Tests
  it('Navigates to the intro page', () => {
    assertNavigationTerminal(COMMAND.INTRO, SUB.INTRO.PATH);
  });
  it('Navigates to the About page via associative link', () => {
    assertNavigationTerminal(COMMAND.INTRO, SUB.INTRO.PATH);
    wait(1500).then(() => {
      assertPresence(LINK_ASSOCIATIVE.ABOUT);
      clickElement(LINK_ASSOCIATIVE.ABOUT);
      assertLocation(ABOUT.PATH);
    });
  });
  it('Navigates to the About page', () => {
    assertNavigationTerminal(ONE, ABOUT.PATH);
  });
  it('Navigates to the Portfolio page', () => {
    assertNavigationTerminal(TWO, PORTFOLIO.PATH);
  });
  it('Navigates to the Contacts page', () => {
    assertNavigationTerminal(THREE, CONTACTS.PATH);
  });
  it('Navigates to the privacy page', () => {
    assertNavigationLink('Privacy', PRIVACY.PATH);
  });
  it('Navigates to the cookies page', () => {
    assertNavigationLink('Cookies', LINKS_STRUCTURAL.COOKIES.PATH);
  });
  it('Navigates to the LinkedIn Profile', () => {
    assertNavigationLink(COOKIES[2].name, undefined, true);
  });
  it('Navigates to the GitHub Profile', () => {
    assertNavigationLink(COOKIES[3].name, undefined, true);
  });
});
