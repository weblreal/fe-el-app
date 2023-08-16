import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const origin = globalThis?.window?.location?.origin;

// API
export const AnnouncementAPI = createApi({
  reducerPath: "ContentById",
  baseQuery: fetchBaseQuery({
    baseUrl: origin,
  }),
  tagTypes: ["updateData"],
  endpoints: (build) => ({
    // FETCH FINANCE DATA
    fetchContentById: build.query({
      query: ({ id }) => ({
        params: {
          id,
        },
        url: "/api/getContentById",
      }),
      providesTags: ["updateData"],
    }),
  }),
});

export const { useFetchContentByIdQuery } = AnnouncementAPI;
