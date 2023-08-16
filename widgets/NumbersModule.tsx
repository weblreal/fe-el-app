// Modules
import { INumberCard } from "../components/NumberCard/INumberCard";
import { INumbersModule } from "../models/widgets/INumbersModule";
import { Swiper, SwiperSlide } from "swiper/react";
import useResponsive from "../hooks/useResponsive";
import useSwiperControls from "../hooks/useSwiperControls";
import AppConfig from "../logic/configs/AppConfig";
// Components
import NumberCard from "../components/NumberCard/NumberCard";
import Container from "../components/UI/Container/Container";
import Text from "../components/UI/Text/Text";
import Hidden from "../components/UI/Hidden/Hidden";
import Flex from "../components/UI/Flex/Flex";
import SwiperDots from "../components/Swiper/SwiperDots";
import Icon from "../components/UI/Icon/Icon";

const NumbersModule = ({ slide, header }: INumbersModule) => {
  // Hooks
  const { is } = useResponsive();
  const {
    checkControlsHandler,
    controlEndHandler,
    controlStartHandler,
    isNavigationState,
  } = useSwiperControls();

  return (
    <>
      {header && (
        <Text
          textAlign={{ _: "left", tablet: "center" }}
          fontSize="h2"
          fontFamily="Avenir Medium"
          fontWeight="500"
          pb={{ _: 3, tablet: 4 }}
          pt={7}
          mx={{ _: 0, tablet: "auto" }}
          px={{ _: 2, tablet: 0 }}
          width="full"
          maxWidth="screen3"
        >
          {AppConfig.html(header)}
        </Text>
      )}

      <Container maxWidth="screen" width="100%" m="auto" overflow="hidden">
        <Hidden till="desktopS">
          <Flex>
            {slide?.map((slide: INumberCard, key: number) => (
              <NumberCard
                key={key}
                backgroundImage={slide.backgroundImage}
                header={slide.header}
                longText={slide.longText}
              />
            ))}
          </Flex>
        </Hidden>
        <Hidden from="desktopS">
          <SwiperDots position="relative">
            <Flex
              justifyContent="space-between"
              zIndex={2}
              width="96px"
              position="absolute"
              bottom={3}
              right={5}
              style={{ pointerEvents: "none" }}
              opacity={is("desktopS", "<") ? 1 : 0}
            >
              <Container>
                <Arrow className="numbers-swiper-controls-prev" reverse />
              </Container>
              <Container>
                <Arrow className="numbers-swiper-controls-next" />
              </Container>
            </Flex>
            <Swiper
              slidesPerView="auto"
              navigation={{
                nextEl: ".numbers-swiper-controls-next",
                prevEl: ".numbers-swiper-controls-prev",
              }}
              onReachBeginning={controlStartHandler}
              onReachEnd={controlEndHandler}
              onSlideChange={checkControlsHandler}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                425: {
                  slidesPerView: "auto",
                },
              }}
            >
              {slide?.map((slide: INumberCard, key: number) => (
                <SwiperSlide key={key}>
                  <NumberCard
                    backgroundImage={slide.backgroundImage}
                    header={slide.header}
                    longText={slide.longText}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperDots>
        </Hidden>
      </Container>
    </>
  );
};

const Arrow = ({
  className,
  reverse,
}: {
  className: string;
  reverse?: boolean;
}) => {
  return (
    <Flex
      pointer
      justifyContent="center"
      alignItems="center"
      className={className || ""}
      backgroundColor="white"
      borderRadius="50%"
      width="40px"
      height="40px"
      style={{
        transform: reverse ? "rotate(180deg)" : "unset",
      }}
    >
      <Icon type="arrow-right" size={18} color="black" />
    </Flex>
  );
};

export default NumbersModule;
