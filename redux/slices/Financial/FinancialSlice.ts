import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  saveEnergyToggleText: string;
  sharePriceText: string;
  target: string;
  targetTag: string;
}

const initialState: IInitialState = {
  saveEnergyToggleText: "",
  sharePriceText: "",
  target: "",
  targetTag: "",
};

export const FinancialSlice = createSlice({
  name: "Financial Labels",
  initialState,
  reducers: {
    setLabels: (slice, action) => {
      slice.saveEnergyToggleText = action.payload?.saveEnergyToggleText || "";
      slice.sharePriceText = action.payload?.sharePriceText || "";
      slice.target = action.payload?.target || "";
      slice.targetTag = action.payload?.targetTag || "";
    },
  },
});

export const { setLabels } = FinancialSlice.actions;
export default FinancialSlice.reducer;
