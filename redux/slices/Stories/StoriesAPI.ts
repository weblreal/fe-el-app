import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StoriesAPIAdapter } from "../../../adapters/api/StoriesAPI.adapter";

const origin = globalThis?.window?.location?.origin;

// API
export const storiesAPI = createApi({
  reducerPath: "storiesData",

  baseQuery: fetchBaseQuery({
    baseUrl: `${origin}/api/`,
  }),
  tagTypes: ["updateData"],
  endpoints: (build) => ({
    // FETCH STORIES DATA
    fetchStories: build.query({
      query: ({
        tags,
        limit = 12,
        sortFields = "EXTERNALLY_DISPLAYED_DATE_DESC",
        year,
        month,
        siteId,
      }) => {
        return {
          params: {
            tags: tags,
            limit: limit,
            sortFields: sortFields,
            year,
            month,
            siteId,
          },
          url: "getStories",
        };
      },
      transformResponse: (response: {
        data: any[];
        tags: any[];
        numFound: number;
        totalCount: number;
        filteredTags: any[];
        availableYears: string[];
      }) => {
        const { adapt } = new StoriesAPIAdapter();
        const data = adapt(response);

        const res = {
          stories: data?.data,
          tags: data?.tags || [],
          numFound: data?.numFound || 0,
          totalCount: response.totalCount,
          filteredTags: response.filteredTags,
          availableYears: response.availableYears,
        };

        return res;
      },
      providesTags: ["updateData"],
    }),
  }),
});

export const { useFetchStoriesQuery, useLazyFetchStoriesQuery } = storiesAPI;
