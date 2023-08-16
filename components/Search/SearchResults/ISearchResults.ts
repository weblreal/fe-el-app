import { ICta } from "../../../models/components/ICta";

export interface ISearchResults {
  results: IResult[];
}

export interface IResult {
  cta: ICta;
  longText?: string;
  date?: string;
}
