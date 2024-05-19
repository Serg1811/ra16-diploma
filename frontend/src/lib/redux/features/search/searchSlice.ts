import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "";

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchQuery: (state, { payload }) => {
      return payload;
    },
    reset: () => initialState,
  },
});

export const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions;
