import { IPressRelease } from "../../components/PressRelease/IPressRelease";
import { ICta } from "../components/ICta";

export interface IPressReleaseRow {
  header?: string;
  cta?: ICta;
  pressReleases: IPressRelease[];
  downloadAllLabel?: string;
  tagsToQuery?: string;
}
