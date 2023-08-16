import { ICta } from "../components/ICta";

export interface ICareersCarousel {
  header?: string;
  slides: ICareersSlide[];
}

export interface ICareersSlide {
  backgroundImage?: string;
  title?: string;
  paragraph?: string;
  cta?: ICta;
}
