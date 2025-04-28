import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import LinkButton from "../lib/LinkButton/LinkButton";

const mockText = "Link Button";
const mockLink = "/test-link";
const props = {
  variant: "light",
  size: "md",
};

describe("LinkButton Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <LinkButton size={props.size} to={mockLink} variant={props.variant}>
          {mockText}
        </LinkButton>
      </Router>
    );
  });

  it("should have correct text", () => {
    const linkElement = screen.getByText(mockText);
    expect(linkElement).toBeInTheDocument();
  });

  it("should have correct classes", () => {
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveClass("s2s-link-button");
    expect(linkElement).toHaveClass("s2s-link-button-light");
    expect(linkElement).toHaveClass("s2s-link-button-md");
  });

  it("should have correct link", () => {
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", mockLink);
  });

  it("should not have disabled class", () => {
    const linkElement = screen.getByRole("link");
    expect(linkElement).not.toHaveClass("s2s-link-button-disabled");
  });
});

describe("LinkButton Component with loading and disabled", () => {
  beforeEach(() => {
    render(
      <Router>
        <LinkButton
          size={props.size}
          to={mockLink}
          variant={props.variant}
          loading
          disabled
        >
          {mockText}
        </LinkButton>
      </Router>
    );
  });

  it("should have loader", () => {
    const loaderElement = screen.getByTestId("loader");
    expect(loaderElement).toBeInTheDocument();
  });

  it("should have disabled class", () => {
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveClass("s2s-link-button-disabled");
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
