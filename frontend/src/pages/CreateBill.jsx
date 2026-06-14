import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { createBill } from '../features/bills/billThunk';

function CreateBill() {
  const dispatch = useDispatch();

  const [bill, setBill] = useState({
    title: '',
    amount: '',
    category: '',
  });

  const handleChange = (e) => {
    setBill({
      ...bill,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(createBill(bill));

    setBill({
      title: '',
      amount: '',
      category: '',
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

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={bill.category}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Add Bill
      </button>
    </form>
  );
}

export default CreateBill;