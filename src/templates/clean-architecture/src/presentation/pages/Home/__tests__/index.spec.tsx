import { screen, render } from '@testing-library/react';

import Home from '..';

describe('Home page', () => {
  it('should be able to render page', () => {
    render(<Home />);

    expect(screen.getByText('Hello, Dev :)')).toBeTruthy();
  });
});
