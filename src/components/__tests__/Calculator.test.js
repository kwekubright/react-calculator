import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../Calculator';

describe('Caluclator component test', () => {
  test('render the caluclator component', () => {
    const calculator = render(<Calculator />);
    expect(calculator).toMatchSnapshot();
  });

  test('check if the Caluclator component rendered by checking if the AC button exist in the DOM', () => {
    render(<Calculator />);
    const resultElement = screen.getByText('AC', { exact: false });
    expect(resultElement).toBeInTheDocument();
  });
  
});
