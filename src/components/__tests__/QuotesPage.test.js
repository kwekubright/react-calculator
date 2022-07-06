import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuotesPage from '../../pages/QuotesPage';

describe('Quate component test', () => {
  test('render the Quate component test', () => {
    expect(render(<QuotesPage />)).toMatchSnapshot();
  });

  test('Check the Quate component by checking if the text content extit in the page', () => {
    render(<QuotesPage />);
    const textElement = screen.getByText(/As far as the laws of mathematics/);
    expect(textElement).toBeInTheDocument();
  });
});
