import React, { useState } from "react";
import Column from "../components/UI/Column/Column";
import Container from "../components/UI/Container/Container";
import Text from "../components/UI/Text/Text";
import Row from "../components/UI/Row/Row";
import Icon from "../components/UI/Icon/Icon";
import AppConfig from "../logic/configs/AppConfig";
import { IClosedBackgroundWParagraph } from "../models/widgets/IClosedBackgroundWParagraph";
import BackgroundImage from "../components/UI/BackgroundImage/BackgroundImage";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import { AnimatePresence } from "framer-motion";
import { GradientLinear } from "../components/Gradient/Gradient";

const ClosedBackgroundWParagraph = ({
  title,
  title2,
  longText1,
  longText2,
  background,
  cta,
}: IClosedBackgroundWParagraph) => {
  // Hooks
  const [showText, setShowText] = useState<boolean>(false);

  return (
    <Container
      position="relative"
      maxWidth="screen"
      width="full"
      overflow="hidden"
      minHeight={{ _: 350, tablet: "unset" }}
      m="auto"
    >
      {background && (
        <>
          <BackgroundImage src={background} alt="bgImage" objectFit="cover" />
          <Container zIndex={1}>
            <GradientLinear />
          </Container>
        </>
      )}
      <Column
        width="full"
        maxWidth="screen3"
        minHeight={{ _: 350, tablet: 438 }}
        margin="auto"
        py={{ _: 5, tablet: "120px" }}
        px={{ _: 2, desktopS: "0px" }}
        position="relative"
        justifyContent={{ _: "unset", tablet: "center" }}
      >
        <Text
          fontWeight="600"
          fontSize={{ _: "h2", tablet: "48px" }}
          mb="16px"
          color={background ? "white" : "text"}
        >
          {AppConfig.html(title)}
        </Text>
        <Text
          fontFamily="Avenir Light"
          fontWeight="light"
          fontSize={{ _: "regular", tablet: "21px" }}
          mb="24px"
          color={background ? "white" : "text"}
        >
          {AppConfig.html(title2)}
        </Text>

        <AnimatePresence>
          {showText && (
            <Container
              variants={AppConfig.setAnimationVariant("EXPAND_VARIANT")}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Container
                variants={AppConfig.setAnimationVariant(
                  "SLIDE_DOWN_50_VARIANT"
                )}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {longText1 && (
                  <Text
                    fontWeight="light"
                    fontSize={{ _: "14px", tablet: "h5" }}
                    mb="24px"
                    color={background ? "white" : "text"}
                  >
                    {AppConfig.html(longText1)}
                  </Text>
                )}

                {longText2 && (
                  <Text
                    fontWeight="light"
                    fontSize={{ _: "small", tablet: "14px" }}
                    mb="24px"
                    color={background ? "white" : "text"}
                  >
                    {AppConfig.html(longText2)}
                  </Text>
                )}

                {cta && !longText2 && !longText1 && (
                  <Row>
                    <LinkAngle
                      label={cta.label}
                      url={cta.url}
                      fontSize={{ _: "regular", tablet: "h3" }}
                    />
                  </Row>
                )}
              </Container>
            </Container>
          )}
        </AnimatePresence>

        {(longText1 || longText2) && (
          <Row
            style={{ cursor: "pointer", width: "fit-content" }}
            onClick={() => setShowText((prev) => !prev)}
          >
            <Icon
              type="close"
              size={24}
              color={background ? "white" : "text"}
            />
            <Text
              color={background ? "white" : "text"}
              ml="9px"
              fontSize={{ _: "regular", tablet: "h3" }}
            >
              {showText ? "Hide Examples" : "Show Examples"}
            </Text>
          </Row>
        )}
      </Column>
    </Container>
  );
};

export default ClosedBackgroundWParagraph;
