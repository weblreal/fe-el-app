import {
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  BorderProps,
} from "styled-system";

export interface IFlex
  extends FlexboxProps,
    SpaceProps,
    LayoutProps,
    ColorProps,
    PositionProps,
    BorderProps {}
