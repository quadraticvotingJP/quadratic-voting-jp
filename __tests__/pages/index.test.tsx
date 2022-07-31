import { render, screen } from "@testing-library/react";
import { Top } from "../../pages/index";

test("renders learn react link", () => {
  render(<Top />);

  expect(screen.getByTestId("top-page"));
});
