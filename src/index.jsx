import { lazy } from "react";

export const Grocery = lazy(() => import("./components/Grocery.jsx"));

export const CartItems = lazy(() => import("./components/CartItems.jsx"));
