import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter as Router } from "react-router-dom";

describe("Header component test", () => { 
  test("render the Header component", () => {
    const header = render(<Router><Header /></Router>);
    expect(header).toMatchSnapshot();
  }
  );

  test("check if the Header component rendered by checking if the logo exist in the DOM", () => {
    render(<Router><Header /></Router>);
    const logoElement = screen.getByText("Math Magicians", { exact: false });
    expect(logoElement).toBeInTheDocument();
  }
  );
});