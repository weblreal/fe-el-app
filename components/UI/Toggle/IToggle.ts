import { ChangeEvent } from "react";
import { ITheme } from "../../../models/ITheme";

export interface IToggle {
  checked?: boolean;
  onChange?: (event: ChangeEvent) => void;
  theme?: ITheme;
}
