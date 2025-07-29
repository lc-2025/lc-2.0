import { render } from '@testing-library/react';
import Title from '@/components/Layout/Title';
import Picture from '@/components/Layout/Picture';
import { assertRender } from '@/utilities/testing';
import { TEST } from '@/utilities/constants';
import Project from '@/components/Layout/Project';

// Unit/Integration Test - Layout
describe('Layout Unit/Integration Test', () => {
  // Variables
  const { TITLE, PICTURE } = TEST;
  const mockedData = 'foo';
  const mockedImage = 'https://foo.png';

  // Tests
  it('Renders the page title', () => {
    render(<Title keyword={mockedData} content={mockedData} />);
    assertRender(TITLE);
  });
  it('Renders the page picture', () => {
    render(
      <Picture
        srcLight={mockedImage}
        srcDark={mockedImage}
        alt={mockedData}
        width={100}
        height={100}
      />,
    );
    assertRender(PICTURE);
  });
  it('Renders a project', () => {
    render(
      <Project
        project={{
          name: mockedData,
          cover: mockedImage,
          images: [mockedImage],
          caseStudy: {
            title: mockedData,
            description: mockedData,
          },
          technologies: [mockedData],
        }}
      />,
    );
    assertRender(`test-${mockedData}`);
  });
});
