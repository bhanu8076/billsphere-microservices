import { useEffect } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Navbar from
'../components/Navbar/Navbar';

import {
  fetchDashboardStats,
} from '../features/analytics/analyticsThunk';

function Dashboard() {
  const dispatch =
    useDispatch();

  const {
    stats,
    loading,
  } = useSelector(
    (state) =>
      state.analytics
  );

  useEffect(() => {
    dispatch(
      fetchDashboardStats()
    );
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>
          Usage Analytics
        </h1>

        {stats && (
          <>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>
                  Total Bills
                </h3>

                <p>
                  {
                    stats.totalBills
                  }
                </p>
              </div>

              <div className="stat-card">
                <h3>
                  Total Amount
                </h3>

                <p>
                  ₹
                  {
                    stats.totalAmount
                  }
                </p>
              </div>
            </div>

            <div className="category-list">
              <h2>
                Categories
              </h2>

              <ul>
                {stats.categories?.map(
                  (
                    category
                  ) => (
                    <li
                      key={
                        category._id
                      }
                    >
                      {
                        category._id
                      }

                      {' - '}

                      {
                        category.count
                      }
                    </li>
                  )
                )}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Dashboard;