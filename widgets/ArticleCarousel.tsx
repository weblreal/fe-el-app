// Modules
import React from "react";
import { IArticleCarousel } from "../models/widgets/IArticleCarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import useSwiperControls from "../hooks/useSwiperControls";
import { getVideoType } from "../logic/utilities";
// Components
import Container from "../components/UI/Container/Container";
import Picture from "../components/UI/Picture/Picture";
import Flex from "../components/UI/Flex/Flex";
import SwiperDots from "../components/Swiper/SwiperDots";
import Arrow from "../components/UI/Arrow/Arrow";
import useResponsive from "../hooks/useResponsive";
import VideoBanner from "../components/VideoBanner/VideoBanner";

const ArticleCarousel = ({
  backgroundImage,
  backgroundVideo,
}: IArticleCarousel) => {
  // Variables
  const pagination = {
    clickable: true,
    renderBullet: function (_: number, className: string) {
      return `<div class="${className}"></div>`;
    },
  };

  const navigation = {
    nextEl: ".article-swiper-controls-next",
    prevEl: ".article-swiper-controls-prev",
  };

  // Hooks
  const {
    checkControlsHandler,
    isNavigationState,
    controlEndHandler,
    controlStartHandler,
  } = useSwiperControls();
  const { is } = useResponsive();

  // Handlers
  const renderImageOrVideo = (
    backgroundImage: string[],
    backgroundVideo: string[]
  ) => {
    const mediaCollection: string[] = [...backgroundImage, ...backgroundVideo];
    return (
      mediaCollection &&
      mediaCollection.map((media: string, index: number) => (
        <SwiperSlide key={index}>
          {({ isActive }: { isActive: boolean }) => (
            <Container
              width={{ _: "358px", tablet: "752px" }}
              height={{ _: "240px", tablet: "400px" }}
            >
              {getVideoType(media) === "unknown" ? (
                <Picture
                  src={media}
                  alt="sliderImg"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                ></Picture>
              ) : (
                <>
                  <VideoBanner
                    src={media}
                    hidePauseIcon={false}
                    play
                    swipe
                    pause={!isActive}
                    scale={is("desktopS", ">") ? true : false}
                  ></VideoBanner>
                </>
              )}
            </Container>
          )}
        </SwiperSlide>
      ))
    );
  };

  return (
    <Flex
      maxWidth="screen2"
      width="full"
      m="auto"
      px={{ _: 2, desktopS: 8 }}
      overflow="hidden"
    >
      <Container
        maxWidth={{ _: 0, desktopS: "336px" }}
        width="full"
      ></Container>

      <SwiperDots
        width="full"
        mt={{ _: 5, tablet: 0 }}
        overflow="visible"
        position="relative"
      >
        {/* Controls */}
        <Flex
          zIndex={2}
          width="full"
          position="absolute"
          top={0}
          left={0}
          height={400}
          style={{ pointerEvents: "none" }}
          opacity={is("tablet", "<") ? 0 : 1}
        >
          <Container opacity={isNavigationState.isBeginning ? 0 : 1}>
            <Arrow
              reverse
              arrowSize={15}
              circleSize={58}
              className="article-swiper-controls-prev"
            />
          </Container>

          <Container opacity={isNavigationState.isEnd ? 0 : 1}>
            <Arrow
              arrowSize={15}
              circleSize={58}
              className="article-swiper-controls-next"
            />
          </Container>
        </Flex>

        <Container
          maxWidth={{ _: "full", desktopS: "752px" }}
          overflow="visible"
        >
          <Swiper
            breakpoints={{
              389: {
                slidesPerView: "auto",
              },
            }}
            slidesPerView={1}
            spaceBetween={16}
            pagination={pagination}
            navigation={navigation}
            onReachBeginning={controlStartHandler}
            onReachEnd={controlEndHandler}
            onSlideChange={checkControlsHandler}
          >
            {renderImageOrVideo(backgroundImage, backgroundVideo)}
          </Swiper>
        </Container>
      </SwiperDots>
    </Flex>
  );
};

export default ArticleCarousel;
