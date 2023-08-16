import { getAdapterCTA, dateConverter } from "../../logic/utilities";
import {
  IFiles,
  IPressRelease,
} from "../../components/PressRelease/IPressRelease";
import { Nullable } from "../../models/Nullable.interface";
import { IPressReleaseList } from "../../models/widgets/IPressReleaseList";
import { Adapter } from "../Adapter";

export class IDodumentCategoriesAdapter extends Adapter<
  IPressReleaseList,
  Nullable<IPressReleaseList>
> {
  adapt: (source: any) => Nullable<IPressReleaseList> = (source) => {
    if (!source.length) return null;
    const data = source;

    const filteredData = data?.filter(
      (type: any) => type?.viewtype !== "CTA" && type?.viewtype !== "Filter"
    );

    const filter = data?.find((type: any) => type?.viewtype === "Filter");
    const labels = filter?.settings;

    const splitIntoCategory = (arr: any[]) => {
      const chunkedData: any[] = [];
      const categories: any[] = [];

      arr.forEach((element) => {
        if (!categories.includes(element?.category)) {
          categories.push(element?.category);
        }
      });

      for (const cat of categories) {
        chunkedData.push(arr.filter((item) => item.category === cat));
      }

      return chunkedData;
    };

    const list = filteredData?.map((item: any): IPressRelease => {
      const details = item?.settings;
      const date = details?.publicationDate
        ? dateConverter(details?.publicationDate / 1000)
        : "";

      const files = item?.items?.map((file: any): IFiles => {
        return {
          label: file?.title,
          fileName: file?.filename,
          size: file?.data?.size,
          url: file?.data?.uri,
          category:
            file?.teaserText === "<div><p>-</p></div>" ? "" : file?.teaserText,
          type: file?.data?.contentType,
          longText: file?.detailText,
          id: file?.id,
        };
      });

      const cta = item?.items?.find((x: any) => x?.teaserTargets);
      const tags =
        item?.subjectTaxonomy?.map(
          (tag: any): { [key: string]: string }[] => tag.settings
        ) || [];

      return {
        title: details?.title,
        tag: details?.category,
        tags: tags,
        date: date,
        hideDay: item?.settings?.hideDay,
        longText: "",
        cta: getAdapterCTA(cta?.teaserTargets)?.[0],
        files: splitIntoCategory(files || []),
        allFiles: files,
        downloadAllLabel: labels?.Label5,
        isTitleLinkToPDF: true,
      };
    });

    const yearList = filteredData?.map((item: any) => new Date(item?.settings?.publicationDate).getFullYear());
    const filteredYearList = yearList?.filter((x: string, i: number) => yearList.indexOf(x) == i);
    const sortedByYear = filteredYearList?.sort((a: any, b: any) => b - a);

    return {
      header: filter?.teaserTitle,
      pressReleaseItem: [...list],
      resultsLabel: labels?.Label2,
      paginationLabel1: labels?.Label3?.split("/")?.[0],
      paginationLabel2: labels?.Label3?.split("/")?.[1],
      pagingationCTA: labels?.Label4,
      filterYearLabel: labels?.FilterLabel1,
      defaultYearValue: labels?.FilterLabel2,
      sortLabels: [
        labels?.SortBy1,
        labels?.SortBy2,
        labels?.SortBy3,
        labels?.SortBy4,
      ],
      yearList: sortedByYear || [],
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
