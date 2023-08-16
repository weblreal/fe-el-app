import { IShare } from "../../components/PressRelease/IPressRelease";
import { ICta } from "../components/ICta";
import { ICrops, IPictureCrops } from "../ICrops";
import { IGenericInfo } from "../IGenericInfo";

export interface IBrandsNewsRow extends IGenericInfo {
  news?: IBrandsNews[];
  tagsToQuery?: string;
}

export interface IBrandsNews extends IGenericInfo {
  backgroundImage: string;
  category?: string;
  tagArray?: any[];
  share?: IShare;
  articleId?: string;
  picture?: IPictureCrops[];
  tagCta?: ICta;
  tagCtaSelf?: boolean;
}
