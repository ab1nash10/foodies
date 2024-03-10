import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import About from "./components/About.jsx";
import { Body } from "./components/Body.jsx";
import Contactus from "./components/Contactus.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route path="" element={<Body />} />
      <Route path="aboutus" element={<About />} />
      <Route path="contactus" element={<Contactus />} />
      <Route path="restaurant/:resId" element={<RestaurantMenu />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.73826769999999&lng=77.0822151&restaurantId=241350&catalog_qa=undefined&submitAction=ENTER
