import { Skills } from "./Skills";
import { screen, render, logRoles } from "@testing-library/react";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JAVASCRIPT"];
  test("render correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("render list of skills", () => {
    render(<Skills skills={skills} />);

    const listItemsElements = screen.getAllByRole("listitem");
    expect(listItemsElements).toHaveLength(skills.length);
  });

  test("render login button", () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();

    const startLearningButton = screen.queryByRole("button", {
      name: /start learning/i,
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("render start learning button", async () => {
    const { container } = render(<Skills skills={skills} />);
    logRoles(container);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: /start learning/i,
      },
      {
        timeout: 2000,
      }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
