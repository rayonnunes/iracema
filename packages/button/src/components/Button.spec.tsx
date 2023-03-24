import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders a button with text content", () => {
    const { getByText } = render(<Button onClick={() => {}}>Click me!</Button>);
    const button = getByText("Click me!");

    expect(button.tagName).toBe("BUTTON");
    expect(button.textContent).toBe("Click me!");
  });

  test("calls the onClick function when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me!</Button>);
    const button = getByText("Click me!");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
