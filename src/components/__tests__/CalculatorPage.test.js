import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CalculatorPage from "../../pages/CalculatorPage";

describe("CalculatorPage component test", () => {
  test("render the CalculatorPage component", () => {
    const calculatorPage = render(<CalculatorPage />);
    expect(calculatorPage).toMatchSnapshot();
  });

  test("check if the CalculatorPage component rendered by checking if the h1 element exist in the DOM", () => {
    render(<CalculatorPage />);
    const h1Element = screen.getByText(/Let's have fun with maths/);
    expect(h1Element).toBeInTheDocument();
  });
});
