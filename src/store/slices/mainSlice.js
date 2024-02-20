import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {};

export const thunkGetItems = createAsyncThunk("/mainSlice", async () => {});

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkGetItems.fulfilled, ({ store, action }) => {});
  },
});

export const {} = mainSlice.actions;
export default mainSlice.reducer;
