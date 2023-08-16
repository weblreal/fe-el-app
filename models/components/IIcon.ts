export interface IIcon {
  type: IIconType;
  color?: string;
  size?: number;
  className?: string;
  onClick?: (event: any) => void;
  onMouseLeave?: (event: any) => void;
}

export interface ISvg {
  color?: string;
  size?: number;
  className?: string;
  onClick?: (event: any) => void;
  onMouseLeave?: (event: any) => void;
}

export type IIconType =
  | "arrow-down"
  | "angle-down"
  | "essilor-dot"
  | "angle-left"
  | "angle-right"
  | "angle-right-b"
  | "angle-up"
  | "arrow-left"
  | "arrow-right"
  | "calendar"
  | "check"
  | "clock"
  | "close"
  | "copy"
  | "download"
  | "alert"
  | "file"
  | "filter"
  | "pause"
  | "player"
  | "player2"
  | "search"
  | "upload"
  | "external-link"
  | "linkedin"
  | "facebook"
  | "twitter"
  | "instagram"
  | "mail"
  | "plus"
  | "pause"
  | "checkboxchecked"
  | "checkboxempty"
  | "cancel"
  | "announcement"
  | "infotip";
