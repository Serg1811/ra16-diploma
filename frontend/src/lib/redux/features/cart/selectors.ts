import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/lib/redux/store";

export const selectCartModule = (state: RootState) => state.cart;

export const selectCartList = createSelector([selectCartModule], (cart) => {
  return Object.values(cart);
});
