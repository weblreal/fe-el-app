// Modules
import { useState } from "react";
import { ICardCareers } from "./CardCareers.interface";
import { AnimatePresence } from "framer-motion";
import useResponsive from "../../hooks/useResponsive";
import styled from "styled-components";
import AppConfig from "../../logic/configs/AppConfig";
// Components
import BackgroundImage from "../UI/BackgroundImage/BackgroundImage";
import Grid, { GridRow } from "../UI/Grid/Grid";
import Flex from "../UI/Flex/Flex";
import Icon from "../UI/Icon/Icon";
import Text from "../UI/Text/Text";
import Header from "../UI/Header/Header";
import Row from "../UI/Row/Row";
import Gradient from "../Gradient/Gradient";

const CardCareers = ({ backgroundImage, title, paragraph }: ICardCareers) => {
  // Hooks
  const [showText, setShowText] = useState<boolean>(false);
  const { is } = useResponsive();

  return (
    <Flex
      position="relative"
      width={{ _: 340, tablet: 416, desktopL: "full" }}
      maxWidth={{
        _: 340,
        tablet: 416,
        desktopL: "full",
      }}
      minHeight={{
        _: 600,
        tablet: 512,
        desktopXL: 760,
      }}
      onClick={() => setShowText((prev) => !prev)}
      onHoverStart={() => {
        if (!is("tablet", "<")) {
          setShowText(true);
        }
      }}
      onHoverEnd={() => {
        if (!is("tablet", "<")) {
          setShowText(false);
        }
      }}
    >
      <Gradient zIndex={1} />
      {backgroundImage && (
        <BackgroundImage
          alt="bg"
          src={backgroundImage}
          objectPosition="center"
        />
      )}

      <BlurContainer
        gridGap={1}
        marginTop="auto"
        width="100%"
        p={{ _: 2, desktopS: 4 }}
        border="0px solid transparent"
      >
        <div className="blur"></div>

        {/* Title */}
        {title && (
          <GridRow gridRow={2} zIndex={1}>
            <Header
              element="h1"
              fontFamily="Avenir Bold"
              fontWeight="bolder"
              fontSize={{ _: "32px", tablet: "40px" }}
              color="white"
              backgroundColor="transparent"
              paddingBottom="16px"
            >
              {AppConfig.html(title)}
            </Header>
          </GridRow>
        )}

        {/* Paragraphs */}
        <AnimatePresence>
          {showText && paragraph && (
            <GridRow
              gridRow={3}
              zIndex={1}
              variants={AppConfig.setAnimationVariant(
                "EXPAND_VARIANT_NO_DELAY"
              )}
              initial="initial"
              animate="animate"
              exit="exit"
              overflow="hidden"
            >
              <Text
                fontSize={{ _: "20px", tablet: "18px" }}
                color="white"
                backgroundColor="transparent"
                paddingBottom="16px"
              >
                {AppConfig.html(paragraph)}
              </Text>
            </GridRow>
          )}
        </AnimatePresence>

        {/* show more */}
        <GridRow
          gridRow={4}
          zIndex={1}
          opacity={!showText ? 0 : 1}
          animate={{ opacity: !showText ? 1 : 0 }}
        >
          <Row
            style={{ cursor: "pointer", width: "fit-content" }}
            alignItems="center"
          >
            <Icon type="plus" size={24} color="#fff" />
            <Text
              color="#fff"
              ml="9px"
              fontSize={{ _: "16px", tablet: "24px" }}
            ></Text>
          </Row>
        </GridRow>
      </BlurContainer>
    </Flex>
  );
};

const BlurContainer = styled(Grid)`
  user-select: none;
  position: relative;

  .blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      inset: 0;
    }
    @media only screen and (max-width: 834px) {
      &:after {
        background-color: rgba(18, 18, 18, 0.22);
        backdrop-filter: blur(29px) opacity(1);
        border-radius: inherit;
      }
    }
  }
`;

export default CardCareers;
