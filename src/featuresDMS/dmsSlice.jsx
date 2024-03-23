import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3000/insurance";

export const getData = createAsyncThunk(
  "dms/getData",

  async (_, thunkAPI) => {
    try {
      const response = await axios(URL);
      if (response.data) {
        const data = response.data;
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: [],
  isLoading: true,
  isError: true,
  isModalOpen: false,
};

const dmsSlice = createSlice({
  name: "dms",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
    },
    closeModal: (state, action) => {
      state.isModalOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.log(error);
      });
  },
});

export const { openModal, closeModal } = dmsSlice.actions;

export default dmsSlice.reducer;
