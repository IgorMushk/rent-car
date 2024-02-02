import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://65baa817b4d53c0665536955.mockapi.io/api";

export const fetchPage = createAsyncThunk("cars/fetchPage", async ({ page, limit }, thunkAPI) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/cars?page=${page}&limit=${limit}`);
    return { data, page };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getByFilter = createAsyncThunk(
  "cars/getByFilter",
  async ({ makeCar, price, mileageFrom, mileageTo, page = 1, limit = 12 }, thunkAPI) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/cars?make=${makeCar}&page=${page}&limit=${limit}`);
      const result = data.filter(({ rentalPrice, mileage }) => {
        return (
          (!price || parseInt(rentalPrice.slice(1)) <= parseInt(price)) &&
          (!mileageFrom || mileage >= parseInt(mileageFrom)) &&
          (!mileageTo || mileage <= parseInt(mileageTo))
        );
      });
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
