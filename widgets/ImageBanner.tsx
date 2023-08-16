// Modules
import styled from "styled-components";
import dark from "../themes/dark";
import AppConfig from "../logic/configs/AppConfig";
import { motion, MotionProps } from "framer-motion";
import { IText } from "../components/UI/Text/IText";
import { useState } from "react";
import { IImageBanner } from "../models/widgets/IImageBanner";
import { IButton } from "../components/UI/Button/IButton";
import { IFlex } from "../components/UI/Flex/IFlex";
import Link from "next/link";
// Components
import Grid from "../components/UI/Grid/Grid";
import Flex from "../components/UI/Flex/Flex";
import Column from "../components/UI/Column/Column";
import Hidden from "../components/UI/Hidden/Hidden";
import Text from "../components/UI/Text/Text";
import Icon from "../components/UI/Icon/Icon";
import Button from "../components/UI/Button/Button";
import Picture from "../components/UI/Picture/Picture";
import MotionContainer from "../components/UI/MotionContainer/MotionContainer";
import Row from "../components/UI/Row/Row";
import Container from "../components/UI/Container/Container";

const Banner = ({ image, title, longText, cta }: any) => {
  // Variables
  const variants = {
    initial: {
      x: "-300px",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  // Hooks
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Flex
      minHeight={{ _: "unset", tablet: "648px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      flexDirection={{ _: "column", tablet: "row" }}
      position="relative"
      // width="full"
    >
      {/* Desktop */}
      <Hidden till="tablet">
        <Flex alignItems="flex-end" size="full">
          <Picture src={image} alt={title} zIndex={0} priority />
          <Hidden till="tablet">{hovered && <Gradient />}</Hidden>

          {/* Layer 1 */}
          {!hovered && (
            <AnimatedLayer
              layoutId={title}
              position="absolute"
              left={8}
              bottom={8}
              width="full"
            >
              <Flex
                style={{ writingMode: "vertical-lr", transform: "scale(-1)" }}
              >
                {/* Dots */}
                <Column flexDirection="row" alignItems="center" mb="14px">
                  <Flex mb="5px">
                    <Icon type="essilor-dot" size={17} color="white" />
                  </Flex>
                  <Flex>
                    <Icon type="essilor-dot" size={17} color="white" />
                  </Flex>
                </Column>

                <AnimatedText
                  fontSize="h1"
                  fontFamily="Avenir Light"
                  fontWeight="light"
                  color="white"
                  bg="transparent"
                >
                  {AppConfig.html(title || "")}
                </AnimatedText>
              </Flex>
            </AnimatedLayer>
          )}

          {/* <AnimatePresence> */}
          {/* Layer 2 */}
          {hovered && (
            <Flex
              position="absolute"
              top={0}
              left={0}
              height="full"
              width="full"
              px={8}
              py={8}
              flexDirection="column"
              justifyContent="end"
              overflow="hidden"
            >
              <AnimatedLayer layoutId={title}>
                <Flex
                  style={{
                    writingMode: "vertical-lr",
                    transform: "scale(-1)",
                  }}
                >
                  {/* Dots */}
                  <Column flexDirection="row" alignItems="center" mb="14px">
                    <Flex mb="5px">
                      <Icon type="essilor-dot" size={12} color="white" />
                    </Flex>
                    <Flex>
                      <Icon type="essilor-dot" size={12} color="white" />
                    </Flex>
                  </Column>

                  <AnimatedText
                    fontFamily="Avenir Light"
                    fontWeight="light"
                    fontSize="h3"
                    color="white"
                    bg="transparent"
                  >
                    {AppConfig.html(title || "")}
                  </AnimatedText>
                </Flex>
              </AnimatedLayer>

              <MotionContainer
                transition={{
                  staggerChildren: 0.1,
                }}
                initial="initial"
                animate="animate"
                exit="initial"
              >
                {/* Long text */}
                <AnimatedText
                  fontSize={{ _: "h4", tablet: "22px" }}
                  fontFamily="Avenir Light"
                  fontWeight="300"
                  lineHeight="36px"
                  letterSpacing="0.22px"
                  mt="24px"
                  mb="40px"
                  color="white"
                  bg="transparent"
                  maxWidth={728}
                  variants={variants}
                  transition={{
                    ease: "easeOut",
                    duration: "0.25",
                  }}
                >
                  {AppConfig.html(longText || "")}
                </AnimatedText>

                {/* CTA */}
                {cta && (
                  <Link href={cta?.url}>
                    <AnimatedButton
                      theme={dark}
                      variant="secondary"
                      variants={variants}
                      transition={{
                        ease: "easeOut",
                        duration: "0.25",
                      }}
                    >
                      <Text>{cta?.label}</Text>
                    </AnimatedButton>
                  </Link>
                )}
              </MotionContainer>
            </Flex>
          )}
          {/* </AnimatePresence> */}
        </Flex>
      </Hidden>

      {/* Mobile */}
      <Hidden from="tablet">
        <Picture src={image} alt={title} zIndex={0} height={250} priority />
        <Column justifyContent="center" px={2} py={7} backgroundTheme>
          <Row alignItems="center">
            <Column mr="4.2px">
              <Icon type="essilor-dot" size={8} />
            </Column>
            <Column mr="4.2px">
              <Icon type="essilor-dot" size={8} />
            </Column>
            <Text fontSize="h2" ml="8px">
              {AppConfig.html(title)}
            </Text>
          </Row>
          <Text
            fontSize="h5"
            fontWeight="light"
            lineHeight="21.6px"
            letterSpacing="0.18px"
            fontFamily="Avenir Light"
            mt="9px"
            mb={2}
          >
            {AppConfig.html(longText)}
          </Text>
          <Link href={cta?.url}>
            <Button minWidth="full" variant="secondary">
              <Text
                m="auto"
                fontFamily="Avenir Light"
                fontSize="h5"
                fontWeight="light"
              >
                {cta?.label}
              </Text>
            </Button>
          </Link>
        </Column>
      </Hidden>
    </Flex>
  );
};

const ImageBanner = ({
  image1,
  image2,
  title1,
  title2,
  longText1,
  longText2,
  cta1,
  cta2,
}: IImageBanner) => {
  return (
    <Flex
      margin="auto"
      maxWidth="screen"
      overflow="hidden"
      position="relative"
      flexDirection={{ _: "column", tablet: "row" }}
      size="full"
    >
      <Banner
        {...{
          image: image1,
          title: title1,
          longText: longText1,
          cta: cta1,
        }}
      />
      <Banner
        {...{
          image: image2,
          title: title2,
          longText: longText2,
          cta: cta2,
        }}
      />
    </Flex>
  );
};

const Gradient = styled(Grid)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
`;

const AnimatedText = styled(motion<MotionProps | IText>(Text))``;
const AnimatedLayer = styled(Flex)``;
const AnimatedButton = styled(
  motion<MotionProps | { variant: IButton }>(Button)
)``;
export default ImageBanner;
