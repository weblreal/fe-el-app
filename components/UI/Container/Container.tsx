import { motion } from "framer-motion";
import styled from "styled-components";
import { color, layout, space, position, border, shadow } from "styled-system";
import { IContainer } from "./IContainer";
import { HTMLAttributes } from "react";
interface IContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, keyof IContainer>,
    IContainer {}

const ContainerStyle = styled.div<IContainerProps>`
  ${space}
  ${layout}
  ${color}
  ${position}
  ${border}
  ${shadow}
  cursor: ${(props: any) => (props.pointer ? "pointer" : "inherit")};
  background-color: ${(props: any) =>
    props.backgroundTheme ? props.theme.colors.background : "none"};
  user-select: ${(props: any) => (props.noSelect ? "none" : "initial")};
  pointer-events: ${(props: any) =>
    props.allPointer === true
      ? "all"
      : props.allPointer === undefined
      ? "unset"
      : props.allPointer === false
      ? "none"
      : "all"};
`;

const Container = motion<IContainerProps>(ContainerStyle);

Container.defaultProps = {
  allPointer: true,
};

export default Container;
