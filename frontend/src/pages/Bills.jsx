import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBills } from '../features/bills/billThunk';

import Navbar from '../components/Navbar/Navbar';

import CreateBill from './CreateBill';

function Bills() {
  const dispatch = useDispatch();

  const {
    bills,
    loading,
  } = useSelector(
    (state) => state.bills
  );

  useEffect(() => {
    dispatch(fetchBills());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <div className="bill-container">
        <CreateBill />

        <h2>Your Bills</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="bill-list">
            {bills.map((bill) => (
              <div
                className="bill-card"
                key={bill._id}
              >
                <h3>{bill.title}</h3>

                <p>
                  Amount: ₹
                  {bill.amount}
                </p>

                <p>
                  Category:
                  {' '}
                  {bill.category}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Bills;