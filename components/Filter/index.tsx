import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { IFilter } from "./IFilter";
import { useRouter } from "next/router";
import { useFetchGenericSettingsQuery } from "../../redux/slices/404/GenericSettingsAPI";
import styled from "styled-components";
import AppConfig from "../../logic/configs/AppConfig";
import useFilterContext from "../../hooks/useFilterContext";
import ClientOnlyPortal from "../ClientOnlyPortal/ClientOnlyPortal";
import { Nullable } from "../../models/Nullable.interface";
// Component
import Gradient from "../Gradient/Gradient";
import Container from "../UI/Container/Container";
import Grid from "../UI/Grid/Grid";
import Icon from "../UI/Icon/Icon";
import Shadow from "../UI/Shadow/Shadow";
import Text from "../UI/Text/Text";
import FilterHeader from "./FilterHeader";
import FilterTags from "./FilterTags";
import FilterPublicationDate from "./FilterPublicationDate";
import Button from "../UI/Button/Button";
import Flex from "../UI/Flex/Flex";
import Loading from "../Loading/Loading";
import ReverseTheme from "../ReverseTheme/ReverseTheme";

const Filter = ({
  tags,
  numFound,
  filteredTags,
  availableYears,
  onSubmit,
}: IFilter) => {
  // Hooks
  const [open, setOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<{ tags: string[], year: Nullable<string> }>({
    tags: [],
    year: null,
  });

  const { state, dispatch } = useFilterContext();
  const { locale, asPath } = useRouter();

  const { data: genericSettings } = useFetchGenericSettingsQuery({
    locale: locale,
    path: asPath?.split("#")?.[0],
  });

  // Handlers
  const openFilterHandler = () => {
    setOpen((prev) => !prev);
  };

  const filterTags = tags?.filter(
    (tags, key, orig) => orig.indexOf(tags) === key
  );

  const groupedFilteredMap = filteredTags?.reduce(
    (entryMap, e) => entryMap.set(e, [...(entryMap.get(e) || []), e]),
    new Map()
  );

  useEffect(() => {
    state?.activeTags?.forEach((val) => {
      if (
        !groupedFilteredMap?.get(val)?.length &&
        (groupedFilteredMap || new Map()).size > 0 &&
        dispatch
      ) {
        dispatch({
          type: "UPDATE_ACTIVE_TAGS",
          payload: {
            newTag: {
              name: val,
              value: false,
            },
          },
        });
      }
    });
  }, [state, groupedFilteredMap, dispatch]);

  // Functions
  const getTagCount = (tag: string) => {
    return groupedFilteredMap?.get(tag)?.length || 0;
  };

  const onSubmitHandler = () => {
    if (onSubmit) onSubmit();
    openFilterHandler();

    setActiveFilter((prev) => ({ ...prev, tags: state?.activeTags || [], year: state?.activeDates?.year || null }));
  };

  const onClearFilterHandler = () => {
    if (dispatch) dispatch({ type: "CLEAR_FILTER", payload: {} });
  };

  // Filter Labels
  const findGenericSettings = (prop: string) => {
    const settings = genericSettings?.FiltersContainer;

    const res = settings?.find((item: any) =>
      Object.keys(item)?.includes(prop)
    )?.[prop];

    return res;
  };
  const header = findGenericSettings("fitersText");
  const topics = findGenericSettings("topicsText");
  const publicationDateText = findGenericSettings("publicationDateText");
  const showResultText = findGenericSettings("showResultText");
  const monthsLabel = findGenericSettings("selectMonthBox");
  const yearsLabel = findGenericSettings("selectYearBox");
  const clearAll = findGenericSettings("clearAll");
  const additionalFilter = activeFilter?.year ? 1 : 0;

  return (
    <>
      <Shadow border="thin" borderColor="text">
        <Grid
          gridGap={2}
          gridTemplateColumns="1fr auto"
          height="full"
          p="12px 13px 12px 18px"
          alignItems="center"
          justifyContent="space-between"
          pointer
          onClick={openFilterHandler}
        >
          <FilterLabel fontSize="h5">
            {header || "-"}{" "}
            {!!activeFilter.tags?.length || additionalFilter
              ? `(${(activeFilter?.tags?.length || 0) + additionalFilter})`
              : ""}
          </FilterLabel>
          <Icon type="filter" size={18} />
        </Grid>
      </Shadow>

      {/* Modal */}
      <ClientOnlyPortal selector="#portal">
        <AnimatePresence>
          {open && (
            <>
              <Container
                position="fixed"
                top={0}
                left={0}
                width="full"
                height="full"
              >
                <Gradient
                  onClick={openFilterHandler}
                  variants={AppConfig.setAnimationVariant("OPACITY_VARIANT")}
                  initial="hide"
                  animate="show"
                  exit="hide"
                />
              </Container>
              <Flex
                py={{ _: 4, desktopS: 4 }}
                backgroundTheme
                position="fixed"
                right={0}
                top={0}
                minHeight="100vh"
                maxWidth="420px"
                width="full"
                zIndex={1}
                variants={AppConfig.setAnimationVariant(
                  "SLIDE_RIGHT_FULL_VARIANT"
                )}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: 0.5,
                }}
                flexDirection="column"
                height="full"
              >
                <Flex flexDirection="column">
                  {/* Header */}
                  <FilterHeader
                    openFilterHandler={openFilterHandler}
                    header={header}
                  />

                  <FilterWrapper
                    flexDirection="column"
                    height="calc(100vh - 130px)"
                    overflow="auto"
                  >
                    {/* Popular */}
                    {/* <FilterPopular /> */}

                    {/* Tags */}
                    {!!filterTags?.length && (
                      <FilterTags
                        filteredTags={filterTags}
                        getTagCount={getTagCount}
                        header={topics || "-"}
                      />
                    )}
                    <Container height={8}></Container>
                    {/* Publication Date */}
                    <FilterPublicationDate
                      header={publicationDateText || ""}
                      yearsLabel={AppConfig.limitText(yearsLabel, 100)}
                      availableYears={availableYears}
                    />
                  </FilterWrapper>
                </Flex>

                {/* Submit */}
                {showResultText && (
                  <Flex
                    px={{ _: 2, mobile: 4 }}
                    justifyContent="center"
                    width="full"
                    position="sticky"
                    bottom={24}
                  >
                    <Button
                      variant="primary"
                      width="full"
                      onClick={onSubmitHandler}
                      style={{
                        pointerEvents: !!numFound ? "all" : "none",
                      }}
                      height={48}
                    >
                      <ReverseTheme>
                        <Text textAlign="center" width="full">
                          {!numFound && <Loading />}

                          {!!numFound && (
                            <>
                              {`${showResultText?.split(" ")?.[0]} ${
                                numFound || ""
                              } ${showResultText?.split(" ")?.[1]}`}
                            </>
                          )}
                        </Text>
                      </ReverseTheme>
                    </Button>

                    <Flex justifySelf="end">
                      <Button
                        variant="link"
                        width="100px"
                        onClick={onClearFilterHandler}
                      >
                        <Text width="full" maxWidth="150px" textAlign="center">
                          {clearAll}
                        </Text>
                      </Button>
                    </Flex>
                  </Flex>
                )}
              </Flex>
            </>
          )}
        </AnimatePresence>
      </ClientOnlyPortal>
    </>
  );
};

const FilterLabel = styled(Text)`
  white-space: nowrap;
`;

const FilterWrapper = styled(Flex)`
  /* width: calc(100% - 4px); */
  /* width */
  &::-webkit-scrollbar {
    cursor: pointer;
    width: 4px;
    position: relative;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.neutral["10"]};
    border-radius: 2px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.text};
    margin-right: 1em;
  }
`;

export default Filter;
