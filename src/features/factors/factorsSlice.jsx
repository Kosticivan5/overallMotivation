import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  factorsOpen: false,
};

const factorsSlice = createSlice({
  name: "factors",
  initialState,
  reducers: {
    toggleFactors: (state, action) => {
      state.factorsOpen = !state.factorsOpen;
    },
  },
});

export const { toggleFactors } = factorsSlice.actions;
export default factorsSlice.reducer;
