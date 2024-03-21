import { configureStore } from "@reduxjs/toolkit";
import factorsReducer from "./features/factors/factorsSlice";
import faqReducer from "./features/q&a/faqSlice";
import accordionReducer from "./features/q&a/accordionSlice";
import calculatorReducer from "./features/calculator/calculatorSlice";
import managersCalculatorReducer from "./features/calculator/managersCalculatorSlice";
import formulaReducer from "./features/formula/formulaSlice";
import dmsReducer from "./featuresDMS/dmsSlice";

export const store = configureStore({
  reducer: {
    factors: factorsReducer,
    faq: faqReducer,
    accordion: accordionReducer,
    calculator: calculatorReducer,
    managerCalculator: managersCalculatorReducer,
    formula: formulaReducer,
    dms: dmsReducer,
  },
});
