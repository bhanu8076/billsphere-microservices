import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  createBillAPI,
  getBillsAPI,
} from './billAPI';

export const createBill =
  createAsyncThunk(
    'bills/create',

    async (billData, thunkAPI) => {
      try {
        const response =
          await createBillAPI(billData);

        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message
        );
      }
    }
  );

export const fetchBills =
  createAsyncThunk(
    'bills/fetch',

    async (_, thunkAPI) => {
      try {
        const response =
          await getBillsAPI();

        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message
        );
      }
    }
  );