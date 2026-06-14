import { useEffect } from 'react';

import {
  useDispatch,
} from 'react-redux';

import AppRoutes from './routes/AppRoutes';

import {
  getCurrentUser,
} from './features/auth/authThunk';

function App() {
  const dispatch =
    useDispatch();

  useEffect(() => {
    dispatch(
      getCurrentUser()
    );
  }, [dispatch]);

  return <AppRoutes />;
}

export default App;