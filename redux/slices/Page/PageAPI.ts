import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const origin = globalThis?.window?.location?.origin;

// API
export const PageAPI = createApi({
  reducerPath: "Page",
  baseQuery: fetchBaseQuery({
    baseUrl: origin,
  }),
  endpoints: (build) => ({
    // FETCH 404 DATA
    fetchPageData: build.query({
      query: ({ path }) => ({
        url: path + "/",
      }),
    }),
  }),
});

export const { useFetchPageDataQuery } = PageAPI;
