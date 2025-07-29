import { render, screen } from '@testing-library/react';
import AnimationTypedTitles from '@/components/Animation/AnimationTypedTitles';
import { TEST } from '@/utilities/constants';
import { METADATA } from '@/data/content';
import { assertRender } from '@/utilities/testing';
import AnimationTypedArticle from '@/components/Animation/AnimationTypedArticle';

// Animation Unit/Integration Test
describe('Animation Unit/Integration Test', () => {
  // Variables
  const { NAME, KEYWORD } = METADATA;
  const { TITLES, ARTICLE } = TEST;
  const { getByRole } = screen;

  // Helpers
  /**
   * @description Title assertion helper
   * @author Luca Cattide
   * @date 29/07/2025
   * @param {number} level
   * @param {string} title
   */
  const assertTitle = (level: number, title: string): void => {
    // @ts-expect-error Testing Library issue
    expect(getByRole('heading', { level })).toHaveTextContent(title);
  };

  // Tests
  it('Renders the titles animation', () => {
    render(<AnimationTypedTitles />);
    assertRender(TITLES);
    assertTitle(1, NAME);
    assertTitle(2, KEYWORD);
  });
  it('Renders the article animaton', () => {
    const content = ['foo'];

    render(<AnimationTypedArticle content={content} />);
    assertRender(ARTICLE);
    // @ts-expect-error Testing Library issue
    expect(getByRole('paragraph')).toHaveTextContent(content[0]);
  });
});
