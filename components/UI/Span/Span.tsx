import styled from "styled-components";
import {
  color,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

const Span = styled.span<TypographyProps | LayoutProps | SpaceProps>`
  ${typography}
  ${color}
  ${layout}
  ${space}
`;
export default Span;
