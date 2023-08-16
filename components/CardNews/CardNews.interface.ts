import { IBackgroundImage } from "../../models/components/IBackground";
import { ICta } from "../../models/components/ICta";

export interface ICardNews {
  backgroundImage: IBackgroundImage;
  date?: string;
  title?: string;
  cta?: ICta;
  onImageLoad?: () => void;
}
