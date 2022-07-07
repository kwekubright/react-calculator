import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../../pages/HomePage';

describe('Homepage component test', () => {
  test('render the Homepage component', () => {
    const homepage = render(<HomePage />);
    expect(homepage).toMatchSnapshot();
  });

  test('check if the Homepage component rendered by checking if the h2 exist in the DOM', () => {
    render(<HomePage />);
    const h2Element = screen.getByText('Welcome to the Quoted App', { exact: false });
    expect(h2Element).toBeInTheDocument();
  });
});
