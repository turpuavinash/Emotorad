// src/components/KPIWidget.js
import React from 'react';
import '../styles/KPIWidget.css';

const KPIWidget = ({ title, value, change }) => {
  return (
    <div className="kpi-widget">
      <h3>{title}</h3>
      <p>{value}</p>
      <p className="change">{change}</p>
    </div>
  );
};

export default KPIWidget;
