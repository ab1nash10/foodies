import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../state/slice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
