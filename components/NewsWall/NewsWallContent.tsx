// Modules
import { useState, useMemo, useEffect } from "react";
import {
  useFetchStoriesQuery,
  useLazyFetchStoriesQuery,
} from "../../redux/slices/Stories/StoriesAPI";
import { IBrandsNews } from "../../models/widgets/IBrandsNewsRow";
import { useRouter } from "next/router";
import { useAppSelector } from "../../redux/hooks";
import { IFilterLabels } from "../../models/IFilterLabels";
import useTranslateTags from "../../hooks/useTranslateTags";
import useFilterContext from "../../hooks/useFilterContext";

// Components
import CardBrandsNews from "../CardBrandsNews/CardBrandsNews";
import Grid from "../UI/Grid/Grid";
import NewsWallToolbar from "./NewsWallToolbar";
import Container from "../UI/Container/Container";
import Flex from "../UI/Flex/Flex";
import Text from "../UI/Text/Text";
import Span from "../UI/Span/Span";
import Button from "../UI/Button/Button";
import SCardBrandNews from "../Skeleton/SCardBrandNews";
import SearchNoResults from "../Search/SearchNoResults/SearchNoResults";

const NewsWallContent: React.FC<IFilterLabels> = ({
  paginationLabel2,
  paginationLabel1,
  pagingationCTA,
  resultsLabel,
  sortLabels,
  readMoreLabel,
}) => {
  // Hooks
  const [sort, setSort] = useState("EXTERNALLY_DISPLAYED_DATE_DESC");
  const { localeId } = useAppSelector((state) => state.SearchSlice);

  // Filter Context
  const { state, dispatch } = useFilterContext();
  const [active, setActive] = useState(1);
  const filteredTags = useMemo(
    () => state?.activeTags?.map((tag: string) => `S__${tag}`)?.join(","),
    [state]
  );

  // Fetched Stories
  const { data: filterData, isFetching: isFilterFetching } =
    useFetchStoriesQuery({
      tags: filteredTags || "__Stories",
      limit: active * 12,
      sortFields: sort,
      siteId: localeId,
      year: state?.activeDates?.year,
      month: state?.activeDates?.month,
    });
  const [trigger, { data: storiesData, isLoading, isFetching }] =
    useLazyFetchStoriesQuery({});

  // Hooks
  const router = useRouter();
  const { tagList } = useTranslateTags(storiesData?.tags || []);

  // Variables
  const dummyArr: unknown[] = Array.apply(null, Array(12));
  const sortValues = ["Most Recent", "Less Recent", "Title A-Z", "Title Z-A"];
  const sortOptions = sortLabels
    ?.filter((label: string) => label)
    ?.map((label: string, key: number) => ({
      label: label,
      value: sortValues[key],
    }));

  // Functions
  const showmoreHandler = () => {
    if (!isFetching) {
      setActive((prev: number) => prev + 1);
    }

    onSubmitFilterHandler(active + 1, reverseSortValue());
  };

  const reverseSortValue = () => {
    return sort === "EXTERNALLY_DISPLAYED_DATE_ASC"
      ? "Less Recent"
      : "Most Recent";
  };

  const sortingHandler = (event: any) => {
    if (event.target?.value === "Most Recent") {
      setSort("EXTERNALLY_DISPLAYED_DATE_DESC");
    } else {
      setSort("EXTERNALLY_DISPLAYED_DATE_ASC");
    }
  };

  const onSubmitFilterHandler = (
    add: number = active,
    sortCurr: string = sort
  ) => {
    if (sortCurr === "Most Recent") {
      trigger({
        tags: filteredTags || "__Stories",
        limit: add * 12,
        sortFields: "EXTERNALLY_DISPLAYED_DATE_DESC",
        siteId: localeId,
        year: state?.activeDates?.year,
        month: state?.activeDates?.month,
      });
    } else {
      trigger({
        tags: filteredTags || "__Stories",
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
    const newTag = router.asPath?.split("#S__")?.[1];

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
        tags: newTag || "__Stories",
        limit: 12,
        siteId: localeId,
      });
    }
  }, [localeId, router, dispatch, trigger]);

  useEffect(() => {
    setActive(1);
  }, [filteredTags]);

  return (
    <>
      <NewsWallToolbar
        numFound={storiesData?.totalCount || 0}
        numFoundFilter={filterData?.totalCount || 0}
        tags={tagList}
        filteredTags={filterData?.filteredTags || []}
        sortingHandler={(event) => {
          sortingHandler(event);
          onSubmitFilterHandler(active, event.target?.value);
        }}
        isLoading={isLoading}
        isFilterFetching={isFilterFetching}
        sortOptions={sortOptions}
        resultsLabel={resultsLabel}
        availableYears={filterData?.availableYears}
        onSubmitFilter={(event: any) => {
          onSubmitFilterHandler(event, reverseSortValue());
        }}
      />
      <Grid
        width="full"
        m="auto"
        gridGap={2}
        gridTemplateColumns={{
          _: "repeat(auto-fill, minmax(288px, 1fr))",
          mobile: "repeat(auto-fill, minmax(316px, 1fr))",
          desktopXL: "repeat(auto-fill, minmax(420px, 1fr))",
        }}
        minHeight={!storiesData ? "553.45px" : "100%"}
      >
        {isFetching &&
          dummyArr?.map((_, key: number) => <SCardBrandNews key={key} />)}

        {!isFetching &&
          storiesData?.stories?.map((item: IBrandsNews, key: number) => (
            <CardBrandsNews
              {...item}
              key={key}
              cta={{ url: item.cta?.url || "#", label: readMoreLabel || "" }}
              tagCtaSelf
            />
          ))}
      </Grid>

      {!storiesData?.stories?.length && !isLoading && (
        <Container
          maxWidth="screen3"
          m="auto"
          width="full"
          minHeight={!storiesData ? "553.45px" : "553.45px"}
          pb={{ _: 5, tablet: 10 }}
        >
          <SearchNoResults text1="No results found" input="" />
        </Container>
      )}

      <Container pt={3}>
        <Flex
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          {(storiesData?.totalCount || 0) > 0 && (
            <Text mb={2} fontSize="h5">
              {`${paginationLabel1 || "-"}`}{" "}
              <Span fontWeight="500" fontSize="h5" fontFamily="Avenir Medium">
                {storiesData?.stories?.length}
              </Span>{" "}
              {paginationLabel2 || "-"} {storiesData?.totalCount}
            </Text>
          )}

          {(storiesData?.stories || [])?.length <
            (storiesData?.totalCount || 0) && (
            <Button
              variant="secondary"
              minWidth="193px"
              onClick={showmoreHandler}
              padding={{ _: "13px 53px", desktopS: "13px 18px" }}
              fontFamily="Avenir Light"
              fontWeight="light"
              fontSize="h5"
              textAlign="center"
            >
              <Text m="auto">{pagingationCTA || "-"}</Text>
            </Button>
          )}
        </Flex>
      </Container>
    </>
  );
};
export default NewsWallContent;
