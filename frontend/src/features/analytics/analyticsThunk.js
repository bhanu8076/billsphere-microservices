import { createAsyncThunk } from '@reduxjs/toolkit';
import logger from '../../utils/logger';

import {
  getDashboardStatsAPI,
} from './analyticsAPI';

export const fetchDashboardStats =
  createAsyncThunk(
    'analytics/dashboard',

    async (_, thunkAPI) => {
      try {
        const response =
          await getDashboardStatsAPI();

        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message
        );
      }
    }
  );