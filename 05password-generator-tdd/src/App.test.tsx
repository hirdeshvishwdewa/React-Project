import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Learn React by TDD approach', () => {
  render(<App />);
  const divElement = screen.getByText(/Learn React by TDD/i);
  expect(divElement).toBeInTheDocument();
});
