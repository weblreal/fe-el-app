import type { NextApiRequest, NextApiResponse } from "next";
import { cmsRepo } from "../../logic/graphql/CMSRepo";
import { dateConverter_2 } from "../../logic/utilities";

interface IQuery {
  tags: string;
  limit: number;
  sortFields: string;
  month: string;
  year: string;
  siteId: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {
    tags = "",
    limit,
    sortFields,
    month,
    year,
    siteId = "",
  }: Partial<IQuery> = req.query;

  const queryTo = "__Stories";
  const response = await cmsRepo.getStories(
    queryTo as string,
    999999,
    sortFields as string,
    siteId
  );

  // Get Tags
  const tagResp = await cmsRepo.getStoriesTags(999999, siteId, queryTo);

  const tagList = tagResp?.data?.content?.search?.result;
  const tagSettings = tagList?.reduce((prev: any, curr: any) => {
    return [...prev, ...curr.subjectTaxonomy];
  }, []);

  const tagWithKeys = tagSettings?.reduce((prev: any, curr: any) => {
    return {
      ...prev,
      [curr?.settings?.en]: curr?.externalReference,
      [curr?.settings?.it]: curr?.externalReference,
      [curr?.settings?.fr]: curr?.externalReference,
    };
  }, {});

  const currentTag = tags?.replace(/S__/g, "")?.split(",");
  const tagsMapped = tagSettings?.map((tag: any) => tag?.settings);
  const data = response?.data?.content?.search?.result;

  const clientTagList: string[] = currentTag?.map(
    (tag: string): string => tagWithKeys?.[tag] || queryTo
  );

  // Date Filter
  const filteredDate = filterByDate(data, year, month);

  // Tag Filter
  const filteredByTags = filteredDate?.filter(
    (x: { subjectTaxonomy: any[] }) => {
      const taxonomy = x.subjectTaxonomy?.map(
        (tax: any) => tax.externalReference
      );

      return intersect_arrays(clientTagList, taxonomy);
    }
  );

  const paginatedResult = filteredByTags?.slice(0, limit);
  const numFound = paginatedResult?.length || 0;

  // Get filtered tags
  const filteredTagSettings = filteredDate?.reduce((prev: any, curr: any) => {
    return [...prev, ...curr.subjectTaxonomy];
  }, []);

  const filteredTagsMapped = filteredTagSettings?.map(
    (tag: any) => tag?.settings
  );

  const rawYears = data?.map(
    (item: any) => item?.extDisplayedDate?.split("-")?.[0]
  );
  const availableYears = rawYears?.filter((year: string, key: number) => rawYears.indexOf(year) == key);

  res.status(200).json({
    data: paginatedResult,
    tags: tagsMapped,
    filteredTags: filteredTagsMapped,
    numFound: numFound,
    totalCount: filteredByTags?.length,
    availableYears: availableYears,
  });
}

// Functions
const filterByDate = (arr: any[], year?: string, month?: string) => {
  if (month === "All" && year === "All") {
    return arr;
  }

  const filteredMonth = arr?.filter((item: any) => {
    const raw = item?.extDisplayedDate?.split("[")?.[0];
    const convertedDate = dateConverter_2(raw)?.split(" ");
    const thisMonth = convertedDate?.[1]?.toLocaleLowerCase();

    return month == "All" || thisMonth == month?.toLocaleLowerCase() || !month;
  });

  const filteredYear = filteredMonth?.filter((item: any) => {
    const raw = item?.extDisplayedDate?.split("[")?.[0];
    const convertedDate = dateConverter_2(raw)?.split(" ");
    const thisYear = convertedDate?.[2]?.toLocaleLowerCase();

    return year == "All" || thisYear == year?.toLocaleLowerCase() || !year;
  });

  return filteredYear;
};

function intersect_arrays(a: string[], b: string[]) {
  const compared = [];

  for (let index = 0; index < a.length; index++) {
    if (b.includes(a[index])) {
      compared.push(a[index]);
    }
  }

  return !!compared?.length;
}
