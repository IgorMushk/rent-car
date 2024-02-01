import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    brand: null,
    price: null,
    mileageFrom: null,
    mileageTo: null,
  };
  
  const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {

    },
  });

  export const filterReducer = filterSlice.reducer;