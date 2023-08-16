import { useMemo } from "react";
import { ISortTypes } from "../models/ISortTypes";

interface ICustomSort {
  items: {}[];
  sortType?: ISortTypes;
  property: {
    date?: string;
    text?: string;
  };
}

const useCustomSort = ({
  items,
  sortType = "Most Recent",
  property,
}: ICustomSort) => {
  const data: any = [...items];

  // Variables
  const sortedItems = useMemo(
    (): any =>
      data?.sort((a: any, b: any) => {
        if (sortType === "Most Recent" && property.date) {
          const aDate: any = new Date(a[property.date]);
          const bDate: any = new Date(b[property.date]);
          return bDate - aDate;
        } else if (sortType === "Less Recent" && property.date) {
          const aDate: any = new Date(a[property.date]);
          const bDate: any = new Date(b[property.date]);
          return aDate - bDate;
        } else if (sortType === "Title A-Z" && property.text) {
          const titleA = a[property.text].toLowerCase();
          const titleB = b[property.text].toLowerCase();
          if (titleA < titleB) return -1;
          if (titleA > titleB) return 1;
          return 0;
        } else if (sortType === "Title Z-A" && property.text) {
          const titleA = a[property.text].toLowerCase();
          const titleB = b[property.text].toLowerCase();
          if (titleA < titleB) return 1;
          if (titleA > titleB) return -1;
          return 0;
        } else {
          return 0;
        }
      }),
    [items, sortType]
  );

  return sortedItems;
};

export default useCustomSort;
