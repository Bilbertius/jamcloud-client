import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app landing', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/jamcloud/i);
  expect(linkElement).toBe(InTheDocument());
});
