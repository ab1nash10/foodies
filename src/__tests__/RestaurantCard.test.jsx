import "@testing-library/jest-dom";
import { expect } from "vitest";
import { ResContainer } from "../components/ResContainer";
import MOCK_DATA from "../mocks/mock.json";
import { render, screen } from "../utils/test-utils";

describe("test cases for Restaurant Container components", () => {
  it("the component should render", () => {
    render(<ResContainer resData={MOCK_DATA} />);
    const Rollsking = screen.getByText("Rollsking");
    expect(Rollsking).toBeInTheDocument();
  });
});
