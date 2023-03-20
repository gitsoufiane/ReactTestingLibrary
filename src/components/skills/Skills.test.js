import { Skills } from "./Skills";
import { screen, render } from "@testing-library/react";

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
});
