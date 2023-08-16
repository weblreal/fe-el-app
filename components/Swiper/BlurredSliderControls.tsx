import { useState } from "react";
import useThrottling from "../../hooks/useThrottling";
import SwiperCore from "swiper";
import useResponsive from "../../hooks/useResponsive";
import useSwiperControls from "../../hooks/useSwiperControls";

const BlurredSliderControls = () => {
  // Hooks
  const { is } = useResponsive();
  const [isThrottling, throttlingHandler] = useThrottling(1100);
  const [isButtonSleeping, setIsButtonSleeping] = useState(false);
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [activeRealIndex, setActiveRealIndex] = useState<number>(0);
  const [activeRealIndexDelay, setActiveRealIndexDelay] = useState<number>(0);
  const [navigationDirection, setNavigationDirection] =
    useState<"right" | "left" | "initial" | "rightReset" | "leftReset">(
      "initial"
    );
  const [navigationDirectionMobile, setNavigationDirectionMobile] =
    useState<"rightM" | "leftM" | "initialM" | "rightMReset" | "leftMReset">(
      "initialM"
    );

  // Handlers
  const activeRealIndexHandler = (e: any) => {
    setTimeout(() => {
      setActiveRealIndexDelay(e.realIndex - 2);
    }, 600);
    setActiveRealIndex(e.realIndex - 2);
  };

  const bulletClickHandler = (index: number) => {
    swiper?.slideTo(index, 900);
  };

  const navigationHandler = (direction: "right" | "left") => {
    if (isThrottling || isButtonSleeping) return;

    // Mobile Animation
    if (is("tablet", "<")) {
      setNavigationDirectionMobile((prev) => {
        const directionM = direction + "M";
        if (prev === directionM) {
          return `${directionM}Reset` as "rightMReset" | "leftMReset";
        } else {
          return directionM as "rightM" | "leftM";
        }
      });

      return;
    }

    // Disable button click for 1 second
    setIsButtonSleeping(true);
    setTimeout(() => {
      setIsButtonSleeping(false);
    }, 1000);
    setNavigationDirection((prev) =>
      prev === direction ? `${direction}Reset` : direction
    );

    // Animation navigation swiping delay
    setTimeout(() => {
      direction === "right" ? swiper?.slideNext() : swiper?.slidePrev();
    }, 200);
  };

  return {
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
  };
};

export default BlurredSliderControls;
