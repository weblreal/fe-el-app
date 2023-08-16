import { IFiles } from "../../components/PressRelease/IPressRelease";
import { IAccordion } from "../components/IAccordion";

export interface IServiceAccordion {
  items: IAccordion<IFiles[][]>[];
  topText?: string;
  bottomText?: string;
}
