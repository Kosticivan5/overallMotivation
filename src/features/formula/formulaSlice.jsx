import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formulaOpen: false,
};

const formulaSlice = createSlice({
  name: "formula",
  initialState,
  reducers: {
    toggleFormula: (state, action) => {
      state.formulaOpen = !state.formulaOpen;
    },
  },
});

export const { toggleFormula } = formulaSlice.actions;
export default formulaSlice.reducer;
