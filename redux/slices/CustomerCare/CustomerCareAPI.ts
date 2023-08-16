import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const origin = globalThis?.window?.location?.origin;

// API
export const CustomerCareAPI = createApi({
  reducerPath: "ContentById",
  baseQuery: fetchBaseQuery({
    baseUrl: origin,
  }),
  tagTypes: ["updateData"],
  endpoints: (build) => ({
    // FETCH BRAND DATA
    fetchContentById: build.query({
      query: ({ id = null }) => ({
        params: {
          id,
        },
        url: "/api/getContentById",
      }),
      providesTags: ["updateData"],
    }),
  }),
});

export const { useFetchContentByIdQuery, useLazyFetchContentByIdQuery } = CustomerCareAPI;
