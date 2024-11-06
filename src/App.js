import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login'; // Adjust if the path is different
import Dashboard from './pages/Dashboard'; // Adjust if the path is different
import Register from './pages/Register'; // Import the Register component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
