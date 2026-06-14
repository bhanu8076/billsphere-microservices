import { createSlice } from '@reduxjs/toolkit';

const billSlice = createSlice({
  name: 'bills',

  initialState: {
    bills: [],
    loading: false,
    error: null,
  },

  reducers: {
    setBills: (state, action) => {
      state.bills = action.payload;
    },
  },
});

export const { setBills } =
  billSlice.actions;

export default billSlice.reducer;