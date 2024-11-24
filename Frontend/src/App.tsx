import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home';
import Base from './outlets/Base';
import Dashboard from './pages/Dashboard';

function App() {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Home />} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
            <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/login' />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App
