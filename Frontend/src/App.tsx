import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home';
import Base from './outlets/Base';
import Dashboard from './pages/Dashboard';


function App() {
  const { user, loading } = useAuthContext();


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Base />}>
            <Route index element={<Home />} />
            {!loading && <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />}
            {!loading && <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/login' />} />}
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App
