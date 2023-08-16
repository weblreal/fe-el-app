export interface ITabData {
  tabName: string;
  textDetails1: string;
  textDetails2?: string;
}

export interface ITabBgImage {
  tabDetails: Array<ITabData>;
  bgImage?: string;
}