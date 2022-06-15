import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, doApiGet } from "../../services/apiService";

export const getCars = createAsyncThunk(
  "cars/getCars",
  async (dispatch, getState) => {
    let {data} = await doApiGet(API_URL+'/cars?perPage=12')
    return data
  }
);

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    status: null,
  },
  extraReducers: {
    [getCars.pending]: (state, action) => {
      state.status = "loading";
    },
    [getCars.fulfilled]: (state, action) => {
      state.status = "success";
      state.cars = action.payload;
    },
    [getCars.rejected]: (state, action) => {
      state.status = "failed";
    },
  }
});

export default carsSlice.reducer;
