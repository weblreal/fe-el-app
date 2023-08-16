import { IBackgroundImage } from "../../models/components/IBackground";
import { ICta } from "../../models/components/ICta";

export interface ICardCareers {
  backgroundImage: IBackgroundImage;
  title?: string;
  paragraph?: string;
  cta?: ICta;
}
