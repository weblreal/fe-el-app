import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  dateConverter_2,
  elSegmentRemoval,
  getAdapterCTA,
  xmlToJson,
} from "../../../logic/utilities";

const origin = globalThis?.window?.location?.origin;

// API
export const financialAPI = createApi({
  reducerPath: "financialData",

  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  tagTypes: ["updateData"],
  endpoints: (build) => ({
    // FETCH FINANCE DATA
    fetchFinanceData: build.query({
      query: () => ({
        url: "https://essilor.symex.be/finance.xml",
        responseHandler: (response) => response.text(),
      }),
      transformResponse: (response) => {
        return parseFinancialToJSON(response as string);
      },
      providesTags: ["updateData"],
    }),
    // FETCH CTA
    fetchFinancialCTA: build.query({
      query: ({ id }) => ({
        url: `${origin}/api/getContentById/`,
        params: {
          id,
        },
      }),
      transformResponse: (response: { content: { navigationPath: any[] } }) => {
        return (
          elSegmentRemoval(
            response?.content?.navigationPath
              ?.map((segment: any) => segment.segment)
              ?.join("/")
          ) || null
        );
      },
    }),
  }),
});

export const { useFetchFinanceDataQuery, useFetchFinancialCTAQuery } =
  financialAPI;

function parseFinancialToJSON(data: string) {
  if (data) {
    const dataJSON = xmlToJson(data).Actions;

    if (!dataJSON) return;

    const date = dataJSON?.Date?.text;
    const dateNewFormat = `${date?.split("/")[1]}/${date?.split("/")[0]}/${
      date.split("/")[2]
    }`;

    return {
      changes: dataJSON?.Essilor?.Variation?.text?.replace(",", "."),
      date: dateConverter_2(dateNewFormat),
      time: dataJSON?.Heure?.text,
      value: dataJSON?.Essilor?.Valeur?.text?.replace(",", "."),
      currency: dataJSON?.Essilor?.Unite?.text,
      volume: dataJSON?.Essilor?.volume?.text?.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      ),
    };
  }
}
