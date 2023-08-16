// import { useRouter } from "next/router";
import { useMemo } from "react";
import useTranslateTags from "../../hooks/useTranslateTags";
import Filter from "../Filter";
import { ITags } from "../PressRelease/IPressRelease";
// Components
import Column from "../UI/Column/Column";
import Dropdown from "../UI/Dropdown/Dropdown";
import Flex from "../UI/Flex/Flex";
import Grid from "../UI/Grid/Grid";
import Hidden from "../UI/Hidden/Hidden";
import Text from "../UI/Text/Text";

type Props = {
  header?: string;
  sortOptions?: {
    value: string;
    label: string;
  }[];
  sortHandler?: (event: any) => void;
  filterYearHandler?: (event: any) => void;
  resultsLabel?: string;
  filterYearLabel?: string;
  isFilter?: boolean;
  tags?: ITags[];
  pressReleaseCount: number;
  filteredTags?: ITags[];
  availableYears?: string[];
  defaultYearValue?: string;
  numFoundFilter?: number;
  isFilterFetching?: boolean;
  onSubmitFilter?: (event?: any) => void;
  yearList?: string[];
};

const DocumentCategoriesHeader = ({
  header,
  sortOptions = [],
  sortHandler,
  resultsLabel,
  filterYearHandler,
  filterYearLabel,
  isFilter,
  tags,
  pressReleaseCount,
  filteredTags,
  availableYears,
  defaultYearValue,
  numFoundFilter,
  isFilterFetching,
  onSubmitFilter,
  yearList,
}: Props) => {
  // Hooks
  const years = useMemo(() => {
    return yearList?.map((year: string) => ({
      label: year.toString(),
      value: year.toString(),
    })) || [];
  }, [yearList]);

  const { tagList } = useTranslateTags(tags || []);
  const { tagList: filteredTagList } = useTranslateTags(filteredTags || []);

  // Variables
  const gridType = [
    !!filterYearLabel,
    !!isFilter,
    !!sortOptions?.length,
  ]?.filter((condition) => condition);

  return (
    <Flex
      mb={2}
      width="full"
      justifyContent="space-between"
      alignItems={{ _: "start", desktopS: header ? "start" : "center" }}
      flexDirection={{ _: "column-reverse", desktopS: "unset" }}
    >
      <Column width={{ _: "full", desktopS: "unset" }}>
        {header && (
          <Text
            fontSize={{ _: "h3", desktopS: "h2" }}
            fontFamily={{ _: "Avenir Bold", desktopS: "Avenir Medium" }}
            fontWeight={{ _: "bolder", desktopS: "500" }}
          >
            {header}
          </Text>
        )}

        <Hidden from="desktopS">
          {!!sortOptions?.length && (
            <Column
              mr={0}
              mt={{ _: 2 }}
              width={{ _: "full", desktopS: "unset" }}
            >
              <Dropdown options={sortOptions} onChange={sortHandler} />
            </Column>
          )}

          {filterYearLabel && (
            <Column
              mr={0}
              mt={{ _: 2 }}
              width={{ _: "full", desktopS: "unset" }}
            >
              <Dropdown
                options={[{ label: "All", value: "All" }, ...years] || []}
                onChange={filterYearHandler}
                initialLabel={filterYearLabel}
              />
            </Column>
          )}

          {isFilter && (
            <Column
              mr={0}
              mt={{ _: 2 }}
              width={{ _: "full", desktopS: "unset" }}
            >
              <Filter
                tags={tagList}
                filteredTags={filteredTagList}
                numFound={isFilterFetching ? 0 : numFoundFilter || 0}
                availableYears={availableYears}
                onSubmit={onSubmitFilter}
              />
            </Column>
          )}
        </Hidden>

        {(pressReleaseCount || pressReleaseCount !== 0) && (
          <Text
            fontWeight="500"
            fontFamily="Avenir Medium"
            fontSize="18px"
            mt={{ _: 2, desktopS: header ? 2 : 0 }}
          >
            {pressReleaseCount || 0} {resultsLabel}
          </Text>
        )}
      </Column>
      <Grid
        width={{ _: "full", desktopS: "unset" }}
        gridGap={2}
        gridTemplateColumns={`repeat(${gridType?.length}, auto)`}
      >
        <Hidden till="desktopS">
          {!!sortOptions?.length && (
            <Column
              mr={0}
              mb={{ _: 3, desktopS: 0 }}
              width={{ _: "full", desktopS: "unset" }}
            >
              <Dropdown options={sortOptions || []} onChange={sortHandler} />
            </Column>
          )}

          {filterYearLabel && (
            <Column
              mr={0}
              mb={{ _: 3, desktopS: 0 }}
              width={{ _: "full", desktopS: "unset" }}
            >
              <Dropdown
                options={
                  [
                    { label: defaultYearValue || "-", value: "All" },
                    ...years,
                  ] || []
                }
                onChange={filterYearHandler}
                initialLabel={filterYearLabel}
              />
            </Column>
          )}

          {isFilter && (
            <Column
              mr={0}
              mb={{ _: 3, desktopS: 0 }}
              width={{ _: "full", desktopS: "unset" }}
            >
              <Filter
                tags={tagList}
                filteredTags={filteredTagList}
                numFound={isFilterFetching ? 0 : numFoundFilter || 0}
                availableYears={availableYears}
                onSubmit={onSubmitFilter}
              />
            </Column>
          )}
        </Hidden>
      </Grid>
    </Flex>
  );
};

export default DocumentCategoriesHeader;
