// Modules
import React, { useEffect, useRef, useState } from "react";
import { IClosedBackgroundImage } from "../models/widgets/IClosedBackgroundImage";
import { AnimatePresence } from "framer-motion";
import AppConfig from "../logic/configs/AppConfig";
// Components
import Text from "../components/UI/Text/Text";
import Icon from "../components/UI/Icon/Icon";
import Container from "../components/UI/Container/Container";
import useResponsiveBackground from "../hooks/useResponsiveBackground";
import BackgroundImage from "../components/UI/BackgroundImage/BackgroundImage";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import Flex from "../components/UI/Flex/Flex";
import TableColumn from "../components/UI/TableColumn/TableColumn";
import { GradientLinear } from "../components/Gradient/Gradient";

const ClosedBackgroundImage = ({
  title,
  paragraphs,
  cta,
  backgroundImage,
  portalId,
  subTitle,
  hideLabel,
  showLabel,
  blackColor,
  darkOverlay,
}: IClosedBackgroundImage) => {
  // Hooks
  const [showText, setShowText] = useState<boolean>(false);
  const [bg] = useResponsiveBackground(backgroundImage);
  const linkRef = useRef<HTMLDivElement>(null);

  // Effects
  useEffect(() => {
    const el = document.querySelector(`#${portalId}`);

    if (linkRef.current && el && showText) {
      const element = linkRef.current;
      el.appendChild(element);
    }
  }, [linkRef, showText]);

  const getTextColor = (): "black" | "text" | "white" => {
    if (blackColor) {
      return "text";
    }

    if (bg) {
      return "white";
    }

    return "text";
  };

  return (
    <Container
      position="relative"
      py={{ _: 5, tablet: "80px" }}
      px={2}
      maxWidth="screen"
      m="auto"
      width="full"
      backgroundColor={!bg ? "background" : "transparent"}
    >
      <Container
        maxWidth={{ _: "screen3", desktopXL: "screen2" }}
        width="full"
        m="auto"
      >
        {/* Title */}
        {title && (
          <Text
            fontWeight="500"
            fontFamily="Avenir Medium"
            fontSize={{ _: "h2", tablet: "48px" }}
            color={getTextColor()}
            pb={{ _: 2, tablet: 5 }}
          >
            {AppConfig.html(title)}
          </Text>
        )}

        {/* SubTitle */}
        {subTitle && (
          <Text
            fontSize={{ _: "regular", tablet: "21px" }}
            fontFamily="Avenir Light"
            fontWeight="light"
            mb={{ _: 2, tablet: paragraphs ? 5 : 0 }}
          >
            <TableColumn color={getTextColor()} withAccordion={!!paragraphs}>
              {AppConfig.html(subTitle)}
            </TableColumn>
          </Text>
        )}

        {/* CTA */}
        {cta && !paragraphs && (
          <LinkAngle
            label={cta.label}
            url={cta.url}
            fontSize="24px"
            gap={0}
            color={getTextColor() === "text" ? undefined : getTextColor()}
          />
        )}

        {/* BG */}
        {bg && (
          <BackgroundImage
            src={bg}
            alt={title || "Closed Background Image"}
            zIndex={-1}
          />
        )}

        {/* Overlay */}
        {darkOverlay && <GradientLinear zIndex={-1} />}

        <Container>
          {/* Table */}
          <AnimatePresence>
            {showText && (
              <Container
                initial="initial"
                animate="animate"
                exit="exit"
                variants={AppConfig.setAnimationVariant("EXPAND_VARIANT")}
              >
                <Container
                  variants={AppConfig.setAnimationVariant(
                    "SLIDE_DOWN_50_VARIANT"
                  )}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <TableColumn
                    fontFamily="Avenir Light"
                    fontWeight="light"
                    fontSize="16px"
                    color={
                      getTextColor() === "black"
                        ? "rgba(0,0,0,0.8)"
                        : getTextColor() === "white"
                        ? "rgba(255,255,255,0.8)"
                        : getTextColor()
                    }
                    cta={!!cta}
                  >
                    {AppConfig.html(paragraphs)}
                  </TableColumn>
                  <Container height={{ _: "24px", tablet: "40px" }}></Container>
                </Container>
              </Container>
            )}
          </AnimatePresence>

          {/* Toggle */}
          {paragraphs && (
            <Flex
              alignItems="center"
              pointer
              width="fit-content"
              onClick={() => setShowText((prev) => !prev)}
            >
              <Icon
                type={showText ? "close" : "plus"}
                size={24}
                color={getTextColor() === "text" ? undefined : getTextColor()}
              />
              <Text
                color={getTextColor()}
                ml={1}
                fontSize={{ _: "regular", tablet: "h3" }}
              >
                {showText ? hideLabel : showLabel} {/* TODO */}
              </Text>
            </Flex>
          )}
        </Container>

        {/* CTA */}
        <Container ref={linkRef} pt="1em" display={showText ? "block" : "none"}>
          {cta && (
            <LinkAngle
              label={cta.label}
              url={cta.url}
              fontSize="regular"
              gap={0}
              color={getTextColor() === "text" ? undefined : getTextColor()}
            />
          )}
        </Container>
      </Container>
    </Container>
  );
};

export default ClosedBackgroundImage;
