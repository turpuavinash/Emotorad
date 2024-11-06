// Sidebar.js
import React from 'react';
import { FaDollarSign, FaCalendarAlt, FaUser, FaCog } from 'react-icons/fa';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Emotorad</h2>
      <ul className="menu">
        <li>
          <FaDollarSign className="icon" />
          Transactions
        </li>
        <li>
          <FaCalendarAlt className="icon" />
          Schedules
        </li>
        <li>
          <FaUser className="icon" />
          Users
        </li>
        <li>
          <FaCog className="icon" />
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
