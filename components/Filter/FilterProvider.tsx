import { createContext, useReducer } from "react";
import { IFilterProvider, IFilterState, IFilterContext } from "./IFilter";
import filterReducer from "./FilterReducer";

export const FilterContext = createContext<IFilterContext | {}>({});
export const FilterProvider = ({ children }: IFilterProvider) => {
  // Variables
  const initialState: IFilterState = {
    activeTags: [],
    tags: [],
    activeDates: {
      month: "",
      year: "",
    },
  };

  // Hooks
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
