import { useEffect, useState } from "react";
import { IBrandsGrid, IBrandsGridFilter, IBrandsItem } from "../models/widgets/IBrandsGrid";
import styled from "styled-components";
import useTranslateTags from "../hooks/useTranslateTags";
// Components
import BrandsGridItem from "../components/BrandsGridItem/BrandsGridItem";
import Flex from "../components/UI/Flex/Flex";
import Text from "../components/UI/Text/Text";
import Grid from "../components/UI/Grid/Grid";
import Row from "../components/UI/Row/Row";
import Hidden from "../components/UI/Hidden/Hidden";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import Container from "../components/UI/Container/Container";

const BrandsGrid = ({ title, title2, brands, filters }: IBrandsGrid) => {
  // Variables
  const hiddenAllKeyword = "dontdisplay";

  // Hooks
  const [showAll, setShowAll] = useState<boolean>(true);
  const handleViewMore = () => {
    setShowAll((prev) => !prev);
  };
  const [filteredBrands, setFilteredBrands] = useState<any[]>([]);
  const [active, setActive] = useState("All");
  const [numItemsPerTab, setNumItemsPerTab] = useState<number[]>([]);

  // Handlers
  const handleTabClick = (value: any, event: any) => {
    // Scroll To View
    event.target.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    if (value !== "All") {
      setFilteredBrands(
        brands.filter((brand: IBrandsItem) =>
          brand.keyword?.split(",")?.includes(value)
        )
      );
      setActive(value);
    }
    if (value === "All") {
      setFilteredBrands(
        brands?.filter((brand: IBrandsItem) => {
          const keyword = brand.keyword?.split(",");
          return !keyword?.includes(hiddenAllKeyword);
        })
      );
      setActive(value);
    }
  };

  // Effects
  useEffect(() => {
    setFilteredBrands(
      brands?.filter((brand: IBrandsItem) => {
        const keyword = brand.keyword?.split(",");
        return !keyword?.includes(hiddenAllKeyword);
      })
    );
  }, [brands]);

  useEffect(() => {
    // setShowAll(false);
  }, [active])

  useEffect(() => {
    const filterValues = filters?.map((filter: any) => filter.value);
    if (filterValues) {
      const tempNumPerTab: number[] = filterValues.map((value: string) =>
        value === "All"
          ? brands.filter(
              (brand: IBrandsItem) =>
                !brand.keyword?.split(",")?.includes(hiddenAllKeyword)
            ).length
          : brands.filter((brand: IBrandsItem) =>
              brand.keyword?.split(",")?.includes(value)
            ).length
      );
      setNumItemsPerTab(tempNumPerTab);
    }
  }, [filters]);

  const { translateTag } = useTranslateTags();

  return (
    <Flex
      margin="auto"
      width="full"
      maxWidth="screen"
      position="relative"
      alignItems="center"
      color="#000000"
      flexDirection="column"
      backgroundColor="#000"
      overflow="hidden"
    >
      {/* Header */}
      <Text
        px={{ _: "16px", tablet: "64px" }}
        m={{ _: "24px 0px", tablet: "56px 0px 32px" }}
        fontSize={{ _: "28px", tablet: "32px" }}
        width={{ _: "100%", tablet: "auto" }}
        color="#fff"
        fontFamily={{ _: "Avenir Medium" }}
        fontWeight={{ _: 500 }}
      >
        {title}
      </Text>

      {/* Filters */}
      {filters && (
        <>
          <Hidden till="tablet">
            <MobileTabs
              width="full"
              maxWidth="screen"
              justifyContent="start"
              px={{ _: "16px", tablet: "64px" }}
              mb={{ _: 3, tablet: 5 }}
              overflowX="auto"
            >
              {filters.map((tab: IBrandsGridFilter, index: number) => (
                <Tab
                  key={index}
                  onClick={(event) => handleTabClick(tab.value, event)}
                >
                  {translateTag(tab.translations)} ({numItemsPerTab?.[index]})
                  {active === tab.value && (
                    <ActiveLine layoutId="tab-bg-id-m" />
                  )}
                </Tab>
              ))}
            </MobileTabs>
          </Hidden>

          <Hidden from="tablet">
            <MobileTabs
              width="full"
              maxWidth="screen"
              justifyContent="start"
              px={{ _: "16px", tablet: "64px" }}
              overflowX="auto"
              mb={{ _: 3, tablet: 5 }}
            >
              {filters.map((tab: any, index: number) => (
                <Tab
                  key={index}
                  onClick={(event) => handleTabClick(tab.value, event)}
                >
                  {tab.name} ({numItemsPerTab?.[index]})
                  {active === tab.value && (
                    <ActiveLine layoutId="tab-bg-id-m" />
                  )}
                </Tab>
              ))}
            </MobileTabs>
          </Hidden>
        </>
      )}

      {/* Brand List */}
      <GridContainer
        width="full"
        maxWidth="screen"
        showAll={showAll}
        px={{ _: "16px", tablet: "64px" }}
        mb={brands.length > 2 ? 7 : 7}
      >
        {filteredBrands &&
          filteredBrands.map((brand: IBrandsItem, key: number) => (
            <BrandsGridItem
              key={key}
              title={brand.title}
              title2={brand.title2}
              longText1={brand.longText1}
              logoImage={brand.logoImage}
              cta={brand.cta}
            />
          ))}
      </GridContainer>

      {/* Show more */}
      {/* <Hidden till="tablet">
        <Row
          justifyContent="center"
          my={{ _: "25px", tablet: "41px" }}
          onClick={handleViewMore}
        >
          {filteredBrands.length > 16 && (
            <LinkAngle
              label={showAll ? "Show less" : `${title2}`}
              url="#"
              color="white"
              gap={1}
              iconType={showAll ? "angle-up" : "angle-down"}
            />
          )}
        </Row>
      </Hidden> */}

      {/* Show more */}
      {/* <Hidden from="tablet">
        <Row
          justifyContent="center"
          my={{ _: "25px", tablet: "41px" }}
          onClick={handleViewMore}
        >
          {filteredBrands.length > 8 && (
            <LinkAngle
              label={showAll ? "Show less" : `${title2}`}
              url="#"
              color="white"
              gap={1}
              iconType={showAll ? "angle-up" : "angle-down"}
            />
          )}
        </Row>
      </Hidden> */}
    </Flex>
  );
};

const ActiveLine = styled(Container)`
  height: 3px;
  width: 100%;
  background-color: white;

  position: absolute;
  bottom: 0;
  left: 0;
`;

const MobileTabs = styled(Flex)`
  ::-webkit-scrollbar {
    appearance: none;
  }
`;

const GridContainer = styled(Grid)<{ showAll?: boolean }>`
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 180px;
  grid-gap: 4px;

  div:nth-child(n + 17) {
    display: ${(props) => (props.showAll ? "flex" : "none")};
  }

  @media (max-width: 834px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 96px;
    grid-gap: 8px;
    div:nth-child(n + 9) {
      display: ${(props) => (props.showAll ? "flex" : "none")};
    }
  }
`;

const Tab = styled.button<{ activeTab?: boolean }>`
  background-color: black;
  font-family: var(--AvenirBold);
  font-size: 20px;
  font-weight: 900;
  padding: 8px 8px 16px;
  position: relative;
  cursor: pointer;
  color: #fff;
  white-space: nowrap;

  &:not(:last-of-type) {
    margin-right: 20px;
  }
`;

export default BrandsGrid;
