import { ICta } from "../components/ICta";

export interface IImagesBrands {
  title?: string;
  brands?: IBrand[];
}

export interface IBrand {
  title?: string;
  backgroundImage: string[];
  cta?: ICta;
}
