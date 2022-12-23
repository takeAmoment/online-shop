import { configureStore } from "@reduxjs/toolkit";
import { storeApi } from "./fakestore/fakestore.api";

export const store = configureStore({
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
});
