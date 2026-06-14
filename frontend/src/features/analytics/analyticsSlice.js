import {
  createSlice,
} from '@reduxjs/toolkit';

import {
  fetchDashboardStats,
} from './analyticsThunk';

const initialState = {
  stats: null,
  loading: false,
  error: null,
};

const analyticsSlice =
  createSlice({
    name: 'analytics',

    initialState,

    reducers: {},

    extraReducers: (builder) => {
      builder

        .addCase(
          fetchDashboardStats.pending,
          (state) => {
            state.loading = true;
          }
        )

        .addCase(
          fetchDashboardStats.fulfilled,
          (state, action) => {
            state.loading = false;

            state.stats =
              action.payload;
          }
        )

        .addCase(
          fetchDashboardStats.rejected,
          (state, action) => {
            state.loading = false;

            state.error =
              action.payload;
          }
        );
    },
  });

export default analyticsSlice.reducer;