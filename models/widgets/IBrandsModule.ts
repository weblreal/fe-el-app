import { INavigationState } from "../../hooks/useSwiperControls";
import { ICta } from "../components/ICta";

export interface IBrands {
  backgroundImage?: string[];
  backgroundVideo?: string[];
  logo: string;
  id: number;
  category: string;
  categoryCTA?: ICta;
}

export interface IActive {
  id: number;
  index: number;
  direction: "left" | "right" | "";
}

export interface IBrandsModuleProps {
  brands: IBrands[];
  active: IActive;
}

export interface IBackgroundSlide {
  brand: IBrands;
  active: IActive;
}

export interface ILogoSlider extends IBrandsModuleProps {
  brandPickerHandler: (id: number, index: number) => void;
}

export interface ILogoSliderControls {
  brands: IBrands[];
  isNavigationState: INavigationState;
}