import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext()
  return (
    <>
      <BrowserRouter>
        <Routes>
          {!user && (
            <Route path="/login" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
