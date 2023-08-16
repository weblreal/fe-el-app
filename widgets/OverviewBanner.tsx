// Modules
import { IBanner } from "../models/components/IBanner";
import AppConfig from "../logic/configs/AppConfig";
import useResponsive from "../hooks/useResponsive";
import styled from "styled-components";
// Components
import Container from "../components/UI/Container/Container";
import Text from "../components/UI/Text/Text";
import Picture from "../components/UI/Picture/Picture";
import Flex from "../components/UI/Flex/Flex";
import Grid, { GridColumn } from "../components/UI/Grid/Grid";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";

const OverviewBanner = ({
  longText,
  title,
  picture1,
  picture2,
  picture1M,
  picture2M,
  cta,
}: IBanner) => {
  // Hooks
  const { is } = useResponsive();

  return (
    <Grid
      gridTemplateColumns={{ _: "1fr", desktopS: "1fr 1fr" }}
      gridGap={{ _: "0", desktopS: "150px" }}
      m="auto"
      pr={{ tablet: "60px" }}
      pb={{ _: 5, desktopS: 0 }}
      py={{ desktopS: "99px", desktopL: "132px" }}
      maxWidth={{ _: "100vw", mobile: "screen" }}
      width="full"
      overflow="hidden"
      backgroundColor="background"
    >
      {/* Picture Wrapper */}
      <GridColumn
        gridGap={{ _: "9.8px", tablet: "32px" }}
        gridTemplateColumns="1fr 1fr"
        justifyContent="end"
        pt={{ _: 5, desktopS: 0 }}
        pb={{ _: 3, desktopS: 0 }}
        mx={{ _: "18px", desktopS: 0 }}
        maxWidth={{
          _: "341px",
          tablet: "509.8px",
          desktopS: "632px",
          desktopL: "824px",
          desktopXL: "930px", // Added for 1920px
        }}
        width="fit-content"
      >
        {picture1 && (
          <PictureWrapper
            width={{
              _: "165.6px",
              desktopS: "400px",
              desktopL: "528px",
              desktopXL: "600px", // Added for 1920px
            }}
            height={{
              _: "165.6px",
              desktopS: "400px",
              desktopL: "528px",
              desktopXL: "600px", // Added for 1920px
            }}
          >
            <Picture
              src={is("desktopS", "<") ? picture1M || picture1 : picture1}
              alt={title || "overview"}
              width={is("desktopL", ">") ? 600 : 528}
              height={is("desktopL", ">") ? 600 : 528}
            />
          </PictureWrapper>
        )}
        {picture2 && (
          <PictureWrapper
            width={{
              _: "165.6px",
              desktopS: "400px",
              desktopL: "528px",
              desktopXL: "600px", // Added for 1920px
            }}
            height={{
              _: "165.6px",
              desktopS: "400px",
              desktopL: "528px",
              desktopXL: "600px", // Added for 1920px
            }}
          >
            <Picture
              src={is("desktopS", "<") ? picture2M || picture2 : picture2}
              alt={title || "overview"}
              width={is("desktopL", ">") ? 600 : 528}
              height={is("desktopL", ">") ? 600 : 528}
            />
          </PictureWrapper>
        )}
      </GridColumn>

      {/* Text Content */}
      <GridColumn>
        <Flex
          flexDirection="column"
          justifyContent={{ tablet: "center" }}
          backgroundColor="background"
          p={{ _: 2, desktopS: 0 }}
          width="100%"
          maxWidth={{ _: "100%", desktopS: "420px", desktopL: "720px" }}
        >
          <Text
            fontSize={{ _: "h2", tablet: "h1" }}
            fontFamily={{ _: "Avenir Medium", desktopS: "Avenir Bold" }}
            fontWeight={{ _: 500, desktopS: "bolder" }}
            mb={2}
          >
            {AppConfig.html(title)}
          </Text>
          <Text
            fontSize={{ _: "h5", tablet: "h1" }}
            fontFamily="Avenir Light"
            fontWeight="light"
            lineHeight={{ _: "1.56", desktopS: "normal" }}
            letterSpacing={{ _: "0.18px", desktopS: "normal" }}
          >
            {AppConfig.html(longText)}
          </Text>

          {/* CTA */}
          {cta && (
            <Container mt={{ _: 2, tablet: 28 }}>
              <LinkAngle
                label={cta?.label}
                url={cta?.url}
                fontFamily={{ _: "Avenir Light", tablet: "Avenir Regular" }}
                fontSize={{ _: "regular", tablet: "h3" }}
                fontWeight={{ _: "light", tablet: "normal" }}
                gap="4px"
                textVerticalAlign="middle"
              />
            </Container>
          )}
        </Flex>
      </GridColumn>
    </Grid>
  );
};

const PictureWrapper = styled(Container)`
  display: flex;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`;

export default OverviewBanner;
