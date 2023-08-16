// Modules
import { useRef, useState } from "react";
import styled from "styled-components";
import AppConfig from "../logic/configs/AppConfig";
import { IBlurredSlider, ISlide } from "../models/widgets/IBlurredSlider";
import useResponsive from "../hooks/useResponsive";
import { Swiper, SwiperSlide } from "swiper/react";
import useSwiperControls from "../hooks/useSwiperControls";
import useView from "../hooks/useView";
import BlurredSliderControls from "../components/Swiper/BlurredSliderControls";

// Components
import Container from "../components/UI/Container/Container";
import Text from "../components/UI/Text/Text";
import Flex from "../components/UI/Flex/Flex";
import Arrow from "../components/UI/Arrow/Arrow";
import BackgroundImage from "../components/UI/BackgroundImage/BackgroundImage";
import Picture from "../components/UI/Picture/Picture";
import BlurredSliderPagination from "../components/Swiper/BlurredSliderPagination";
import Grid from "../components/UI/Grid/Grid";
import GenerateSlideElements from "../components/Swiper/GenerateSlideElement";

const BlurredSlider = ({ backgroundImage, header, slides }: IBlurredSlider) => {
  // Hooks
  const {
    isThrottling,
    throttlingHandler,
    setSwiper,
    activeRealIndex,
    activeRealIndexDelay,
    activeRealIndexHandler,
    bulletClickHandler,
    navigationHandler,
    navigationDirection,
    navigationDirectionMobile,
  } = BlurredSliderControls();
  const { isNavigationState, additionalSlidesNavigationHandler } =
    useSwiperControls();
  const containerRef = useRef<HTMLElement>(null);
  const isVisible = useView(containerRef, { once: true });
  const { is } = useResponsive();
  const [loaded, setLoaded] = useState(0);

  // Variables
  const pagination = {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (_: number, className: string) {
      return `<div class="${className}"></div>`;
    },
  };

  // Functions
  const imageLoadedHandler = () => {
    setLoaded((prev) => prev + 1);
  };

  return (
    <Container
      pt={{ _: 5, desktopS: 10 }}
      pb={{ _: 5, desktopS: 10 }}
      position="relative"
      maxWidth="screen"
      overflow="hidden"
      m="auto"
      width="100%"
      ref={containerRef}
    >
      <Container position="relative" zIndex={1}>
        {/* Header */}
        {header && (
          <Container
            initial={"hidden"}
            animate={
              loaded >= slides.length && isVisible ? "visible" : "hidden"
            }
            variants={AppConfig.setAnimationVariant(
              "SLIDE_UPWARD_REVEAL_DELAY_05"
            )}
          >
            <Text
              px={2}
              fontSize={{ _: "h2", desktopS: "h1" }}
              fontFamily="Avenir Bold"
              mb={{ _: 3, desktopS: 5 }}
              backgroundColor="transparent"
              color={backgroundImage ? "white" : "black"}
              textAlign="center"
              fontWeight="bolder"
            >
              {AppConfig.html(slides[activeRealIndex]?.header)}
            </Text>
          </Container>
        )}

        {/* Slider */}
        <Carousel maxWidth="screen" ml="auto" mx={{ _: 0, desktopS: 0 }}>
          <Container mb={{ _: 3, desktopS: 5 }} position="relative">
            {/* Navigation Arrows */}

            <Flex
              zIndex={2}
              width={"full"}
              position="absolute"
              top={0}
              left={0}
              height="full"
              style={{ pointerEvents: "none" }}
              initial={"initial"}
              animate={
                loaded >= slides.length && isVisible ? "animate" : "initial"
              }
              variants={AppConfig.setAnimationVariant("SLIDE_LEFT_REVEAL")}
            >
              {/* Left arrow */}
              <Container
                onClick={() => navigationHandler("left")}
                style={{
                  visibility:
                    activeRealIndex === 0 || is("tablet", "<")
                      ? "hidden"
                      : "visible",
                }}
              >
                <Arrow reverse arrowSize={22.5} circleSize={72} />
              </Container>

              {/* Right arrow */}
              <Container
                onClick={() => navigationHandler("right")}
                style={{
                  visibility:
                    activeRealIndex === slides.length - 1 || is("tablet", "<")
                      ? "hidden"
                      : "visible",
                }}
              >
                <Arrow arrowSize={22.5} circleSize={72} />
              </Container>
            </Flex>

            {/* Swiper Container */}
            <Container
              initial={"hidden"}
              animate={
                loaded >= slides.length && isVisible ? "visible" : "hidden"
              }
              variants={
                is("tablet", "<")
                  ? AppConfig.setAnimationVariant("SLIDE_UPWARD_DELAY_1")
                  : AppConfig.setAnimationVariant(
                      "SLIDE_STAGGER_UPWARD_DELAY_1"
                    )
              }
            >
              <Swiper
                pagination={pagination}
                spaceBetween={16}
                slidesPerView={"auto"}
                centeredSlides={true}
                speed={500}
                touchRatio={0.3}
                initialSlide={2}
                followFinger={isThrottling ? false : true}
                onSwiper={setSwiper}
                onBeforeTransitionStart={throttlingHandler}
                allowSlideNext={isThrottling ? false : isNavigationState.isEnd}
                allowSlidePrev={
                  isThrottling ? false : isNavigationState.isBeginning
                }
                onSlideChange={(e) => {
                  activeRealIndexHandler(e);
                  additionalSlidesNavigationHandler(e, slides);
                }}
                onSlideNextTransitionStart={() => navigationHandler("right")}
                onSlidePrevTransitionStart={() => navigationHandler("left")}
                onSlideNextTransitionEnd={() => navigationHandler("right")}
                onSlidePrevTransitionEnd={() => navigationHandler("left")}
              >
                {/* Main Slide */}
                {slides?.map((slide: ISlide, key) => (
                  <SwiperSlide key={key} style={{ width: "fit-content" }}>
                    <Container
                      height={300}
                      width={is("tablet", "<") ? 290 : 572}
                      key={key}
                      opacity={key === activeRealIndex ? 1 : 0.3}
                      style={{ transition: "250ms ease" }}
                      custom={key}
                      variants={
                        is("tablet", "<")
                          ? AppConfig.setAnimationVariant("SLIDE_UPWARD_40")
                          : AppConfig.setAnimationVariant("SLIDE_UPWARD_300")
                      }
                    >
                      <Picture
                        src={slide.src}
                        alt={slide.alt}
                        height={300}
                        width={is("tablet", "<") ? 290 : 572}
                        onLoadingComplete={imageLoadedHandler}
                        priority
                      />
                    </Container>
                  </SwiperSlide>
                ))}

                {/* Generates slides prepended and appended in the carousel */}
                {GenerateSlideElements(slides, isVisible)}
              </Swiper>
            </Container>
          </Container>

          {/* Long Text */}
          <Container
            initial={"initial"}
            animate={
              is("tablet", "<")
                ? navigationDirectionMobile
                : navigationDirection
            }
            variants={AppConfig.setAnimationVariant(
              "SLIDE_HORIZONTAL_FADE_IN_OUT"
            )}
          >
            <Container
              mb={{ _: 3, desktopS: 4 }}
              mx="auto"
              px={2}
              maxWidth="screen3"
              position="relative"
              initial={"initial"}
              animate={
                loaded >= slides.length && isVisible ? "animate" : "initial"
              }
              variants={AppConfig.setAnimationVariant(
                "SLIDE_UPWARD_60_DELAY_1"
              )}
            >
              <Text
                color={backgroundImage ? "white" : "text"}
                backgroundColor="transparent"
                fontSize={{ _: "h5", desktopS: "h3" }}
                fontWeight="light"
                fontFamily="Avenir Light"
                textAlign={{ _: "left", desktopS: "center" }}
              >
                <Grid
                  gridTemplateColumns={`repeat(${slides.length}, 100%)`}
                  position="relative"
                  opacity={0}
                >
                  {slides?.map((slide: ISlide, key: number) => (
                    <Container key={key}>
                      {AppConfig.html(slide?.longText)}

                      <Text>{AppConfig.html(slide?.longText2)}</Text>
                    </Container>
                  ))}
                </Grid>
                <Container
                  position="absolute"
                  top={0}
                  left={0}
                  px={2}
                  width="full"
                >
                  {AppConfig.html(
                    slides[
                      is("tablet", "<") ? activeRealIndexDelay : activeRealIndex
                    ]?.longText
                  )}

                  <Text color="neutral.30">
                    {AppConfig.html(slides[activeRealIndex]?.longText2)}
                  </Text>
                </Container>
              </Text>
            </Container>
          </Container>

          {/* Pagination */}
          <Container
            initial={"initial"}
            animate={
              loaded >= slides.length && isVisible ? "animate" : "initial"
            }
            variants={AppConfig.setAnimationVariant("SLIDE_UPWARD_60_DELAY_1")}
          >
            <BlurredSliderPagination
              slideCount={slides?.length}
              onClick={bulletClickHandler}
              activeIndex={activeRealIndex}
              additionalSlides={2}
            />
          </Container>
        </Carousel>
      </Container>

      {/* Background */}
      {backgroundImage && (
        <BackgroundImage
          src={backgroundImage}
          alt={backgroundImage || "bg"}
          zIndex={0}
        />
      )}
    </Container>
  );
};

export default BlurredSlider;

const Carousel = styled<any>(Container)`
  overflow: hidden;
  position: relative;
`;
