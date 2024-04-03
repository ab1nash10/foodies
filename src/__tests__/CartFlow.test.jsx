import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { expect, vi } from "vitest";
import appStore from "../app/appStore";
import CartItems from "../components/CartItems";
import { Header } from "../components/Header";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCKMENU_DATA from "../mocks/mockMenu.json";
import { fireEvent, render, screen } from "../utils/test-utils";
global.fetch = vi.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCKMENU_DATA);
    },
  });
});
describe("test cases for the cart flow from adding items to get it in header as well as in cart component", () => {
  it("should render the component with added cart functions", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <CartItems />
          </Provider>
        </BrowserRouter>
      );
    });
    const BEVERAGES = screen.getByText("BEVERAGES (9)");
    fireEvent.click(BEVERAGES);
    const MenuItems = screen.getAllByTestId("menuItems");
    expect(MenuItems.length).toBe(9);
    const button = screen.getAllByRole("button", { name: "Add" });
    fireEvent.click(button[0]);
    fireEvent.click(button[0]);
    fireEvent.click(button[0]);
    fireEvent.click(button[0]);
    const text = screen.getByText("4");
    fireEvent.click(text);
    const cartItems = screen.getAllByTestId("cartItems");
    expect(cartItems.length).toBe(4);
    const clearCart = screen.getByText("Clear Cart");
    fireEvent.click(clearCart);
    const emptyMsg = screen.getByText("Your cart is empty");
    expect(emptyMsg).toBeInTheDocument();
  });
});
