import { Dispatch, ReactNode } from "react";

export interface IFilter {
  tags: string[];
  filteredTags?: string[];
  availableYears?: string[];
  numFound?: number;
  onSubmit?: () => void;
}

export interface ITag {
  name: string;
  value: string;
}

export interface IFilterProvider {
  children: ReactNode;
}

export interface IFilterState {
  tags: string[];
  activeTags: string[];
  activeDates?: {
    month?: string;
    year?: string;
  };
}

export interface IFilterPayload {
  tags?: string[];
  newTag?: {
    name: string;
    value: boolean;
  };
  activeDates?: {
    month?: string;
    year?: string;
  };
}

export interface IFilterContext {
  state?: IFilterState;
  dispatch?: Dispatch<IFilterActions<IFilterPayload>>;
}

export type IActionTypes =
  | "SET_TAGS"
  | "UPDATE_ACTIVE_TAGS"
  | "UPDATE_ACTIVE_DATES"
  | "CLEAR_FILTER";
export interface IFilterActions<T> {
  type: IActionTypes;
  payload: T;
}
