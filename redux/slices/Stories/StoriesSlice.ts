import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  relatedTags: string[] | null;
  currentArticleID: string | null;
}

const initialState: IInitialState = { relatedTags: [], currentArticleID: null };

export const StoriesSlice = createSlice({
  name: "Stories Tags",
  initialState,
  reducers: {
    // UPDATE RELATED TAGS
    updateRelatedTags: (state, action) => {
      state.relatedTags = action.payload;
    },
    // CLEAR RELATED TAGS
    clearRelatedTags: (state) => {
      state.relatedTags = null;
    },
    // CURRENT ARTICLE ID
    setCurrentArticleID: (state, action) => {
      state.currentArticleID = action.payload;
    },
  },
});

export const { clearRelatedTags, updateRelatedTags, setCurrentArticleID } = StoriesSlice.actions;
export default StoriesSlice.reducer;
