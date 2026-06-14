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
        state.error = null;
      })

      .addCase(fetchBills.fulfilled, (state, action) => {
        state.loading = false;
        state.bills = action.payload;
      })

      .addCase(fetchBills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(createBill.pending, (state) => {
        state.error = null;
      })

      .addCase(createBill.fulfilled, (state, action) => {
        state.bills.unshift(action.payload);
      })

      .addCase(createBill.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default billSlice.reducer;