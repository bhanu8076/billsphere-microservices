import './Navbar.scss';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  logoutUserAsync,
} from '../../features/auth/authThunk';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logoutUserAsync());

    navigate('/login');
  };

  return (
    <nav className="navbar">
      <h2 className="navbar__logo">
        BillSphere
      </h2>

      <button
        className="navbar__logout"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;