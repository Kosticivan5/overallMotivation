import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    toggleFaq: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleFaq } = faqSlice.actions;
export default faqSlice.reducer;
