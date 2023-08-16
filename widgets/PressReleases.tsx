// Modules
import { useRef } from "react";
import { IPressReleases } from "../models/widgets/IPressReleases";
import { IStoriesSlide } from "../models/widgets/IStoriesCarousel";
import Link from "next/link";
import AppConfig from "../logic/configs/AppConfig";
import useThrottling from "../hooks/useThrottling";
import useSwiperControls from "../hooks/useSwiperControls";
import { Swiper, SwiperSlide } from "swiper/react";
import useView from "../hooks/useView";
// Components
import Button from "../components/UI/Button/Button";
import Center from "../components/UI/Center/Center";
import Container from "../components/UI/Container/Container";
import Flex from "../components/UI/Flex/Flex";
import Icon from "../components/UI/Icon/Icon";
import Text from "../components/UI/Text/Text";
import Hidden from "../components/UI/Hidden/Hidden";
import Grid, { GridColumn } from "../components/UI/Grid/Grid";
import ReverseTheme from "../components/ReverseTheme/ReverseTheme";
import TextEllipsis from "../components/TextEllipsis/TextEllipsis";

const PressReleasesNew = ({ slides, header, cta }: IPressReleases) => {
  // Hooks
  const [isThrottling, throttleHandler] = useThrottling(750);
  const containerRef = useRef<HTMLElement>(null);
  const isVisible = useView(containerRef, { once: true });

  const {
    checkControlsHandler,
    isNavigationState,
    controlEndHandler,
    controlStartHandler,
    swiperRef,
    navigationDirectionHandler,
  } = useSwiperControls();

  // Handlers
  const renderSlides = () => {
    return slides?.map((slide: IStoriesSlide, key: number) => (
      <Container key={key} maxWidth={{ desktopS: "622px", desktopXL: "800px" }}>
        <SwiperSlide key={key}>
          <Text
            color="neutral.70"
            mb={{ _: "4px", desktopS: "4px" }}
            fontFamily={{ _: "Avenir Regular", desktopS: "Avenir Light" }}
            fontWeight={{ _: "normal", desktopS: "300" }}
            style={{ cursor: "default" }}
          >
            {slide.date}
          </Text>
          <TextEllipsis
            fontFamily="Avenir Bold"
            fontSize="h5"
            fontWeight="bolder"
            letterSpacing={{ _: "0.18px", desktopS: "unset" }}
            mb={{ _: 2, desktopS: "4px" }}
            lineCountD={2}
            lineCountM={3}
            style={{ cursor: "default" }}
          >
            {AppConfig.html(slide.title)}
          </TextEllipsis>

          {/* CTA */}
          <Button variant="link">
            <Link href={slide.cta?.url || "#"}>
              <Text fontSize={["regular", "h5"]}>
                <Flex alignItems="center">
                  <Container>{slide.cta?.label}</Container>
                  <Icon type="angle-right-b" size={24} />
                </Flex>
              </Text>
            </Link>
          </Button>
        </SwiperSlide>
      </Container>
    ));
  };

  const renderNavigation = () => {
    return (
      <>
        <GridColumn
          onClick={
            isThrottling
              ? () => {}
              : () => {
                  throttleHandler();
                  navigationDirectionHandler("prev");
                }
          }
          className="press-controls-prev"
          opacity={isNavigationState.isBeginning ? 0.2 : 1}
        >
          <Prev />
        </GridColumn>
        <GridColumn
          onClick={
            isThrottling
              ? () => {}
              : () => {
                  throttleHandler();
                  navigationDirectionHandler("next");
                }
          }
          className="press-controls-next"
          opacity={isNavigationState.isEnd ? 0.2 : 1}
        >
          <Next />
        </GridColumn>
      </>
    );
  };

  return (
    <Flex
      display="flex"
      backgroundColor="background"
      px={{ _: 2, desktopS: 8 }}
      py={{ _: 4, desktopS: 2 }}
      flexDirection={{ _: "column", desktopS: "row" }}
      alignItems={{ desktopS: "center" }}
      maxWidth={{ _: "screen2", desktopXL: "screen" }}
      overflow="hidden"
      width={{ _: "full", desktopS: "full" }}
      m="auto"
      ref={containerRef}
      initial={"hide"}
      animate={isVisible ? "show" : "hide"}
      variants={AppConfig.setAnimationVariant("SLIDE_UPWARD_30_REVEAL")}
    >
      {/* Header */}
      {header && (
        <>
          <Hidden from="desktopS">
            <Flex alignItems="center" mb={2}>
              <Text
                fontSize="h2"
                fontFamily="Avenir Medium"
                fontWeight="500"
                mr={2}
              >
                {header}
              </Text>

              <Grid
                gridGap={2}
                ml="auto"
                gridTemplateColumns="1fr 1fr"
                width="fit-content"
              >
                {renderNavigation()}
              </Grid>
            </Flex>
          </Hidden>

          <Hidden till="desktopS">
            <Text
              fontSize="h1"
              fontFamily="Avenir Medium"
              fontWeight="500"
              mr={6}
            >
              {header}
            </Text>
          </Hidden>
        </>
      )}

      {/* Slider */}
      <Flex alignItems="center" px={{ desktopXL: "151px" }}>
        {
          <Container
            width="100%"
            maxWidth={{ desktopS: "622px", desktopXL: "800px" }}
          >
            <Swiper
              touchRatio={0.5}
              allowSlideNext={isThrottling ? false : true}
              allowSlidePrev={isThrottling ? false : true}
              onReachBeginning={controlStartHandler}
              onReachEnd={controlEndHandler}
              onSlideChange={checkControlsHandler}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {renderSlides()}
            </Swiper>
          </Container>
        }

        {/* Controls */}
        <Hidden till="desktopS">
          <Grid
            gridGap={2}
            ml={{ _: 0, desktopS: 3 }}
            gridTemplateColumns="1fr 1fr"
            mr={{ _: 0, desktopS: 2 }}
            width="fit-content"
          >
            {renderNavigation()}
          </Grid>
        </Hidden>
      </Flex>

      {/* Button */}
      {cta && (
        <Container ml={{ desktopS: "auto" }} mt={{ _: 5, desktopS: 0 }}>
          <Link href={cta?.url || "#"}>
            <Hidden till="desktopS">
              <Button
                variant="primary"
                minWidth={{ _: "full", tablet: "auto" }}
              >
                <Flex>
                  <Text
                    mr={1}
                    fontFamily="Avenir Light"
                    fontSize="h5"
                    fontWeight="light"
                    transparent
                    height="22px"
                  >
                    {cta?.label}
                  </Text>
                  <ReverseTheme>
                    <Icon type="angle-right" size={24} />
                  </ReverseTheme>
                </Flex>
              </Button>
            </Hidden>
            <Hidden from="desktopS">
              <Button
                variant="secondary"
                minWidth={{ _: "full", tablet: "auto" }}
                textAlign="center"
              >
                <Flex m="auto">
                  <Text
                    mr={1}
                    fontFamily="Avenir Light"
                    fontSize="h5"
                    fontWeight="light"
                    transparent
                    height="22px"
                  >
                    {cta?.label}
                  </Text>
                  <Icon type="angle-right" size={24} />
                </Flex>
              </Button>
            </Hidden>
          </Link>
        </Container>
      )}
    </Flex>
  );
};

export default PressReleasesNew;

const Prev = () => {
  return (
    <Flex
      width={48}
      height={48}
      alignItems="center"
      justifyContent="center"
      borderRadius={41}
      top="calc(50% - 20.5px)"
      pointer
    >
      <Center>
        <Icon type="arrow-left" size={31.5} />
      </Center>
    </Flex>
  );
};

const Next = () => {
  return (
    <Flex
      width={48}
      height={48}
      alignItems="center"
      justifyContent="center"
      borderRadius={48}
      top="calc(50% - 20.5px)"
      pointer
    >
      <Center style={{ transform: "rotate(180deg)" }}>
        <Icon type="arrow-left" size={31.5} />
      </Center>
    </Flex>
  );
};
