import { render } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it('should be able to render App', () => {
    expect(() => {
      render(<App />);
    }).not.toThrow();
  });
});
