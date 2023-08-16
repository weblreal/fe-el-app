// Modules
import React, { useState } from "react";
import Link from "next/link";
import AppConfig from "../logic/configs/AppConfig";
import { IClosedBackgroundWParagraph } from "../models/widgets/IClosedBackgroundWParagraph";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
// Components
import Column from "../components/UI/Column/Column";
import Container from "../components/UI/Container/Container";
import Text from "../components/UI/Text/Text";
import Row from "../components/UI/Row/Row";
import Icon from "../components/UI/Icon/Icon";
import BackgroundImage from "../components/UI/BackgroundImage/BackgroundImage";
import MotionContainer from "../components/UI/MotionContainer/MotionContainer";
import Hidden from "../components/UI/Hidden/Hidden";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";

const TitleTwoColumnAccordion = ({
  title,
  title2,
  longText1,
  longText2,
  background,
  cta,
}: IClosedBackgroundWParagraph) => {
  // Hooks
  const [showText, setShowText] = useState<boolean>(false);

  const paragraphText = (col2: boolean) => {
    return (
      <>
        <Text
          fontWeight="light"
          fontSize={{ _: "16px", tablet: "18px" }}
          mb="24px"
          color={{ _: "rgba(255, 255, 255, 0.7)", tablet: getTextColor() }}
          fontFamily="Avenir Light"
          lineHeight="normal"
        >
          {AppConfig.html(col2 ? longText2 : longText1)}
        </Text>

        <Hidden till="tablet">
          {cta && col2 && (
            <Link prefetch={false} href={cta.url}>
              <Row>
                <Text
                  color={getTextColor()}
                  backgroundColor="transparent"
                  mr="9px"
                  fontSize={{ _: "16px", tablet: "16px" }}
                >
                  {cta.label}
                </Text>
                <Icon type="angle-right" size={24} color={getTextColor()} />
              </Row>
            </Link>
          )}
        </Hidden>
      </>
    );
  };

  const getBackgroundColor = () => {
    if (background != null && background != "") {
      return "rgba(0, 23, 9, 0.65)";
    }
    return "";
  };

  const getTextColor = () => {
    if (background != null && background != "") {
      return "white";
    }
    return "black";
  };

  return (
    <AnimateSharedLayout>
      <MotionContainer layout>
        <Container position="relative">
          {background && (
            <BackgroundImage
              src={background}
              alt={title ? title : "background image"}
            />
          )}
          <Container position="relative" backgroundColor={getBackgroundColor()}>
            <Column
              width="max"
              maxWidth="screen3"
              margin="auto"
              py={{ _: "40px", tablet: "80px" }}
              px={{ _: "16px", desktopS: "0px" }}
              position="relative"
            >
              <Text
                fontWeight="600"
                fontSize={{ _: "32px", tablet: "48px" }}
                mb="40px"
                color={getTextColor()}
              >
                {title}
              </Text>
              <Text
                fontWeight="light"
                fontSize={{ _: "16px", tablet: "21px" }}
                mb="40px"
                color={getTextColor()}
                fontFamily="Avenir Light"
              >
                {title2}
              </Text>
              <AnimatePresence>
                {showText && longText2 && (
                  <MotionContainer
                    layout
                    initial={{ y: "-50px", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-50px", opacity: 0 }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <Hidden till="tablet">
                      <Row>
                        <Container width={{ _: "524px" }} mr="40px">
                          {paragraphText(false)}
                        </Container>
                        <Container width={{ _: "524px" }}>
                          {paragraphText(true)}
                        </Container>
                      </Row>
                    </Hidden>
                    <Hidden from="tablet">
                      <Container mb="40px">
                        {paragraphText(false)}
                        {paragraphText(true)}
                      </Container>
                    </Hidden>
                  </MotionContainer>
                )}
              </AnimatePresence>
              {longText2 && (
                <Row
                  style={{ cursor: "pointer", width: "fit-content" }}
                  onClick={() => setShowText((prev) => !prev)}
                >
                  <Icon type="close" size={24} color={getTextColor()} />
                  <Text
                    color={getTextColor()}
                    ml="9px"
                    fontSize={{ _: "16px", tablet: "24px" }}
                  >
                    {showText ? "Hide Examples" : "Show Examples"}
                  </Text>
                </Row>
              )}
              {/*If there is CTA but no Long Text 2 && long text 1*/}
              {cta && !longText2 && !longText1 && (
                <>
                  <LinkAngle
                    label={cta.label}
                    url={cta.url}
                    fontSize={{ _: "16px", tablet: "24px" }}
                  />
                </>
              )}
            </Column>
          </Container>
        </Container>
      </MotionContainer>
    </AnimateSharedLayout>
  );
};

export default TitleTwoColumnAccordion;
