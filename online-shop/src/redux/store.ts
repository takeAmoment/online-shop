import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./fakestore/cart.slice";
import { storeApi } from "./fakestore/fakestore.api";
import { selectedProductReducer } from "./fakestore/product.slice";

export const store = configureStore({
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer,
    cart: cartReducer,
    selectedProduct: selectedProductReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
