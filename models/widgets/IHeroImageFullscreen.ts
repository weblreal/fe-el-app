import { IResponsiveBackground } from "../IResponsiveBackground";

export interface IHeroImageFullscreen {
  header?: string;
  backgroundImage: IResponsiveBackground;
  backgroundVideo: string[];
  fullVideo: string[];
  longText?: string;
  videoPlayLabel?: string;
}
