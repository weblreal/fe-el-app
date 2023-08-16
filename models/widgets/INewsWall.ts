import { IFilterLabels } from "../IFilterLabels";
import { IBrandsNews } from "./IBrandsNewsRow";

export interface INewsWall extends IFilterLabels {
  news: IBrandsNews[];
}
