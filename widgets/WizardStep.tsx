import React from "react";
import styled from "styled-components";
import { SliderRow } from "../components/StyledSlider/SliderRow";
import Column from "../components/UI/Column/Column";
import Container from "../components/UI/Container/Container";
import Grid from "../components/UI/Grid/Grid";
import Hidden from "../components/UI/Hidden/Hidden";
import Text from "../components/UI/Text/Text";
import WizardStepPhase from "../components/WizardStepPhase/WizardStepPhase";
import AppConfig from "../logic/configs/AppConfig";
import { IPhase, IWizardStep } from "../models/widgets/IWizardStep";

const WizardStep = ({ title, phases, text }: IWizardStep) => {
  return (
    <>
      {/* MOBILE DESIGN */}
      <Hidden from="tablet">
        <Carousel maxWidth="screen" width="full" py="40px" overflow="hidden">
          <SliderRow header={title}>
            {phases?.map((phase: IPhase, index: number) => (
              <WizardStepPhase
                key={index}
                index={index}
                title={phase.title}
                date={phase.date}
                text={phase.text}
                bgImg={phase.bgImg}
              />
            ))}
          </SliderRow>
          <Text
            maxWidth="screen2"
            px="16px"
            width="full"
            m="66px auto 0"
            fontFamily="Avenir Light"
            fontSize="16px"
          >
            {AppConfig.html(text)}
          </Text>
        </Carousel>
      </Hidden>

      {/* DESKTOP DESIGN */}
      <Hidden till="tablet">
        <Container
          maxWidth="screen"
          width="full"
          p="56px 64px 80px"
          overflow="hidden"
          m="0 auto"
        >
          <Text textAlign="center" fontFamily="Avenir Medium" fontSize="48px">
            {title}
          </Text>
          <Grid
            m="72px auto"
            maxWidth="screen2"
            width="full"
            gridGap="24px"
            gridTemplateColumns={{
              tablet: "repeat(auto-fill, minmax(300px, 1fr))",
              desktopS: "repeat(auto-fit, minmax(368px, 1fr))",
            }}
            gridAutoRows="314px"
          >
            {phases?.map((phase: IPhase, index: number) => (
              <WizardStepPhase
                key={index}
                index={index}
                title={phase.title}
                date={phase.date}
                text={phase.text}
                bgImg={phase.bgImg}
              />
            ))}
          </Grid>
          <Text
            maxWidth="screen2"
            width="full"
            m="0 auto"
            fontFamily="Avenir Light"
            fontSize="24px"
          >
            {AppConfig.html(text)}
          </Text>
        </Container>
      </Hidden>
    </>
  );
};

const Carousel = styled(Container)`
  .slick-track {
    display: flex;
  }

  .slick-slide {
    margin-right: 32px;
  }

  .slick-dots {
    position: relative;
    margin: 23px 0 16px;
    width: 752px;
    left: 50%;
    transform: translateX(-50%);
    display: flex !important;
    justify-content: space-between;
    z-index: 10;
  }

  .slick-dots li {
    display: flex;
    align-items: center;
    width: 95%;
    height: 2px;
    span {
      display: none;
    }
    background-color: rgba(0, 0, 0, 0.2);
  }

  .slick-dots li.slick-active {
    height: 6px;
    background-color: #000;
  }

  @media (min-width: 1280px) {
    .slick-list {
      transition: padding-left 250ms ease;
    }
  }

  @media (max-width: 834px) {
    .slick-slide {
      margin-right: 8px;
    }

    .slick-dots {
      width: 92%;
      margin: -1px 0 16px;
    }
  }
`;

export default WizardStep;
