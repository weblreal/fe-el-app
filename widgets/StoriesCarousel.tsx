// Modules
import { useRef } from "react";
import styled from "styled-components";
import useResponsive from "../hooks/useResponsive";
import useSwiperControls from "../hooks/useSwiperControls";
import AppConfig from "../logic/configs/AppConfig";
import useView from "../hooks/useView";
import useImageLoaded from "../hooks/useImageLoaded";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  IStoriesCarousel,
  IStoriesSlide,
} from "../models/widgets/IStoriesCarousel";
// Components
import CardNews from "../components/CardNews/CardNews";
import Container from "../components/UI/Container/Container";
import Flex from "../components/UI/Flex/Flex";
import Text from "../components/UI/Text/Text";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import SwiperDots from "../components/Swiper/SwiperDots";
import Arrow from "../components/UI/Arrow/Arrow";

const StoriesCarousel = ({
  slides,
  cta,
  header,
  longText,
}: IStoriesCarousel) => {
  // Hooks
  const containerRef = useRef<HTMLElement>(null);
  const isVisible = useView(containerRef, { once: true });
  const { imageLoadCount, imageLoadedHandler } = useImageLoaded();
  const { is } = useResponsive();
  const {
    checkControlsHandler,
    controlEndHandler,
    controlStartHandler,
    isNavigationState,
  } = useSwiperControls();

  // Variables
  const navigation = {
    nextEl: ".stories-swiper-controls-next",
    prevEl: ".stories-swiper-controls-prev",
  };

  return (
    <Container
      initial="hide"
      animate={isVisible ? "show" : "hide"}
      variants={AppConfig.setAnimationVariant("OPACITY_VARIANT")}
      transition={{ duration: 0.1 }}
      ref={containerRef}
      overflow="hidden"
      maxWidth="screen"
      m="auto"
      width="100%"
      mt={{ _: 5, desktopS: 10 }}
      pt={{ _: 4, desktopS: 5 }}
      pb={{ _: 4, desktopS: 7 }}
      backgroundColor="background"
    >
      {/* Header */}
      <Container mb={{ _: 5, desktopS: 6 }} px={{ _: 2, desktopS: 8 }}>
        <Text
          fontSize={{ _: "h2", desktopS: "h1" }}
          fontFamily="Avenir Medium"
          fontWeight="500"
          mb={{ _: "10px", desktopS: "13px" }}
        >
          {header}
        </Text>
        <Flex
          justifyContent={{ _: "center", desktopS: "space-between" }}
          flexDirection={{ _: "column", desktopS: "unset" }}
        >
          <Text
            fontFamily="Avenir Light"
            fontSize="h5"
            fontWeight="300"
            maxWidth="753px"
            mb={{ _: "10px", desktopS: 0 }}
          >
            {AppConfig.html(longText)}
          </Text>

          {cta && (
            <Container>
              <LinkAngle
                label={cta?.label}
                url={cta.url}
                fontWeight="300"
                fontFamily="Avenir Light"
                fontSize={["regular", "regular", "h3"]}
                gap={{ _: "4px", desktopS: 1 }}
              />
            </Container>
          )}
        </Flex>
      </Container>

      {/* Slider */}
      <Carousel
        maxWidth="screen"
        ml="auto"
        mx={{ _: 0, desktopS: 0 }}
        px={{ _: 2, desktopS: 8 }}
      >
        <Flex
          zIndex={2}
          width="full"
          position="absolute"
          top={0}
          left={0}
          height="full"
          style={{ pointerEvents: "none" }}
          opacity={is("desktopS", "<") ? 0 : 1}
        >
          <Container opacity={isNavigationState.isBeginning ? 0 : 1}>
            <Arrow
              reverse
              arrowSize={22.5}
              circleSize={72}
              className="stories-swiper-controls-prev"
            />
          </Container>

          <Container opacity={isNavigationState.isEnd ? 0 : 1}>
            <Arrow
              arrowSize={22.5}
              circleSize={72}
              className="stories-swiper-controls-next"
            />
          </Container>
        </Flex>

        <SwiperDots>
          <Container
            initial={"hidden"}
            animate={
              imageLoadCount >= slides.length && isVisible
                ? "visible"
                : "hidden"
            }
            variants={
              is("mobile", "<")
                ? AppConfig.setAnimationVariant("SLIDE_UPWARD_REVEAL_DELAY_05")
                : AppConfig.setAnimationVariant(
                    "STAGGERED_UPWARD_OPACITY_REVEAL"
                  )
            }
          >
            <Swiper
              slidesPerView="auto"
              spaceBetween={16}
              navigation={navigation}
              onReachBeginning={controlStartHandler}
              onReachEnd={controlEndHandler}
              onSlideChange={checkControlsHandler}
            >
              {slides?.map((slide: IStoriesSlide, key: number) => (
                <SwiperSlide key={key}>
                  <Container
                    custom={key}
                    variants={AppConfig.setAnimationVariant(
                      "DYNAMIC_SLIDE_UP_ITEMS_80"
                    )}
                  >
                    <CardNews
                      backgroundImage={slide.backgroundImage || ""}
                      cta={{
                        label: slide.cta?.label || "",
                        url: slide.cta?.url || "",
                      }}
                      date={slide.date}
                      title={slide.title}
                      onImageLoad={imageLoadedHandler}
                    />
                  </Container>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </SwiperDots>
      </Carousel>
    </Container>
  );
};

const Carousel = styled<any>(Container)`
  overflow: hidden;
  position: relative;
`;

export default StoriesCarousel;
