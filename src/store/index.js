import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./slice/countrySlice";
import userInfoSlice from "./slice/userInfo";

const store = configureStore({
  reducer: {
    country: countrySlice,
    userInfo: userInfoSlice,
  },
});

export default store;
