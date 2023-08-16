import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const origin = globalThis?.window?.location?.origin;

// API
export const GenericSettingsAPI = createApi({
  reducerPath: "Generic Settings",
  baseQuery: fetchBaseQuery({
    baseUrl: origin,
  }),
  endpoints: (build) => ({
    // FETCH GENERIC DATA
    fetchGenericSettings: build.query({
      query: ({ locale, path }) => ({
        params: {
          locale,
          path,
        },
        url: "/api/getGenericSettings",
      }),
      transformResponse: (response: any) => {
        return response?.data?.content?.pageByPath?.settings;
      },
    }),
  }),
});

export const { useFetchGenericSettingsQuery } = GenericSettingsAPI;
