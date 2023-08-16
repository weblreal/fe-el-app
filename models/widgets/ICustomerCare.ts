import { IBrandsItem } from "./IBrandsGrid";

export interface ICustomerCare {
  header: string;
  stepLabel: string;
  stepLabel2: string;
  brandsSelection: IBrandsSelection[];
  templateText: string;
  countryPlaceholder: string;
}

export interface IBrandsSelection extends IBrandsItem {
  countries: ICountries[];
  logo: string;
  id: number;
}

export interface ICountries {
  label: string;
  value: string;
  parameterOne?: string;
  parameterTwo?: string;
}