export interface ITooltipConformity {
  title?: string;
  description?: string;
  image: string;
  show?: boolean;
  onBlur?: (event: any) => void;
  onMouseLeave?: (event: any) => void;
  onMouseOver?: (event: any) => void;
  top?: string;
  left?: string;
  zIndex?: string;
  pointerLeft?: boolean;
}

export interface ITooltipConformityContainer {
  show?: boolean;
  top?: string;
  left?: string;
  zIndex?: string;
}
