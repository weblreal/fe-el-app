import { ILink } from "./ILink";

export interface IEvent {
  date?: string;
  title?: string;
  link?: ILink;
  startDate?: Date;
  endDate?: Date;
  location?: string;
}
