import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: null,
  price: null,
  mileageFrom: null,
  mileageTo: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilters: {
      reducer(state, action) {
        return { ...state, ...action.payload };
      },
    },
  },
});

export const { setFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;