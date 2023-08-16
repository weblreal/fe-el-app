import { motion } from "framer-motion";
import styled from "styled-components";
import { color, layout, space, position, border } from "styled-system";
import { IContainer } from "../Container/IContainer";

const Container = styled.div<
  | IContainer
  | {
      pointer?: boolean;
      backgroundTheme?: boolean;
      noSelect?: boolean;
      allPointer?: boolean;
    }
>`
  ${space}
  ${layout}
  ${color}
  ${position}
  ${border}
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

Container.defaultProps = {
  allPointer: true,
};

const MotionContainer = motion(Container);

export default MotionContainer;
