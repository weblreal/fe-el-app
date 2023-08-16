import { ReactNode } from "react";

export interface IModal {
  show?: boolean;
  children: ReactNode;
  portalId?: string;
  openModalHandler?: () => void;
}
