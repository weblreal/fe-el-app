// Components
import styled, { css } from "styled-components";
import {
  color,
  ColorProps,
  compose,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  layout,
  LayoutProps,
  size,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

import { variant } from "styled-system";
import { IButton } from "./IButton";

type ButtonProps =
  | { variant: IButton }
  | SpaceProps
  | LayoutProps
  | ColorProps
  | FontSizeProps
  | FontWeightProps
  | TypographyProps;

type IButtonProps = ButtonProps & {
  disabled?: boolean;
};

const Button = styled("div")<IButtonProps>(
  compose(layout, space, color, typography, fontSize, fontWeight),
  variant({
    scale: "buttons",
  }),
  css`
    ${fontSize}
    ${color}
    ${typography}
    ${fontWeight}
    ${layout}
    ${size}
  `,
  ({ disabled }: IButtonProps) => ({
    ...(disabled && {
      pointerEvents: "none",
      backgroundColor: "gray",
    }),
  })
);

Button.defaultProps = {
  padding: "13px 18px",
};

export default Button;
