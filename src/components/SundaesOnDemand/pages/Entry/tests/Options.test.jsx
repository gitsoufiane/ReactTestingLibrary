import { render, screen } from "@testing-library/react";
import { Options } from "../Options";
describe("Options", () => {
  test("display image for each scoop option from the server ", () => {
    render(<Options optionType="scoops" />);

    const scoopImages = screen.getAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    const altText = scoopImages.map((img) => img.alt);
    expect(altText).toEqual(["soufiane scoop", "luisa scoop"]);
  });
});
