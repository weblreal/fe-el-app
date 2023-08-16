import { CSSProperties, JSXElementConstructor, ReactNode } from "react";

export interface ICarousel {
  children: ReactNode;
  variableWidth: number;
  gap?: number;
  nextHandler?: (active: number) => void;
  prevHandler?: (active: number) => void;
  center?: boolean;
  infinite?: boolean;
  disableInfiniteScroll?: boolean;
  duration?: number;
  threshold?: number;
  activeStyle?: CSSProperties;
  inactiveStyle?: CSSProperties;
  Next?: any;
  Prev?: any;
  Nav?: any;
  activeSetter?: number;
  drag?: boolean;
}
