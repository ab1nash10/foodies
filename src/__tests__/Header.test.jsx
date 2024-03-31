import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../app/appStore";
import { Header } from "../components/Header";
import { render, screen } from "../utils/test-utils";
// describe("test cases for header component", () => {
//   it("should render a login button", () => {
//     render(
//       <BrowserRouter>
//         <Provider store={appStore}>
//           <Header />
//         </Provider>
//       </BrowserRouter>
//     );
//     const btn = screen.getByText("login");
//     // const button = screen.getAllByRole("button", {
//     //   name: "login",
//     // });
//     fireEvent.click(btn);
//     const logout = screen.getByText("logout");
//     expect(logout).toBeInTheDocument();
//   });

//   it("should render cart Items with zero", () => {
//     render(
//       <BrowserRouter>
//         <Provider store={appStore}>
//           <Header />
//         </Provider>
//       </BrowserRouter>
//     );
//     const cart = screen.getByText(0);
//     expect(cart).toBeInTheDocument();
//   });
// });

describe("test cases for header component", () => {
  it("cart component is present", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const button = screen.getByText(/0/i);
    expect(button).toBeInTheDocument();
  });
});
