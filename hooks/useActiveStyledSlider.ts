import { useState, useRef } from "react";
import Slider from "react-slick";

interface IActiveStyledSliderProps {}
interface IActiveStyledSlider {
  activeSlide: number;
  slideRef: any;
  activeSlideHandler: (index?: number) => void;
  controlSlideHandler: (direction: "left" | "right") => void;
}

const useActiveStyledSlider = (): IActiveStyledSlider => {
  // Hooks
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const slideRef = useRef<Slider>(null);

  // Handlers
  const activeSlideHandler = (index?: number) => {
    if (index !== undefined) {
      setActiveSlide(index);
    }
  };

  const controlSlideHandler = (direction: "left" | "right") => {
    const { current } = slideRef;
    if (!current) return;

    if (direction === "left") {
      current.slickPrev();
    } else {
      current.slickNext();
    }
  };

  return { activeSlide, activeSlideHandler, controlSlideHandler, slideRef };
};

export default useActiveStyledSlider;
