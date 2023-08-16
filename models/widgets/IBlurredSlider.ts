export interface IBlurredSlider {
  backgroundImage?: string;
  header?: string;
  longText?: string;
  slides: ISlide[];
}

export interface ISlide {
  alt: string;
  src: string;
  longText?: string;
  longText2?: string;
  header?: string;
}
