import Spinner from "./Spinner";
import { render, screen } from "@testing-library/react";

describe("Spinner component", () => {
  it("Should render spinner", () => {
    render(<Spinner />);
    const spinner = screen.getByTestId(/spinner/i);
    expect(spinner).toBeInTheDocument();
  });
});
