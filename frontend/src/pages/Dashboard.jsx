import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar/Navbar";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

import { fetchDashboardStats } from "../features/analytics/analyticsThunk";

function Dashboard() {
  const dispatch = useDispatch();

  const { stats, loading } = useSelector((state) => state.analytics);

  useEffect(() => {
    dispatch(fetchDashboardStats());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const categories = stats
    ? Array.isArray(stats.categories)
      ? stats.categories
      : Object.entries(stats.categories || {}).map(
          ([category, total]) => ({
            _id: category,
            total,
          })
        )
    : [];

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Usage Analytics</h1>

        {stats && (
          <>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Total Bills</h3>

                <p>{stats.totalBills}</p>
              </div>

              <div className="stat-card">
                <h3>Total Amount</h3>

                <p>₹{stats.totalAmount}</p>
              </div>
            </div>

            <div className="category-list">
              <h2>Categories</h2>

              <div className="categories-grid">
                {categories.map((category) => (
                  <div className="category-card" key={category._id}>
                    <h3>{category._id}</h3>

                    <span>₹{category.total}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Dashboard;
