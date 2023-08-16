import { ICta } from "../components/ICta";

export interface IIntroNav {
  title?: string;
  longText?: string;
  subTitle?: string
  preTitle?: string;
  backgroundImage: string;
  cta?: ICta[];
  color?: string;
}
