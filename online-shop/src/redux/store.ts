import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./fakestore/cart.slice";
import { storeApi } from "./fakestore/fakestore.api";

export const store = configureStore({
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
