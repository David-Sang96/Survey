import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  infos: [],
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    userInfo: (state, action) => {
      if (state.infos.includes(action.payload)) {
        state.infos = state.infos.filter((item) => item !== action.payload);
        return state;
      }
      state.infos.push(action.payload);
    },
    clearUserInfoAction: (state) => {
      state.infos = [];
    },
  },
});

export const { userInfo, clearUserInfoAction } = userInfoSlice.actions;

export default userInfoSlice.reducer;
