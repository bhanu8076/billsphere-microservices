import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  loginAPI,
  registerAPI,
  logoutAPI,
  getCurrentUserAPI,
} from './authAPI';

export const registerUser =
  createAsyncThunk(
    'auth/register',

    async (userData, thunkAPI) => {
      try {
        const response =
          await registerAPI(userData);

        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message
        );
      }
    }
  );

export const loginUser =
  createAsyncThunk(
    'auth/login',

    async (credentials, thunkAPI) => {
      try {
        const response =
          await loginAPI(credentials);

        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message
        );
      }
    }
  );

export const logoutUserAsync =
  createAsyncThunk(
    'auth/logout',

    async (_, thunkAPI) => {
      try {
        await logoutAPI();

        return true;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message
        );
      }
    }
  );

  export const getCurrentUser =
  createAsyncThunk(
    'auth/currentUser',

    async (_, thunkAPI) => {
      try {
        const response =
          await getCurrentUserAPI();

        return response.data.user;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          null
        );
      }
    }
  );