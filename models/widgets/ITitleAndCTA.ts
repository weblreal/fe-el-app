import { ICta } from "../components/ICta";

export interface ITitleAndCTA {
  title: string;
  cta?: ICta;
  longText?: string;
  center?: boolean;
}
