import { render } from '@testing-library/react';
import DocumentNode from '@/components/Layout/DocumentNode';
import Title from '@/components/Layout/Title';
import Picture from '@/components/Layout/Picture';
import Menu from '@/components/Navigation/Menu';
import Terminal from '@/components/Terminal/Terminal';
import { customRender, assertRender } from '@/utilities/testing';
import { TEST } from '@/utilities/constants';

// Unit/Integration Test - Layout
describe('Layout Unit/Integration Test', () => {
  // Variables
  const { BODY, TITLE, PICTURE, MENU, TERMINAL } = TEST;
  const mockedData = 'foo';

  // Tests
  it('Renders the document body', () => {
    customRender(
      <DocumentNode fontDark={mockedData} fontLight={mockedData}>
        {mockedData}
      </DocumentNode>,
    );
    assertRender(BODY);
  });
  it('Renders the page title', () => {
    render(<Title keyword={mockedData} content={mockedData} />);
    assertRender(TITLE);
  });
  it('Renders the page picture', () => {
    const mockedImage = 'https://foo.png';

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
  /* it('Renders the menu', () => {
    render(<Menu />);
    assertRender(MENU);
  });
  it('Renders the terminal', () => {
    render(<Terminal />);
    assertRender(TERMINAL);
  }); */
});
