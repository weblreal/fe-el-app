import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const origin = globalThis?.window?.location?.origin;

// API
export const NotFoundAPI = createApi({
  reducerPath: "NotFound",
  baseQuery: fetchBaseQuery({
    baseUrl: origin,
  }),
  endpoints: (build) => ({
    // FETCH 404 DATA
    fetchNotFound: build.query({
      query: ({ locale }) => ({
        params: {
          locale,
        },
        url: "/api/get404Data",
      }),
    }),
  }),
});

export const { useFetchNotFoundQuery } = NotFoundAPI;
