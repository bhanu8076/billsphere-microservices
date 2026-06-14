import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { createBill } from '../features/bills/billThunk';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

function CreateBill() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.bills);

  const [bill, setBill] = useState({
    title: '',
    amount: '',
    category: 'Electricity',
    dueDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBill({
      ...bill,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(createBill(bill));

    setBill({
      title: '',
      amount: '',
      category: 'Electricity',
      dueDate: '',
    });
  };

  return (
    <form
      className="bill-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={bill.title}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={bill.amount}
        onChange={handleChange}
        required
      />

      <select
        name="category"
        value={bill.category}
        onChange={handleChange}
        required
      >
        <option value="Electricity">Electricity</option>
        <option value="Internet">Internet</option>
        <option value="Water">Water</option>
        <option value="Rent">Rent</option>
        <option value="Others">Others</option>
      </select>

      <input
        type="date"
        name="dueDate"
        value={bill.dueDate}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Add Bill
      </button>

      {error && <ErrorMessage message={error} />}
    </form>
  );
}

export default CreateBill;