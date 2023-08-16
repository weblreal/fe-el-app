import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  optionSelected: string;
  input: string;
}

const initialState: IInitialState = {
  optionSelected: "",
  input: "",
};

export const ConformityDeclarationSlice = createSlice({
  name: "Conformity Declaration",
  initialState,
  reducers: {
    setOptionSelected: (state, action) => {
      state.optionSelected = action.payload;
    },
    setInput: (state, action) => {
      state.input = action.payload;
    },
  },
});

export const { setOptionSelected, setInput } =
  ConformityDeclarationSlice.actions;

export default ConformityDeclarationSlice.reducer;
