// Modules
import { IAnimatedBanner } from "../models/widgets/IAnimatedBanner";
import { useRef, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import useView from "../hooks/useView";
import AppConfig from "../logic/configs/AppConfig";
import dark from "../themes/dark";
// Components
import BackgroundImage from "../components/UI/BackgroundImage/BackgroundImage";
import Column from "../components/UI/Column/Column";
import Flex from "../components/UI/Flex/Flex";
import Container from "../components/UI/Container/Container";
import Icon from "../components/UI/Icon/Icon";
import Text from "../components/UI/Text/Text";
import Button from "../components/UI/Button/Button";

const AnimatedBanner = ({ backgroundImage, cta, header }: IAnimatedBanner) => {
  // Hooks
  const ref = useRef<HTMLDivElement>(null);
  const view = useView(ref, { once: true });
  const [loaded, setLoaded] = useState(0);

  // Functions
  const imageLoadedHandler = () => {
    setLoaded(prev => prev + 1);
  }

  return (
    <Flex
      maxWidth="screen"
      m="auto"
      justifyContent="center"
      alignItems="center"
      position="relative"
      minWidth="100%"
      height="full"
      minHeight={{ _: 430, desktopS: 664 }}
      overflow="hidden"
    >
      <Column ref={ref}>
        {/* Text Layer */}
        <Column
          alignItems="center"
          justifyContent="center"
          position="absolute"
          left="0"
          top="0"
          width="100%"
          height="100%"
          zIndex={-1}
          pt={{ _: 0, desktopS: 10 }}
          pb={{ _: 0, desktopS: 0 }}
        > 
          {header && (
            <Text
              maxWidth={{ _: "100%", tablet: 1140 / 2, desktopS: 1140 }}
              color="black"
              fontFamily="Avenir Black"
              fontWeight="bolder"
              fontSize={{ _: "40px", desktopS: "60px" }}
              textAlign="center"
              px={{ _: 2, desktopS: "0.5em" }}
              mb={{ _: 3, desktopS: 4 }}
            >
              {AppConfig.html(header)}
            </Text>
          )}

          {/* CTA */}
          {cta && (
            <Container>
              <Link href={cta.url || "#"}>
                <Button variant="secondary" theme={dark} height={48}>
                  <Flex alignItems="center">
                    <Text
                      fontSize="h5"
                      fontWeight="light"
                      fontFamily="Avenir Light"
                      mr={{ _: 1, desktopS: "8.46px" }}
                    >
                      {cta.label}
                    </Text>
                    <Icon type="angle-right-b" size={24} />
                  </Flex>
                </Button>
              </Link>
            </Container>
          )}
        </Column>

        {/* Background Mask */}
        <MaskLeft
          animateStart={!!view && loaded >= 2}
          position="absolute"
          left="50%"
          top="50%"
          width="100%"
          height="100%"
          maxWidth="screen"
          minHeight={{ _: 430, desktopS: 664 }}
          zIndex={1}
          alignItems="center"
          justifyContent="center"
          pt={{ _: 0, desktopS: 10 }}
        >
          {backgroundImage && (
            <BackgroundImage
              src={backgroundImage}
              alt={backgroundImage || "Animated Background"}
              zIndex={-1}
              priority
              onLoadingComplete={imageLoadedHandler}
            />
          )}

          {header && (
            <Text
              maxWidth={{ _: "100%", tablet: 1140 / 2, desktopS: 1140 }}
              color="white"
              fontFamily="Avenir Black"
              fontWeight="bolder"
              fontSize={{ _: "40px", desktopS: "60px" }}
              textAlign="center"
              px={{ _: 2, desktopS: "0.5em" }}
              mb={{ _: 3, desktopS: 4 }}
            >
              {AppConfig.html(header)}
            </Text>
          )}

          {/* CTA */}
          {cta && (
            <Container>
              <Link href={cta.url || "#"}>
                <Button variant="secondary" theme={dark} height={48}>
                  <Flex alignItems="center">
                    <Text
                      fontSize="h5"
                      fontWeight="light"
                      fontFamily="Avenir Light"
                      mr={{ _: 1, desktopS: "8.46px" }}
                    >
                      {cta.label}
                    </Text>
                    <Icon type="angle-right-b" size={24} />
                  </Flex>
                </Button>
              </Link>
            </Container>
          )}

          {/* Overlay */}
          <Container
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            backgroundColor="black"
            opacity={0.38}
            zIndex={-1}
          ></Container>
        </MaskLeft>

        <MaskRight
          animateStart={!!view && loaded >= 2}
          position="absolute"
          left="50%"
          top="50%"
          width="100%"
          height="100%"
          maxWidth="screen"
          minHeight={{ _: 430, desktopS: 664 }}
          zIndex={1}
          alignItems="center"
          justifyContent="center"
          pt={{ _: 0, desktopS: 10 }}
        >
          {backgroundImage && (
            <BackgroundImage
              src={backgroundImage}
              alt={backgroundImage || "Animated Background"}
              zIndex={-1}
              priority
              onLoadingComplete={imageLoadedHandler}
            />
          )}

          {header && (
            <Text
              maxWidth={{ _: "100%", tablet: 1140 / 2, desktopS: 1140 }}
              color="white"
              fontFamily="Avenir Black"
              fontWeight="bolder"
              fontSize={{ _: "40px", desktopS: "60px" }}
              textAlign="center"
              px={{ _: 2, desktopS: "0.5em" }}
              mb={{ _: 3, desktopS: 4 }}
            >
              {AppConfig.html(header)}
            </Text>
          )}

          {/* CTA */}
          {cta && (
            <Container>
              <Link href={cta.url || "#"}>
                <Button variant="secondary" theme={dark} height={48}>
                  <Flex alignItems="center">
                    <Text
                      fontSize="h5"
                      fontWeight="light"
                      fontFamily="Avenir Light"
                      mr={{ _: 1, desktopS: "8.46px" }}
                    >
                      {cta.label}
                    </Text>
                    <Icon type="angle-right-b" size={24} />
                  </Flex>
                </Button>
              </Link>
            </Container>
          )}

          {/* Overlay */}
          <Container
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            backgroundColor="black"
            opacity={0.38}
            zIndex={-1}
          ></Container>
        </MaskRight>
      </Column>
    </Flex>
  );
};

const MaskLeft = styled(Column)<{ animateStart: boolean }>`
  transform: translate(-50%, -50%);
  clip-path: circle(
    ${(props) => (props.animateStart ? "100% at 50% 50%" : "25% at -50% 50%")}
  );

  animation-name: ${(props) => (props.animateStart ? "mergeLeft" : "")};
  animation-duration: 2.5s;
  /* animation-timing-function: ease-in-out; */

  @keyframes mergeLeft {
    0% {
      clip-path: circle(25% at -50% 50%);
    }
    50% {
      clip-path: circle(25% at 50% 50%);
    }
    100% {
      clip-path: circle(100% at 50% 50%);
    }
  }
`;

const MaskRight = styled(Column)<{ animateStart: boolean }>`
  transform: translate(-50%, -50%);
  clip-path: circle(
    ${(props) => (props.animateStart ? "100% at 50% 50%" : "25% at 150% 50%")}
  );

  animation-name: ${(props) => (props.animateStart ? "mergeRight" : "")};
  animation-duration: 2.5s;
  /* animation-timing-function: ease-in-out; */

  @keyframes mergeRight {
    0% {
      clip-path: circle(25% at 150% 50%);
    }
    50% {
      clip-path: circle(25% at 50% 50%);
    }
    100% {
      clip-path: circle(100% at 50% 50%);
    }
  }
`;

export default AnimatedBanner;
