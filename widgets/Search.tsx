// Modules
import { ISearchInput } from "../components/Search/SearchInput/ISearchInput";
import { ISearchPopular } from "../components/Search/SearchPopular/ISearchPopular";
import { ISearchPrevious } from "../components/Search/SearchPrevious/ISearchPrevious";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useFetchSearchsQuery } from "../redux/slices/Search/SearchAPI";
import { IResult } from "../components/Search/SearchResults/ISearchResults";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { addPreviousSearch } from "../redux/slices/Search/SearchSlice";
import useLocalStorage from "../hooks/useLocalStorage";

// Components
import Container from "../components/UI/Container/Container";
import SearchPopular from "../components/Search/SearchPopular/SearchPopular";
import SearchPrevious from "../components/Search/SearchPrevious/SearchPrevious";
import SearchResults from "../components/Search/SearchResults/SearchResults";
import SearchInput from "../components/Search/SearchInput/SearchInput";
import SearchNoResults from "../components/Search/SearchNoResults/SearchNoResults";

//CONSTANTS FOR MISSPELLED QUERY
import SearchConfig from "../logic/constants/SEARCH_QUERY_CONSTANTS_2";

type ISearchProps = {
  input: ISearchInput;
  popular: ISearchPopular;
  previous: ISearchPrevious;
};

const Search: React.FC<ISearchProps> = ({ input, popular }) => {
  // Hooks
  const { query } = useRouter();
  const dispatch = useAppDispatch();
  const [q, setQ] = useState(query?.q as string || "");
  
  const { SearchSlice } = useAppSelector((state: any) => state);
  const { data, isFetching } = useFetchSearchsQuery({ localeId: SearchSlice.localeId, search: SearchConfig.constants(q || query?.q as string|| "") });
  const { searchLabels } = useAppSelector((state) => state.SearchSlice);

  const [prevSearch, setPrevSearch] = useLocalStorage<string[]>("previousSearch", []);
  const [isInitialState, setIsInitialState] = useState(data === undefined);

  // Variables
  const res = data?.results?.map(
    (searchItem: any): IResult => ({
      cta: {
        label: searchItem.cta.label,
        url: searchItem.cta.url,
      },
      longText: searchItem.cta.longText,
    })
  );

  const numFound = data?.numFound;

  // Functions
  const onSubmitHandler = (input: string) => {
    setIsInitialState(false);
    //TAKE SEARCH INPUT FOR PREVIOUS SEARCH BEFORE CORRECTING SPELLING
    let originalInput = input;
    //IF WRONG SPELLING CHANGE TO CORRECT SPELLING
    input = SearchConfig.constants(input);
    if (!!input) {
      setQ(input);

      const newPrevSearch = prevSearch?.slice(0, 10);
      dispatch(addPreviousSearch(originalInput));
      setPrevSearch([originalInput, ...(newPrevSearch || [])]);
    }
  };

  const onCancelHandler = () => {
    setIsInitialState(true);
  };

  // Effects
  useEffect(() => {
    const value = query?.q as string;
    if (value) {
      setQ(value);
      setIsInitialState(false);
    }
  }, [query]);

  return (
    <Container
      pb={[95, 120]}
      minHeight={{ _: "calc(100vh - 288px)", tablet: "calc(100vh - 255px)" }}
    >
      {/* Input */}
      <SearchInput
        {...input}
        defaultValue={q}
        placeholder={searchLabels.SearchPlaceHolderText}
        label1={searchLabels.SearchText}
        onSubmit={onSubmitHandler}
        onCancel={onCancelHandler}
      />

      {/* No Results */}
      {!numFound && !isInitialState && !isFetching && (
        <SearchNoResults
          input={q}
          text1={searchLabels.NoResultText?.replace(/\//, q)}
        />
      )}

      {/* Previous Searches */}
      {isInitialState && !!prevSearch?.length && (
        <SearchPrevious
          label={searchLabels.PrevioussearchesText}
          searches={prevSearch || []}
          onSubmit={onSubmitHandler}
        />
      )}

      {/* Popular Searches */}
      {isInitialState && <SearchPopular {...popular} label={searchLabels.PopularSearchesText} />}

      {/* Search Results */}
      {!!data?.numFound && q && !isInitialState && (
        <SearchResults results={res} />
      )}
    </Container>
  );
};

export default Search;
