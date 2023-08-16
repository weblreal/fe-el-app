import { ICta } from "./ICta";

export interface IBanner {
  title?: string;
  title2?: string;
  picture1?: string;
  picture2?: string;
  picture1M?: string; //Mobile image
  picture2M?: string; //Mobile image
  longText?: string;
  longText2?: string;
  cta?: ICta;
}
