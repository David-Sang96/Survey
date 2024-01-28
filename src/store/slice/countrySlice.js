import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: null,
};

const countrySlice = createSlice({
  name: "countrySlice",
  initialState,
  reducers: {
    countryAction: (state, action) => {
      state.country = action.payload;
    },
    clearCountryAction: (state) => {
      state.country = null;
    },
  },
});

export const { countryAction, clearCountryAction } = countrySlice.actions;

export default countrySlice.reducer;
