import { configureStore } from "@reduxjs/toolkit";
import factorsReducer from "./features/factors/factorsSlice";
import faqReducer from "./features/q&a/faqSlice";
import accordionReducer from "./features/q&a/accordionSlice";
import calculatorReducer from "./features/calculator/calculatorSlice";
import managersCalculatorReducer from "./features/calculator/managersCalculatorSlice";

export const store = configureStore({
  reducer: {
    factors: factorsReducer,
    faq: faqReducer,
    accordion: accordionReducer,
    calculator: calculatorReducer,
    managerCalculator: managersCalculatorReducer,
  },
});
