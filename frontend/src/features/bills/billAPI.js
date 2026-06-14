import api from '../../api/axios';

const BILLING_URL = 'http://localhost:5002/api/bills';

export const createBillAPI = (billData) => {
  return api.post(BILLING_URL, billData);
};

export const getBillsAPI = () => {
  return api.get(BILLING_URL);
};