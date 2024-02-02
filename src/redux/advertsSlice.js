import { createSlice } from "@reduxjs/toolkit";
import { fetchPage, getByFilter } from "./operations";

const initialState = {
  items: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    addFavorites: {
      reducer(state, action) {
        state.favorites.push(action.payload);
      },
    },
    removeFavorites: {
      reducer(state, action) {
        state.favorites = [...state.favorites.filter((item) => item.id !== action.payload)];
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPage.fulfilled, (state, action) => {
      if (action.payload.page === 1) {
        state.items = action.payload.data;
      } else {
        state.items = [...state.items, ...action.payload.data];
      }
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getByFilter.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchPage.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getByFilter.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchPage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getByFilter.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { addFavorites, removeFavorites} = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;