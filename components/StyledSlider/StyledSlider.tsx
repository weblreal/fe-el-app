import Slider from "react-slick";
import styled from "styled-components";
import Center from "../UI/Center/Center";
import Flex from "../UI/Flex/Flex";
import Grid, { GridColumn } from "../UI/Grid/Grid";
import Icon from "../UI/Icon/Icon";

export const StyledSliderRow = styled(Slider)`
  .slick-list {
    overflow: visible;
    width: calc(100% - 32px);
    margin: auto;
  }

  .slick-slide {
    & > div {
      height: 100%;
    }

    height: inherit;
    &:not(:first-of-type) {
      margin-left: 16px;
    }
  }

  .slick-track {
    display: flex;
  }

  .slick-dots {
    position: relative;
    bottom: 0;
    padding-top: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    li {
      margin: 0;
      width: fit-content;
      height: auto;

      &:not(:last-of-type) {
        margin-right: 8px;
      }
    }
  }
`;

interface IStyledSliderControls {
  controlSlideHandler: (direction: "left" | "right") => void;
  prevOpacity?: boolean;
  nextOpacity?: boolean;
}

export const StyledSliderControls = ({
  controlSlideHandler,
  nextOpacity,
  prevOpacity,
}: IStyledSliderControls) => {
  return (
    <Grid
      width="fit-content"
      gridTemplateColumns="1fr 1fr"
      gridGap={2}
      ml={{ _: 0, desktopS: 3 }}
      mr={{ _: 0, desktopS: 2 }}
    >
      <GridColumn
        onClick={() => controlSlideHandler("left")}
        opacity={prevOpacity ? 0.2 : 1}
        pointer={!prevOpacity}
      >
        <StyledSliderPrev />
      </GridColumn>
      <GridColumn
        onClick={() => controlSlideHandler("right")}
        opacity={nextOpacity ? 0.2 : 1}
        pointer={!nextOpacity}
      >
        <StyledSliderNext />
      </GridColumn>
    </Grid>
  );
};

export const StyledSliderPrev = () => {
  return (
    <Flex
      width={48}
      height={48}
      alignItems="center"
      justifyContent="center"
      borderRadius={41}
      top="calc(50% - 20.5px)"
      pointer
    >
      <Center>
        <Icon type="arrow-left" size={31.5} />
      </Center>
    </Flex>
  );
};

export const StyledSliderNext = () => {
  return (
    <Flex
      width={48}
      height={48}
      alignItems="center"
      justifyContent="center"
      borderRadius={48}
      top="calc(50% - 20.5px)"
      pointer
    >
      <Center style={{ transform: "rotate(180deg)" }}>
        <Icon type="arrow-left" size={31.5} />
      </Center>
    </Flex>
  );
};
