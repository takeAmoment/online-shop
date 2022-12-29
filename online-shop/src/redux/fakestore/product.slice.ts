import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, SelectedProduct } from "types/types";

const initialState: SelectedProduct = {
  product: null,
};

export const selectedProduct = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<IProduct>) => {
      state.product = action.payload;
    },
    closeProduct: (state) => {
      state.product = null;
    },
  },
});

export const selectedProductActions = selectedProduct.actions;
export const selectedProductReducer = selectedProduct.reducer;
