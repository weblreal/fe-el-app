import { ICta } from "../../models/components/ICta";
import { IEvent } from "../../models/components/IEvent";
import { IGenericInfo } from "../../models/IGenericInfo";

export interface IPressRelease extends IGenericInfo {
  articleId?: string;
  files?: IFiles[][];
  allFiles?: IFiles[];
  singleFile?: IFiles;
  tags?: ITags[];
  share?: IShare;
  oneColumnDownloads?: boolean;
  event?: IEvent;
  downloadAllLabel?: string;
  noBorder?: boolean;
  downloadOnly?: boolean;
  tagCta?: ICta;
  isTitleLinkToPDF?: boolean;
  hideDay?: boolean;
}

export interface IFiles {
  label?: string;
  fileName?: string;
  url?: string;
  size?: number;
  category?: string;
  type?: string;
  longText?: string;
  id?: string;
}

export interface IShare {
  label?: string;
  url: string;
  title1?: string;
  title2?: string;
  title3?: string;
}

export interface ITags {
  [key: string]: string;
}

