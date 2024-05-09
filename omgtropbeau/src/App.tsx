import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Connect from './pages/Connect';

import * as AuthService from "./services/auth.service";

function App() {

  useEffect(() => {
    const token = AuthService.getCurrentUser();

    if (!token && window.location.pathname !== '/connect') {
      window.location.href = '/connect';
    }
  }, []);

  return (
    <div className='w-full h-screen bg-admin-gray'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
