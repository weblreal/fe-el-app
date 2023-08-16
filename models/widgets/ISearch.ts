import { ISearchInput } from "../../components/Search/SearchInput/ISearchInput";
import { ISearchPopular } from "../../components/Search/SearchPopular/ISearchPopular";
import { ISearchPrevious } from "../../components/Search/SearchPrevious/ISearchPrevious";

export interface ISearch {
  input: ISearchInput;
  popular: ISearchPopular;
  previous: ISearchPrevious;
}
