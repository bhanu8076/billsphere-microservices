import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBills } from "../features/bills/billThunk";

import Navbar from "../components/Navbar/Navbar";

import CreateBill from "./CreateBill";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

function Bills() {
  const dispatch = useDispatch();

  const { bills, loading } = useSelector((state) => state.bills);

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
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <table className="bills-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {bills.map((bill) => (
                <tr key={bill._id}>
                  <td>{bill.title}</td>
                  <td>{bill.category}</td>
                  <td>₹{bill.amount}</td>
                  <td>{new Date(bill.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Bills;
