import { ICta } from "../components/ICta";

export interface IStoriesCarousel {
  header?: string;
  longText?: string;
  cta?: ICta;
  slides: IStoriesSlide[];
}

export interface IStoriesSlide {
  backgroundImage?: string;
  date?: string;
  title?: string;
  cta?: ICta;
}
