// Modules
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper";
import { Swiper as ISwiper } from "swiper";
import useSwiperControls from "../../hooks/useSwiperControls";
import useResponsive from "../../hooks/useResponsive";
import AppConfig from "../../logic/configs/AppConfig";
import { IBrands, ILogoSlider } from "../../models/widgets/IBrandsModule";
// Components
import Flex from "../UI/Flex/Flex";
import Container from "../UI/Container/Container";
import Picture from "../UI/Picture/Picture";
import Dots from "../UI/Dots/Dots";
import BrandsModuleControls from "./BrandsModuleControls";
import Hidden from "../UI/Hidden/Hidden";

const LogoSlider = ({ brands, active, brandPickerHandler }: ILogoSlider) => {
  /**
   * Hooks
   */
  const { checkControlsHandler, isNavigationState } = useSwiperControls();
  const { is } = useResponsive();

  /**
   * Variables
   */
  const morethanSeven = (brands || []).length;
  const navigation = {
    nextEl: ".swiper-controls-brand-news-next",
    prevEl: ".swiper-controls-brand-news-prev",
  };
  const swiperOptions: SwiperOptions = {
    slidesPerView: "auto",
    navigation: navigation,
    breakpoints: {
      1280: { slidesPerView: 7, slidesPerGroup: 7 },
    },
  };

  /**
   * Handlers
   */
  const onSlideChangeHandler = (swiper: ISwiper) => {
    checkControlsHandler(swiper);

    if (is("desktopL", ">")) {
      const navigationActive = brands[swiper.activeIndex];
      const index = (brands || [])
        .map((brand: IBrands) => brand.id)
        .indexOf(navigationActive.id);

      brandPickerHandler(navigationActive.id, index);
    }
  };

  return (
    <Flex
      backgroundColor="rgba(0,0,0, 0.6)"
      pl={{ _: 0, desktopS: morethanSeven ? 40 : 0 }}
      pr={{ _: 0, desktopS: morethanSeven ? 34 : 0 }}
      position="absolute"
      bottom={0}
      zIndex={2}
      overflow="hidden"
      alignItems="center"
      width="full"
    >
      <SwiperWrapper {...swiperOptions} onSlideChange={onSlideChangeHandler}>
        {brands.map((brand: IBrands, key: number) => (
          <SwiperSlide key={key}>
            <Flex
              width={{ _: 110, mobile: "calc(109vw / 4)", desktopS: 150 }}
              pt={{ _: "2px", tablet: 15 }}
              pb={{ _: "3px", mobile: 14, tablet: 28 }}
              m="auto"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              pointer
              onClick={() => brandPickerHandler(brand.id, key)}
            >
              <Container
                height={{ _: 20, tablet: 40 }}
                mb={{ _: 2.5, tablet: 0 }}
              >
                {active.id === brand.id && (
                  <Dots
                    sizes={{ desktop: 8, mobile: 4 }}
                    variants={AppConfig.setAnimationVariant(
                      "DOT_SPREAD_OUT_SMALL"
                    )}
                    color="#fff"
                  />
                )}
              </Container>

              <Container
                width={{ _: 110, mobile: "calc(109vw / 4)", desktopS: 170 }}
                height={{ _: 55, desktopS: 85 }}
                px={{ _: 2, tablet: 20, desktopXL: 0 }}
              >
                <Picture
                  src={brand.logo}
                  alt={brand.logo}
                  objectFit="contain"
                />
              </Container>
            </Flex>
          </SwiperSlide>
        ))}
      </SwiperWrapper>

      {/* Controls */}
      <Hidden till="desktopS">
        <BrandsModuleControls
          brands={brands}
          isNavigationState={isNavigationState}
        />
      </Hidden>
    </Flex>
  );
};

const SwiperWrapper = styled(Swiper)`
  .swiper-slide {
    width: fit-content;
  }
`;

export default LogoSlider;
