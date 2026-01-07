import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './main.css';
import App from './App.tsx';
import { AuthContextProvider } from './context/AuthContext.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <AuthContextProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </AuthContextProvider>
      </HelmetProvider>
    </ErrorBoundary>
  </StrictMode>
)
