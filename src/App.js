import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import Customer from './components/Customer/Customer';
import SearchTransactions from './components/Transactions/SearchTransactions';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

// Helper function to check if the user is authenticated
const isAuthenticated = () => !!localStorage.getItem('token');

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Demo  */}
      
        <Route path="layout" element={<Layout />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="customers" element={<Customer />} />
        <Route path="transactions" element={<SearchTransactions />} />
      {/* demo */}
      
      {/* Protected routes */}
      {/* <Route
        path="/"
        element={isAuthenticated() ? <Layout /> : <Navigate to="/login" />}
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="customers" element={<Customer />} />
        <Route path="transactions" element={<SearchTransactions />} />
      </Route> */}
    </Routes>
  </Router>
);

export default App;
