import api from '../../api/axios';

export const registerAPI = (userData) => {
  return api.post(
    'http://localhost:5001/api/auth/register',
    userData
  );
};

export const loginAPI = (credentials) => {
  return api.post(
    'http://localhost:5001/api/auth/login',
    credentials
  );
};

export const logoutAPI = () => {
  return api.post(
    'http://localhost:5001/api/auth/logout'
  );
};

export const googleLogin = () => {
  window.location.href =
    'http://localhost:5001/api/auth/google';
};

export const getCurrentUserAPI = () => {
  return api.get(
    'http://localhost:5001/api/auth/me'
  );
};