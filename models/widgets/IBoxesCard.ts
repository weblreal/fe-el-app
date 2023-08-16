import { ICta } from "../components/ICta";

interface Cards {
  title: string;
  description: string;
  cardBgColor: string;
  cardTitleColor: string;
  cta?: ICta[];
}

export interface IBoxesCard {
  headerTitle?: string;
  left: Cards[];
  right: Cards[];
  mobile: Cards[];
}
