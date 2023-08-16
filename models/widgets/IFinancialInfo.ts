import { IEvent } from "../components/IEvent";
import { ILink } from "../components/ILink";

export interface IFinancialInfo {
  header1?: string;
  header2?: string;
  subtitle?: string;
  events?: IEvent[];
  cta?: ILink;
  cta2?: ILink;
}
