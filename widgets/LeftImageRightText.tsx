import AppConfig from "../logic/configs/AppConfig";
import { ILeftImageRightText } from "../models/widgets/ILeftImageRightText";
import styled from "styled-components";

// Components
import Container from "../components/UI/Container/Container";
import Flex from "../components/UI/Flex/Flex";
import Grid, { GridColumn } from "../components/UI/Grid/Grid";
import Header from "../components/UI/Header/Header";
import Picture from "../components/UI/Picture/Picture";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import LongText from "../components/UI/LongText/LongText";

const LeftImageRightText = ({
  ctaRoute,
  ctaText,
  description,
  imgAlt,
  imgUrl,
  title,
}: ILeftImageRightText) => {
  // Hooks
  const { html } = AppConfig;

  return (
    <Grid
      backgroundColor="background"
      gridTemplateColumns={{
        _: "1fr",
        desktopS: "1fr 1fr",
      }}
      maxHeight={{ tablet: "full", desktopXL: "full" }}
      maxWidth="screen"
      width="full"
      height="full"
      mx="auto"
      overflow="hidden"
    >
      <GridColumn
        maxWidth={{
          _: "100%",
          desktopS: "full",
        }}
      >
        {imgUrl && (
          <PictureWrapper width="full">
            <Picture
              alt={imgAlt || title || "Widget image/logo"}
              objectFit="cover"
              src={imgUrl}
            />
          </PictureWrapper>
        )}
      </GridColumn>
      <GridColumn>
        <Flex
          backgroundColor="background"
          flexDirection="column"
          justifyContent={{ tablet: "center" }}
          maxWidth={{
            _: "100%",
            desktopS: "415px",
            desktopXL: "520px",
          }}
          ml={{
            desktopS: 10,
            desktopL: "128px",
          }}
          overflow="hidden"
          px={{
            _: 2,
            tablet: 5,
            desktopS: 0,
          }}
          py={{
            _: 5,
            desktopS: 0,
          }}
          width="100%"
        >
          <Header
            element="h2"
            fontFamily="Avenir Bold"
            fontWeight="bolder"
            pb={2}
          >
            {html(title)}
          </Header>
          <LongText
            fontFamily="Avenir Light"
            fontSize={{
              _: "16px",
              tablet: "21px",
            }}
            pb={2}
          >
            {html(description)}
          </LongText>
          {ctaText && ctaRoute && (
            <LinkAngle
              label={ctaText}
              url={ctaRoute}
              fontSize={{
                _: "24px",
              }}
              gap={0}
            />
          )}
        </Flex>
      </GridColumn>
    </Grid>
  );
};
const PictureWrapper = styled(Container)`
  display: flex;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default LeftImageRightText;
