import { render, screen } from "@testing-library/react";

import Button from "../lib/Button/Button";

const buttonText = "Button";

describe("Button test", () => {
  it("should render button text", () => {
    render(<Button>{buttonText}</Button>);
    console.log("go1");
    const text = screen.getByText(buttonText);
    expect(text).toBeInTheDocument();
  });

  it("should render loader", () => {
    render(<Button loading>{buttonText}</Button>);
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });
});
