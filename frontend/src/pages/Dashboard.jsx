import Navbar from '../components/Navbar/Navbar';

function Dashboard() {
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: '40px',
        }}
      >
        <h1>
          Welcome to BillSphere
        </h1>

        <p>
          Authentication Successful
        </p>

        <br />

        <div>
          <h2>Features</h2>

          <ul>
            <li>Bill Management</li>

            <li>
              Usage Analytics
            </li>

            <li>
              Google OAuth
            </li>

            <li>
              JWT Authentication
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;