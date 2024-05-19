import { createSlice } from "@reduxjs/toolkit";
import { CartItemInterface } from "@/lib/types/apiDefinition";

const initialState: Record<number, CartItemInterface> =
  (typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("cart") || "{}")) ||
  {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      {
        payload,
      }: {
        payload: CartItemInterface;
      },
    ) => {
      if (state[payload.id] && state[payload.id].size === payload.size) {
        state[payload.id].quantity += payload.quantity;
      } else {
        state[payload.id] = {
          id: payload.id,
          quantity: payload.quantity,
          size: payload.size,
          price: payload.price,
          title: payload.title,
        };
      }
    },
    removeFromCart: (state, { payload }: { payload: number }) => {
      delete state[payload];
    },
    reset: () => ({}),
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
