import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  salary: 0,
  bankMulti: 0,
  percentage: 0,
  bizMulti: 0,
  months: 0,
};

const managerCalculatorSlice = createSlice({
  name: "managerCalculator",
  initialState,
  reducers: {
    getPercentage: (state, action) => {
      state.percentage = action.payload;
    },
    updateState: (state, action) => {
      for (const states in action.payload) {
        state[states] = parseFloat(action.payload[states], 10);
      }
    },
    calculateTotal: (state, action) => {
      let multiplicators =
        state.bankMulti * state.bizMulti <= 1.5
          ? state.bankMulti * state.bizMulti
          : 1.5;
      const totalCount =
        state.salary *
        multiplicators *
        (state.percentage * 0.01) *
        state.months;

      if (state.months < 5) {
        state.total = 0;
      } else if (totalCount) {
        state.total = Math.round(totalCount);
      } else {
        state.total = 0;
      }
    },
  },
});

export const { calculateTotal, updateState, getPercentage } =
  managerCalculatorSlice.actions;

export default managerCalculatorSlice.reducer;
