import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./slices/mainSlice";
const store = configureStore({
  reducer: {
    mainSlice: mainSlice,
  },
  middleware: (getDefault) => getDefault(),
});

export default store;
