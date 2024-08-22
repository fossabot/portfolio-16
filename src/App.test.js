import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/components/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  console.log('get', getByText)
  const linkElement = getByText(/Akhilesh Sooji/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  console.log('get', getByText)
  const linkElement = getByText(/Full-Stack Developer/i);
  expect(linkElement).toBeInTheDocument();
});