import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  calculatorOpen: false,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    toggleCalculator: (state, action) => {
      state.calculatorOpen = !state.calculatorOpen;
    },
  },
});

export const { toggleCalculator } = calculatorSlice.actions;
export default calculatorSlice.reducer;
