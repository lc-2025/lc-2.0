import StateProvider from '@/components/StateProvider';
import { render, RenderOptions, screen } from '@testing-library/react';

// Testing - Unit/Integration
// Variables
const { getByTestId } = screen;

// Helpers
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  const provider = ({ children }: { children: React.ReactNode }) => {
    return <StateProvider>{children}</StateProvider>;
  };

  return render(ui, { wrapper: provider, ...options });
};

/**
 * @description Component rendering assertion helper
 * @author Luca Cattide
 * @date 29/07/2025
 * @param {string} id
 */
const assertRender = (id: string): void => {
  expect(getByTestId(id)).toBeInTheDocument();
};

export { customRender, assertRender };
