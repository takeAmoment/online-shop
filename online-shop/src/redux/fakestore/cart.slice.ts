import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartSlice, IProduct } from "types/types";

const initialState: CartSlice = {
  cart: JSON.parse(localStorage.getItem("cart") ?? "[]"),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.cart.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeProduct: (state, action: PayloadAction<IProduct>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
