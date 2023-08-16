import { ReactNode } from "react";
import { SpaceProps } from "styled-system";

export interface IAccordion {
  header?: string;
  children?: ReactNode;
  border?: boolean;
  spaceProps?: SpaceProps;
  initialState?: boolean;
}
