import { ITags } from "../../components/PressRelease/IPressRelease";
import { IPictureCrops } from "../ICrops";

export interface IArticleTitleAndBody {
  backToListText?: string;
  tags: ITags[];
  tagsToQuery: string[];
  shareText: string;
  publishDate: string;
  title: string;
  text: string;
  text2: string;
  backgroundImage?: string;
  articleId?: string;
  croppings?: IPictureCrops;

  timeToRead?: string;
  publishText?: string;
}
