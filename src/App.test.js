import { render, screen } from '@testing-library/react';
import List from './components/List';

test('renders learn react link', () => {
  render(<List />);
  const element = screen.getByText(/loading/i);
  expect(element).toBeInTheDocument();
});
