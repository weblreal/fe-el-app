// Modules
import { ReactNode, cloneElement, Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSwiperControls from "../../hooks/useSwiperControls";

// Components
import Container from "../UI/Container/Container";
import Hidden from "../UI/Hidden/Hidden";
import SwiperControls from "./SwiperControls";
import Flex from "../UI/Flex/Flex";
import Text from "../UI/Text/Text";
import SwiperDots from "./SwiperDots";

type ISwiperRowProps = {
  children: ReactNode;
  isLoading?: boolean;
  title?: string;
  uniqiueId?: string;
};

const SwiperRow: React.FC<ISwiperRowProps> = ({
  children,
  isLoading,
  title,
  uniqiueId,
}) => {
  // Variables
  const pagination = {
    clickable: true,
    renderBullet: function (_: number, className: string) {
      return `<div class="${className}"></div>`;
    },
  };

  const navigation = {
    nextEl: `.${uniqiueId || "swiper-controls"}-next`,
    prevEl: `.${uniqiueId || "swiper-controls"}-prev`,
  };

  // Hooks
  const { checkControlsHandler, isNavigationState } = useSwiperControls();

  return (
    <>
      {/* Header */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        px={2}
        display={{ desktopS: "none !important" }}
      >
        <Text fontSize="h1" fontFamily="Avenir Medium">
          {title}
        </Text>
        <Container width="fit-content">
          <SwiperControls
            uniqiueId={uniqiueId}
            nextOpacity={isNavigationState.isEnd}
            prevOpacity={isNavigationState.isBeginning}
          />
        </Container>
      </Flex>

      {/* Skeleton */}
      {isLoading && (
        <Container
          maxWidth="screen"
          m="auto"
          width="full"
          height={472}
        ></Container>
      )}

      {/* Slider */}
      {children && (
        <SwiperDots
          maxWidth="screen"
          m="auto"
          width="full"
          px={{ _: 2, desktopS: 8 }}
        >
          <Swiper
            slidesPerView="auto"
            spaceBetween={16}
            style={{ overflow: "visible" }}
            navigation={navigation}
            pagination={pagination}
            onSlideChange={checkControlsHandler}
            breakpoints={{
              600: {
                slidesPerView: "auto",
              },
              836: {
                slidesPerView: 2,
              },
              1100: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            {Children.map(children, (child: any, key: number) =>
              cloneElement(<SwiperSlide>{child}</SwiperSlide>, {
                key: key,
              })
            )}
          </Swiper>
        </SwiperDots>
      )}
    </>
  );
};

export default SwiperRow;
