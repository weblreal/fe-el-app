// Modules
import styled from "styled-components";
import {
  color,
  fontSize,
  fontWeight,
  layout,
  lineHeight,
  position,
  space,
  typography,
} from "styled-system";
import { IText } from "./IText";

const Text = styled.div<
  | IText
  | {
      transparent?: boolean;
      capitalize?: boolean;
      userSelect?: boolean;
      color?: any;
      noPointer?: boolean;
      allPointer?: boolean;
    }
>`
  color: ${(props: any) =>
    !props.transparent
      ? props.theme.colors.text
      : "inherit"}; // This is to use global theme
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${position}
  &:first-letter {
    text-transform: ${(props: any) =>
      props.capitalize ? "capitalize" : "inherit"};
  }
  // user-select: ${(props: any) => (props.userSelect ? "unset" : "none")};
  pointer-events: ${(props: any) =>
    props.allPointer ? "all" : props.noPointer ? "none" : "unset"};

  img {
    height: 100%;
    width: 100%;
    max-width: 100%;
    max-height: auto;
  }
`;

export default Text;
