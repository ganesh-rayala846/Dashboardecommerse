import React from 'react';
import { Link } from 'react-router-dom';
import './ecommerssite.css'

const Sidebar = () => (
  <aside className="sidebar">
    <ul>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/orders">Orders</Link></li>
      <li><Link to="/customers">Customers</Link></li>
      <li><Link to="/analytics">Analytics</Link></li>
      <li><Link to="/settings">Settings</Link></li>
    </ul>
  </aside>
);

export default Sidebar;