import { ICta } from "./components/ICta";

export interface IGenericInfo {
  tag?: string;
  date?: string;
  title?: string;
  longText?: string;
  cta?: ICta;
  widgetContainerId?: number | string;
}
