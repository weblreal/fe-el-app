import { ICta } from "../components/ICta";

export interface IInvestorKit {
  header?: string;
  downloadLink?: string;
  files?: IInvestorFile[];
  cta?: ICta;
  backgroundImage?: string;
}

export interface IInvestorFile {
  date?: string;
  url: string;
  fileName: string;
  label: string;
  id?: string;
}
