// Modules
import { useState, useRef } from "react";
import { ICareersSlide } from "../models/widgets/ICareersCarousel";
import useResponsive from "./useResponsive";
import { Swiper as SwiperType } from "swiper";

export interface INavigationState {
  isEnd: boolean;
  isBeginning: boolean;
  activeIndex: number;
}

const useSwiperControls = () => {
  // Hooks
  const [isNavigationState, setIsNavigationState] = useState<INavigationState>({
    isEnd: false,
    isBeginning: true,
    activeIndex: 0,
  });
  const [disableSwipe, setDisableSwipe] = useState<boolean>(true);
  const { is } = useResponsive();
  const swiperRef = useRef<SwiperType>();

  // Handlers
  const slideDisablerHandler = (slides: ICareersSlide[]) => {
    slides.length <= 3
      ? setDisableSwipe(is("desktopS", "<") && slides.length <= 3)
      : setDisableSwipe(true);
  };

  const checkControlsHandler = (e: any) => {
    setIsNavigationState((prev) => ({
      ...prev,
      isBeginning: e.isBeginning,
      isEnd: e.isEnd,
      activeIndex: e.activeIndex,
    }));
  };

  const controlEndHandler = (e: any) => {
    setIsNavigationState((prev) => ({
      ...prev,
      isBeginning: !e.isEnd,
      isEnd: e.isEnd,
    }));
  };

  const controlStartHandler = (e: any) => {
    setIsNavigationState((prev) => ({
      ...prev,
      isBeginning: e.isBeginning,
      isEnd: !e.isBeginning,
    }));
  };

  const additionalSlidesNavigationHandler = (e: any, slides: any[]) => {
    const end = slides.length - 1;
    const beginning = 0;
    const additionalSlides = 2;
    setIsNavigationState((prev) => ({
      ...prev,
      isBeginning: beginning !== e.realIndex - additionalSlides,
      isEnd: end !== e.realIndex - additionalSlides,
    }));
  };

  const navigationDirectionHandler = (direction: "prev" | "next"): void => {
    if (direction === "prev") swiperRef.current?.slidePrev();
    if (direction === "next") swiperRef.current?.slideNext();
  };

  return {
    checkControlsHandler,
    isNavigationState,
    controlEndHandler,
    controlStartHandler,
    slideDisablerHandler,
    disableSwipe,
    additionalSlidesNavigationHandler,
    navigationDirectionHandler,
    swiperRef,
  };
};

export default useSwiperControls;
