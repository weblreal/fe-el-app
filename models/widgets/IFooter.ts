import { ILink } from "../components/ILink";
import { IIconType } from "../components/IIcon";

export interface IFooter {
  footerData?: {
    links?: ILink[];
    externalLinks?: ILink[];
  };
  socialData?: ISocial[];
  subFooterData?: {
    copyright?: string;
    links?: ILink[];
  };
}

export interface ISocial {
  icon: IIconType;
  url: string;
}
