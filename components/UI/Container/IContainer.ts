import { MotionProps } from "framer-motion";
import {
  BorderProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
} from "styled-system";

export interface IContainer
  extends MotionProps,
    SpaceProps,
    LayoutProps,
    PositionProps,
    BorderProps,
    ColorProps,
    ShadowProps {
  pointer?: boolean;
  backgroundTheme?: boolean;
  noSelect?: boolean;
  allPointer?: boolean;
}
// export type IContainer = MotionProps &
//   SpaceProps &
//   LayoutProps &
//   PositionProps &
//   BorderProps &
//   ColorProps & {
//     pointer?: boolean;
//     backgroundTheme?: boolean;
//     noSelect?: boolean;
//     allPointer?: boolean;
//   };
