// categorySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategoryStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getCategorySuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    getCategoryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default categorySlice.reducer;
export const { getCategoryStart, getCategorySuccess, getCategoryFailure } =
  categorySlice.actions;
