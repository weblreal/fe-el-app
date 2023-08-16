import { ICta } from "../components/ICta";

export interface IBoxesBoard {
  title?: string;
  boards?: IBoard[];
  cta?: ICta;
}

export interface IBoard {
  title?: string; //Title1 - board name
  subTitle?: string; //Title2 - position of the board
  backgroundImage: string;
  cta?: ICta;
}
