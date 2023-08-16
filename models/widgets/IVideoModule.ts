import { ICta } from "../components/ICta";

export interface IVideoModule {
  title: string;
  text: string;
  text2: string;
  backgroundVideo: string[];
  fullVideo: string[];
  cta: ICta[];
  hidePauseIcon?: boolean;
}
