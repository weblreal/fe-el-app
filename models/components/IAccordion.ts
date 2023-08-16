import { IFiles } from "../../components/PressRelease/IPressRelease";
import { IVideo } from "../IVideo";
import { ICta } from "./ICta";

export interface IAccordion<T> {
  header?: string;
  toggleLabelOn?: string;
  toggleLabelOff?: string;
  longText?: string;
  pressRelease?: T;
  cta?: ICta;
  allFiles?: IFiles[];
  open?: boolean;
  onClick?: () => void;
  video?: IVideo;
}
