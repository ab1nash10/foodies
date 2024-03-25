import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import appStore from "./app/appStore.jsx";
import About from "./components/About.jsx";
import { Body } from "./components/Body.jsx";
import { CartItems } from "./components/CartItems.jsx";
import Contactus from "./components/Contactus.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Shimmer from "./components/Shimmer.jsx";
import "./index.css";
import { Grocery } from "./index.jsx";

const mainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route path="" element={<Body />} />
      <Route path="aboutus" element={<About />} />
      <Route path="contactus" element={<Contactus />} />
      <Route
        path="grocery"
        element={
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        }
      />
      <Route path="restaurant/:resId" element={<RestaurantMenu />} />
      <Route path="cart" element={<CartItems />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={mainRouter} />
    </Provider>
  </React.StrictMode>
);

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.73826769999999&lng=77.0822151&restaurantId=241350&catalog_qa=undefined&submitAction=ENTER
