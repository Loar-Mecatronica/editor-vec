import { screen, render } from '@testing-library/react';
import { Home } from './Home';

beforeEach(() => {
  render(<Home />);
});

describe('Render Home View', () => {
  it('must display a tittle ', () => {
    expect(screen.queryByText(/Editor Vec/i)).toBeInTheDocument();
  });
});
