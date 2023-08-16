// Modules
import AppConfig from "../logic/configs/AppConfig";
import styled from "styled-components";
import {
  ISolutionBrands,
  ISolutionsOpticians,
} from "../models/widgets/ISolutionsOpticians";
// Components
import Container from "../components/UI/Container/Container";
import Text from "../components/UI/Text/Text";
import Picture from "../components/UI/Picture/Picture";
import Flex from "../components/UI/Flex/Flex";
import Grid, { GridColumn } from "../components/UI/Grid/Grid";
import Header from "../components/UI/Header/Header";
import BrandWithModal from "../components/BrandWithModal/BrandWithModal";

const SolutionsOpticians = ({
  title,
  longText,
  bannerImage,
  logo1,
  logo2,
  logo1Link,
  logo2Link,
  brands,
}: ISolutionsOpticians) => {
  // Hooks

  return (
    <Grid
      gridTemplateColumns={{ _: "1fr", tablet: "1fr 1fr" }}
      gridTemplateRows={{ _: "auto 1fr", tablet: "unset" }}
      gridGap={{ _: "0", desktopS: "0" }}
      m="auto"
      width="full"
      height="full"
      maxWidth={{ _: "100vw", mobile: "screen2", desktopS: "screen" }}
      minHeight={{ tablet: "555px" }}
      overflow="hidden"
      backgroundColor="background"
    >
      {/* Picture Wrapper */}
      <GridColumn
        maxWidth={{
          _: "100%",
          desktopS: "full",
          desktopL: "full",
        }}
      >
        {bannerImage && (
          <Picture
            src={bannerImage}
            alt={title || bannerImage}
            objectFit="contain"
          />
        )}
      </GridColumn>

      {/* Text Content */}
      <GridColumn>
        <Flex
          flexDirection="column"
          justifyContent={{ tablet: "center" }}
          backgroundColor="background"
          py={{ _: 2 }}
          pt={{ _: 5 }}
          px={{ _: 2, desktopS: 0 }}
          pl={{ _: 2, tablet: 4, desktopS: 0 }}
          pr={{ tablet: 2, desktopS: 3 }}
          ml={{ _: 0, desktopS: 10, desktopL: "128px" }}
          overflow="hidden"
          width="100%"
          maxWidth={{ _: "100%", desktopS: "560px", desktopXL: "616px" }}
        >
          <Header
            fontSize={{ _: "24px", tablet: "40px" }}
            fontFamily="Avenir Medium"
            fontWeight="500"
            mb={2}
            color="text"
          >
            {AppConfig.html(title)}
          </Header>

          <Text
            fontFamily="Avenir Light"
            fontWeight="light"
            fontSize={{ _: "16px", tablet: "24px" }}
            pb={{ _: 0, tablet: logo1 || logo2 ? 2 : 0 }}
          >
            {AppConfig.html(longText)}
          </Text>

          {/* Brands */}
          {brands && (
            <Grid
              gridGap={{ _: 0, desktopS: "15px" }}
              gridTemplateColumns={{
                _: `repeat(${brands.length}, 50%)`,
                desktopS: `repeat(${brands.length}, 200px)`,
              }}
              width="full"
              maxWidth={{ _: "358px", desktopS: "full" }}
            >
              {brands?.map((brand: ISolutionBrands, key: number) => (
                <BrandWithModal {...brand} key={key} />
              ))}
            </Grid>
          )}
        </Flex>
      </GridColumn>
    </Grid>
  );
};

const PictureWrapper = styled(Container)`
  display: flex;
  position: relative;
`;

export default SolutionsOpticians;
