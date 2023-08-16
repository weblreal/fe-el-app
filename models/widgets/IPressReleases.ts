import { ICta } from "../components/ICta";
import { IStoriesSlide } from "./IStoriesCarousel";

export interface IPressReleases {
  header?: string;
  cta?: ICta;
  slides: IStoriesSlide[];
}
