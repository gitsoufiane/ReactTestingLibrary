import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  //test or it
  test("render without name", () => {
    render(<Greet />);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
  test("render with name", () => {
    render(<Greet name="soufiane" />);
    expect(screen.getByText(/hello soufiane/i)).toBeInTheDocument();
  });
});
