import { Users } from "./Users";
import { render, screen } from "@testing-library/react";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("Users", () => {
  test("Render correctly", () => {
    render(<Users />);
    expect(screen.getByText(/users/i)).toBeInTheDocument();
  });

  test("render a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });
  test("render error", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    const users = await screen.findByText(/Error fetching users/i);
    expect(users).toBeInTheDocument();
  });
});
