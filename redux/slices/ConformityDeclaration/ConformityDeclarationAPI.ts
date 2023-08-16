import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const origin = globalThis?.window?.location?.origin;
const azureUri = `${origin}/api/getConformityData/`;

const countAndPadString = (str: string, charCount: number = 0) => {
  const count = str.length;

  if (count < charCount) {
    const missingZeros = charCount - count;
    str = "0".repeat(missingZeros) + str;
  }

  return str;
};

export const conformityAPI = createApi({
  reducerPath: "conformityData",
  baseQuery: fetchBaseQuery({
    baseUrl: azureUri,
    prepareHeaders: (headers) => {
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("Access-Control-Expose-Headers", "*");
    },
  }),
  tagTypes: ["UPC", "Eyewear"],
  endpoints: (builder) => ({
    fetchGTIN: builder.query({
      query: (code: string) => {
        return { url: `?input=${countAndPadString(code, 14)}` };
      },
      providesTags: ["UPC"],
      transformResponse: (response) => response,
    }),
    fetchEyewearModel: builder.query({
      query: (code: string) => {

        const formattedCode = code.charAt(0) != "0" ? `0${code}` : code;

        return { url: `?input=${formattedCode}` }
      },
      providesTags: ["Eyewear"],
    }),
  }),
});

export const { useLazyFetchGTINQuery, useLazyFetchEyewearModelQuery } =
  conformityAPI;
