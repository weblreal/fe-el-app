// Modules
import {
  ICareersCarousel,
  ICareersSlide,
} from "../models/widgets/ICareersCarousel";
import AppConfig from "../logic/configs/AppConfig";
import useResponsive from "../hooks/useResponsive";
import useSwiperControls from "../hooks/useSwiperControls";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
// Components
import Container from "../components/UI/Container/Container";
import Text from "../components/UI/Text/Text";
import CardCareers from "../components/CardCareers/CardCareers";
import SwiperControls from "../components/Swiper/SwiperControls";
import Flex from "../components/UI/Flex/Flex";
import SwiperDots from "../components/Swiper/SwiperDots";

const CareersCarousel = ({ slides, header }: ICareersCarousel) => {
  // Hooks
  const { html } = AppConfig;
  const { is } = useResponsive();
  const {
    isNavigationState,
    controlEndHandler,
    controlStartHandler,
    checkControlsHandler,
    disableSwipe,
    slideDisablerHandler,
  } = useSwiperControls();

  useEffect(() => {
    slideDisablerHandler(slides);
  }, [slides, slideDisablerHandler]);

  // Variables
  const pagination = {
    clickable: true,
    renderBullet: function (_: number, className: string) {
      return `<div class="${className}"></div>`;
    },
  };

  return (
    <Container
      overflow="hidden"
      maxWidth="screen"
      m="auto"
      width="100%"
      pt={{ _: 5, desktopS: 10 }}
      pb={{ _: 5, desktopS: 10 }}
      backgroundColor="background"
    >
      {/* Header */}
      <Flex
        mb={{ _: 3, desktopS: 7 }}
        px={{ _: 2, desktopS: 8 }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          fontSize={{ _: "h2", desktopS: "48px" }}
          fontFamily="Avenir Medium"
          fontWeight="500"
          width={{ _: "60%", tablet: "100%" }}
        >
          {html(header)}
        </Text>

        <Container
          width="fit-content"
          style={{ visibility: disableSwipe ? "visible" : "hidden" }}
        >
          <SwiperControls
            uniqiueId="careers-controls"
            nextOpacity={isNavigationState.isEnd}
            prevOpacity={isNavigationState.isBeginning}
          />
        </Container>
      </Flex>

      {/* Slider */}
      <SwiperDots maxWidth="screen" px={{ _: 2, desktopS: 8 }}>
        <Swiper
          spaceBetween={is("tablet", "<") ? 16 : 32}
          slidesPerView="auto"
          navigation={{
            nextEl: ".careers-controls-next",
            prevEl: ".careers-controls-prev",
          }}
          onReachEnd={controlEndHandler}
          onReachBeginning={controlStartHandler}
          onSlideChange={checkControlsHandler}
          pagination={pagination}
          breakpoints={{
            1440: {
              slidesPerView: 3,
            },
          }}
        >
          {slides?.map((slide: ICareersSlide, key: number) => (
            <SwiperSlide key={key}>
              <CardCareers
                backgroundImage={slide.backgroundImage || ""}
                paragraph={slide.paragraph}
                title={slide.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperDots>
    </Container>
  );
};

export default CareersCarousel;
