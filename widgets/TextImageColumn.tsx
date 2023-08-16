import { useEffect, useState } from "react";
import { ITextImageColumn } from "../models/widgets/ITextImageColumn";
import styled from "styled-components";
// Components
import { SliderRow } from "../components/StyledSlider/SliderRow";
import Container from "../components/UI/Container/Container";
import Hidden from "../components/UI/Hidden/Hidden";
import Grid from "../components/UI/Grid/Grid";
import TextImageContent from "../components/TextImageColumn/TextImageContent";
import Text from "../components/UI/Text/Text";


const TextImageColumn = ({ content, title }: ITextImageColumn) => {
  // Hooks
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // Variables
  return (
  <Container margin={{_:"40px 0px",tablet:"80px 32px"}} overflow="hidden">
    <Hidden till="desktopS">
      <Grid justifyContent="space-evenly" >
        <Grid gridTemplateColumns={"repeat(3, fit-content(416px));"} gridGap="32px">
          <Container maxWidth="416px">
            <Text fontSize="48px" fontFamily="Avenir Medium">{title}</Text>
          </Container>

          {content.map((item, i) => (
            <TextImageContent
              backgroundImage={item?.backgroundImage}
              longText = {item?.longText}
              title={item.title}
              key={i}
            />
          ))}
        </Grid>
      </Grid>
    </Hidden>
      
    <Hidden from="desktopS">
      <Carousel>
        {width && width > 765 && <Text fontSize="32px" fontFamily="Avenir Medium" textAlign="center">{title}</Text>}
        <SliderRow header={width && width < 765 ? title : ""} disabledArrow={width ? width > 765 : false}>
          {content.map((item, i) => (
            <TextImageContent
              backgroundImage={item?.backgroundImage}
              longText = {item?.longText}
              title={item.title}
              key={i}
            />
          ))}
        </SliderRow>
      </Carousel>
    </Hidden>
    </Container>);
};

const Carousel = styled<any>(Container)`
.slick-track{
  width: 100%;
  justify-content: center;
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
  margin: -1px auto;
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
`;

export default TextImageColumn;
