import {
  IPressRelease,
  ITags,
} from "../../components/PressRelease/IPressRelease";
import { ICta } from "../components/ICta";
import { IFilterLabels } from "../IFilterLabels";

export interface IPressReleaseList extends IFilterLabels {
  header?: string;
  pressReleaseItem: IPressRelease[];
  cta?: ICta;
  isFilter?: boolean;
  tags?: ITags[];
  defaultYearValue?: string;
  yearList?: string[];
}
