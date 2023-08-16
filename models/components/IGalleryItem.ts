import { IFiles } from "../../components/PressRelease/IPressRelease";

export interface IGalleryItem {
  media:string,
  copyright?:string,
  endofrights?:string,
  title:string,
  handleSelect?:any,
  mediaFile: IFiles
}