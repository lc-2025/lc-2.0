import { render, screen } from '@testing-library/react';
import AnalyticsWrapper from '@/components/Analytics/AnalyticsWrapper';
import { TEST } from '@/utilities/constants';

// Unit/Integration Test - Analytics
describe('Analytics Unit/Integration Test', () => {
  // Tests
  it('Renders the Analytics plugin', () => {
    render(<AnalyticsWrapper id="foo" />);
    // @ts-expect-error Testing Library issue
    expect(screen.getByTestId(TEST.ANALYTICS)).toBeInTheDocument();
  });
});
