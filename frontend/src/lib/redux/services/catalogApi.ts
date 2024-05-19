import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CatalogItemApiInterface,
  CatalogItemInterface,
} from "@/lib/types/apiDefinition";

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7070/api/",
  }),
  endpoints: (builder) => ({
    getSalesHits: builder.query({
      query: () => "top-sales",
    }),
    getItems: builder.query({
      query: ({
        offset,
        categoryId,
        q,
      }: {
        offset: number;
        categoryId: number | null;
        q: string;
      }) => ({
        url: "items",
        params: categoryId
          ? {
              offset: offset,
              categoryId: categoryId || null,
              q: q || "",
            }
          : { offset: offset, q: q || "" },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems, args) => {
        if (args.arg.offset === 0) {
          return [...newItems];
        }
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getCategories: builder.query({
      query: () => "categories",
    }),
    getItem: builder.query<CatalogItemInterface, number>({
      query: (id: number) => ({
        url: `items/${id}`,
      }),
    }),
    sendOrder: builder.mutation({
      query: (data) => ({
        url: "order",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetSalesHitsQuery,
  useGetCategoriesQuery,
  useGetItemsQuery,
  useGetItemQuery,
  useSendOrderMutation,
} = catalogApi;
