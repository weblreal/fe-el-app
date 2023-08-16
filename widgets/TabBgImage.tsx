import AppConfig from "../logic/configs/AppConfig";
import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { ITabBgImage, ITabData } from "../models/widgets/ITabBgImage";
import { AnimatePresence } from "framer-motion";

// Components
import Container from "../components/UI/Container/Container";
import Flex from "../components/UI/Flex/Flex";
import Picture from "../components/UI/Picture/Picture";
import styled from "styled-components";
import Text from "../components/UI/Text/Text";
import Grid, { GridColumn } from "../components/UI/Grid/Grid";
import Hidden from "../components/UI/Hidden/Hidden";
import MotionContainer from "../components/UI/MotionContainer/MotionContainer";

const { html } = AppConfig;

const Details = ({ text }: { text: string }) => (
  <Text
    color="#ffffff"
    fontFamily="Avenir Light"
    fontSize={{ _: "16px", tablet: "24px" }}
    fontWeight="light"
    maxWidth={{ _: "100%", desktopL: "624px" }}
    pt={"20px"}
  >
    {html(text)}
  </Text>
);

const TabBgImage = ({ tabDetails, bgImage }: ITabBgImage) => {
  const [activeTab, setActiveTab] = useState<String>(tabDetails?.[0]?.tabName);
  const [details, setDetails] = useState<any>({
    leftCol: tabDetails?.[0]?.textDetails1,
    rightCol: tabDetails?.[0]?.textDetails2,
  });

  const ghostDetails = tabDetails?.map((tab: any) => ({
    textDetails1: tab?.textDetails1,
    textDetails2: tab?.textDetails2,
  }));

  useEffect(() => {
    if (activeTab === "") {
      const defaultValue = tabDetails?.filter(
        (tab: any) => tab?.tabName === "Electricity"
      );
      const { tabName, textDetails1, textDetails2 } = defaultValue[0] || "";
      const description = {
        leftCol: textDetails1,
        rightCol: textDetails2,
      };
      setActiveTab(tabName);
      setDetails(description);
    }
  }, []);

  const handleTabSelect = (data: any, event: any) => {
    // Scroll To View
    event.target.scrollIntoView({ behavior: "smooth", block: "nearest" });

    const { tabName, textDetails1, textDetails2 } = data || "";
    const description = {
      leftCol: textDetails1,
      rightCol: textDetails2,
    };
    setActiveTab(tabName);
    setDetails(description);
  };

  return (
    <Container
      minHeight={{ _: "auto", desktopL: "645px" }}
      margin="0 auto"
      maxWidth="screen"
      position="relative"
      px={{ _: "16px", tablet: "72px" }}
      py={{ _: "40px", tablet: "88px" }}
      width="full"
      overflow="hidden"
    >
      {bgImage && (
        <PictureWrapper>
          <Picture alt={"Widget image/logo"} objectFit="cover" src={bgImage} />
        </PictureWrapper>
      )}
      <Container width="full" overflowY="auto">
        <Flex
          justifyContent={{ _: "start", tablet: "space-between" }}
          margin="0 auto"
          maxWidth={{ _: "100%", tablet: "fit-content" }}
          width="full"
          pb={{ _: "29px", tablet: "68px" }}
          position="relative"
          zIndex={1}
        >
          {!isEmpty(tabDetails) &&
            tabDetails &&
            tabDetails?.map((tab: any, key: number) => (
              <Container
                pointer={tab?.tabName !== activeTab}
                key={key}
                mr={{ _: 2, tablet: 4 }}
                ml={{ _: key === 0 ? 0 : 2, tablet: 4 }}
              >
                <Text
                  color="#ffffff"
                  fontFamily="Avenir Bold"
                  fontSize={{
                    _: 24,
                    tablet: 32,
                  }}
                  fontWeight="bolder"
                  onClick={(event: any) => handleTabSelect(tab, event)}
                  pb={2}
                  style={{
                    whiteSpace: "nowrap",
                  }}
                >
                  {html(tab?.tabName)}
                </Text>
                {tab?.tabName === activeTab && (
                  <MotionContainer
                    layoutId="tab-bg-id"
                    height="4px"
                    backgroundColor="white"
                    width="full"
                  ></MotionContainer>
                )}
              </Container>
            ))}
        </Flex>
      </Container>

      <Container position="relative">
        {/* Ghost Elements */}
        <Grid
          gridTemplateColumns="repeat(3, 100%)"
          style={{ visibility: "hidden" }}
        >
          {ghostDetails?.map((det: any, key: number) => (
            <Grid
              gridTemplateColumns={{
                _: "1fr",
                tablet: "1fr 1fr",
                desktopL: "624px 624px",
              }}
              gridGap={{ _: 0, tablet: 4 }}
              key={key}
            >
              <GridColumn>
                {det?.textDetails1 !== "" && (
                  <Details text={det?.textDetails1} />
                )}
              </GridColumn>
              <GridColumn>
                {det?.textDetails2 !== "" && (
                  <Details text={det?.textDetails2} />
                )}
              </GridColumn>
            </Grid>
          ))}
        </Grid>

        {/* Details */}
        <AnimatePresence>
          {tabDetails?.map((tab: ITabData, key: number) =>
            activeTab === tab?.tabName ? (
              <MotionContainer
                key={key}
                variants={AppConfig.setAnimationVariant("OPACITY_VARIANT")}
                transition={{ duration: 0.25 }}
                initial="hide"
                animate="show"
                exit="hide"
              >
                <DetailColumn
                  left={tab?.textDetails1}
                  right={tab?.textDetails2}
                />
              </MotionContainer>
            ) : null
          )}
        </AnimatePresence>
      </Container>
    </Container>
  );
};

const DetailColumn = ({ left, right }: { left?: string; right?: string }) => {
  return (
    <>
      <Hidden till="desktopS">
        <CenterGrid
          width="full"
          m="auto"
          position="absolute"
          left="50%"
          top={0}
          justifyContent="center"
          maxWidth="screen2"
          gridGap={4}
          gridTemplateColumns={{ _: "1fr 1fr", desktopL: "624px 624px" }}
        >
          <GridColumn>
            {!!left && <Details text={left} />}
          </GridColumn>
          <GridColumn>
            {!!right && <Details text={right} />}
          </GridColumn>
        </CenterGrid>
      </Hidden>

      <Hidden from="desktopS">
        <Grid
          width="full"
          m="auto"
          position="absolute"
          left={0}
          top={0}
          justifyContent="center"
          maxWidth="fit-content"
          gridGap={{ _: 0, tablet: 4 }}
          gridTemplateColumns={{ _: "1fr", tablet: "1fr 1fr" }}
        >
          <GridColumn>
            {!!left && <Details text={left} />}
          </GridColumn>
          <GridColumn>
            {!!right && <Details text={right} />}
          </GridColumn>
        </Grid>
      </Hidden>
    </>
  );
};

const CenterGrid = styled(Grid)`
  transform: translateX(-50%);
`;

const PictureWrapper = styled(Container)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  img {
    background-size: cover;
  }
`;

export default TabBgImage;
