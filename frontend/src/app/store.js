import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';
import billReducer from '../features/bills/billSlice';
import usageReducer from '../features/usage/usageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    bills: billReducer,
    usage: usageReducer,
  },
});