import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPressRelease } from "../../../components/PressRelease/IPressRelease";
import {
  dateConverter_2,
  getAdapterCTA,
  getAdapterViewtype,
} from "../../../logic/utilities";

const origin = globalThis?.window?.location?.origin;

// API
export const pressReleaseAPI = createApi({
  reducerPath: "pressReleasesData",

  baseQuery: fetchBaseQuery({
    baseUrl: `${origin}/api/`,
  }),
  tagTypes: ["updateData"],
  endpoints: (build) => ({
    // FETCH PRESSRELEASES DATA
    fetchPressReleases: build.query({
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
            siteId: siteId,
          },
          url: "getPressReleases",
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
        const res = response?.data?.map((item: any): IPressRelease => {
          const CTA = getAdapterViewtype(item?.related, "CTA").selected;
          const Share = getAdapterViewtype(item?.related, "Share").selected;
          const file = item?.related?.find(
            (rel: any) => rel?.__typename === "CMDownloadImpl"
          );

          const tagArray = item?.subjectTaxonomy?.map(
            (tag: any) => tag.settings
          );

          const formattedFile = {
            url: file?.data?.uri,
            fileName: file?.filename,
            id: file?.id,
            category: "Brands",
            type: "text/pdf",
          };

          return {
            articleId: item?.id,
            allFiles: formattedFile?.url ? [formattedFile] : [],
            files: formattedFile?.url ? [[formattedFile]] : [],
            singleFile: formattedFile?.url ? formattedFile : undefined,
            cta: getAdapterCTA(CTA?.teaserTargets)?.[0],
            date: dateConverter_2(item?.extDisplayedDate?.split("[")?.[0]),
            downloadAllLabel: "Download all",
            longText: item?.detailText,
            title: item?.title,
            tags: tagArray,
            isTitleLinkToPDF: false,
            share: {
              url: getAdapterCTA(CTA?.teaserTargets)?.[0].url,
              label: Share?.teaserTitle,
              title1: Share?.teaserText,
            },
          };
        });

        return {
          pressRelease: res,
          tags: response.tags,
          numFound: response.numFound,
          totalCount: response.totalCount,
          filteredTags: response.filteredTags,
          availableYears: response.availableYears,
        };
      },
      providesTags: ["updateData"],
    }),
  }),
});

export const { useFetchPressReleasesQuery, useLazyFetchPressReleasesQuery } = pressReleaseAPI;
