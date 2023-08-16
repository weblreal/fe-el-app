import { ICta } from "../components/ICta";

export interface ISolutionsOpticians {
  title?: string;
  longText?: string;
  bannerImage: string;
  logo1?: string;
  logo2?: string;
  cta?: ICta;
  logo1Link?: ICta;
  logo2Link?: ICta;
  brands?: ISolutionBrands[];
}

export interface ISolutionBrands {
  logo: string;
  name?: string;
  longText?: string;
  cta?: ICta[];
}
