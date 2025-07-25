import { getPath, assertPresence, enterCommand } from '@/utilities/testingE2e';
import { COMMAND, ROUTE, TEST } from '@/utilities/constants';

// UX End-to-End Test
describe('UX E2E Test', () => {
  // Variables
  const { PATH, SUB } = ROUTE.HOME;
  const { INTRO, PROMPT, EASTER_EGG, PAGE_DELAY } = TEST;
  const { wait, location } = cy;

  // Tests
  it('Displays an intro animation then navigates to the home page', () => {
    getPath(SUB.TITLE.PATH);
    assertPresence(INTRO);
    wait(13000).then(() => {
      location('pathname').should('equal', PATH);
    });
  });
  it('Displays a page transition', () => {
    // TODO:
  });
  it('Displays an easter-egg', () => {
    getPath(PATH);
    assertPresence(PROMPT);
    wait(PAGE_DELAY).then(() => {
      enterCommand(COMMAND.BALLOON);
      location('pathname').should('equal', SUB.BALLOON.PATH);
      assertPresence(EASTER_EGG);
    });
  });
});
