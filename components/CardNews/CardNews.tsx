// Modules
import { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../UI/BackgroundImage/BackgroundImage";
import Link from "next/link";
import { ICardNews } from "./CardNews.interface";
import AppConfig from "../../logic/configs/AppConfig";
import useResponsive from "../../hooks/useResponsive";
// Components
import Button from "../UI/Button/Button";
import Flex from "../UI/Flex/Flex";
import { GridRow } from "../UI/Grid/Grid";
import Icon from "../UI/Icon/Icon";
import Text from "../UI/Text/Text";
import Span from "../UI/Span/Span";
import TextEllipsis from "../TextEllipsis/TextEllipsis";
import Container from "../UI/Container/Container";

const CardNews = ({
  backgroundImage,
  cta,
  date,
  title,
  onImageLoad,
}: ICardNews) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { is } = useResponsive();

  // Handler
  const mouseHoverHandler = () => {
    //Disable hover animation on smaller device
    is("tablet", "<") ? setIsHovered(false) : setIsHovered(true);
  };

  return (
    <Flex
      onMouseOver={mouseHoverHandler}
      onMouseOut={() => setIsHovered(false)}
      position="relative"
      width={{ _: "full", tablet: 416 }}
      maxWidth={{ _: 300, mobile: 340, tablet: 416 }}
      minHeight={{ _: 428, mobile: 428, tablet: 730 }}
      overflow="hidden"
    >
      {backgroundImage && (
        <Container
          initial={"unhovered"}
          animate={isHovered ? "hovered" : "unhovered"}
          variants={AppConfig.setAnimationVariant("HOVERED_SCALE_10")}
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          <BackgroundImage
            alt="bg"
            src={backgroundImage}
            objectPosition="center"
            onLoadingComplete={onImageLoad}
            priority
          />
        </Container>
      )}
      <BlurContainer
        initial={"unhovered"}
        animate={isHovered ? "hovered" : "unhovered"}
        variants={AppConfig.setAnimationVariant("HOVERED_OPACITY_40")}
        marginTop="auto"
        width="100%"
        minHeight={{ _: 175, desktopS: 178 }}
        p={{ _: 2, desktopS: 4 }}
        border="0px solid transparent"
      >
        <div className="blur"></div>
        {/* Date */}
        {date && (
          <GridRow gridRow={1} zIndex={1} mb={1}>
            <Text
              fontFamily="Avenir Light"
              color="rgba(255,255,255, 0.8)"
              backgroundColor="transparent"
              fontSize={["regular", "h5"]}
            >
              {AppConfig.html(date)}
            </Text>
          </GridRow>
        )}

        {/* Title */}
        {title && (
          <TextEllipsis
            fontSize={["h5", "22px"]}
            fontFamily="Avenir Bold"
            fontWeight="bolder"
            color="white"
            lineCountD={2}
            lineCountM={3}
            zIndex={1}
            mb={1}
          >
            {AppConfig.html(title)}
          </TextEllipsis>
        )}

        {/* CTA */}
        {cta && cta.url && (
          <GridRow gridRow={3} zIndex={1} mt="auto">
            <Button variant="link" color="white">
              <Link href={cta.url}>
                <Flex alignItems="center">
                  <Text
                    fontWeight="300"
                    color="rgba(255,255,255, 0.8)"
                    backgroundColor="transparent"
                    fontSize={["regular", "h5"]}
                  >
                    <Span>{cta.label}</Span>
                  </Text>
                  <Icon type="angle-right-b" color="white" size={24} />
                </Flex>
              </Link>
            </Button>
          </GridRow>
        )}
      </BlurContainer>
    </Flex>
  );
};

const BlurContainer = styled(Flex)<{ backgroundColor?: string }>`
  user-select: none;
  position: relative;

  flex-direction: column;

  .blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    @supports not (-webkit-touch-callout: none) {
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.backgroundColor};
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        -moz-backdrop-filter: blur(20px);
        -o-backdrop-filter: blur(20px);
        -ms-backdrop-filter: blur(20px);
      }
    }

    @supports (-webkit-touch-callout: none) {
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(18, 18, 18, 0.44);
      }
    }
  }
`;

export default CardNews;
