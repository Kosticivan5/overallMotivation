import { createSlice } from "@reduxjs/toolkit";

export const accordionSlice = createSlice({
  name: "accordion",
  initialState: {
    openedAccordionIds: [],
  },
  reducers: {
    toggleAccordion: (state, action) => {
      const accordionId = action.payload;
      if (state.openedAccordionIds.includes(accordionId)) {
        state.openedAccordionIds = state.openedAccordionIds.filter(
          (id) => id !== accordionId
        );
      } else {
        state.openedAccordionIds.push(accordionId);
      }
    },
  },
});

export const { toggleAccordion } = accordionSlice.actions;

export default accordionSlice.reducer;
