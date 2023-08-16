import { useContext } from "react";
import { FilterContext } from "../components/Filter/FilterProvider";
import { IFilterContext } from "../components/Filter/IFilter";

const useFilterContext = (): IFilterContext => {
  const { dispatch, state } = useContext<IFilterContext>(FilterContext);

  return { dispatch, state };
};

export default useFilterContext;
