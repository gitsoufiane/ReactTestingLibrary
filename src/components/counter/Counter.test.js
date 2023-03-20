import { Counter } from "./Counter";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("render correctly", () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    expect(incrementButton).toBeInTheDocument();

    const headerElement = screen.getByRole("heading", { level: 1 });
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent(0);

    const inputElement = screen.getByRole("spinbutton");
    expect(inputElement).toBeInTheDocument();

    const setButton = screen.getByRole("button", { name: /set/i });
    expect(setButton).toBeInTheDocument();
  });
  test("render a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });
    await user.click(incrementButton);

    const headerElement = screen.getByRole("heading", { level: 1 });
    expect(headerElement).toHaveTextContent(1);
  });
  test("render a count of 1 after clicking the increment button twice", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });
    await user.dblClick(incrementButton);

    const headerElement = screen.getByRole("heading", { level: 1 });
    expect(headerElement).toHaveTextContent(2);
  });
});
