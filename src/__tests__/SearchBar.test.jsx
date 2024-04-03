import { BrowserRouter } from "react-router-dom";
import { expect, vi } from "vitest";
// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Body } from "../components/Body";
import MOCK_DATA from "../mocks/mockJson.json";
import { fireEvent, render, screen } from "../utils/test-utils";

global.fetch = vi.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("test cases for body component", () => {
  it("should render the filter button", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });
    const button = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });
    expect(button).toBeInTheDocument();
  });
  it("should render the search button", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });
    const searchBtn = screen.getByTestId("searchBtn");
    expect(searchBtn).toBeInTheDocument();
  });
  it("should render the body component and get the searched element", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });
    const resCardBeforeRender = screen.getAllByTestId("resCard");
    expect(resCardBeforeRender.length).toBe(9);

    const inputBox = screen.getByRole("textbox");
    fireEvent.change(inputBox, { target: { value: "pizza" } });
    const searchBtn = screen.getByTestId("searchBtn");
    fireEvent.click(searchBtn);
    const resCardsAfterSearch = screen.getAllByTestId("resCard");
    expect(resCardsAfterSearch.length).toBe(1);
    // console.log(resCard);
  });
  it("should render the top rated restaurants", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });
    const cardBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardBeforeFilter.length).toBe(9);
    const FilterBtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });
    fireEvent.click(FilterBtn);
    const cardAfterFilter = screen.getAllByTestId("resCard");
    expect(cardAfterFilter.length).toBe(7);
  });
});
