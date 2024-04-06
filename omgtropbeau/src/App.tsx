import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';


function App() {
  return (
    <div className='w-full h-screen bg-admin-gray'>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Orders" element={<Orders />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;