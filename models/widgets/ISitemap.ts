import { ICta } from "../components/ICta";

export interface ISitemap {
  linkList: ILinkList[];
}

export interface ILinkList {
  title: string;
  links: ICta[];
}
