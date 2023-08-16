// Modules
import React, { ReactNode } from "react";
import styled from "styled-components";
import { IHeader } from "./IHeader";
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";
// Components

interface IProps extends TypographyProps, ColorProps, LayoutProps, SpaceProps {
  element?: any;
  children: ReactNode;
  onClick?: (events: any) => void;
}

const Header = ({ element = "div", children, onClick, ...style }: IProps) => {
  const HeaderStyle = styled.div<IHeader>`
    font-family: var(--AvenirBold);
    font-weight: 900;
    color: ${(props: any) => !props.transparent ? props.theme.colors.text : "inherit"}; // This is to use global theme

    ${typography}
    ${color}
    ${layout}
    ${space}
  `;

  return (
    <>
      <HeaderStyle as={element} onClick={onClick} {...style}>
        {children}
      </HeaderStyle>
    </>
  );
};

export default Header;
