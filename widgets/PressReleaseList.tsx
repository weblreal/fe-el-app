// Modules
import useFilterContext from "../hooks/useFilterContext";
import { FilterProvider } from "../components/Filter/FilterProvider";
import { IPressReleaseList } from "../models/widgets/IPressReleaseList";
import {
  useFetchPressReleasesQuery,
  useLazyFetchPressReleasesQuery,
} from "../redux/slices/PressRelease/PressReleaseAPI";
import { IPressRelease } from "../components/PressRelease/IPressRelease";
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "../redux/hooks";
// Components
import Container from "../components/UI/Container/Container";
import DocumentCategoriesHeader from "../components/DocumentCategories/DocumentCategoriesHeader";
import DocumentCategoriesPagination from "../components/DocumentCategories/DocumentCategoriesPagination";
import PressRelease from "../components/PressRelease/PressRelease";
import Grid from "../components/UI/Grid/Grid";
import SPressRelease from "../components/Skeleton/SPressRelease";
import SearchNoResults from "../components/Search/SearchNoResults/SearchNoResults";

const PressReleaseList = ({
  header,
  resultsLabel,
  paginationLabel1,
  paginationLabel2,
  pagingationCTA,
  sortLabels,
  filterYearLabel,
  downloadAllLabel,
  readMoreLabel,
}: IPressReleaseList) => {
  return (
    <FilterProvider>
      <PressReleaseProvider
        filterYearLabel={filterYearLabel}
        header={header}
        resultsLabel={resultsLabel}
        pressReleaseItem={[]}
        isFilter
        paginationLabel1={paginationLabel1}
        paginationLabel2={paginationLabel2}
        pagingationCTA={pagingationCTA}
        sortLabels={sortLabels}
        readMoreLabel={readMoreLabel}
        downloadAllLabel={downloadAllLabel}
      />
    </FilterProvider>
  );
};

