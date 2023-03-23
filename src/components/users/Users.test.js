import { Users } from "./Users";
import { render, screen } from "@testing-library/react";

describe("Users", () => {
  test("Render correctly", () => {
    render(<Users />);
    expect(screen.getByText(/users/i)).toBeInTheDocument();
  });

  test("render a list of users ", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });
});
