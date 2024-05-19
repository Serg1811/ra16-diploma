import { Middleware } from "@reduxjs/toolkit";
import { CartAction } from "@/lib/types/apiDefinition";

export const localStorageMiddleware: Middleware<CartAction> =
  (store) => (next) => (action) => {
    const result = next(action);
    let cart = store.getState().cart;
    typeof window !== "undefined" &&
      localStorage.setItem("cart", JSON.stringify(cart));
    return result;
  };
