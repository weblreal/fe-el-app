//Modules
import React from "react";
import styled from "styled-components";
import useGetTheme from "../../hooks/useGetTheme";

//Component
import Column from "../UI/Column/Column";
import Container from "../UI/Container/Container";
import Picture from "../UI/Picture/Picture";
import Text from "../UI/Text/Text";
import Flex from "../UI/Flex/Flex";
import {
  ITooltipConformity,
  ITooltipConformityContainer,
} from "../../models/components/ITooltipConformity";
import AppConfig from "../../logic/configs/AppConfig";

const TooltipContainer = styled.div<ITooltipConformityContainer>`
  position: relative;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: ${(props) => props.zIndex};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: visibility 0s linear ${(props) => (props.show ? "0s" : "0.3s")},
    opacity 0.1s linear;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  position: relative;

  &:before {
    content: "";
    width: 0;
    height: 0;

    position: absolute;
    border-style: solid;
  }
`;

const TriangleBottomLeft = styled(Triangle)`
  border-width: 13px 0 0 12px;
  border-color: ${(props: any) =>
    props.theme === "Light Theme"
      ? "transparent transparent transparent black"
      : "transparent transparent transparent white"};

  &:before {
    border-width: 12px 0 0 10px;
    border-color: ${(props: any) =>
      props.theme === "Light Theme"
        ? "transparent transparent transparent white"
        : "transparent transparent transparent black"};

    z-index: 10;
    top: -11px;
    left: -11px;
  }
`;

const TriangleBottomRight = styled(Triangle)`
  border-width: 0 0 13px 12px;
  border-color: ${(props: any) =>
    props.theme === "Light Theme"
      ? "transparent transparent black transparent"
      : "transparent transparent white transparent"};
  transform: rotate(0deg);

  &:before {
    border-width: 0 0 12px 10px;
    border-color: ${(props: any) =>
      props.theme === "Light Theme"
        ? "transparent transparent white transparent"
        : "transparent transparent  black transparent"};
    z-index: 10;
    top: 3px;
    left: -11px;
  }
`;

const TooltipConformity = ({
  title,
  description,
  image,
  show,
  top,
  left,
  zIndex,
  pointerLeft,
  onMouseLeave,
  onMouseOver,
}: ITooltipConformity) => {
  const { name: themeName } = useGetTheme();

  return (
    <TooltipContainer
      show={show}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      top={top}
      left={left}
      zIndex={zIndex}
    >
      <Flex
        width={"235px"}
        position={"absolute"}
        top="-0.7rem"
        justifyContent={pointerLeft ? "flex-start" : "flex-end"}
        zIndex={2}
      >
        {pointerLeft ? (
          <TriangleBottomLeft theme={themeName} />
        ) : (
          <TriangleBottomRight theme={themeName} />
        )}
      </Flex>
      <Container
        border={"thin"}
        borderColor={themeName === "Light Theme" ? "black" : "white"}
        minWidth={"235px"}
        maxWidth={"300px"}
        maxHeight={"300px"}
        position={"absolute"}
        backgroundColor={themeName === "Light Theme" ? "white" : "black"}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Column
          justifyContent={"center"}
          justifyItems={"center"}
          alignItems={"center"}
          pt={"1rem"}
          pb="1rem"
        >
          <Container width={"196px"}>
            <Text fontSize={"13px"} fontWeight={"bold"}>
              {AppConfig.html(title)}
            </Text>
          </Container>
          <Container width={"196px"} height={"180px"}>
            <Picture src={image} alt="title" objectFit="contain"></Picture>
          </Container>
          <Container width={"196px"}>
            <Text fontSize={"12px"}>{description}</Text>
          </Container>
        </Column>
      </Container>
    </TooltipContainer>
  );
};

export default TooltipConformity;
