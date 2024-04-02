import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const URL = "http://localhost:3000/insurance";
const URL =
  "/custom_web_template.html?object_id=7009747356457065929";

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
  isDoctorModalOpen: false,
};

const dmsSlice = createSlice({
  name: "dms",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
    },
    openDoctorModal: (state, action) => {
      state.isDoctorModalOpen = true;
    },
    closeModal: (state, action) => {
      state.isModalOpen = false;
    },
    closeDoctorModal: (state, action) => {
      state.isDoctorModalOpen = false;
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
        console.log(action.payload);
      })
      .addCase(getData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.log(error);
      });
  },
});

export const { openModal, closeModal, openDoctorModal, closeDoctorModal } =
  dmsSlice.actions;

export default dmsSlice.reducer;
