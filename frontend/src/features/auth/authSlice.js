import { createSlice } from '@reduxjs/toolkit';

import {
  loginUser,
  registerUser,
  logoutUserAsync,
  getCurrentUser,

} from './authThunk';

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(
        registerUser.pending,
        (state) => {
          state.loading = true;
        }
      )

      .addCase(
        registerUser.fulfilled,
        (state, action) => {
          state.loading = false;

          state.user =
            action.payload.user;

          state.isAuthenticated = true;
        }
      )

      .addCase(
        registerUser.rejected,
        (state, action) => {
          state.loading = false;

          state.error = action.payload;
        }
      )

      .addCase(
        loginUser.fulfilled,
        (state, action) => {
          state.user =
            action.payload.user;

          state.isAuthenticated = true;
        }
      )

      .addCase(
        logoutUserAsync.fulfilled,
        (state) => {
          state.user = null;

          state.isAuthenticated = false;
        }
      )

      .addCase(
        getCurrentUser.fulfilled,
        (state, action) => {
          state.user =
            action.payload;

          state.isAuthenticated =
            true;
        }
      )

      .addCase(
        getCurrentUser.rejected,
        (state) => {
          state.user = null;

          state.isAuthenticated =
            false;
        }
      );
  },
});

export default authSlice.reducer;