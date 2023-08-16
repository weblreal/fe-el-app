import { useRef, useState } from "react";
import AppConfig from "../logic/configs/AppConfig";
import { ITestimonial } from "../models/widgets/ITestimonial";
import { ITestimonialCards } from "../components/Testimonial/ITestimonialCards";

// Components
import Container from "../components/UI/Container/Container";
import Text from "../components/UI/Text/Text";
import useThrottling from "../hooks/useThrottling";
import TestimonialCard from "../components/Testimonial/TestimonialCard";
import { SliderRow } from "../components/StyledSlider/SliderRow";
import useResponsive from "../hooks/useResponsive";
import styled from "styled-components";
import Flex from "../components/UI/Flex/Flex";

const Testimonial = ({ title, testimonialCards }: ITestimonial) => {

  const [active, setActive] = useState<number>(0);
  const [isThrottling, throttleHandler] = useThrottling(750);
  const sliderRef = useRef<any>(null);
  const { is } = useResponsive();

  //Functions
  const setActiveHandler = (index: number) => {
    if (isThrottling) return;

    setActive(index);
    throttleHandler();

    if (sliderRef.current) {
      sliderRef.current?.slickGoTo(index);
    }
  };

  const cards = testimonialCards.map((card: ITestimonialCards, key: number) => (
    <Container key={key} maxWidth={{_: "340px", tablet: "full"}}>
      <TestimonialCard
        name={card.name}
        title={card.title}
        paragraph={card.paragraph}
        picture={card.picture}
      />
    </Container>
  ))

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
      {/* Header for Desktop */}
      {is("desktopS", ">") &&
        <Text
          maxWidth="screen2"
          marginLeft="auto"
          marginRight="auto"
          textAlign="center"
          fontSize="48px"
          fontFamily="Avenir Medium"
          marginBottom="16px"
        >
          {title}
        </Text>
      }

      <CarouselContainer>
        <SliderRow header={is("tablet", "<") ? title : ""} disabledArrow={is("tablet", "<") ? false : true}>
          {cards}
        </SliderRow>
      </CarouselContainer>
    </Container>
  );
};
const CarouselContainer = styled(Container)`
.slick-track {
  justify-content: center;
  width: 100%;
}
.slick-slide {
  flex-basis: 33%;
}
.slick-dots li span{
  width: 100%;
  background-color: rgba(0,0,0,0.2);
  border: none !important;
  border-radius: 0px !important;
  height: 5px;
}

.slick-dots{
  position: relative;
  margin: -1px 16px;
  width: 90%;
  display: flex !important;
  justify-content: space-between;
  z-index: 10;
}

.slick-dots li{
  display: flex;
  align-items: center;
  width: 95%;
  height: 5px;
  background-color: rgba(0,0,0,0.2);
}

.slick-dots li.slick-active span{
  height: 8px;
  background-color: #000;
}

@media only screen and (max-width: 830px) {
  .slick-slide {
    flex-basis: unset;
  }
}
`
export default Testimonial;
