import { ICta } from "../../models/components/ICta";
import { ISuperHeader } from "../SuperHeader/ISuperHeader";

export interface INavigation {
  LevelOneLinks?: ILevelOneLinks[];
  logo?: string;
  superHeader?: ISuperHeader;
  transparent?: boolean;
  footerLinks?: ICta[];
  analyticsId?: string;
}

export interface ILevelOneLinks extends ILink {
  LevelTwoLinks?: ILevelTwoLinks[];
  header?: string;
  longText?: string;
  analyticsId?: string;
}

export interface ILevelTwoLinks extends ILink {
  LevelThreeLinks?: ILevelThreeLinks[];
  header?: string;
  longText?: string;
  analyticsId?: string;
}

export interface ILevelThreeLinks extends ILink {
  LevelThreeLinks?: ILink[];
  analyticsId?: string;
}

interface ILink {
  label: string;
  url?: string;
}
