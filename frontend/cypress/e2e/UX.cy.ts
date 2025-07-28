import {
  getPath,
  assertPresence,
  enterCommand,
  assertLocation,
} from '@/utilities/testingE2e';
import { COMMAND, ROUTE, TEST } from '@/utilities/constants';

// UX End-to-End Test
describe('UX E2E Test', () => {
  // Variables
  const { PATH, SUB } = ROUTE.HOME;
  const { INTRO, PROMPT, EASTER_EGG, PAGE_DELAY, TRANSITION, KEY } = TEST;
  const { wait, window } = cy;

  // Tests
  it('Displays an intro animation then navigates to the home page', () => {
    getPath(SUB.TITLE.PATH);
    assertPresence(INTRO);
    wait(13000).then(() => {
      assertLocation(PATH);
    });
  });
  it('Displays a page transition', () => {
    getPath(PATH);
    wait(PAGE_DELAY).then(() => {
      assertPresence(PROMPT);
      enterCommand(KEY.ONE);
      assertPresence(TRANSITION);
    });
  });
  it('Displays an easter-egg', () => {
    getPath(PATH);
    wait(PAGE_DELAY).then(() => {
      assertPresence(PROMPT);
      enterCommand(COMMAND.BALLOON);
      window().then(() => {
        assertLocation(SUB.BALLOON.PATH);
        assertPresence(EASTER_EGG);
      });
    });
  });
});
