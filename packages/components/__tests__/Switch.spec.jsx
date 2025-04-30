import { render, screen } from "@testing-library/react";
import Switch from "../lib/Switch/Switch";
import React from "react";

describe("Switch", () => {
  const props = {
    labelPosition: "start",
    size: "md",
    label: "Mock Title",
    loading: false,
  };
  
  it("should render a switch", () => {
    render(
      <Switch
        labelPosition={props.labelPosition}
        size={props.size}
        label={props.label}
        loading={props.loading}
      />
    );
    const expected = screen.getByText("Mock Title");
    expect(expected).toBeInTheDocument();
  });

  it("should have a loader", async () => {
    render(
      <Switch
        labelPosition={props.labelPosition}
        size={props.size}
        label={props.label}
        loading={!props.loading}
      />
    );

    const expected = await screen.findByTestId("loader");
    expect(expected).toBeInTheDocument();
  });
});
