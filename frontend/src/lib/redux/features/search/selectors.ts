import { RootState } from "@/lib/redux/store";

export const selectSearchQuery = (state: RootState) => state.search;
