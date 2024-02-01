import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
  };


  const advertsSlice =  createSlice({
    name: 'adverts',
    initialState,
    reducers: {

    },
    extraReducers: builder => {

    },
  });

  export const advertsReducer = advertsSlice.reducer;