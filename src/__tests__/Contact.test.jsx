import Contactus from "../components/Contactus";
import { render, screen } from "../utils/test-utils";

describe("These are the testcases for ContactUs page", () => {
  it("Contact us page is rendered or not", () => {
    render(<Contactus />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("If the button is there or not", () => {
    render(<Contactus />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  it("if there's any email section or not", () => {
    render(<Contactus />);
    const email = screen.getByText("Your Message");
    expect(email).toBeInTheDocument();
  });

  it("get all the input boxes", () => {
    render(<Contactus />);
    //? Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //? Assertion
    // expect(inputBoxes).toBeInTheDocument();
    // expect(inputBoxes.length).not.toBe(2);
    expect(inputBoxes.length).toBe(3);

    // console.log(inputBoxes);
  });
});
