import React, { ReactNode } from "react";
import { StyledSliderControls, StyledSliderRow } from "./StyledSlider";
import useActiveStyledSlider from "../../hooks/useActiveStyledSlider";
// Components
import Dot from "../CardNews/Dot";
import Container from "../UI/Container/Container";
import Flex from "../UI/Flex/Flex";
import Text from "../UI/Text/Text";

interface ISliderRow {
  children: ReactNode;
  header?: string;
  disabledArrow?: boolean;
}

export const SliderRow = ({ children, header, disabledArrow = false }: ISliderRow) => {
  // Hooks
  const { activeSlide, activeSlideHandler, slideRef, controlSlideHandler } =
    useActiveStyledSlider();

  // Variables
  const getValidChildren = (children: React.ReactNode) => {
    return React.Children.toArray(children).filter((child) =>
      React.isValidElement(child)
    ) as React.ReactElement[];
  };

  const slides = getValidChildren(children).length;

  // Variables
  const slideCount = slides !== undefined ? slides : 0;
  const isLastSlide = Math.abs(
    slideRef?.current?.innerSlider?.track?.props?.slidesToShow - slideCount
  );

  const settings = {
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    swipeToSlide: false,
    arrows: false,
    beforeChange: (_: number, next: number) => {
      activeSlideHandler(next);
    },
    customPaging: (index: number) => {
      return <Dot active={activeSlide === index} />;
    },
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: false,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
          dots: true,
        },
      },
      {
        breakpoint: 834,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
          dots: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          variableWidth: true,
          dots: true,
        },
      },
    ],
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {});
    }
    return child;
  });

  return (
    <Container overflow="hidden">
      <Container>
        {/* Row 1 */}
        <Flex
          justifyContent={{_:"space-between"}}
          alignItems={{ _: "center" }}
          mb={{ _: 3, desktopS: 4 }}
          px={{ _: 2, desktopS: 8 }}
        >
          {/* Header */}
          {header && (
            <Text fontFamily="Avenir Medium" fontSize="h2" fontWeight="500" >
              {header}
            </Text>
          )}

          {/* Controls */}
          {!disabledArrow && 
          <Container ml="auto">
            <StyledSliderControls
              controlSlideHandler={controlSlideHandler}
              prevOpacity={activeSlide === 0}
              nextOpacity={activeSlide >= Math.abs(isLastSlide)}
            />
          </Container>}
        </Flex>

        <StyledSliderRow {...settings} ref={slideRef}>
          {childrenWithProps}
        </StyledSliderRow>
      </Container>
    </Container>
  );
};
