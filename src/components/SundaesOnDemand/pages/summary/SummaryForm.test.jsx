import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SummaryForm } from "./SummaryForm";

describe("SummaryForm", () => {
  test("initial Conditions ", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    expect(checkbox).toBeChecked();

    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    expect(confirmButton).toBeEnabled();
  });

  test("checkbox disables button on first click and enables on second click ", async () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    await userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
    await userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();
  });
  test("popover when hovering ", async () => {
    render(<SummaryForm />);
    const termAndConditions = screen.getByText(/Terms and Conditions/i);
    expect(
      screen.queryByText(/No ice cream will actually be delivered/i)
    ).not.toBeInTheDocument();
    await userEvent.hover(termAndConditions);
    expect(
      screen.getByText(/No ice cream will actually be delivered/i)
    ).toBeInTheDocument();
    await userEvent.unhover(termAndConditions);
    expect(
      screen.queryByText(/No ice cream will actually be delivered/i)
    ).not.toBeInTheDocument();
  });
});
