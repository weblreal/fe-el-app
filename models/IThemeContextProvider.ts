import { ReactNode } from "react";
import { ITheme } from "./ITheme";

export interface IThemeContextProvider {
  children: ReactNode;
  defaultTheme?: ITheme;
}
