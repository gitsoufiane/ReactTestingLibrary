import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { CounterTwo } from "./CounterTwo";

describe("CounterTwo", () => {
  it("should render", () => {
    render(<CounterTwo count={0} />);
    expect(
      screen.getByRole("heading", { name: /counter two/i, level: 1 })
    ).toBeInTheDocument();
  });
  it("handler are called", async () => {
    user.setup();
    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    );
    const headerElement = screen.getByRole("heading", {
      name: /counter two/i,
      level: 1,
    });
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const decrementButton = screen.getByRole("button", { name: /decrement/i });
    expect(headerElement).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();

    await user.click(incrementButton);
    expect(handleIncrement).toHaveBeenCalledTimes(1);

    await user.click(decrementButton);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });
});
