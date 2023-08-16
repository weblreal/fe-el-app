// Modules
import { useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import useResponsive from "../../hooks/useResponsive";
// Components
import Container from "../UI/Container/Container";
import Picture from "../UI/Picture/Picture";
import Span from "../UI/Span/Span";
import { useState } from "react";

const GenerateSlideElements = (
  slides: any[],
  runAnimation: boolean
): JSX.Element[] => {
  // Hooks
  const { is } = useResponsive();
  const [isAnimate, setIsAnimate] = useState<boolean>(() => runAnimation);

  // Variables
  const prependedSlide = slides[slides.length - 2]; // last slide prepend to first real slide
  const prependedSlide2nd = slides[slides.length - 1]; // second Last slide becomes the first slide
  const appendedSlide = slides[0]; // first slide append to real last slide
  const appendedSlide2nd = slides[1]; // second to first slide becomes the last slide

  // Effects
  useEffect(() => {
    setIsAnimate(runAnimation);
  }, [runAnimation]);

  // Helper function to generate slide copy
  const generateSlideElement = (
    wrapperType: "wrapper-start" | "wrapper-end",
    slidePlacement: any,
    index?: number // Add an index parameter
  ): JSX.Element => {
    // Slide copy content
    const content = (
      <Container
        height={300}
        width={is("tablet", "<") ? 290 : 572}
        opacity={0.3}
      >
        <Picture
          src={slidePlacement.src}
          alt={slidePlacement.alt}
          height={300}
          width={is("tablet", "<") ? 290 : 572}
        />
      </Container>
    );

    // Stagger children animation variants
    const staggerVariants = is("tablet", "<")
      ? {
          visible: {
            y: 0,
          },
          hidden: {
            y: 40,
          },
        }
      : {
          visible: (i: number) => ({
            y: 0,
            transition: { ease: "easeIn", duration: 1, delay: i * 0.09 },
          }),
          hidden: { y: 300 },
        };

    return wrapperType === "wrapper-start" ? (
      // Prepend Slide
      <Span
        slot={wrapperType}
        style={{ width: "fit-content", paddingRight: "16px" }}
      >
        {/* Animation */}
        <Container
          initial="hidden"
          animate={isAnimate ? "visible" : "hidden"}
          variants={staggerVariants}
          custom={index}
        >
          {content}
        </Container>
      </Span>
    ) : (
      // Append Slide
      <SwiperSlide slot={wrapperType} style={{ width: "fit-content" }}>
        {content}
      </SwiperSlide>
    );
  };
  // generate 2 slides prepended and 2 slides appended in the main swiperslide
  return [
    generateSlideElement("wrapper-start", prependedSlide, 0),
    generateSlideElement("wrapper-start", prependedSlide2nd, 1),
    generateSlideElement("wrapper-end", appendedSlide),
    generateSlideElement("wrapper-end", appendedSlide2nd),
  ];
};

export default GenerateSlideElements;
