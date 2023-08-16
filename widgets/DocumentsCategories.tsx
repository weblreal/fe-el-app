// Modules
import { IPressReleaseList } from "../models/widgets/IPressReleaseList";
import { useState } from "react";
import { ISortTypes } from "../models/ISortTypes";
import { FilterProvider } from "../components/Filter/FilterProvider";
import { IPressRelease } from "../components/PressRelease/IPressRelease";
import useCustomSort from "../hooks/useCustomSort";
import usePaginateArray from "../hooks/usePaginateArray";
import useResponsive from "../hooks/useResponsive";
import { useEffect } from "react";
// Components
import Container from "../components/UI/Container/Container";
import DocumentCategoriesHeader from "../components/DocumentCategories/DocumentCategoriesHeader";
import DocumentCategoriesItems from "../components/DocumentCategories/DocumentCategoriesItems";
import DocumentCategoriesPagination from "../components/DocumentCategories/DocumentCategoriesPagination";

const DocumentsCategories = ({
  pressReleaseItem,
  header,
  resultsLabel,
  paginationLabel1,
  paginationLabel2,
  pagingationCTA,
  sortLabels,
  filterYearLabel,
  isFilter,
  tags,
  defaultYearValue,
  yearList,
}: IPressReleaseList) => {
// Hooks
  const [active, setActive] = useState(1);
  const [sortType, setSortType] = useState<ISortTypes>("Most Recent");
  const [year, setYear] = useState<null | string>(null);
  const { is } = useResponsive();

  const paginationCount = is("desktopS", "<") ? 6 : 8;
  const sortedItems = useCustomSort({
    items: pressReleaseItem,
    sortType: sortType,
    property: {
      date: "date",
      text: "title",
    },
  });

  // Variables
  const sortValues = ["Most Recent", "Less Recent", "Title A-Z", "Title Z-A"];
  const sortOptions = sortLabels
    ?.filter((label: string) => label)
    ?.map((label: string, key: number) => ({
      label: label,
      value: sortValues[key],
    }));

  // Functions
  const sortHandler = (event: any) => {
    setSortType(event?.target?.value);
  };

  const filterYearHandler = (event: any) => {
    if (event?.target?.value) setYear(event?.target?.value);
  };

  const filteredPressByYear = sortedItems?.filter((press: IPressRelease) => {
    const pressYear =
      press?.date?.split(" ")?.[press?.date?.split(" ")?.length - 1];

    if (year === "All") return true;

    if (year) return pressYear === year;

    return true;
  });

  const pressRelease = usePaginateArray({
    arr: filteredPressByYear,
    activePage: active,
    itemsPerPage: paginationCount,
  });

  // Effects
  useEffect(() => {
    setActive(1);
  }, [year]);

  return (
    <FilterProvider>
      <Container
        m="auto"
        maxWidth="863px"
        minHeight="calc(100vh - 150px)"
        width="full"
        pt={{ _: 3, desktopS: 7 }}
        pb={9}
        px={{ _: 2, desktopS: 0 }}
      >
        {/* Header */}
        <DocumentCategoriesHeader
          header={header}
          resultsLabel={resultsLabel}
          sortHandler={sortHandler}
          filterYearHandler={filterYearHandler}
          sortOptions={sortOptions}
          filterYearLabel={filterYearLabel}
          isFilter={isFilter}
          tags={tags}
          pressReleaseCount={filteredPressByYear.length}
          defaultYearValue={defaultYearValue}
          yearList={yearList}
        />

        {/* Items */}
        <DocumentCategoriesItems
          paginationCount={paginationCount}
          pressRelease={pressRelease}
        />

        {/* Pagination */}
        {!!pressRelease?.length && (
          <DocumentCategoriesPagination
            paginationLabel1={paginationLabel1}
            paginationLabel2={paginationLabel2}
            pagingationCTA={pagingationCTA}
            pressRelease={pressRelease}
            pressReleaseCount={filteredPressByYear.length}
            showMoreHandler={() => setActive((prev) => prev + 1)}
          />
        )}
      </Container>
    </FilterProvider>
  );
};

export default DocumentsCategories;
