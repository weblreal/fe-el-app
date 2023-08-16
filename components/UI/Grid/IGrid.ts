import {
  AlignItemsProps,
  AlignSelfProps,
  ColorProps,
  GridProps,
  JustifyContentProps,
  JustifySelfProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from "styled-system";

export type IGridProps =
  | GridProps
  | LayoutProps
  | SpaceProps
  | JustifyContentProps
  | JustifySelfProps
  | AlignItemsProps
  | AlignSelfProps
  | ColorProps
  | PositionProps;
