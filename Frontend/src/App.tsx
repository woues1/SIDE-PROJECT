import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home';
import Base from './outlets/Base';
import Dashboard from './pages/Dashboard';

function App() {
  const { user } = useAuthContext()
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Home />} />
            {!user && (
              <Route path='/login' element={<Login />} />

            )}
            {user && (
              <Route path='/dashboard' element={<Dashboard />} />
              )}
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App
