import { Users } from "./Users";
import { render, screen } from "@testing-library/react";

describe("Users", () => {
  test("Render correctly", () => {
    render(<Users />);
    expect(screen.getByText(/users/i)).toBeInTheDocument();
  });
});