const PressReleaseProvider = ({
  header,
  resultsLabel,
  paginationLabel1,
  paginationLabel2,
  pagingationCTA,
  sortLabels,
  filterYearLabel,
  downloadAllLabel,
  readMoreLabel,
}: IPressReleaseList) => {
  // Hooks
  const router = useRouter();
  const { localeId } = useAppSelector((state) => state.SearchSlice);
  const { state, dispatch } = useFilterContext();
  const filteredTags = useMemo(
    () => state?.activeTags?.map((tag: string) => `PR__${tag}`)?.join(","),
    [state]
  );

  const [sort, setSort] = useState("EXTERNALLY_DISPLAYED_DATE_DESC");
  const [active, setActive] = useState(1);

  // Fetch API
  const { data: filterData, isFetching: isFetchingFilter } =
    useFetchPressReleasesQuery({
      limit: 8 * active,
      tags: filteredTags || "__press_Release",
      year: state?.activeDates?.year,
      month: state?.activeDates?.month,
      siteId: localeId,
      sortFields: sort,
    });
  const [trigger, { data, isLoading, isFetching }] =
    useLazyFetchPressReleasesQuery({});

  // Variables
  const pressReleaseItem = data?.pressRelease || [];
  const sortValues = ["Most Recent", "Less Recent", "Title A-Z", "Title Z-A"];
  const sortOptions = sortLabels
    ?.filter((label: string) => label)
    ?.map((label: string, key: number) => ({
      label: label,
      value: sortValues[key],
    }));

  // Functions
  const sortingHandler = (event: any) => {
    if (event.target?.value === "Most Recent") {
      setSort("EXTERNALLY_DISPLAYED_DATE_DESC");
    } else {
      setSort("EXTERNALLY_DISPLAYED_DATE_ASC");
    }
  };

  const reverseSortValue = () => {
    return sort === "EXTERNALLY_DISPLAYED_DATE_ASC"
      ? "Less Recent"
      : "Most Recent";
  };

  const showmoreHandler = () => {
    if (!isFetching) {
      setActive((prev: number) => prev + 1);
    }

    onSubmitFilterHandler(active + 1, reverseSortValue());
  };

  const onSubmitFilterHandler = (
    add: number = active,
    sortCurr: string = sort
  ) => {
    if (sortCurr === "Most Recent") {
      trigger({
        tags: filteredTags || "__press_Release",
        limit: add * 12,
        sortFields: "EXTERNALLY_DISPLAYED_DATE_DESC",
        siteId: localeId,
        year: state?.activeDates?.year,
        month: state?.activeDates?.month,
      });
    } else {
      trigger({
        tags: filteredTags || "__press_Release",
        limit: add * 12,
        sortFields: "EXTERNALLY_DISPLAYED_DATE_ASC",
        siteId: localeId,
        year: state?.activeDates?.year,
        month: state?.activeDates?.month,
      });
    }
  };

  // Effects
  useEffect(() => {
    const newTag = router.asPath?.split("#PR__")?.[1];

    if (dispatch) {
      dispatch({
        payload: {
          newTag: {
            name: newTag,
            value: !!newTag,
          },
        },
        type: "UPDATE_ACTIVE_TAGS",
      });

      trigger({
        tags: newTag || "__press_Release",
        limit: 12,
        siteId: localeId,
      });
    }
  }, [localeId, router, dispatch]);

  useEffect(() => {
    setActive(1);
  }, [state?.activeTags]);

  const yearHandler = (event: { target: { [key: string]: string } }) => {
    if (dispatch)
      dispatch({
        payload: { activeDates: { year: event.target.value } },
        type: "UPDATE_ACTIVE_DATES",
      });
  };

  return (
    <>
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
          sortOptions={sortOptions}
          filterYearLabel={filterYearLabel}
          isFilter
          tags={filterData?.tags}
          filteredTags={filterData?.filteredTags}
          pressReleaseCount={isFetching ? 0 : data?.totalCount || 0}
          filterYearHandler={yearHandler}
          sortHandler={(event) => {
            sortingHandler(event);
            onSubmitFilterHandler(active, event.target?.value);
          }}
          availableYears={filterData?.availableYears || []}
          numFoundFilter={filterData?.totalCount}
          onSubmitFilter={(event) => {
            onSubmitFilterHandler(event, reverseSortValue());
          }}
          isFilterFetching={isFetchingFilter}
        />

        {/* Items */}
        <Items
          pressRelease={pressReleaseItem}
          readMoreLabel={readMoreLabel}
          isFetching={isFetching || isLoading}
          downloadAllLabel={downloadAllLabel}
        />

        {/* Pagination */}
        {!!data?.pressRelease?.length && !isLoading && (
          <DocumentCategoriesPagination
            paginationLabel1={paginationLabel1}
            paginationLabel2={paginationLabel2}
            pagingationCTA={pagingationCTA}
            pressRelease={pressReleaseItem}
            pressReleaseCount={data?.totalCount}
            showMoreHandler={() => showmoreHandler()}
          />
        )}
      </Container>
    </>
  );
};

const Items = ({
  pressRelease,
  isFetching,
  downloadAllLabel,
  readMoreLabel,
}: {
  pressRelease: IPressRelease[];
  isFetching?: boolean;
  downloadAllLabel?: string;
  readMoreLabel?: string;
}) => {
  return (
    <Grid width="full" mb={5}>
      {!isFetching &&
        pressRelease?.map((item: IPressRelease, key: number) => {
          return (
            <Container key={key}>
              <PressRelease
                {...item}
                tags={item?.tags?.slice(1)}
                downloadAllLabel={downloadAllLabel || ""}
                cta={{
                  label: readMoreLabel || item.cta?.label || "",
                  url: item.cta?.url || "#",
                  isExternal: item.cta?.isExternal,
                }}
              />

              {key + 1 !== pressRelease.length && (
                <Container height="16px"></Container>
              )}
            </Container>
          );
        })}

      {isFetching && <Skeleton />}

      {!pressRelease?.length && !isFetching && (
        <Container
          maxWidth="screen3"
          m="auto"
          width="full"
          pb={{ _: 5, tablet: 10 }}
        >
          <SearchNoResults text1="No results found" input="" />
        </Container>
      )}
    </Grid>
  );
};

const Skeleton = () => {
  return (
    <>
      <SPressRelease />
      <Container height="16px"></Container>
      <SPressRelease />
      <Container height="16px"></Container>
      <SPressRelease />
      <Container height="16px"></Container>
      <SPressRelease />
      <Container height="16px"></Container>
      <SPressRelease />
      <Container height="16px"></Container>
      <SPressRelease />
      <Container height="16px"></Container>
      <SPressRelease />
      <Container height="16px"></Container>
      <SPressRelease />
      <Container height="16px"></Container>
    </>
  );
};

export default PressReleaseList;
