import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hello from './pages/login';
import {  useSelector } from 'react-redux';
import AppRoutes from './routes/routes';
import { initialAuth } from './store/slices/authSlice';

export default function App() {
  const accessToken = useSelector(initialAuth);

 const token = accessToken.accessToken

  const role_id = useSelector(initialAuth);
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Hello />} />
    //   </Routes>
    // </Router>
    <>
    {role_id ? (
      <AppRoutes token={token} role_id={role_id?.user?.role_id} />
    ) : (
      <AppRoutes token={token} role_id={undefined} />
    )}
  </>
  );
}
