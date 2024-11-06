// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Emotorad</div>
      <div className="header-right">
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="notification-icon">🔔</div>
        <div className="profile-icon">👤</div>
      </div>
    </header>
  );
};

export default Header;
