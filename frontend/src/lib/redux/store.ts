import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "@/lib/redux/features/cart/cartSlice";
import { catalogApi } from "@/lib/redux/services/catalogApi";
import { searchReducer } from "@/lib/redux/features/search/searchSlice";
import { localStorageMiddleware } from "@/lib/redux/middleware";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      search: searchReducer,
      [catalogApi.reducerPath]: catalogApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        localStorageMiddleware,
        catalogApi.middleware,
      ]),
    devTools: process.env.NODE_ENV !== "production",
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
