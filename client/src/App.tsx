import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';

import Login from './pages/Login';
import Register from './pages/Register';
import Upload from './pages/Upload';
import { Home } from './pages/Home';

import { PrivateRoute } from './authRoutes/privateRoute';
import { PublicRoute } from './authRoutes/publicRoute';

import { CurrentUserProvider } from './hooks/useCurrentUser';

function App() {
  return (
    <BrowserRouter>
      <CurrentUserProvider>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </CurrentUserProvider>
    </BrowserRouter>
  );
}

export default App;
