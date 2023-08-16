import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { elSegmentRemoval, getAdapterCTA } from "../../../logic/utilities";
const origin = globalThis?.window?.location?.origin;

// API
export const SearchAPI = createApi({
  reducerPath: "SearchData",

  baseQuery: fetchBaseQuery({
    baseUrl: `${origin}/api/`,
  }),
  tagTypes: ["updateData"],
  endpoints: (build) => ({
    // FETCH Search DATA
    fetchSearchs: build.query({
      query: ({ localeId, search }) => {
        return {
          params: { localeId: localeId, search: search ? `${search}*` : "" },
          url: "getSearchResults",
        };
      },
      transformResponse: (response: any) => {
        const data = response?.data?.content?.search;
        const urls = data?.result?.map((item: any) => ({
          cta: {
            label: item?.title,
            url: elSegmentRemoval(
              item?.navigationPath?.map((link: any) => link?.segment)?.join("/")
            ),
            longText: item?.htmlDescription || "",
          },
        }));

        return {
          numFound: data?.numFound,
          results: urls,
        };
      },
      providesTags: ["updateData"],
    }),

    // FETCH Popular Searches data
    fetchSearchTargets: build.query({
      query: ({ id }) => {
        return {
          params: { id },
          url: "getContentById",
        };
      },
      transformResponse: (response: {
        content: { navigationPath: any[] };
        placements: any;
      }) => {
        const cta = response?.content?.navigationPath
          ?.map((path: any) => elSegmentRemoval(path.segment))
          ?.join("/");

        const searchBox = response?.placements?.grid?.rows?.find(
          (item: any) => item?.placements?.[0].viewtype === "SearchBox"
        )?.placements?.[0]?.items?.[1];

        const items = searchBox?.dynamicRules?.map(
          (item: any) => getAdapterCTA([item])?.[0]
        );

        return { cta: cta, popularSearches: items };
      },
    }),
  }),
});

export const { useFetchSearchsQuery, useFetchSearchTargetsQuery } = SearchAPI;
