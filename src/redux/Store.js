import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../redux/CartSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
