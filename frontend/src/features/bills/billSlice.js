import { createSlice } from '@reduxjs/toolkit';

import {
  createBill,
  fetchBills,
} from './billThunk';

const initialState = {
  bills: [],
  loading: false,
  error: null,
};

const billSlice = createSlice({
  name: 'bills',

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchBills.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchBills.fulfilled, (state, action) => {
        state.loading = false;
        state.bills = action.payload;
      })

      .addCase(fetchBills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(createBill.fulfilled, (state, action) => {
        state.bills.unshift(action.payload);
      });
  },
});

export default billSlice.reducer;