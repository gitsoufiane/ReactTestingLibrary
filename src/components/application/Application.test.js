import { Application } from "./Application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
  test("renders Correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const paragElement = screen.getByText(/All fields are mandatory/i);
    expect(paragElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: /name/i });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText(/name/i, { selector: "input" });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText(/fullname/i);
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue(/soufiane/i);
    expect(nameElement4).toBeInTheDocument();

    const imgElement = screen.getByAltText(/a person with a laptop/i);
    expect(imgElement).toBeInTheDocument();

    const divElement = screen.getByTestId(/custom-element/i);
    expect(divElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: /bio/i });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
