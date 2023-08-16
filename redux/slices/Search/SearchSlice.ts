import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  localeId: string;
  previousSearch: string[];
  searhModal: boolean;
  searchLabels: ISearchLabels;
  searchCTA: string;
  enableSearch: boolean;
}

interface ISearchLabels {
  SearchPlaceHolderText: string;
  PopularSearchesText: string;
  SearchText: string;
  PrevioussearchesText: string;
  NoResultText: string;
  target: number | string;
}

const initialLocalStorage: string =
  globalThis?.localStorage?.getItem("previousSearch") || "";

const initialState: IInitialState = {
  localeId: "",
  previousSearch: JSON.parse(initialLocalStorage || "[]"),
  searhModal: false,
  enableSearch: false,
  searchLabels: {
    NoResultText: "",
    PopularSearchesText: "",
    PrevioussearchesText: "",
    SearchPlaceHolderText: "",
    SearchText: "",
    target: "",
  },
  searchCTA: "",
};

export const SearchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    // UPDATE RELATED TAGS
    setLocaleID: (state, action) => {
      state.localeId = action.payload;
    },

    // SEARCH
    addPreviousSearch: (state, action) => {
      const input = action.payload;
      const isExists = state.previousSearch.includes(input);

      if (!isExists) {
        state.previousSearch = [input, ...state.previousSearch];
      }
    },
    removePreviousSearch: (state, action) => {
      const search = action.payload;
      const indexToDelete = state.previousSearch.indexOf(search);
      const clientSearch = state.previousSearch;

      if (indexToDelete >= 0) {
        const arr1 = clientSearch.slice(0, indexToDelete);
        const arr2 = clientSearch.slice(indexToDelete + 1);
        const newArr = [...arr1, ...arr2];

        state.previousSearch = newArr;
      }
    },
    toggleSearch: (state) => {
      state.searhModal = !state.searhModal;
    },
    setSearchLabels: (state, action) => {
      const data = action?.payload as ISearchLabels;
      state.searchLabels = { ...data };
      state.enableSearch = action.payload.enableSearch;
    },
  },
});

export const {
  setLocaleID,
  addPreviousSearch,
  removePreviousSearch,
  toggleSearch,
  setSearchLabels,
} = SearchSlice.actions;
export default SearchSlice.reducer;
