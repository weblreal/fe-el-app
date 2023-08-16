// Modules
import useTranslateTags from "../../hooks/useTranslateTags";

// Components
import Filter from "../Filter";
import Container from "../UI/Container/Container";
import Dropdown from "../UI/Dropdown/Dropdown";
import Flex from "../UI/Flex/Flex";
import Grid from "../UI/Grid/Grid";
import Hidden from "../UI/Hidden/Hidden";
import Text from "../UI/Text/Text";

type INewsWallToolbarProps = {
  numFound: number;
  numFoundFilter: number;
  tags: string[];
  sortingHandler?: (event: any) => void;
  filteredTags: any[];
  isLoading?: boolean;
  isFilterFetching?: boolean;
  sortOptions?: { label: string; value: string }[];
  resultsLabel?: string;
  availableYears?: string[];
  onSubmitFilter?: (event?: any) => void;
};

const NewsWallToolbar: React.FC<INewsWallToolbarProps> = ({
  numFound,
  numFoundFilter,
  tags,
  sortingHandler,
  filteredTags,
  isLoading,
  isFilterFetching,
  sortOptions,
  resultsLabel,
  availableYears,
  onSubmitFilter,
}) => {
  // Hooks
  const { tagList: filteredTagList } = useTranslateTags(filteredTags || []);
  
  // Functions
  const dropdownHandler = (event: any) => {
    if (sortingHandler) sortingHandler(event);
  };

  // Effects

  return (
    <>
      <Hidden from="desktopS">
        <Container mb={2} zIndex={1} position="relative">
          <Grid
            gridGap={3}
            gridTemplateColumns={`repeat(${2}, 1fr)`}
            width={{ _: "full", desktopS: "fit-content" }}
            height="full"
            alignItems="center"
          >
            {!!sortOptions?.length && (
              <Dropdown
                options={sortOptions || []}
                onChange={dropdownHandler}
              />
            )}

            <Filter
              tags={tags}
              filteredTags={filteredTagList}
              numFound={isFilterFetching ? 0 : numFoundFilter}
              availableYears={availableYears}
              onSubmit={onSubmitFilter}
            />
          </Grid>

          <Text
            fontFamily="Avenir Medium"
            fontWeight="500"
            fontSize="h5"
            mt={2}
          >
            {!isLoading && `${numFound || 0} ${resultsLabel || ""}`}
          </Text>
        </Container>
      </Hidden>

      <Hidden till="desktopS">
        <Flex
          display={{ _: "block", desktopS: "unset" }}
          mb={5}
          alignItems={{ _: "start", desktopS: "center" }}
          justifyContent="space-between"
          zIndex={1}
          position="relative"
        >
          <Text
            fontFamily="Avenir Medium"
            fontWeight="500"
            fontSize="h5"
            my={{ _: 3, desktopS: 0 }}
          >
            {!isLoading && `${numFound || 0} ${resultsLabel || ""}`}
          </Text>

          <Grid
            gridGap={3}
            gridTemplateColumns={`repeat(${2}, auto)`}
            width={{ _: "full", desktopS: "fit-content" }}
            height="full"
            alignItems="center"
          >
            {!!sortOptions?.length && (
              <Dropdown
                options={sortOptions || []}
                onChange={dropdownHandler}
              />
            )}

            <Filter
              tags={tags}
              filteredTags={filteredTagList}
              numFound={isFilterFetching ? 0 : numFoundFilter}
              availableYears={availableYears}
              onSubmit={onSubmitFilter}
            />
          </Grid>
        </Flex>
      </Hidden>
    </>
  );
};
export default NewsWallToolbar;
