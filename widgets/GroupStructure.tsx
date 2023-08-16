// Modules
import { IBanner } from "../models/components/IBanner";
import AppConfig from "../logic/configs/AppConfig";
import styled from "styled-components";
// Components
import Container from "../components/UI/Container/Container";
import Picture from "../components/UI/Picture/Picture";
import Flex from "../components/UI/Flex/Flex";
import Grid, { GridColumn } from "../components/UI/Grid/Grid";
import Header from "../components/UI/Header/Header";
import useResponsive from "../hooks/useResponsive";

const GroupStructure = ({
  title,
  title2,
  picture1,
  picture2,
  picture1M,
  picture2M,
  longText,
  longText2,
}: IBanner) => {
  const { is } = useResponsive();

  const renderSection = (
    picture: string,
    title: string | undefined,
    picture2Exists: boolean
  ) => {
    return (
      <Flex
        flexDirection="column"
        justifyContent={{ _: "flex-start", tablet: "space-between" }}
        backgroundColor="background"
        width="100%"
      >
        <HeaderWrapper>
          <Header
            fontFamily="Avenir Bold"
            fontWeight="h4"
            element="h1"
            p={{ _: "24px 16px", tablet: "0 0 16px" }}
            fontSize={{ _: "28px", tablet: "24px" }}
          >
            {title}
          </Header>
        </HeaderWrapper>
        <PictureWrapper
          width={{ _: "100%", desktopS: picture2Exists ? "428px" : "864px" }}
          height={{ _: "fit-content", desktopS: "auto" }}
          p={{ _: "0 8px", tablet: "0" }}
        >
          <Picture
            src={picture}
            alt={title || "overview"}
            width={864}
            height={414}
            objectFit="contain"
          />
        </PictureWrapper>
      </Flex>
    );
  };

  const getTemplateColumns = () => {
    if (picture2) {
      return { _: "1fr", tablet: "repeat(2, 1fr)" };
    } else {
      return { _: "1fr" };
    }
  };

  const getWidth = () => {
    if (picture2) {
      return { _: "calc(100vw-100%)", tablet: "328px", desktopS: "428px" };
    } else {
      return { _: "calc(100vw-100%)", tablet: "100%", desktopS: "100%" };
    }
  };

  return (
    <Grid
      gridTemplateColumns={getTemplateColumns()}
      gridAutoRows="1fr"
      gridGap={{ _: "0", tablet: "10px" }}
      m={{ _: "0 auto 24px", tablet: "80px auto" }}
      width="fit-content"
      height="fit-content"
    >
      {/* Picture Wrapper */}

      {picture1 && (
        <GridColumn width={getWidth()}>
          {renderSection(
            is("mobile") && picture1M ? picture1M : picture1,
            title,
            picture2 ? true : false
          )}
          {longText && is("mobile") && (
            <DetailWrapper padding="0 8px">
              {AppConfig.html(longText)}
            </DetailWrapper>
          )}
        </GridColumn>
      )}

      {picture2 && (
        <GridColumn width={getWidth()}>
          {renderSection(
            is("mobile") && picture2M ? picture2M : picture2,
            title2,
            true
          )}
          {longText2 && is("mobile") && (
            <DetailWrapper padding="0 8px">
              {AppConfig.html(longText2)}
            </DetailWrapper>
          )}
        </GridColumn>
      )}

      {picture1 && longText && !is("mobile") && (
        <GridColumn width={getWidth()}>
          <DetailWrapper>{AppConfig.html(longText)}</DetailWrapper>
        </GridColumn>
      )}

      {picture2 && longText2 && !is("mobile") && (
        <GridColumn width={getWidth()}>
          <DetailWrapper>{AppConfig.html(longText2)}</DetailWrapper>
        </GridColumn>
      )}
    </Grid>
  );
};

const PictureWrapper = styled(Container)`
  display: flex;
  align-self: flex-end;
  img {
    width: 100%;
    height: 100%;
  }
`;

const HeaderWrapper = styled(Container)`
  display: flex;
  align-self: flex-start;
`;

const DetailWrapper = styled(Container)`
  display: flex;
  align-self: flex-start;
  font-size: 16px;
  font-style: italic;
  line-height: 16px;
  padding-top: 24px;
`;

export default GroupStructure;
