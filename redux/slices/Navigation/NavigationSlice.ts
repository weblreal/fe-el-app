import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  navigationLevel: number;
  navigationTransparentCMS: boolean;
}

const initialState: IInitialState = {
  navigationLevel: 1,
  navigationTransparentCMS: true,
};

export const NavigationSlice = createSlice({
  name: "Navigation",
  initialState,
  reducers: {
    setNavigationTransparent: (state, action) => {
      state.navigationTransparentCMS = action?.payload || false;
    },
    setNavigationLevel: (state, action) => {
      state.navigationLevel = action.payload;
    },
    addNavigationLevel: (state) => {
      state.navigationLevel = state.navigationLevel + 1;
    },
    subNavigationLevel: (state) => {
      state.navigationLevel = state.navigationLevel - 1;
    },
  },
});

export const {
  setNavigationLevel,
  addNavigationLevel,
  subNavigationLevel,
  setNavigationTransparent,
} = NavigationSlice.actions;
export default NavigationSlice.reducer;
