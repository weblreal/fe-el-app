import { IBackgroundImage } from "../components/IBackground";
import { IResponsiveBackground } from "../IResponsiveBackground";

export interface IImageBlock {
  backgroundImage: IResponsiveBackground;
  objectFit?: {
    desktop?: "contain" | "cover";
    mobile?: "contain" | "cover";
  };
  longText?: string;
}
