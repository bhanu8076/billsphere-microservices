import { createAsyncThunk } from "@reduxjs/toolkit";
import logger from "../../utils/logger";

import { createBillAPI, getBillsAPI } from "./billAPI";

export const createBill = createAsyncThunk(
  "bills/create",

  async (billData, thunkAPI) => {
    try {
      const response = await createBillAPI(billData);

      return response.data.bill;
    } catch (error) {
      logger.error('createBill failed', error?.message || error);

      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          'Failed to create bill. Please try again.'
      );
    }
  },
);

export const fetchBills = createAsyncThunk(
  "bills/fetch",

  async (_, thunkAPI) => {
    try {
      const response = await getBillsAPI();

      return response.data.bills;
    } catch (error) {
      logger.error('fetchBills failed', error?.message || error);

      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          'Failed to load bills. Please refresh the page.'
      );
    }
  },
);
