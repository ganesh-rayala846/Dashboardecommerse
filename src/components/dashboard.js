
import React from 'react';
import MetricsPanel from './metricspanel';
import WeeklySalesChart from './weeklysalestrend';
import OrdersTable from './orders';
import './ecommerssite.css'

const Dashboard = () => {
  return (
    <div className='dash-board'>
      <MetricsPanel /> 
      <div className='chart-table'>
      <WeeklySalesChart />
      <OrdersTable /> 
      </div>
     
    </div>
  );
};

export default Dashboard;