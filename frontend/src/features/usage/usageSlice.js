import { createSlice } from '@reduxjs/toolkit';

const usageSlice = createSlice({
  name: 'usage',

  initialState: {
    analytics: null,
    loading: false,
    error: null,
  },

  reducers: {
    setAnalytics: (
      state,
      action
    ) => {
      state.analytics =
        action.payload;
    },
  },
});

export const {
  setAnalytics,
} = usageSlice.actions;

export default usageSlice.reducer;