import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => (
  <div className="layout">
    <nav className="navbar">
      <h1 className="brand">Teller App</h1>
      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/accounts">Accounts</Link>
        <Link to="/transactions">Transactions</Link>
      </div>
    </nav>
    <div className="content">{children}</div>
  </div>
);

export default Layout;
