import { screen } from '@testing-library/react';

// Testing - Unit/Integration
// Variables
const { getByTestId } = screen;

// Helpers
/**
 * @description Component rendering assertion helper
 * @author Luca Cattide
 * @date 29/07/2025
 * @param {string} id
 */
const assertRender = (id: string): void => {
  expect(getByTestId(id)).toBeInTheDocument();
};

export { assertRender };
