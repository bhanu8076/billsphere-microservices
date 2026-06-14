import api from '../../api/axios';

export const getDashboardStatsAPI = () => {
  return api.get(
    'http://localhost:5003/api/usage/dashboard'
  );
};