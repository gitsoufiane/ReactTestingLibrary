import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, replaceCamelWithSpace } from "./Button";

describe("Button", () => {
  test("has correct initial color and text", () => {
    render(<Button />);
    const button = screen.getByRole("button", {
      name: /change to Midnight Blue/i,
    });
    expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });
    expect(button).toHaveTextContent(/change to Midnight Blue/i);
  });
  test("update to red when click", async () => {
    render(<Button />);
    const button = screen.getByRole("button", {
      name: /change to Midnight Blue/i,
    });
    await userEvent.click(button);
    expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });
    expect(button).toHaveTextContent(/change to Medium Violet Red/i);
  });

  test("checkbox and button enabled and disabled state", async () => {
    render(<Button />);
    const button = screen.getByRole("button", {
      name: /change to Midnight Blue/i,
    });
    const checkbox = screen.getByRole("checkbox", { name: /disable button/i });
    expect(checkbox).not.toBeChecked();
    expect(button).toBeEnabled();

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeDisabled();
  });
});

describe("space before camel case capital letteres", () => {
  test("work for no inner capital letters", () => {
    expect(replaceCamelWithSpace("Red")).toBe("Red");
  });
  test("work for one inner capital letter", () => {
    expect(replaceCamelWithSpace("MidnightBlue")).toBe("Midnight Blue");
  });
  test("work for multiple inner capital letters", () => {
    expect(replaceCamelWithSpace("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
