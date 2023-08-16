export interface ICrops {
  [index: string]: number;
}

export interface IPictureCrops {
  crops: ICrops;
  uriTemplate: string;
}
