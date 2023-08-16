import { ImageProps } from "next/image";

export type IObjectfit = "fill" | "contain" | "cover" | "none" | "scale-down";
export type IObjectPosition = "top" | "bottom" | "right" | "left" | "center";

export interface IPicture extends ImageProps {
  objectFit?: IObjectfit;
  objectPosition?: IObjectPosition;
  zIndex?: number;
  src: string;
  isAkamai?: boolean;
}
